import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TAB_DATA } from '../data/initialData';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import {
  fetchTabDataFromSupabase,
  saveEntryToSupabase,
  deleteEntryFromSupabase
} from '../lib/supabaseService';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  // Read environment variables
  const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || 'startupstce@gmail.com';
  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'Karthik@123';

  // Admin session state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return sessionStorage.getItem('rd_admin_logged_in') === 'true';
  });

  // Track permanently deleted item IDs in localStorage so deleted records never reappear on refresh
  const [deletedIds, setDeletedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('rd_cell_deleted_ids') || '[]');
    } catch (e) {
      return [];
    }
  });

  // Tab data state persisted in localStorage and Supabase
  const [tabData, setTabData] = useState(() => {
    const saved = localStorage.getItem('rd_cell_tab_data');
    let dataObj = INITIAL_TAB_DATA;
    if (saved) {
      try {
        dataObj = JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse tab data from localStorage', e);
      }
    }
    const delList = JSON.parse(localStorage.getItem('rd_cell_deleted_ids') || '[]');
    const cleaned = {};
    Object.keys(dataObj).forEach((k) => {
      cleaned[k] = (dataObj[k] || []).filter((item) => !delList.includes(item.id));
    });
    return cleaned;
  });

  const [isSupabaseActive, setIsSupabaseActive] = useState(isSupabaseConfigured());

  // Load from Supabase if configured on app mount
  useEffect(() => {
    if (isSupabaseConfigured()) {
      setIsSupabaseActive(true);
      fetchTabDataFromSupabase().then((data) => {
        if (data) {
          const delList = JSON.parse(localStorage.getItem('rd_cell_deleted_ids') || '[]');
          setTabData((prev) => {
            const keys = ['mov', 'conference', 'ipr', 'pub_faculty', 'pub_student', 'publications', 'events', 'iic_activities', 'research_areas', 'researchers', 'research_support', 'real_problems', 'resources'];
            const merged = { ...prev };

            keys.forEach((key) => {
              const supaItems = data[key] || [];
              const localItems = prev[key] || [];
              // Combine unique items by ID or title
              const combinedMap = new Map();
              localItems.forEach((item) => combinedMap.set(item.id, item));
              supaItems.forEach((item) => {
                if (!delList.includes(item.id)) {
                  combinedMap.set(item.id, item);
                }
              });
              merged[key] = Array.from(combinedMap.values()).filter((item) => !delList.includes(item.id));
            });

            return merged;
          });
        }
      });
    }
  }, []);

  // Modals state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeTabForAdd, setActiveTabForAdd] = useState('mov');
  const [editingItem, setEditingItem] = useState(null);
  const [viewingDocument, setViewingDocument] = useState(null);

  const [studentCoordinators, setStudentCoordinators] = useState(() => {
    const saved = localStorage.getItem('rd_student_coordinators');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error('Failed to parse studentCoordinators from localStorage', e);
      }
    }
    return [
      'Sneha Belgumkar',
      'Arfa Ahmed',
      'Mohammed Khalid Kaladagi',
      'Shravankumar Doddamani',
      'Khushi Khatawate'
    ];
  });

  const saveStudentCoordinators = (newList) => {
    setStudentCoordinators(newList);
    localStorage.setItem('rd_student_coordinators', JSON.stringify(newList));
  };

  useEffect(() => {
    localStorage.setItem('rd_cell_tab_data', JSON.stringify(tabData));
  }, [tabData]);

  // Login handler
  const loginAdmin = (inputEmail, inputPassword) => {
    const cleanEmail = (inputEmail || '').trim().toLowerCase();
    const cleanPass = inputPassword || '';

    // Explicitly reject revoked legacy email
    if (cleanEmail === 'admin@tce.ac.in') {
      return { success: false, message: 'Access revoked for this email address.' };
    }

    const isMatch = cleanEmail === ADMIN_EMAIL.toLowerCase() && cleanPass === ADMIN_PASSWORD;

    if (isMatch) {
      setIsAdminLoggedIn(true);
      sessionStorage.setItem('rd_admin_logged_in', 'true');
      setShowLoginModal(false);
      return { success: true };
    } else {
      return { success: false, message: 'Invalid admin email or password.' };
    }
  };

  // Logout handler
  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('rd_admin_logged_in');
  };

  // Add or update entry in tabData
  const saveEntry = async (tabKey, entryData) => {
    let finalEntry = { ...entryData };
    if (!finalEntry.id) {
      finalEntry.id = `${tabKey}-${Date.now()}`;
    }

    // 1. Save to state & localStorage
    setTabData((prev) => {
      const currentList = prev[tabKey] || [];
      const exists = currentList.some((item) => item.id === finalEntry.id);
      const updatedList = exists
        ? currentList.map((item) => (item.id === finalEntry.id ? finalEntry : item))
        : [finalEntry, ...currentList];
      return {
        ...prev,
        [tabKey]: updatedList
      };
    });

    // 2. Sync to Supabase if active
    if (isSupabaseConfigured()) {
      const savedResult = await saveEntryToSupabase(tabKey, finalEntry);
      if (savedResult && savedResult.id) {
        setTabData((prev) => {
          const currentList = prev[tabKey] || [];
          return {
            ...prev,
            [tabKey]: currentList.map((item) => (item.id === finalEntry.id ? { ...item, id: savedResult.id } : item))
          };
        });
      }
    }
  };

  // Delete entry from tabData
  const deleteEntry = async (tabKey, itemId) => {
    if (!window.confirm('Are you sure you want to delete this document entry?')) return;

    // 1. Add ID to deletedIds in state & localStorage
    setDeletedIds((prev) => {
      const updated = [...new Set([...prev, itemId])];
      localStorage.setItem('rd_cell_deleted_ids', JSON.stringify(updated));
      return updated;
    });

    // 2. Delete from state & localStorage
    setTabData((prev) => {
      const updatedList = (prev[tabKey] || []).filter((item) => item.id !== itemId);
      const nextData = {
        ...prev,
        [tabKey]: updatedList
      };
      localStorage.setItem('rd_cell_tab_data', JSON.stringify(nextData));
      return nextData;
    });

    // 3. Sync to Supabase if active
    if (isSupabaseConfigured()) {
      await deleteEntryFromSupabase(itemId);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        tabData,
        saveEntry,
        deleteEntry,
        showLoginModal,
        setShowLoginModal,
        showAddModal,
        setShowAddModal,
        activeTabForAdd,
        setActiveTabForAdd,
        editingItem,
        setEditingItem,
        viewingDocument,
        setViewingDocument,
        ADMIN_EMAIL,
        isSupabaseActive,
        studentCoordinators,
        saveStudentCoordinators
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

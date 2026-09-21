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

  // Tab data state persisted in localStorage and Supabase
  const [tabData, setTabData] = useState(() => {
    const saved = localStorage.getItem('rd_cell_tab_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse tab data from localStorage', e);
      }
    }
    return INITIAL_TAB_DATA;
  });

  const [isSupabaseActive, setIsSupabaseActive] = useState(isSupabaseConfigured());

  // Load from Supabase if configured on app mount
  useEffect(() => {
    if (isSupabaseConfigured()) {
      setIsSupabaseActive(true);
      fetchTabDataFromSupabase().then((data) => {
        if (data) {
          // Merge with initial data if empty
          const merged = {
            mov: data.mov?.length ? data.mov : INITIAL_TAB_DATA.mov,
            conference: data.conference?.length ? data.conference : INITIAL_TAB_DATA.conference,
            ipr: data.ipr?.length ? data.ipr : INITIAL_TAB_DATA.ipr,
            publications: data.publications?.length ? data.publications : INITIAL_TAB_DATA.publications,
            events: data.events?.length ? data.events : INITIAL_TAB_DATA.events
          };
          setTabData(merged);
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

    // 1. Delete from state & localStorage
    setTabData((prev) => ({
      ...prev,
      [tabKey]: (prev[tabKey] || []).filter((item) => item.id !== itemId)
    }));

    // 2. Sync to Supabase if active
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
        isSupabaseActive
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

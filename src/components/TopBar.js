import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { Lock, LogOut, ShieldCheck } from 'lucide-react';

export const TopBar = () => {
  const { isAdminLoggedIn, logoutAdmin, setShowLoginModal } = useAdmin();

  return (
    <div className="topline">
      <div className="wrap">
        <span>Research & Development Cell · Tontadarya College of Engineering, Gadag</span>
        <div className="topline-actions">
          <span style={{ display: 'inline-block' }}>Research · Innovation · IPR · Collaboration · Impact</span>
          {isAdminLoggedIn ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="admin-badge">
                <ShieldCheck size={12} /> Admin Mode
              </span>
              <button className="admin-login-btn" onClick={logoutAdmin} title="Logout Admin">
                <LogOut size={11} /> Logout
              </button>
            </div>
          ) : (
            <button className="admin-login-btn" onClick={() => setShowLoginModal(true)} title="Admin Login">
              <Lock size={11} /> Admin Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

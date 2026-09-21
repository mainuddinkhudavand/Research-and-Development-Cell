import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Lock, Mail, ShieldAlert, X } from 'lucide-react';

export const AdminLoginModal = () => {
  const { showLoginModal, setShowLoginModal, loginAdmin, ADMIN_EMAIL } = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!showLoginModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const result = loginAdmin(email, password);
    if (!result.success) {
      setErrorMsg(result.message);
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy)' }}>
            <Lock color="var(--gold)" size={20} />
            Admin Access Portal
          </h3>
          <button className="close-btn" onClick={() => setShowLoginModal(false)}>
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: 0 }}>
          Enter administrative credentials stored in system environment to upload PDFs, Excel sheets, images and manage public records.
        </p>

        {errorMsg && (
          <div
            style={{
              background: '#fcf0f0',
              border: '1px solid #f5c6cb',
              color: '#c0392b',
              padding: '10px 14px',
              borderRadius: '4px',
              fontSize: '13px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <ShieldAlert size={16} />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Admin Email Address</label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: '36px' }}
              />
              <Mail
                size={16}
                color="var(--muted)"
                style={{ position: 'absolute', left: '12px', top: '12px' }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Admin Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingLeft: '36px' }}
              />
              <Lock
                size={16}
                color="var(--muted)"
                style={{ position: 'absolute', left: '12px', top: '12px' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '24px' }}>
            <button
              type="button"
              className="btn ghost"
              onClick={() => setShowLoginModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn primary">
              Authenticate & Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

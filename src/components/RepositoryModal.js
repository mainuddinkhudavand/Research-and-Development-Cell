import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  X,
  Search,
  Plus,
  Lock,
  Edit2,
  Trash2,
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
  Eye,
  FolderCheck
} from 'lucide-react';

export const RepositoryModal = ({ isOpen, onClose, tabKey, title, desc }) => {
  const {
    isAdminLoggedIn,
    tabData,
    deleteEntry,
    setShowAddModal,
    setActiveTabForAdd,
    setEditingItem,
    setViewingDocument,
    setShowLoginModal
  } = useAdmin();

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  if (!isOpen || !tabKey) return null;

  const items = tabData[tabKey] || [];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (categoryFilter === 'all') return true;
    return (
      (item.category || item.type || item.scope || '')
        .toLowerCase()
        .includes(categoryFilter.toLowerCase())
    );
  });

  const handleOpenAddModal = () => {
    if (!isAdminLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setActiveTabForAdd(tabKey);
    setEditingItem(null);
    setShowAddModal(true);
  };

  const handleEdit = (item) => {
    if (!isAdminLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setActiveTabForAdd(tabKey);
    setEditingItem(item);
    setShowAddModal(true);
  };

  const renderFileBadge = (fileType, fileName, fileUrl, item) => {
    if (!fileName && !fileUrl) {
      return <span style={{ color: '#999', fontSize: '12px' }}>No attachment</span>;
    }

    const type = fileType?.toLowerCase() || 'pdf';

    let icon = <FileText size={14} />;
    let className = 'file-link pdf';
    let label = 'PDF Document';

    if (type.includes('excel') || type.includes('xls') || type.includes('csv')) {
      icon = <FileSpreadsheet size={14} />;
      className = 'file-link excel';
      label = 'Excel Sheet';
    } else if (
      type.includes('image') ||
      type.includes('png') ||
      type.includes('jpg') ||
      type.includes('jpeg')
    ) {
      icon = <ImageIcon size={14} />;
      className = 'file-link image';
      label = 'Picture / Image';
    }

    return (
      <button
        className={className}
        onClick={() =>
          setViewingDocument({
            item,
            tabKey,
            fileType,
            fileName,
            fileUrl,
            excelData: item.excelData
          })
        }
        title={`View & Edit ${fileName || label}`}
      >
        {icon}
        <span>{label}</span>
        <Eye size={12} style={{ marginLeft: '4px' }} />
      </button>
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card large"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(980px, 95%)', maxHeight: '92vh' }}
      >
        {/* Header */}
        <div className="modal-header" style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                background: 'var(--navy)',
                borderRadius: '8px',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--gold)'
              }}
            >
              <FolderCheck size={22} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '20px', color: 'var(--navy)' }}>
                {title || 'Repository Records'}
              </h3>
              <small style={{ color: 'var(--muted)' }}>
                {desc || 'Explore records, attached PDFs, Excel spreadsheets and documents.'}
              </small>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Toolbar */}
        <div
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '18px',
            background: 'var(--cream)',
            padding: '12px 16px',
            borderRadius: '6px',
            border: '1px solid var(--line)'
          }}
        >
          {/* Search bar */}
          <div style={{ position: 'relative', width: '240px' }}>
            <input
              type="text"
              placeholder="Search records..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '6px 10px 6px 32px',
                fontSize: '12.5px',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                width: '100%',
                background: '#fff'
              }}
            />
            <Search
              size={14}
              color="var(--muted)"
              style={{ position: 'absolute', left: '10px', top: '9px' }}
            />
          </div>

          <button
            className="btn primary"
            onClick={handleOpenAddModal}
            style={{
              padding: '7px 14px',
              fontSize: '12px',
              background: isAdminLoggedIn ? 'var(--navy)' : 'var(--gold)',
              borderColor: isAdminLoggedIn ? 'var(--navy)' : 'var(--gold)'
            }}
          >
            {isAdminLoggedIn ? (
              <>
                <Plus size={14} /> Upload / Add Document to {title?.split(' ')[0] || 'Repository'}
              </>
            ) : (
              <>
                <Lock size={13} /> Admin Login & Upload Files
              </>
            )}
          </button>
        </div>

        {/* Records Table */}
        <div className="table-wrap" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Title / Record Name</th>
                <th>Category / Partner</th>
                <th>Date</th>
                <th>Summary / Details</th>
                <th>Attached Document</th>
                {isAdminLoggedIn && <th>Admin Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td
                    colSpan={isAdminLoggedIn ? 6 : 5}
                    style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}
                  >
                    No records found in this repository.{' '}
                    {isAdminLoggedIn ? 'Click "+ Upload / Add" to publish one!' : ''}
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 600, color: 'var(--navy)' }}>
                      {item.title || item.appNo}
                    </td>
                    <td>
                      <span className="tag" style={{ margin: 0 }}>
                        {item.category || item.partner || item.type || item.status || 'General'}
                      </span>
                    </td>
                    <td>{item.date || item.filingDate || '-'}</td>
                    <td>
                      <small style={{ color: 'var(--ink)' }}>
                        {item.summary || item.inventors || item.authors || item.conferenceName || '-'}
                      </small>
                    </td>
                    <td>
                      {renderFileBadge(item.fileType, item.fileName, item.fileUrl, item)}
                    </td>
                    {isAdminLoggedIn && (
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => handleEdit(item)}
                            style={{
                              background: 'var(--cream)',
                              border: '1px solid var(--line)',
                              borderRadius: '4px',
                              padding: '6px 8px',
                              color: 'var(--navy)'
                            }}
                            title="Edit Entry"
                          >
                            <Edit2 size={13} />
                          </button>
                          <button
                            onClick={() => deleteEntry(tabKey, item.id)}
                            style={{
                              background: '#fcf0f0',
                              border: '1px solid #f5c6cb',
                              borderRadius: '4px',
                              padding: '6px 8px',
                              color: '#c0392b'
                            }}
                            title="Delete Entry"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

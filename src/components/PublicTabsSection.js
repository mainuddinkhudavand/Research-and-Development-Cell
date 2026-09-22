import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Award,
  BookOpen,
  Calendar,
  Building2,
  Lock,
  ChevronRight,
  X,
  Search,
  Globe
} from 'lucide-react';

export const PublicTabsSection = () => {
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

  // Active opened tab modal state
  const [openedTabKey, setOpenedTabKey] = useState(null);
  // Category filter inside opened tab modal
  const [categoryFilter, setCategoryFilter] = useState('all');
  // Search query state
  const [searchQuery, setSearchQuery] = useState('');

  const tabsConfig = [
    {
      key: 'mov',
      label: 'MOu (Memorandum of Understanding)',
      icon: Building2,
      tagline: 'International & National MOus',
      desc: 'Academic & Industry MOus, International Partnerships & Verification Reports',
      badgeColor: '#152238',
      logoSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#152238" />
          <path d="M11 20L16 15C17.1 13.9 18.9 13.9 20 15L23.5 18.5M29 20L24 15C22.9 13.9 21.1 13.9 20 15L16.5 18.5" stroke="#E6B866" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 23L17 26C17.8 26.8 19.2 26.8 20 26L21 25C21.8 24.2 23.2 24.2 24 25L26 27" stroke="#E6B866" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 17L14 21M30 17L26 21" stroke="#E6B866" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      key: 'conference',
      label: 'Conference Conducted Details',
      icon: BookOpen,
      tagline: 'Proceedings & Keynotes',
      desc: 'National & International Conference Papers, Proceedings & Keynote Sessions',
      badgeColor: '#20314D',
      logoSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#20314D" />
          <path d="M12 14H28M12 20H28M12 26H22" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      key: 'ipr',
      label: 'Intellectual Property Rights',
      icon: Award,
      tagline: 'Patents & IPR',
      desc: 'Patents Filed, Published & Granted with Official Certificates',
      badgeColor: '#C8892F',
      logoSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#C8892F" />
          <circle cx="20" cy="18" r="7" stroke="#FFF" strokeWidth="2.5" />
          <path d="M16 26L20 32L24 26" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      key: 'pub_faculty',
      label: 'Faculty Publications',
      icon: FileText,
      tagline: 'Scopus & WoS Journals',
      desc: 'Research Papers Published by Faculty Members in Indexed Journals',
      badgeColor: '#2E6B57',
      logoSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#2E6B57" />
          <path d="M14 12H26V28H14V12Z" stroke="#86EFAC" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M18 17H22M18 22H22" stroke="#86EFAC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      key: 'pub_student',
      label: 'Student Publications',
      icon: FileText,
      tagline: 'Student Research Output',
      desc: 'Research Papers & Articles Published by Undergraduate & Postgraduate Students',
      badgeColor: '#1E5E4E',
      logoSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#1E5E4E" />
          <path d="M14 14L20 10L26 14L20 18L14 14Z" stroke="#A7F3D0" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 16.5V23.5C16 25 24 25 24 23.5V16.5" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      key: 'events',
      label: 'Research Events',
      icon: Calendar,
      tagline: 'FDPs & Symposia',
      desc: 'Workshops, FDPs, Seminars, Hackathons & Innovation Expos',
      badgeColor: '#2980B9',
      logoSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#2980B9" />
          <rect x="12" y="14" width="16" height="14" rx="2" stroke="#93C5FD" strokeWidth="2" />
          <path d="M16 11V14M24 11V14" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      key: 'iic_activities',
      label: 'Institution Innovation Council Activities',
      icon: Award,
      tagline: 'IIC Challenges & Expos',
      desc: 'MoE IIC Innovation Challenges, Hackathons, Entrepreneurship Workshops & Activities',
      badgeColor: '#C0392B',
      logoSvg: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#C0392B" />
          <path d="M20 12L23 18L29 19L24.5 23.5L26 29.5L20 26L14 29.5L15.5 23.5L11 19L17 18L20 12Z" stroke="#FECDD3" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const openedTabObj = tabsConfig.find((t) => t.key === openedTabKey);
  const items = openedTabKey ? tabData[openedTabKey] || [] : [];

  // Filter items based on category filter and search
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (categoryFilter === 'all') return true;
    if (openedTabKey === 'mov') {
      return (item.scope || 'national').toLowerCase() === categoryFilter.toLowerCase();
    }
    if (openedTabKey === 'ipr') {
      return (item.status || '').toLowerCase() === categoryFilter.toLowerCase();
    }
    return true;
  });

  const handleOpenTabCard = (tabKey) => {
    setOpenedTabKey(tabKey);
    setCategoryFilter('all');
    setSearchQuery('');
  };

  const handleCloseTabModal = () => {
    setOpenedTabKey(null);
  };

  const handleOpenAddModal = () => {
    if (!isAdminLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setActiveTabForAdd(openedTabKey);
    setEditingItem(null);
    setShowAddModal(true);
  };

  const handleEdit = (item) => {
    if (!isAdminLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setActiveTabForAdd(openedTabKey);
    setEditingItem(item);
    setShowAddModal(true);
  };

  const renderFileBadge = (fileType, fileName, fileUrl, item) => {
    if (!fileName && !fileUrl) return <span style={{ color: '#999', fontSize: '12px' }}>No attachment</span>;

    const type = fileType?.toLowerCase() || 'pdf';

    let icon = <FileText size={14} />;
    let className = 'file-link pdf';
    let label = 'PDF Document';

    if (type.includes('excel') || type.includes('xls') || type.includes('csv')) {
      icon = <FileSpreadsheet size={14} />;
      className = 'file-link excel';
      label = 'Excel Sheet';
    } else if (type.includes('image') || type.includes('png') || type.includes('jpg') || type.includes('jpeg')) {
      icon = <ImageIcon size={14} />;
      className = 'file-link image';
      label = 'Picture / Image';
    }

    return (
      <button
        className={className}
        onClick={() => setViewingDocument({ item, tabKey: openedTabKey, fileType, fileName, fileUrl, excelData: item.excelData })}
        title={`View & Edit ${fileName || label}`}
      >
        {icon}
        <span>{label}</span>
        <Eye size={12} style={{ marginLeft: '4px' }} />
      </button>
    );
  };

  return (
    <section id="public-tabs" className="wrap" style={{ padding: '60px 0' }}>
      <div className="section-head">
        <div>
          <span className="num">Public Research & Innovation Repository</span>
          <h2>Central R&D Documentation & Records</h2>
        </div>
        <p className="kicker">
          Click on any card tab below to open its repository and view uploaded PDFs, Excel sheets, images and official documents.
        </p>
      </div>

      {/* Card-Type Tabs Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '18px'
        }}
      >
        {tabsConfig.map((tab) => {
          const count = (tabData[tab.key] || []).length;
          return (
            <div
              key={tab.key}
              id={tab.key}
              onClick={() => handleOpenTabCard(tab.key)}
              style={{
                background: 'var(--paper)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '22px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 14px rgba(21, 34, 56, 0.05)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(21, 34, 56, 0.05)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div style={{ width: '40px', height: '40px' }}>{tab.logoSvg}</div>
                <span
                  style={{
                    background: 'var(--cream)',
                    color: 'var(--navy)',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 10px',
                    borderRadius: '12px',
                    border: '1px solid var(--line)'
                  }}
                >
                  {count} Files
                </span>
              </div>

              <h4 style={{ margin: '0 0 4px', fontSize: '15.5px', fontFamily: 'Playfair Display, serif', fontWeight: 700, color: 'var(--navy)' }}>
                {tab.label}
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--muted)', lineHeight: '1.45' }}>
                {tab.tagline}
              </p>

              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--gold)' }}>
                <span>Click to Open Tab</span>
                <ChevronRight size={14} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal / Popup View opened when a card tab is clicked */}
      {openedTabObj && (
        <div className="modal-overlay" onClick={handleCloseTabModal}>
          <div className="modal-card large" onClick={(e) => e.stopPropagation()} style={{ width: 'min(980px, 95%)', maxHeight: '92vh' }}>
            
            {/* Modal Header */}
            <div className="modal-header" style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px' }}>{openedTabObj.logoSvg}</div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '20px', color: 'var(--navy)' }}>{openedTabObj.label} Repository</h3>
                  <small style={{ color: 'var(--muted)' }}>{openedTabObj.desc}</small>
                </div>
              </div>
              <button className="close-btn" onClick={handleCloseTabModal}>
                <X size={20} />
              </button>
            </div>

            {/* Top Toolbar inside Tab Modal */}
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
              {/* Search & Filters */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', width: '220px' }}>
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
                  <Search size={14} color="var(--muted)" style={{ position: 'absolute', left: '10px', top: '9px' }} />
                </div>

                {openedTabKey === 'mov' && (
                  <div className="filters-bar" style={{ margin: 0 }}>
                    <button className={`filter-chip ${categoryFilter === 'all' ? 'active' : ''}`} onClick={() => setCategoryFilter('all')}>
                      All MOus
                    </button>
                    <button className={`filter-chip ${categoryFilter === 'international' ? 'active' : ''}`} onClick={() => setCategoryFilter('international')}>
                      International
                    </button>
                    <button className={`filter-chip ${categoryFilter === 'national' ? 'active' : ''}`} onClick={() => setCategoryFilter('national')}>
                      National
                    </button>
                  </div>
                )}

                {openedTabKey === 'ipr' && (
                  <div className="filters-bar" style={{ margin: 0 }}>
                    <button className={`filter-chip ${categoryFilter === 'all' ? 'active' : ''}`} onClick={() => setCategoryFilter('all')}>
                      All
                    </button>
                    <button className={`filter-chip ${categoryFilter === 'granted' ? 'active' : ''}`} onClick={() => setCategoryFilter('granted')}>
                      Granted
                    </button>
                    <button className={`filter-chip ${categoryFilter === 'published' ? 'active' : ''}`} onClick={() => setCategoryFilter('published')}>
                      Published
                    </button>
                  </div>
                )}
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
                    <Plus size={14} /> Upload / Add Record
                  </>
                ) : (
                  <>
                    <Lock size={13} /> Admin Login & Upload Files
                  </>
                )}
              </button>
            </div>

            {/* Table Content inside Opened Tab Modal */}
            <div className="table-wrap" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              <table>
                <thead>
                  {openedTabKey === 'mov' && (
                    <tr>
                      <th>Title</th>
                      <th>Partner Organization</th>
                      <th>Scope / Level</th>
                      <th>Category</th>
                      <th>Signing Date</th>
                      <th>Summary</th>
                      <th>Attached Document</th>
                      {isAdminLoggedIn && <th>Admin Actions</th>}
                    </tr>
                  )}
                  {openedTabKey === 'conference' && (
                    <tr>
                      <th>Paper / Presentation Title</th>
                      <th>Conference Name</th>
                      <th>Scope</th>
                      <th>Organized By / Date</th>
                      <th>Proceedings</th>
                      <th>Document</th>
                      {isAdminLoggedIn && <th>Admin Actions</th>}
                    </tr>
                  )}
                  {openedTabKey === 'ipr' && (
                    <tr>
                      <th>Application No.</th>
                      <th>Title of Invention</th>
                      <th>Inventors</th>
                      <th>Status</th>
                      <th>Filing / Grant Date</th>
                      <th>Certificate Attachment</th>
                      {isAdminLoggedIn && <th>Admin Actions</th>}
                    </tr>
                  )}
                  {(openedTabKey === 'pub_faculty' || openedTabKey === 'pub_student') && (
                    <tr>
                      <th>Paper Title</th>
                      <th>Authors</th>
                      <th>Category</th>
                      <th>Journal / Publisher</th>
                      <th>Indexing / Year</th>
                      <th>Full Text Attachment</th>
                      {isAdminLoggedIn && <th>Admin Actions</th>}
                    </tr>
                  )}
                  {(openedTabKey === 'events' || openedTabKey === 'iic_activities') && (
                    <tr>
                      <th>Activity / Event Title</th>
                      <th>Event Type</th>
                      <th>Resource Person(s)</th>
                      <th>Date / Duration</th>
                      <th>Participants</th>
                      <th>Report / Brochure</th>
                      {isAdminLoggedIn && <th>Admin Actions</th>}
                    </tr>
                  )}
                </thead>
                <tbody>
                  {filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={isAdminLoggedIn ? 8 : 7} style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
                        No records found in this repository. {isAdminLoggedIn ? 'Click "+ Upload / Add Record" to add one!' : ''}
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((item) => (
                      <tr key={item.id}>
                        {/* MOU Row */}
                        {openedTabKey === 'mov' && (
                          <>
                            <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{item.title}</td>
                            <td>{item.partner}</td>
                            <td>
                              <span
                                className="tag"
                                style={{
                                  margin: 0,
                                  background: item.scope === 'International' ? '#eff6ff' : '#fbf8f1',
                                  color: item.scope === 'International' ? '#2980b9' : '#c8892f'
                                }}
                              >
                                {item.scope || 'National'}
                              </span>
                            </td>
                            <td>
                              <span className="tag" style={{ margin: 0 }}>
                                {item.category || 'MOu'}
                              </span>
                            </td>
                            <td>{item.date}</td>
                            <td>
                              <small style={{ color: 'var(--ink)' }}>{item.summary}</small>
                            </td>
                            <td>{renderFileBadge(item.fileType, item.fileName, item.fileUrl, item)}</td>
                          </>
                        )}

                        {/* Conference Row */}
                        {openedTabKey === 'conference' && (
                          <>
                            <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{item.title}</td>
                            <td>{item.conferenceName}</td>
                            <td>
                              <span className="tag" style={{ margin: 0 }}>
                                {item.scope}
                              </span>
                            </td>
                            <td>
                              {item.organizedBy}
                              <small>{item.date}</small>
                            </td>
                            <td>{item.proceedings}</td>
                            <td>{renderFileBadge(item.fileType, item.fileName, item.fileUrl, item)}</td>
                          </>
                        )}

                        {/* IPR Row */}
                        {openedTabKey === 'ipr' && (
                          <>
                            <td style={{ fontWeight: 700, fontFamily: 'monospace', color: 'var(--gold)' }}>{item.appNo}</td>
                            <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{item.title}</td>
                            <td>
                              <small style={{ color: 'var(--ink)' }}>{item.inventors}</small>
                            </td>
                            <td>
                              <span
                                className="tag"
                                style={{
                                  margin: 0,
                                  background:
                                    item.status === 'Granted'
                                      ? '#edf7f3'
                                      : item.status === 'Published'
                                      ? '#eff6ff'
                                      : '#fbf8f1',
                                  color:
                                    item.status === 'Granted'
                                      ? '#27ae60'
                                      : item.status === 'Published'
                                      ? '#2980b9'
                                      : '#c8892f',
                                  padding: '4px 8px',
                                  borderRadius: '4px'
                                }}
                              >
                                {item.status}
                              </span>
                            </td>
                            <td>
                              Filing: {item.filingDate}
                              {item.grantDate && item.grantDate !== '-' && <small>Grant: {item.grantDate}</small>}
                            </td>
                            <td>{renderFileBadge(item.fileType, item.fileName, item.fileUrl, item)}</td>
                          </>
                        )}

                        {/* Publications Rows */}
                        {(openedTabKey === 'pub_faculty' || openedTabKey === 'pub_student') && (
                          <>
                            <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{item.title}</td>
                            <td>
                              <small style={{ color: 'var(--ink)' }}>{item.authors}</small>
                            </td>
                            <td>
                              <span className="tag" style={{ margin: 0 }}>
                                {item.type || (openedTabKey === 'pub_faculty' ? 'Faculty' : 'Student')}
                              </span>
                            </td>
                            <td>{item.journal}</td>
                            <td>
                              {item.indexing}
                              <small>Year: {item.year}</small>
                            </td>
                            <td>{renderFileBadge(item.fileType, item.fileName, item.fileUrl, item)}</td>
                          </>
                        )}

                        {/* Research Events & IIC Activities Row */}
                        {(openedTabKey === 'events' || openedTabKey === 'iic_activities') && (
                          <>
                            <td style={{ fontWeight: 600, color: 'var(--navy)' }}>{item.title}</td>
                            <td>
                              <span className="tag" style={{ margin: 0 }}>
                                {item.eventType || 'Activity'}
                              </span>
                            </td>
                            <td>
                              <small style={{ color: 'var(--ink)' }}>{item.resourcePerson}</small>
                            </td>
                            <td>{item.date}</td>
                            <td>{item.participants}</td>
                            <td>{renderFileBadge(item.fileType, item.fileName, item.fileUrl, item)}</td>
                          </>
                        )}

                        {/* Admin Actions */}
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
                                onClick={() => deleteEntry(openedTabKey, item.id)}
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
      )}
    </section>
  );
};

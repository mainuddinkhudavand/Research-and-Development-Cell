import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Upload, X, FileText, FileSpreadsheet, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { uploadFileToSupabase } from '../lib/supabaseService';
import { isSupabaseConfigured } from '../lib/supabaseClient';

export const AddDocumentModal = () => {
  const {
    showAddModal,
    setShowAddModal,
    activeTabForAdd,
    editingItem,
    saveEntry
  } = useAdmin();

  const [tabKey, setTabKey] = useState(activeTabForAdd || 'mov');
  const [formData, setFormData] = useState({});
  const [fileInfo, setFileInfo] = useState({ fileType: 'pdf', fileName: '', fileUrl: '' });
  const [uploadProgress, setUploadProgress] = useState(false);

  useEffect(() => {
    if (activeTabForAdd) setTabKey(activeTabForAdd);
    if (editingItem) {
      setFormData(editingItem);
      setFileInfo({
        fileType: editingItem.fileType || 'pdf',
        fileName: editingItem.fileName || '',
        fileUrl: editingItem.fileUrl || ''
      });
    } else {
      setFormData({
        title: '',
        partner: '',
        category: 'Industry Partnership',
        date: new Date().toISOString().split('T')[0],
        summary: '',
        conferenceName: '',
        scope: 'International',
        organizedBy: '',
        proceedings: '',
        appNo: '',
        inventors: '',
        status: 'Filed',
        filingDate: new Date().toISOString().split('T')[0],
        grantDate: '-',
        authors: '',
        type: 'Faculty',
        journal: '',
        year: '2026',
        indexing: 'Scopus',
        eventType: 'Workshop',
        resourcePerson: '',
        participants: ''
      });
      setFileInfo({ fileType: 'pdf', fileName: '', fileUrl: '' });
    }
  }, [activeTabForAdd, editingItem, showAddModal]);

  if (!showAddModal) return null;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadProgress(true);

    const fileName = file.name;
    const ext = fileName.split('.').pop().toLowerCase();

    let fileType = 'pdf';
    if (['xlsx', 'xls', 'csv'].includes(ext)) {
      fileType = 'excel';
    } else if (['jpg', 'jpeg', 'png', 'webp', 'svg', 'gif'].includes(ext)) {
      fileType = 'image';
    }

    if (isSupabaseConfigured()) {
      const supaResult = await uploadFileToSupabase(file);
      if (supaResult && supaResult.fileUrl) {
        setFileInfo({
          fileType,
          fileName,
          fileUrl: supaResult.fileUrl
        });
        setUploadProgress(false);
        return;
      } else if (supaResult && supaResult.error) {
        console.warn('Supabase storage upload failed, falling back to local reader:', supaResult.error);
      }
    }

    // Local fallback using DataURL
    const reader = new FileReader();
    reader.onload = () => {
      setFileInfo({
        fileType,
        fileName,
        fileUrl: reader.result
      });
      setUploadProgress(false);
    };
    reader.onerror = () => {
      alert('Error reading file. Please try again.');
      setUploadProgress(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title && !formData.appNo) {
      alert('Please fill out the required title field.');
      return;
    }

    const finalEntry = {
      ...formData,
      fileType: fileInfo.fileType,
      fileName: fileInfo.fileName,
      fileUrl: fileInfo.fileUrl
    };

    saveEntry(tabKey, finalEntry);
    setShowAddModal(false);
  };

  return (
    <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
      <div className="modal-card large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{ color: 'var(--navy)' }}>
            {editingItem ? 'Edit Document Record' : 'Add New Document / Record'}
          </h3>
          <button className="close-btn" onClick={() => setShowAddModal(false)}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Target Public Tab</label>
            <select
              value={tabKey}
              onChange={(e) => setTabKey(e.target.value)}
              disabled={!!editingItem}
            >
              <option value="mov">MOu (Memorandum of Understanding)</option>
              <option value="conference">Conference Conducted Details</option>
              <option value="ipr">Intellectual Property Rights</option>
              <option value="pub_faculty">Faculty Publications</option>
              <option value="pub_student">Student Publications</option>
              <option value="events">Research Events & FDPs</option>
              <option value="iic_activities">Institution Innovation Council Activities</option>
            </select>
          </div>

          {/* Dynamic Metadata Fields */}
          {tabKey === 'mov' && (
            <>
              <div className="form-group">
                <label>MOu Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MOu with TCS for Cloud & AI Research"
                  value={formData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Partner Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Tata Consultancy Services, Bengaluru"
                    value={formData.partner || ''}
                    onChange={(e) => handleInputChange('partner', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>MOu Scope / Level</label>
                  <select
                    value={formData.scope || 'National'}
                    onChange={(e) => handleInputChange('scope', e.target.value)}
                  >
                    <option value="International">International</option>
                    <option value="National">National</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Signing Date</label>
                  <input
                    type="date"
                    value={formData.date || ''}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Category / Industry Sector</label>
                  <input
                    type="text"
                    placeholder="e.g. Industry Partnership / IT"
                    value={formData.category || ''}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Summary of Scope / Objectives</label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe key objectives of this MOV or MOu..."
                  value={formData.summary || ''}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                ></textarea>
              </div>
            </>
          )}

          {tabKey === 'conference' && (
            <>
              <div className="form-group">
                <label>Paper / Presentation Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Design of Low Power High Speed VLSI Architecture"
                  value={formData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Conference Name</label>
                <input
                  type="text"
                  placeholder="e.g. International Conference on Recent Trends in Electrical (ICRTEE)"
                  value={formData.conferenceName || ''}
                  onChange={(e) => handleInputChange('conferenceName', e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Scope</label>
                  <select
                    value={formData.scope || 'International'}
                    onChange={(e) => handleInputChange('scope', e.target.value)}
                  >
                    <option value="International">International</option>
                    <option value="National">National</option>
                    <option value="Regional">Regional / State</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Organized By & Date</label>
                  <input
                    type="text"
                    placeholder="e.g. Department of ECE, TCE Gadag (Dec 2025)"
                    value={formData.organizedBy || ''}
                    onChange={(e) => handleInputChange('organizedBy', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Proceedings Indexing</label>
                <input
                  type="text"
                  placeholder="e.g. IEEE Xplore / Springer ASTI"
                  value={formData.proceedings || ''}
                  onChange={(e) => handleInputChange('proceedings', e.target.value)}
                />
              </div>
            </>
          )}

          {tabKey === 'ipr' && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>Patent Application Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 202541089234 A"
                    value={formData.appNo || ''}
                    onChange={(e) => handleInputChange('appNo', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Current Status</label>
                  <select
                    value={formData.status || 'Filed'}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                  >
                    <option value="Granted">Granted</option>
                    <option value="Published">Published</option>
                    <option value="Filed">Filed</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Invention Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Automated Agricultural Soil Nutrient Analyzer"
                  value={formData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Inventors List</label>
                <input
                  type="text"
                  placeholder="e.g. Dr. S. B. Kulkarni, Prof. A. M. Patil, Student Team"
                  value={formData.inventors || ''}
                  onChange={(e) => handleInputChange('inventors', e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Filing Date</label>
                  <input
                    type="date"
                    value={formData.filingDate || ''}
                    onChange={(e) => handleInputChange('filingDate', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Grant Date (if applicable)</label>
                  <input
                    type="text"
                    placeholder="e.g. 2025-09-01 or -"
                    value={formData.grantDate || ''}
                    onChange={(e) => handleInputChange('grantDate', e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {tabKey === 'publications' && (
            <>
              <div className="form-group">
                <label>Research Paper Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Performance Analysis of Deep Neural Networks for Medical Image Classification"
                  value={formData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Authors</label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. K. G. Vishwanath, Prof. P. S. Pujar"
                    value={formData.authors || ''}
                    onChange={(e) => handleInputChange('authors', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Author Category</label>
                  <select
                    value={formData.type || 'Faculty'}
                    onChange={(e) => handleInputChange('type', e.target.value)}
                  >
                    <option value="Faculty">Faculty Publication</option>
                    <option value="Student">Student Publication</option>
                    <option value="Joint">Joint (Faculty & Student)</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Journal / Book Title</label>
                  <input
                    type="text"
                    placeholder="e.g. IEEE Transactions on Biomedical Engineering"
                    value={formData.journal || ''}
                    onChange={(e) => handleInputChange('journal', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Publication Year & Indexing</label>
                  <input
                    type="text"
                    placeholder="e.g. Scopus / Web of Science (2025)"
                    value={formData.indexing || ''}
                    onChange={(e) => handleInputChange('indexing', e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {tabKey === 'events' && (
            <>
              <div className="form-group">
                <label>Research Event Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Workshop on Intellectual Property Rights (IPR) & Patent Drafting"
                  value={formData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Event Type</label>
                  <select
                    value={formData.eventType || 'Workshop'}
                    onChange={(e) => handleInputChange('eventType', e.target.value)}
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="FDP">Faculty Development Program (FDP)</option>
                    <option value="Seminar">Seminar / Guest Lecture</option>
                    <option value="Symposium / Hackathon">Symposium / Hackathon</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date / Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. Oct 22-23, 2025"
                    value={formData.date || ''}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Resource Person(s) & Affiliation</label>
                <input
                  type="text"
                  placeholder="e.g. Dr. H. S. Sharma, Examiner of Patents"
                  value={formData.resourcePerson || ''}
                  onChange={(e) => handleInputChange('resourcePerson', e.target.value)}
                />
              </div>
            </>
          )}

          {['research_areas', 'researchers', 'research_support', 'real_problems', 'resources', 'iic_activities', 'pub_faculty', 'pub_student'].includes(tabKey) && (
            <>
              <div className="form-group">
                <label>Document / Record Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Institutional Research Policy Manual 2026"
                  value={formData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Category / Department / Partner</label>
                  <input
                    type="text"
                    placeholder="e.g. Policy / R&D Center / ECE Dept"
                    value={formData.category || ''}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    value={formData.date || ''}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Summary / Details</label>
                <textarea
                  rows="3"
                  placeholder="Briefly describe key objectives, scope, or details of this record..."
                  value={formData.summary || ''}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                ></textarea>
              </div>
            </>
          )}

          {/* File Upload Dropzone */}
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Attach Document / File (PDFs, Excel Sheets, Images allowed)
            </label>
            <label className="file-dropzone">
              <input
                type="file"
                accept=".pdf, .xlsx, .xls, .csv, .png, .jpg, .jpeg, .webp, .svg"
                onChange={handleFileUpload}
              />
              <Upload size={28} color="var(--gold)" style={{ marginBottom: '8px' }} />
              <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)' }}>
                Click to browse & upload file
              </div>
              <small style={{ color: 'var(--muted)', display: 'block', marginTop: '4px' }}>
                Supports <b>PDF (.pdf)</b>, <b>Excel (.xlsx, .xls, .csv)</b>, and <b>Images (.jpg, .png, .webp)</b>
              </small>
            </label>

            {uploadProgress && <div style={{ color: 'var(--gold)', fontSize: '12px', marginTop: '6px' }}>Processing file upload...</div>}

            {fileInfo.fileName && (
              <div
                style={{
                  background: '#edf7f3',
                  border: '1px solid #c3e6cb',
                  color: '#27ae60',
                  padding: '10px 14px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  marginTop: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={16} />
                  <span>
                    Attached: <b>{fileInfo.fileName}</b> ({fileInfo.fileType.toUpperCase()})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setFileInfo({ fileType: 'pdf', fileName: '', fileUrl: '' })}
                  style={{ background: 'none', border: 0, color: '#c0392b', cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '30px' }}>
            <button type="button" className="btn ghost" onClick={() => setShowAddModal(false)}>
              Cancel
            </button>
            <button type="submit" className="btn primary">
              {editingItem ? 'Save Changes' : 'Publish Document'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

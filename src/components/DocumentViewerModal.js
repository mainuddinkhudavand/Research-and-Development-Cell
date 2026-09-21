import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  X,
  Download,
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
  ExternalLink,
  Plus,
  Save,
  Lock,
  Edit,
  CheckCircle,
  Trash2
} from 'lucide-react';

export const DocumentViewerModal = () => {
  const {
    viewingDocument,
    setViewingDocument,
    isAdminLoggedIn,
    setShowLoginModal,
    saveEntry,
    tabData
  } = useAdmin();

  // Excel sheet editing state
  const [excelState, setExcelState] = useState({ headers: [], rows: [] });
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  useEffect(() => {
    if (viewingDocument && viewingDocument.excelData) {
      setExcelState({
        headers: [...(viewingDocument.excelData.headers || [])],
        rows: (viewingDocument.excelData.rows || []).map((r) => [...r])
      });
    } else if (viewingDocument && viewingDocument.fileType === 'excel') {
      // Default demo table structure if none provided
      setExcelState({
        headers: ['Column 1', 'Column 2', 'Column 3', 'Status'],
        rows: [
          ['Entry A', 'Detail 1', '100', 'Verified'],
          ['Entry B', 'Detail 2', '250', 'Approved']
        ]
      });
    }
  }, [viewingDocument]);

  if (!viewingDocument) return null;

  const { item, tabKey, fileType, fileName, fileUrl } = viewingDocument;
  const type = fileType?.toLowerCase() || 'pdf';
  const isExcel = type.includes('excel') || type.includes('xls') || type.includes('csv');

  const handleCellChange = (rowIndex, colIndex, value) => {
    setExcelState((prev) => {
      const newRows = prev.rows.map((r, rIdx) => {
        if (rIdx !== rowIndex) return r;
        const newRow = [...r];
        newRow[colIndex] = value;
        return newRow;
      });
      return { ...prev, rows: newRows };
    });
  };

  const handleHeaderChange = (colIndex, value) => {
    setExcelState((prev) => {
      const newHeaders = [...prev.headers];
      newHeaders[colIndex] = value;
      return { ...prev, headers: newHeaders };
    });
  };

  const handleAddRow = () => {
    setExcelState((prev) => ({
      ...prev,
      rows: [...prev.rows, new Array(prev.headers.length).fill('')]
    }));
  };

  const handleDeleteRow = (rowIndex) => {
    setExcelState((prev) => ({
      ...prev,
      rows: prev.rows.filter((_, idx) => idx !== rowIndex)
    }));
  };

  const handleSaveExcel = () => {
    if (!item || !tabKey) {
      setSaveSuccessMsg('Excel sheet updated in memory viewer.');
      setTimeout(() => setSaveSuccessMsg(''), 3000);
      return;
    }

    const updatedItem = {
      ...item,
      excelData: {
        headers: excelState.headers,
        rows: excelState.rows
      }
    };

    saveEntry(tabKey, updatedItem);
    setSaveSuccessMsg('Excel spreadsheet changes saved successfully!');
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  const handleDownload = () => {
    if (!fileUrl || fileUrl === '#') {
      alert('Downloading current spreadsheet data as CSV file...');
      const csvContent =
        'data:text/csv;charset=utf-8,' +
        [excelState.headers.join(','), ...excelState.rows.map((e) => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', fileName ? fileName.replace(/\.[^/.]+$/, '.csv') : 'export.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName || 'document';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="modal-overlay" onClick={() => setViewingDocument(null)}>
      <div className="modal-card large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--navy)' }}>
            {isExcel ? (
              <FileSpreadsheet color="#27ae60" size={22} />
            ) : type.includes('image') ? (
              <ImageIcon color="#2980b9" size={22} />
            ) : (
              <FileText color="#c0392b" size={22} />
            )}
            {fileName || 'Attached Document Viewer'}
          </h3>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button className="btn primary" onClick={handleDownload} style={{ padding: '6px 12px', fontSize: '12px' }}>
              <Download size={14} /> Download File
            </button>
            <button className="close-btn" onClick={() => setViewingDocument(null)}>
              <X size={18} />
            </button>
          </div>
        </div>

        {saveSuccessMsg && (
          <div
            style={{
              background: '#edf7f3',
              border: '1px solid #c3e6cb',
              color: '#27ae60',
              padding: '10px 14px',
              borderRadius: '4px',
              fontSize: '13px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <CheckCircle size={16} />
            {saveSuccessMsg}
          </div>
        )}

        {/* Excel Spreadsheet Viewer / Editor */}
        {isExcel ? (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px',
                flexWrap: 'wrap',
                gap: '10px',
                background: 'var(--cream)',
                padding: '12px 16px',
                borderRadius: '6px',
                border: '1px solid var(--line)'
              }}
            >
              <div>
                <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', display: 'block' }}>
                  Interactive Excel Spreadsheet Editor
                </span>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  {isAdminLoggedIn
                    ? 'Admin Edit Mode: Click on any cell or header to modify data, add rows, and click Save!'
                    : 'Viewing spreadsheet. Login as Admin to enable live editing & saving.'}
                </span>
              </div>

              {isAdminLoggedIn ? (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={handleAddRow}
                    className="btn ghost"
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    <Plus size={14} /> Add Row
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveExcel}
                    className="btn primary"
                    style={{ padding: '6px 14px', fontSize: '12px', background: '#27ae60', borderColor: '#27ae60' }}
                  >
                    <Save size={14} /> Save Excel Changes
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowLoginModal(true)}
                  className="btn ghost"
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  <Lock size={13} /> Login as Admin to Edit
                </button>
              )}
            </div>

            <div className="table-wrap" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th style={{ width: '40px', textAlign: 'center' }}>#</th>
                    {excelState.headers.map((header, colIdx) => (
                      <th key={colIdx}>
                        {isAdminLoggedIn ? (
                          <input
                            type="text"
                            value={header}
                            onChange={(e) => handleHeaderChange(colIdx, e.target.value)}
                            style={{
                              background: 'transparent',
                              border: '1px solid rgba(255,255,255,0.3)',
                              color: '#fff',
                              fontWeight: 600,
                              fontFamily: 'inherit',
                              fontSize: '13px',
                              width: '100%',
                              padding: '2px 6px',
                              borderRadius: '3px'
                            }}
                          />
                        ) : (
                          header
                        )}
                      </th>
                    ))}
                    {isAdminLoggedIn && <th style={{ width: '60px', textAlign: 'center' }}>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {excelState.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--muted)', fontSize: '12px' }}>
                        {rowIdx + 1}
                      </td>
                      {excelState.headers.map((_, colIdx) => {
                        const cell = row[colIdx] || '';
                        return (
                          <td key={colIdx}>
                            {isAdminLoggedIn ? (
                              <input
                                type="text"
                                value={cell}
                                onChange={(e) => handleCellChange(rowIdx, colIdx, e.target.value)}
                                style={{
                                  width: '100%',
                                  padding: '6px 8px',
                                  border: '1px solid var(--line)',
                                  borderRadius: '4px',
                                  fontFamily: 'inherit',
                                  fontSize: '13px',
                                  background: '#fff'
                                }}
                              />
                            ) : (
                              cell
                            )}
                          </td>
                        );
                      })}
                      {isAdminLoggedIn && (
                        <td style={{ textAlign: 'center' }}>
                          <button
                            type="button"
                            onClick={() => handleDeleteRow(rowIdx)}
                            style={{
                              background: '#fcf0f0',
                              border: '1px solid #f5c6cb',
                              borderRadius: '4px',
                              padding: '5px 8px',
                              color: '#c0392b',
                              cursor: 'pointer'
                            }}
                            title="Delete Row"
                          >
                            <Trash2 size={13} />
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : type.includes('image') && fileUrl && fileUrl !== '#' ? (
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <img
              src={fileUrl}
              alt={fileName}
              style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '4px', border: '1px solid var(--line)' }}
            />
          </div>
        ) : type.includes('pdf') && fileUrl && fileUrl.startsWith('data:application/pdf') ? (
          <iframe
            src={fileUrl}
            title={fileName}
            style={{ width: '100%', height: '60vh', border: '1px solid var(--line)', borderRadius: '4px' }}
          ></iframe>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px', background: 'var(--cream)', borderRadius: '6px', width: '100%' }}>
            <FileText size={48} color="#c0392b" style={{ marginBottom: '14px' }} />
            <h4 style={{ margin: '0 0 8px', color: 'var(--navy)' }}>{fileName || 'PDF Document File'}</h4>
            <p style={{ color: 'var(--muted)', fontSize: '13.5px', maxWidth: '420px', margin: '0 auto 20px' }}>
              PDF document attached to this record. Click below to view or download.
            </p>

            {fileUrl && fileUrl !== '#' ? (
              <a
                href={fileUrl}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <ExternalLink size={15} /> View PDF Document
              </a>
            ) : (
              <div style={{ background: '#fff', padding: '12px', borderRadius: '4px', border: '1px dashed var(--line)', display: 'inline-block', fontSize: '12px', color: 'var(--gold)' }}>
                Sample PDF Document Attachment
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

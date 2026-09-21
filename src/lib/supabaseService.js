import { supabase, isSupabaseConfigured } from './supabaseClient';

const BUCKET_NAME = 'documents';
const TABLE_NAME = 'rd_documents';

/**
 * Uploads a file (PDF, Excel, Image) to Supabase Storage Bucket
 */
export const uploadFileToSupabase = async (file) => {
  if (!isSupabaseConfigured() || !supabase) {
    console.warn('Supabase not configured. Using local DataURL fallback.');
    return null;
  }

  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Supabase storage upload error:', error.message);
      return null;
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return {
      fileUrl: publicUrlData.publicUrl,
      filePath
    };
  } catch (err) {
    console.error('Failed to upload file to Supabase:', err);
    return null;
  }
};

/**
 * Fetches all tab documents from Supabase Database
 */
export const fetchTabDataFromSupabase = async () => {
  if (!isSupabaseConfigured() || !supabase) return null;

  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching Supabase records:', error.message);
      return null;
    }

    // Group by tab_key
    const grouped = {
      mov: [],
      conference: [],
      ipr: [],
      publications: [],
      events: []
    };

    data.forEach((row) => {
      const tabKey = row.tab_key || 'mov';
      if (grouped[tabKey]) {
        grouped[tabKey].push({
          id: row.id,
          title: row.title,
          partner: row.partner,
          category: row.category,
          date: row.date,
          summary: row.summary,
          conferenceName: row.conference_name,
          scope: row.scope,
          organizedBy: row.organized_by,
          proceedings: row.proceedings,
          appNo: row.app_no,
          inventors: row.inventors,
          status: row.status,
          filingDate: row.filing_date,
          grantDate: row.grant_date,
          authors: row.authors,
          type: row.type,
          journal: row.journal,
          year: row.year,
          indexing: row.indexing,
          eventType: row.event_type,
          resourcePerson: row.resource_person,
          participants: row.participants,
          fileType: row.file_type,
          fileName: row.file_name,
          fileUrl: row.file_url,
          excelData: row.excel_data
        });
      }
    });

    return grouped;
  } catch (err) {
    console.error('Failed to fetch from Supabase:', err);
    return null;
  }
};

/**
 * Saves or updates an entry in Supabase Database
 */
export const saveEntryToSupabase = async (tabKey, entry) => {
  if (!isSupabaseConfigured() || !supabase) return null;

  try {
    const row = {
      tab_key: tabKey,
      title: entry.title || '',
      partner: entry.partner || '',
      category: entry.category || '',
      date: entry.date || '',
      summary: entry.summary || '',
      conference_name: entry.conferenceName || '',
      scope: entry.scope || '',
      organized_by: entry.organizedBy || '',
      proceedings: entry.proceedings || '',
      app_no: entry.appNo || '',
      inventors: entry.inventors || '',
      status: entry.status || '',
      filing_date: entry.filingDate || '',
      grant_date: entry.grantDate || '',
      authors: entry.authors || '',
      type: entry.type || '',
      journal: entry.journal || '',
      year: entry.year || '',
      indexing: entry.indexing || '',
      event_type: entry.eventType || '',
      resource_person: entry.resourcePerson || '',
      participants: entry.participants || '',
      file_type: entry.fileType || '',
      file_name: entry.fileName || '',
      file_url: entry.fileUrl || '',
      excel_data: entry.excelData || null
    };

    if (entry.id && typeof entry.id === 'string' && !entry.id.includes('-')) {
      // Update existing record by Supabase UUID
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .update(row)
        .eq('id', entry.id)
        .select();

      if (error) console.error('Supabase update error:', error.message);
      return data && data[0] ? data[0] : null;
    } else {
      // Check if entry with same title already exists in Supabase
      if (row.title) {
        const { data: existing } = await supabase
          .from(TABLE_NAME)
          .select('id')
          .eq('tab_key', tabKey)
          .eq('title', row.title)
          .limit(1);

        if (existing && existing.length > 0) {
          const { data, error } = await supabase
            .from(TABLE_NAME)
            .update(row)
            .eq('id', existing[0].id)
            .select();
          if (error) console.error('Supabase update error:', error.message);
          return data && data[0] ? data[0] : null;
        }
      }

      // Insert new record
      const { data, error } = await supabase
        .from(TABLE_NAME)
        .insert([row])
        .select();

      if (error) console.error('Supabase insert error:', error.message);
      return data && data[0] ? data[0] : null;
    }
  } catch (err) {
    console.error('Failed to save to Supabase:', err);
    return null;
  }
};

/**
 * Deletes an entry from Supabase Database
 */
export const deleteEntryFromSupabase = async (id) => {
  if (!isSupabaseConfigured() || !supabase) return null;

  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .delete()
      .eq('id', id);

    if (error) console.error('Supabase delete error:', error.message);
    return data;
  } catch (err) {
    console.error('Failed to delete from Supabase:', err);
    return null;
  }
};

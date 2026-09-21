export const INITIAL_TAB_DATA = {
  mov: [
    {
      id: 'mov-1',
      title: 'MOU with Tata Consultancy Services (TCS)',
      partner: 'Tata Consultancy Services, Bengaluru',
      category: 'Industry Partnership',
      date: '2025-11-15',
      summary: 'Joint research in Artificial Intelligence, Cloud Infrastructure and Machine Learning student internships.',
      fileType: 'pdf',
      fileName: 'TCS_MOU_Agreement_2025.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'mov-2',
      title: 'Memorandum of Verification with VTU R&D Center',
      partner: 'Visvesvaraya Technological University, Belagavi',
      category: 'Academic Research Center',
      date: '2025-08-10',
      summary: 'Verification and affiliation recognition for TCE Advanced Materials Research Lab.',
      fileType: 'excel',
      fileName: 'VTU_Verification_Summary.xlsx',
      excelData: {
        headers: ['Sl No', 'Verification Parameter', 'Status', 'Inspecting Authority', 'Remarks'],
        rows: [
          ['1', 'Lab Infrastructure & Equipment', 'Approved', 'VTU Committee', 'Complies with Tier-1 Standards'],
          ['2', 'Faculty Qualification & PhD Ratio', 'Verified', 'VTU BELAGAVI', '85% PhD Holders'],
          ['3', 'Research Publication Records', 'Approved', 'Academic Audit Cell', 'High Scopus Output'],
          ['4', 'Safety & Environmental Standards', 'Compliant', 'State Board', 'ISO 9001 Certified']
        ]
      }
    },
    {
      id: 'mov-3',
      title: 'MOU with Bosch Rexroth India Ltd',
      partner: 'Bosch Rexroth Automation, Bengaluru',
      category: 'Industrial Automation',
      date: '2024-03-20',
      summary: 'Establishment of Center of Excellence in Hydraulics, Pneumatics, and Industrial Robotics.',
      fileType: 'image',
      fileName: 'Bosch_MOU_Ceremony.jpg',
      fileUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80'
    }
  ],

  conference: [
    {
      id: 'conf-1',
      title: 'Design of Low Power High Speed VLSI Architecture for IoT Edge Nodes',
      conferenceName: 'International Conference on Recent Trends in Electrical and Electronics (ICRTEE-2025)',
      scope: 'International',
      organizedBy: 'Department of ECE, TCE Gadag',
      date: '2025-12-04',
      proceedings: 'IEEE Xplore Digital Library',
      fileType: 'pdf',
      fileName: 'ICRTEE_2025_Paper_VLSI.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'conf-2',
      title: 'Experimental Investigation of Geopolymer Concrete with Industrial Waste',
      conferenceName: 'National Conference on Sustainable Civil Engineering Materials (NCSCEM-2025)',
      scope: 'National',
      organizedBy: 'Department of Civil Engg, TCE Gadag',
      date: '2025-06-18',
      proceedings: 'Springer ASTI Series',
      fileType: 'excel',
      fileName: 'NCSCEM_Conference_Schedule_Details.xlsx',
      excelData: {
        headers: ['Paper ID', 'Author Name', 'Presentation Slot', 'Track', 'Session Chair'],
        rows: [
          ['NC-101', 'Prof. Ramesh K.', '10:00 AM - Track 1', 'Sustainable Materials', 'Dr. V. R. Hebbal'],
          ['NC-102', 'Anand Kumar', '11:15 AM - Track 1', 'Geopolymer Studies', 'Dr. C. V. Adake'],
          ['NC-103', 'Dr. M. S. Joshi', '02:00 PM - Track 2', 'Waste Management', 'Dr. K. G. Vishwanath']
        ]
      }
    },
    {
      id: 'conf-3',
      title: 'Machine Learning Approaches for Renewable Energy Grid Optimization',
      conferenceName: 'Global Summit on Renewable Energy & Smart Grids',
      scope: 'International',
      organizedBy: 'IEEE Power & Energy Society',
      date: '2024-11-12',
      proceedings: 'Scopus Indexed Proceedings',
      fileType: 'pdf',
      fileName: 'SmartGrid_Conference_Paper.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],

  ipr: [
    {
      id: 'ipr-1',
      appNo: '202541089234 A',
      title: 'Automated Agricultural Soil Nutrient Analyzer with Wireless Cloud Telemetry',
      inventors: 'Dr. S. B. Kulkarni, Prof. A. M. Patil, Student Team (ECE)',
      status: 'Granted',
      filingDate: '2024-02-14',
      grantDate: '2025-09-01',
      fileType: 'pdf',
      fileName: 'Patent_Grant_Certificate_202541089234.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'ipr-2',
      appNo: '202541012399 A',
      title: 'Hybrid Renewable Thermal Storage Unit with Phase Change Composite Materials',
      inventors: 'Dr. V. R. Hebbal, Dr. M. S. Joshi (Mechanical Dept)',
      status: 'Published',
      filingDate: '2025-01-20',
      grantDate: '-',
      fileType: 'excel',
      fileName: 'IPR_Patent_Filing_Tracker.xlsx',
      excelData: {
        headers: ['Patent App No', 'Invention Title', 'Dept', 'Filing Fee Paid', 'Journal Publication Date'],
        rows: [
          ['202541012399 A', 'Hybrid Thermal Storage Unit', 'Mechanical', '₹8,000', '2025-03-15'],
          ['202541089234 A', 'Soil Nutrient Analyzer', 'ECE', '₹8,000', '2024-05-20'],
          ['202641005512 A', 'Smart Helmet System', 'CSE', '₹8,000', 'Pending']
        ]
      }
    },
    {
      id: 'ipr-3',
      appNo: '202641005512 A',
      title: 'Smart Helmet System with Alcohol Sensing and Emergency Accident Alert',
      inventors: 'Prof. R. N. Deshmukh, Rahul S., Sneha K. (Student Project)',
      status: 'Filed',
      filingDate: '2026-03-10',
      grantDate: '-',
      fileType: 'image',
      fileName: 'SmartHelmet_Patent_Drawing.png',
      fileUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80'
    }
  ],

  publications: [
    {
      id: 'pub-1',
      title: 'Performance Analysis of Deep Neural Networks for Medical Image Classification in Edge Devices',
      authors: 'Dr. K. G. Vishwanath, Prof. P. S. Pujar',
      type: 'Faculty',
      journal: 'IEEE Transactions on Biomedical Engineering',
      year: '2025',
      indexing: 'Scopus / WoS Q1 (Impact Factor: 4.8)',
      fileType: 'pdf',
      fileName: 'IEEE_DNN_Medical_Classification.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'pub-2',
      title: 'IoT-Based Smart Water Quality Monitoring System for Rural Water Distribution Networks',
      authors: 'Anand Kumar (Student), Prof. S. H. Manjunath',
      type: 'Student',
      journal: 'International Journal of Environmental Technology and Management',
      year: '2025',
      indexing: 'Scopus Indexed',
      fileType: 'pdf',
      fileName: 'Student_Pub_WaterQuality_2025.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'pub-3',
      title: 'Experimental Investigation of Natural Fiber Composites for Automotive Structural Components',
      authors: 'Dr. C. V. Adake, Mahesh G. (M.Tech Student)',
      type: 'Joint',
      journal: 'Journal of Composite Materials & Engineering',
      year: '2024',
      indexing: 'Web of Science (WoS)',
      fileType: 'excel',
      fileName: 'Publication_Citation_Data_2024.xlsx',
      excelData: {
        headers: ['Paper ID', 'Journal Title', 'Volume / Issue', 'Citations', 'Impact Factor'],
        rows: [
          ['PUB-2024-01', 'Journal of Composite Materials', 'Vol. 18, Issue 4', '14', '3.6'],
          ['PUB-2025-01', 'IEEE Trans Biomedical Engg', 'Vol. 72, Issue 1', '8', '4.8'],
          ['PUB-2025-02', 'Intl Water Quality Journal', 'Vol. 12, Issue 2', '3', '2.1']
        ]
      }
    }
  ],

  events: [
    {
      id: 'evt-1',
      title: 'National Workshop on Intellectual Property Rights (IPR) & Patent Drafting',
      eventType: 'Workshop',
      resourcePerson: 'Dr. H. S. Sharma, Examiner of Patents, Indian Patent Office',
      date: '2025-10-22 to 2025-10-23',
      participants: '120 Faculty & Research Scholars',
      fileType: 'pdf',
      fileName: 'IPR_Workshop_Report_2025.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'evt-2',
      title: 'ATAL FDP on Artificial Intelligence and Next Generation Wireless Networks',
      eventType: 'FDP',
      resourcePerson: 'Prof. A. R. Hebbar (IIT Dharwad), Dr. B. N. Rao (NITK)',
      date: '2025-07-14 to 2025-07-18',
      participants: '65 Faculty Members',
      fileType: 'excel',
      fileName: 'FDP_Participant_Feedback_Summary.xlsx',
      excelData: {
        headers: ['Participant Name', 'Department', 'Institution', 'Attendance %', 'Quiz Score /100'],
        rows: [
          ['Prof. S. H. Pujar', 'CSE', 'TCE Gadag', '100%', '92'],
          ['Prof. M. R. Patil', 'ECE', 'TCE Gadag', '95%', '88'],
          ['Dr. V. K. Joshi', 'EEE', 'GIT Belagavi', '100%', '96']
        ]
      }
    },
    {
      id: 'evt-3',
      title: 'Student Research Hackathon & Innovation Expo 2025',
      eventType: 'Symposium / Hackathon',
      resourcePerson: 'Industry Mentors from KTECH & StartUp Karnataka',
      date: '2025-04-05',
      participants: '45 Student Teams (180 Students)',
      fileType: 'image',
      fileName: 'Innovation_Expo_Winners.jpg',
      fileUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80'
    }
  ]
};

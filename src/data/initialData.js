export const INITIAL_TAB_DATA = {
  mov: [
    {
      id: 'mov-1',
      title: 'MOu with Tata Consultancy Services (TCS)',
      partner: 'Tata Consultancy Services, Bengaluru',
      category: 'Industry Partnership',
      scope: 'National',
      date: '2025-11-15',
      summary: 'Joint research in Artificial Intelligence, Cloud Infrastructure and Machine Learning student internships.',
      fileType: 'pdf',
      fileName: 'TCS_MOu_Agreement_2025.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'mov-2',
      title: 'International Research MOu with University of Malaya',
      partner: 'University of Malaya, Kuala Lumpur',
      category: 'Academic Research Center',
      scope: 'International',
      date: '2025-08-10',
      summary: 'International faculty exchange, joint research publications, and joint PhD co-supervision.',
      fileType: 'excel',
      fileName: 'International_MOu_Summary.xlsx',
      excelData: {
        headers: ['Sl No', 'MOu Parameter', 'Scope', 'Inspecting Authority', 'Remarks'],
        rows: [
          ['1', 'Faculty Exchange & Joint Research', 'International', 'University Senate', 'Active Collaboration'],
          ['2', 'Joint PhD Co-Supervision', 'International', 'VTU Belagavi', 'Approved'],
          ['3', 'International Seminars & Keynotes', 'International', 'Research Council', 'Bi-Annual Event']
        ]
      }
    },
    {
      id: 'mov-3',
      title: 'MOu with Bosch Rexroth India Ltd',
      partner: 'Bosch Rexroth Automation, Bengaluru',
      category: 'Industrial Automation',
      scope: 'National',
      date: '2024-03-20',
      summary: 'Establishment of Center of Excellence in Hydraulics, Pneumatics, and Industrial Robotics.',
      fileType: 'image',
      fileName: 'Bosch_MOu_Ceremony.jpg',
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

  pub_faculty: [
    {
      id: 'pf-1',
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
      id: 'pf-2',
      title: 'Experimental Investigation of Natural Fiber Composites for Automotive Structural Components',
      authors: 'Dr. C. V. Adake, Dr. V. R. Hebbal',
      type: 'Faculty',
      journal: 'Journal of Composite Materials & Engineering',
      year: '2024',
      indexing: 'Web of Science (WoS)',
      fileType: 'excel',
      fileName: 'Faculty_Publication_Metrics_2024.xlsx',
      excelData: {
        headers: ['Paper ID', 'Journal Title', 'Volume / Issue', 'Citations', 'Impact Factor'],
        rows: [
          ['PUB-2024-01', 'Journal of Composite Materials', 'Vol. 18, Issue 4', '14', '3.6'],
          ['PUB-2025-01', 'IEEE Trans Biomedical Engg', 'Vol. 72, Issue 1', '8', '4.8']
        ]
      }
    }
  ],

  pub_student: [
    {
      id: 'ps-1',
      title: 'IoT-Based Smart Water Quality Monitoring System for Rural Water Distribution Networks',
      authors: 'Anand Kumar (Student), Prof. S. H. Manjunath (Guide)',
      type: 'Student',
      journal: 'International Journal of Environmental Technology and Management',
      year: '2025',
      indexing: 'Scopus Indexed',
      fileType: 'pdf',
      fileName: 'Student_Pub_WaterQuality_2025.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'ps-2',
      title: 'AI Based Traffic Density Monitoring and Smart Signal Control System',
      authors: 'Priya Sharma, Rohan Mehta (Final Year B.Tech)',
      type: 'Student',
      journal: 'International Journal of Student Research in Engineering',
      year: '2025',
      indexing: 'UGC CARE / Peer Reviewed',
      fileType: 'pdf',
      fileName: 'Student_AI_Traffic_Paper.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],

  publications: [],

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
    }
  ],

  iic_activities: [
    {
      id: 'iic-1',
      title: 'MoE Institution Innovation Council (IIC 6.0) Innovation & Entrepreneurship Workshop',
      eventType: 'IIC Workshop',
      resourcePerson: 'Ministry of Education Innovation Cell (MIC) Officers',
      date: '2025-11-08',
      participants: '150 Students & Faculty Innovation Ambassadors',
      fileType: 'pdf',
      fileName: 'IIC_Innovation_Workshop_Report.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'iic-2',
      title: 'IIC Student Prototype Competition & Hackathon Winners List',
      eventType: 'Hackathon',
      resourcePerson: 'KTECH & Startup Karnataka Mentors',
      date: '2025-09-25',
      participants: '30 Teams',
      fileType: 'excel',
      fileName: 'IIC_Prototype_Competition_Results.xlsx',
      excelData: {
        headers: ['Team ID', 'Project Name', 'Department', 'Prize Amount', 'Status'],
        rows: [
          ['IIC-01', 'Smart Agriculture Robot', 'ECE', '₹25,000', '1st Prize - Incubation Selected'],
          ['IIC-02', 'Eco Brick Interlocking Paver', 'Civil', '₹15,000', '2nd Prize - Patent Filed'],
          ['IIC-03', 'AI Smart Helmet', 'CSE', '₹10,000', '3rd Prize - Prototype Stage']
        ]
      }
    },
    {
      id: 'iic-3',
      title: 'National Innovation and Start-up Policy (NISP) Launch Event',
      eventType: 'NISP Session',
      resourcePerson: 'Regional StartUp Ecosystem Directors',
      date: '2024-12-10',
      participants: '200 Attendees',
      fileType: 'image',
      fileName: 'IIC_NISP_Launch_Photo.jpg',
      fileUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80'
    }
  ],

  research_areas: [
    {
      id: 'ra-1',
      title: 'Advanced Manufacturing & Automation Research Group',
      partner: 'Mechanical & Automation Department',
      category: 'Engineering',
      date: '2025-05-10',
      summary: 'Focuses on Industry 4.0, smart CNC machining, digital twin, and additive manufacturing.',
      fileType: 'pdf',
      fileName: 'Advanced_Manufacturing_Research_Roadmap.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],

  researchers: [
    {
      id: 'res-1',
      title: 'Faculty Research Profiles & Publication Index 2026',
      partner: 'TCE Gadag Research Council',
      category: 'Directory',
      date: '2026-01-10',
      summary: 'Complete directory of PhD faculty researchers, ORCID IDs, h-index, and ongoing projects.',
      fileType: 'excel',
      fileName: 'Faculty_Researchers_Directory.xlsx',
      excelData: {
        headers: ['Faculty Name', 'Designation', 'Department', 'Specialization', 'h-index', 'Contact Email'],
        rows: [
          ['Dr. S. B. Kulkarni', 'Professor & Dean R&D', 'ECE', 'AI & Wireless Sensor Networks', '14', 'sbkulkarni@tce.ac.in'],
          ['Dr. V. R. Hebbal', 'Professor & Head', 'Mechanical', 'Thermal Storage & Composites', '12', 'vrhebbal@tce.ac.in']
        ]
      }
    }
  ],

  research_support: [
    {
      id: 'sup-1',
      title: 'Research Methodology & Ethics Guidelines Document',
      partner: 'Institutional Ethics Committee',
      category: 'Methodology',
      date: '2025-06-01',
      summary: 'Guidelines for literature review, experimental design, research ethics, and plagiarism policy.',
      fileType: 'pdf',
      fileName: 'Research_Methodology_Ethics_Manual.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],

  real_problems: [
    {
      id: 'rp-1',
      title: 'IoT Agritech Soil Health & Crop Disease Early Detection System',
      partner: 'District Agriculture Department & Local Farmers',
      category: 'Applied Tech',
      date: '2025-11-20',
      summary: 'Deployment of low-cost soil sensors and AI crop disease detection in Gadag district agricultural fields.',
      fileType: 'pdf',
      fileName: 'AgriTech_Field_Deployment_Report.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],

  resources: [
    {
      id: 'res-policy-1',
      title: 'Institutional Research & Development Policy Manual 2026',
      partner: 'TCE Management & Governing Council',
      category: 'Policy',
      date: '2026-01-01',
      summary: 'Comprehensive policy governing research incentives, seed funding rules, consultancy division, and conference support.',
      fileType: 'pdf',
      fileName: 'TCE_RD_Policy_Manual_2026.pdf',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ]
};

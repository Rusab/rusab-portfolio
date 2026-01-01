export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  citations: number;
  link?: string;
  pdf?: string;
  abstract?: string;
  quartile?: string;
  sjr?: string;
  image?: string;
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Diabetic foot ulcer detection: combining deep learning models for improved localization",
    authors: ["R Sarmun", "MEH Chowdhury", "M Murugappan", "A Aqel", "M Ezzuddin", "et al."],
    journal: "Cognitive Computation",
    year: 2024,
    citations: 43,
    quartile: "Q1",
    sjr: "0.841",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en",
  },
  {
    id: "2",
    title: "The utility of a deep learning-based approach in Her-2/neu assessment in breast cancer",
    authors: ["S Kabir", "S Vranic", "RM Al Saady", "MS Khan", "R Sarmun", "A Alqahtani", "et al."],
    journal: "Expert Systems with Applications",
    year: 2024,
    citations: 43,
    quartile: "Q1",
    sjr: "1.854",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en",
  },
  {
    id: "3",
    title: "Deep learning in computed tomography pulmonary angiography imaging: A dual-pronged approach for pulmonary embolism detection",
    authors: ["F Bushra", "MEH Chowdhury", "R Sarmun", "S Kabir", "M Said", "SB Zoghoul", "et al."],
    journal: "Expert Systems with Applications",
    year: 2024,
    citations: 18,
    quartile: "Q1",
    sjr: "1.854",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "4",
    title: "Self-DenseMobileNet: A Robust Framework for Lung Nodule Classification using Self-ONN and Stacking-based Meta-Classifier",
    authors: ["MS Rahman", "MEH Chowdhury", "HR Rahman", "MU Ahmed", "MA Kabir", "R Sarmun", "et al."],
    journal: "arXiv preprint arXiv:2410.12584",
    year: 2024,
    citations: 14,
    quartile: "Q1",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "5",
    title: "Classification and segmentation of kidney MRI images for chronic kidney disease detection",
    authors: ["MSB Islam", "MSI Sumon", "R Sarmun", "EH Bhuiyan", "MEH Chowdhury"],
    journal: "Computers and Electrical Engineering",
    year: 2024,
    citations: 13,
    quartile: "Q1",
    sjr: "1.053",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "6",
    title: "Deep learning-based real-time detection and classification of tomato ripeness stages using YOLOv8 on raspberry Pi",
    authors: ["M Nahiduzzaman", "R Sarmun", "A Khandakar", "MAA Faisal", "MS Islam", "et al."],
    journal: "Engineering Research Express",
    year: 2025,
    citations: 11,
    quartile: "Q2",
    sjr: "0.351",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "7",
    title: "Deep learning-driven segmentation of ischemic stroke lesions using multi-channel MRI",
    authors: ["A Rahman", "MEH Chowdhury", "MSI Wadud", "R Sarmun", "A Mushtak", "et al."],
    journal: "Biomedical Signal Processing and Control",
    year: 2025,
    citations: 10,
    quartile: "Q1",
    sjr: "1.229",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "8",
    title: "Machine-agnostic automated lumbar MRI segmentation using a cascaded model based on generative neurons",
    authors: ["P Basak", "R Sarmun", "S Kabir", "I Al-Hashimi", "EH Bhuiyan", "A Hasan", "et al."],
    journal: "Expert Systems with Applications",
    year: 2025,
    citations: 7,
    quartile: "Q1",
    sjr: "1.854",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "9",
    title: "Summary of the silent speech decoding challenge using eeg data for arabic inner speech recognition",
    authors: ["MEH Chowdhury", "R Sarmun", "D Bushnaq", "M Chabbouh", "R Aljindi", "et al."],
    journal: "International Journal of Activity and Behavior Computing",
    year: 2025,
    citations: 5,
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "10",
    title: "Automating Prostate Cancer Grading: A Novel Deep Learning Framework for Automatic Prostate Cancer Grade Assessment using Classification and Segmentation",
    authors: ["S Kabir", "R Sarmun", "RM Al Saady", "S Vranic", "M Murugappan", "et al."],
    journal: "Journal of Imaging Informatics in Medicine",
    year: 2025,
    citations: 5,
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "11",
    title: "Enhanced coronary artery segmentation and stenosis detection: Leveraging novel deep learning techniques",
    authors: ["AJM Abedin", "R Sarmun", "A Mushtak", "MSBM Ali", "A Hasan", "PN Suganthan", "et al."],
    journal: "Biomedical Signal Processing and Control",
    year: 2025,
    citations: 4,
    quartile: "Q1",
    sjr: "1.229",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "12",
    title: "A novel deep learning framework for automatic scoring of PD-L1 expression in non-small cell lung cancer",
    authors: ["S Kabir", "MEH Chowdhury", "R Sarmun", "S Vranić", "RM Al Saady", "I Rose", "et al."],
    journal: "The Association of Basic Medical Sciences",
    year: 2025,
    citations: 3,
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "13",
    title: "Enhancing intima-media complex segmentation with a multi-stage feature fusion-based novel deep learning framework",
    authors: ["R Sarmun", "S Kabir", "J Prithula", "A Alqahtani", "SB Zoghoul", "I Al-Hashimi", "et al."],
    journal: "Engineering Applications of Artificial Intelligence",
    year: 2024,
    citations: 3,
    quartile: "Q1",
    sjr: "1.652",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "14",
    title: "Automated detection of posterior urethral valves in voiding cystourethrography images: A novel AI-Based pipeline for enhanced diagnosis and classification",
    authors: ["S Kabir", "R Sarmun", "E Ramírez-Velázquez", "A Takvani", "M Ali", "et al."],
    journal: "Computers in Biology and Medicine",
    year: 2025,
    citations: 2,
    quartile: "Q1",
    sjr: "1.447",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "15",
    title: "An Anatomy Aware Hybrid Deep Learning Framework for Lung Cancer Tumor Stage Classification",
    authors: ["SK Chowdhury", "R Sarmun", "MEH Chowdhury", "SB Zoghoul", "I Al-Hashimi", "et al."],
    journal: "arXiv preprint arXiv:2511.19367",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "16",
    title: "CASR-Net: An Image Processing-focused Deep Learning-based Coronary Artery Segmentation and Refinement Network for X-ray Coronary Angiogram",
    authors: ["A Hassan", "R Sarmun", "MEH Chowdhury", "M Murugappan", "MSA Hossain", "et al."],
    journal: "arXiv preprint arXiv:2510.27315",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "17",
    title: "SER inspired deep learning approach to detect cardiac arrhythmias in electrocardiogram signals using Temporal Convolutional Network and graph neural network",
    authors: ["S Yaser", "MEH Chowdhury", "R Sarmun"],
    journal: "Computers in Biology and Medicine",
    year: 2025,
    citations: 0,
    quartile: "Q1",
    sjr: "1.447",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "18",
    title: "Automated Landfill Detection Using Deep Learning: A Comparative Study of Lightweight and Custom Architectures with the AerialWaste Dataset",
    authors: ["N Sharmily", "R Sarmun", "MEH Chowdhury", "MH Hussain", "SBA Kashem", "et al."],
    journal: "arXiv preprint arXiv:2508.18315",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "19",
    title: "182P: An innovative deep learning method for automated PD-L1 expression assessment in non-small cell lung cancer",
    authors: ["S Vranic", "S Kabir", "M Chowdhury", "R Sarmun", "R Mohmood", "I Rose", "et al."],
    journal: "Journal of Thoracic Oncology",
    year: 2025,
    citations: 0,
    quartile: "Q1",
    sjr: "7.948",
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  },
  {
    id: "20",
    title: "A Novel Detection-Guided Approach for Multimodal Brain Tumor Segmentation",
    authors: ["F Bushra", "R Sarmun", "MEH Chowdhury", "G Al-Rumaihi", "I Al-Hashimi", "et al."],
    journal: "Available at SSRN 5251341",
    year: 2025,
    citations: 0,
    link: "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en"
  }
];

// Calculate total citations
export const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);

// Get publication count by year
export const getPublicationsByYear = () => {
  const byYear: { [key: number]: number } = {};
  publications.forEach(pub => {
    byYear[pub.year] = (byYear[pub.year] || 0) + 1;
  });
  return byYear;
};

// Get publications by quartile
export const getPublicationsByQuartile = () => {
  const byQuartile: { [key: string]: number } = {};
  publications.forEach(pub => {
    if (pub.quartile) {
      byQuartile[pub.quartile] = (byQuartile[pub.quartile] || 0) + 1;
    }
  });
  return byQuartile;
};

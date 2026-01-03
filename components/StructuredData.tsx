export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rusab Sarmun",
    "url": "https://rusabsarmun.com",
    "image": "https://rusabsarmun.com/Rusab_Image.png",
    "jobTitle": "Machine Learning Researcher",
    "description": "Machine Learning Researcher specializing in medical image analysis, deep learning, and AI-driven healthcare solutions",
    "email": "rusabsarmun@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/rusab-sarmun",
      "https://github.com/rusabsarmun",
      "https://scholar.google.com/citations?user=qXl9BcAAAAAJ&hl=en",
      "https://www.researchgate.net/profile/Rusab-Sarmun"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "University of Dhaka"
    },
    "knowsAbout": [
      "Machine Learning",
      "Deep Learning",
      "Medical Image Analysis",
      "Computer Vision",
      "Healthcare AI",
      "TensorFlow",
      "PyTorch",
      "Neural Networks",
      "Robotics"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Machine Learning Researcher",
      "occupationLocation": {
        "@type": "Country",
        "name": "Bangladesh"
      },
      "skills": [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "Medical Imaging",
        "Deep Learning",
        "Computer Vision"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export const projects = [
  {
    title: "Sahayog",
    category: "Collaboration",
    description:
      "Developed a MERN-based crowdfunding platform enabling users to create, manage, and fund campaigns with JWT authentication, Cloudinary media storage, and automated email invoicing.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/Sahil9309/sahayog", // TODO: verify/update
    liveUrl: null, // TODO: add if deployed
  },


  {
    title: "Hybrid RAG Assistant",
    category: "Personal",
    description:
      "Built a self-correcting Hybrid RAG pipeline combining FAISS vector search and BM25 keyword retrieval with LangGraph-based query rewriting to improve retrieval accuracy across PDFs, DOCX, CSVs, and images.",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "FAISS",
      "BM25",
    ],
    githubUrl: "https://github.com/rutujdhawale/rag", // TODO: verify/update
    liveUrl: null, // TODO: add if deployed
  },
  {
    title: "Road Damage Detection",
    category: "Hackathon",
    description:
      "Developed a YOLOv8-based road damage detection system to identify and classify potholes and multiple crack types from road images, achieving robust performance using the RDD2022 dataset.",
    technologies: [
      "Python",
      "YOLOv8",
      "PyTorch",
    ],
    githubUrl: "https://github.com/rutujdhawale/RoadDamageDetection",
    liveUrl: null,
  },
  {
    title: "90+",
    category: "Personal",
    description:
      "A modern, responsive web application for English Premier League fans",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
    ],
    // githubUrl: "https://github.com/rutujdhawale/90plus",
    liveUrl: "https://90-plus-two.vercel.app/",
  }
];

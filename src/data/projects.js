export const projects = [
  {
    title: "CourseGPT",
    category: "Personal",
    description:
      "A platform using Gemini 2.0 to auto-generate modular courses with lessons, quizzes, and labs from user prompts, enabling single-click curriculum generation.",
    technologies: ["Next.js", "TypeScript", "Hono", "MongoDB", "Gemini"],
  },
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
  },
  // {
  //   title: "Educative.AI",
  //   category: "Collaboration",
  //   description:
  //     "A student-aiding application integrating an OCR model and 10+ fine-tuned open-source LLMs, with a dashboard featuring note management, OCR processing, and LLM-driven Q&A.",
  //   technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
  // },
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
      "OCR"
    ],
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
  }
];

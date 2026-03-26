import { jsPDF } from "jspdf";
import "jspdf-autotable";

// Helper to strip emojis for jsPDF compatibility
const cleanText = (text) => {
  if (!text) return "";
  // Removes common emojis and special symbols that helvetica doesn't support
  return text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, "").trim();
};

export const generateSyllabusPDF = (exam, classLevel, data) => {
  const doc = new jsPDF();
  const className = classLevel === "class11" ? "Class 11" : "Class 12";
  const titleExam = exam === "jee" ? "JEE Main & Advanced" : "NEET (UG)";
  
  // Header
  doc.setFillColor(12, 50, 118); // Primary color
  doc.rect(0, 0, 210, 40, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("ARISING TUTORIALS", 105, 20, { align: "center" });
  
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text(`${titleExam} - ${className} Syllabus`, 105, 30, { align: "center" });
  
  let currentY = 50;
  
  // Subject Sections
  const subjects = exam === "jee" ? [
    { name: "PHYSICS", key: "physics", color: [41, 128, 185] },
    { name: "CHEMISTRY", key: "chemistry", color: [39, 174, 96] },
    { name: "MATHEMATICS", key: "mathematics", color: [142, 68, 173] }
  ] : [
    { name: "PHYSICS", key: "physics", color: [41, 128, 185] },
    { name: "CHEMISTRY", key: "chemistry", color: [39, 174, 96] },
    { name: "BIOLOGY", key: "biology", color: [231, 76, 60] }
  ];
  
  subjects.forEach((subject) => {
    const subjectData = data[subject.key];
    if (!subjectData) return;
    
    // Check if we need a new page
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }
    
    // Subject Heading
    doc.setFillColor(...subject.color);
    doc.rect(15, currentY, 180, 10, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(subject.name, 20, currentY + 7);
    
    currentY += 15;
    
    // Topics Table or List
    subjectData.forEach((item, index) => {
      const title = cleanText(item.title || item.category);
      const topics = cleanText((item.topics || []).join(", "));
      
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      
      // Check for page overflow before writing
      const textHeight = doc.getTextDimensions(topics, { maxWidth: 160 }).h;
      if (currentY + textHeight + 10 > 280) {
        doc.addPage();
        currentY = 20;
      }
      
      doc.text(`${index + 1}. ${title}`, 20, currentY);
      currentY += 5;
      
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);
      
      if (topics) {
        const splitTopics = doc.splitTextToSize(topics, 160);
        doc.text(splitTopics, 25, currentY);
        currentY += (splitTopics.length * 5) + 5;
      } else {
        currentY += 5;
      }
    });
    
    currentY += 10;
  });
  
  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text("Arising Tutorials - Near Dahisar Station, Mumbai | Contact: +91 86920 53788", 105, 290, { align: "center" });
    doc.text(`Page ${i} of ${pageCount}`, 190, 290, { align: "right" });
  }
  
  doc.save(`Arising_Tutorials_${exam.toUpperCase()}_Syllabus_${className.replace(" ", "_")}.pdf`);
};

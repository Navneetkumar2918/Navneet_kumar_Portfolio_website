import React, { useEffect } from 'react';
import { X, Download, Mail, Phone, MapPin, Award, Code, Briefcase } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
  editMode: boolean;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose, editMode }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume/Navneet_Kumar_Resume.pdf';
    link.download = 'Navneet_Kumar_Resume.pdf';
    link.click();
  };

  // Editable props
  const editableProps = editMode
    ? { contentEditable: true, suppressContentEditableWarning: true, style: { cursor: 'text' } }
    : {};

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-scaleIn">

        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white" {...editableProps}>
            Resume - Navneet Kumar
          </h2>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownload}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-8 max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4" {...editableProps}>
              NAVNEET KUMAR
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-6" {...editableProps}>
              Full Stack Developer & AI Designer
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center" {...editableProps}>
                <Mail className="w-4 h-4 mr-2" />
                navneetkumar18112002@gmail.com
              </div>
              <div className="flex items-center" {...editableProps}>
                <Phone className="w-4 h-4 mr-2" />
                +91 9120879134
              </div>
              <div className="flex items-center" {...editableProps}>
                <MapPin className="w-4 h-4 mr-2" />
                Prayagraj, Uttar Pradesh, India
              </div>
            </div>
          </div>

          {/* Education Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center" {...editableProps}>
              <Award className="w-6 h-6 mr-3 text-blue-600" />
              Education
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6" {...editableProps}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  National Institute of Technology Silchar, Assam
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Currently Pursuing | Expected: 2025
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6" {...editableProps}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Higher Secondary (12th Grade)
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Kendriya Vidyalaya New Cantt, Prayagraj, Uttar Pradesh
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Completed | 2021</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6" {...editableProps}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Secondary (10th Grade)
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">
                  Kendriya Vidyalaya New Cantt, Prayagraj, Uttar Pradesh
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Completed | 2019</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center" {...editableProps}>
              <Code className="w-6 h-6 mr-3 text-blue-600" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div {...editableProps}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Java'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'HTML5', 'CSS3'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div {...editableProps}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['MongoDB', 'MySQL', 'Git'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Design & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Figma', 'TensorFlow', 'OpenCV'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center" {...editableProps}>
              <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
              Key Projects
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6" {...editableProps}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Face Recognition Attendance System</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Automated attendance management system using face recognition technology. Captures student faces, identifies individuals in real-time, and marks attendance.</p>
                <div className="flex flex-wrap gap-2">{['Python', 'OpenCV', 'Tkinter', 'Face recognition library', 'MySQL'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">{tech}</span>
                ))}</div>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6" {...editableProps}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Voice-based-Image-Descriptor</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Android app that captures images, generates descriptions, translates them into Indian languages, and reads them aloud for visually impaired users.</p>
                <div className="flex flex-wrap gap-2">{['Python', 'TensorFlow', 'NLP', 'PyTorch','OpenCV','Machine Learning'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">{tech}</span>
                ))}</div>
              </div>
            </div>
          </section>

          {/* Achievements & Certifications */}
          <section className="mb-10" {...editableProps}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Achievements & Certifications</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Web Development Certification</strong> - Completed advanced web development course. <br />
                  <em>Skills learned:</em> HTML, CSS, JavaScript, React, Responsive Design.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Machine Learning & AI</strong> - Learned ML fundamentals and applications. <br />
                  <em>Skills learned:</em> Supervised & Unsupervised Learning, Regression, Classification, Neural Networks.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Coding Competition</strong> - Participated in different coding competitions at college-level & other programming contests. <br />
                  <em>Skills demonstrated:</em> Problem-solving, algorithm design, programming skills.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Introduction to Data Science</strong> - Successfully completed the course in the <strong>Data Science & Business Analytics</strong> category on Simplilearn SkillUp. <br />
                  <em>Skills learned:</em> Data analysis, statistics, business analytics, data visualization.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Digital Marketing & Advertising</strong> - Completed Google Ads for Beginners course on Coursera. <br />
                  <em>Skills learned:</em> Google Ads campaigns, SEO basics, online advertising strategies.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

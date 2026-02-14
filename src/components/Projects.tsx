import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Smartphone, Globe, Brain, Layers } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ProjectsProps {
  editMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ editMode }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const categories = [
    { id: 'All', label: 'All Projects', icon: Layers },
    { id: 'Web', label: 'Web Development', icon: Globe },
    { id: 'App', label: 'App Development', icon: Smartphone },
    { id: 'AI', label: 'AI Projects', icon: Brain }
    { id: 'Game', label: 'Games', icon: Layers }
  ];

  const [sectionTitle, setSectionTitle] = useState("My Projects");
  const [sectionSubtitle, setSectionSubtitle] = useState(
    "Explore my portfolio of innovative projects spanning web development, mobile apps, and AI solutions."
  );

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Bank Management System",
      description: "Object-oriented banking system with account management, transaction processing, and customer data handling using C++ OOP concepts.",
      category: "Web",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg",
      technologies: ["C++", "OOP", "File Handling"],
      liveUrl: "#",
      githubUrl: 'https://github.com/Navneetkumar2918/Simple-Bank-Management-System',
    },
    {
      id: 2,
      title: "Doctor Connect",
      description: "Healthcare management system connecting patients with doctors, featuring appointment scheduling and medical record management using C++ OOP principles.",
      category: "Web",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      technologies: ["C++", "OOP", "Data Structures"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Face Recognition Attendance System",
      description: "Automated attendance using face recognition technology for real-time student identification.",
      category: "AI",
      image: "https://images.pexels.com/photos/1181333/pexels-photo-1181333.jpeg",
      technologies: ["Python", "OpenCV", "Face Recognition"],
      liveUrl: "#",
      githubUrl: 'https://github.com/Navneetkumar2918/Face_Recognition_System',
    },
    {
      id: 4,
      title: "Voice-Based Image Descriptor for Visually Impaired Users in Indian Language",
      description: "AI-powered system that describes images in Indian languages using vision models, text-to-speech, and translation for accessibility.",
      category: "AI",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      technologies: ["Python", "FastAPI", "PyTorch", "BLIP", "YOLOv8", "OpenCV"],
      liveUrl: "#",
      githubUrl: 'https://github.com/Navneetkumar2918/Voice_Based_Image_Descriptor_in_Indian_Language',
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      category: "App",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      technologies: ["Flutter", "APIs", "Maps SDK"],
      liveUrl: 'https://weatherforcast-navneet.netlify.app',
      githubUrl: 'https://github.com/Navneetkumar2918/Weather_Forecast_App',
    },
    {
      id: 6,
      title: 'Posts Explorer',
      description:
        'A React Native (Expo) application that fetches posts from a public API, supports real-time search by title, and saves user search history using AsyncStorage with proper loading, empty state, and error handling.',
      category: 'App',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      technologies: ["React Native","Expo","JavaScript","AsyncStorage","REST API",],
      liveUrl: 'https://postsexplorer-navneet.netlify.app',

      githubUrl: 'https://github.com/Navneetkumar2918/React-Native-Posts-App',
    },
    {
      id: 7,
      title: 'TicTacToe Game',
      description:
       'A two-player Tic Tac Toe game developed using C++, HTML, CSS, and Java. It features turn-based gameplay, input validation, win/draw detection logic, and a clean structured design for smooth user experience.',
      category: 'Game',
      image: 'https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg',
      technologies: ["HTML","CSS","Java","Object-Oriented Programming"],
      liveUrl: 'https://your-tictactoe-live-link.netlify.app',

      githubUrl: 'https://github.com/Navneetkumar2918/TicTacToe_Game',
    },
    {
      id: 8,
      title: 'Breast Cancer Classification',
      description:
        'A Machine Learning based Breast Cancer Classification web app built using Python and Streamlit. It predicts whether a tumor is Malignant or Benign using Logistic Regression, provides real-time results, and allows users to download a professional PDF medical report.',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg',
      technologies: ["Python", "Streamlit", "Machine Learning", "Logistic Regression", "Scikit-learn"],
      liveUrl: 'https://your-streamlit-live-link.streamlit.app',
      githubUrl: 'https://github.com/Navneetkumar2918/Breast-cancer-classification'
    },
  ]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 inline-block"
              contentEditable={editMode}
              suppressContentEditableWarning
              onFocus={() => setFocusedField("title")}
              onBlur={(e) => {
                setFocusedField(null);
                setSectionTitle(e.target.textContent || "My Projects");
              }}
              style={{
                border: focusedField === "title" ? "2px solid black" : "2px solid transparent",
                borderRadius: "6px",
                padding: "2px 6px",
                transition: "border 0.2s ease",
              }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {sectionTitle}
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>

            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed inline-block"
              contentEditable={editMode}
              suppressContentEditableWarning
              onFocus={() => setFocusedField("subtitle")}
              onBlur={(e) => {
                setFocusedField(null);
                setSectionSubtitle(e.target.textContent || "");
              }}
              style={{
                border: focusedField === "subtitle" ? "2px solid black" : "2px solid transparent",
                borderRadius: "6px",
                padding: "2px 6px",
                transition: "border 0.2s ease",
              }}
            >
              {sectionSubtitle}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={(e) => {
                  if (!editMode) setActiveFilter(category.id);
                  else e.preventDefault();
                }}
                contentEditable={editMode}
                suppressContentEditableWarning
                className={`group flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                  activeFilter === category.id && !editMode
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                }`}
                style={{ transitionDelay: `${index * 100}ms`, cursor: editMode ? 'text' : 'pointer' }}
              >
                <category.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">

                      {/* Live Button */}
                      {project.title !== "Bank Management System" && project.title !== "Doctor Connect" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            editMode
                              ? 'bg-blue-600 text-white cursor-not-allowed opacity-60 pointer-events-none'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" /> Live
                        </a>
                      )}

                      {/* Code Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          editMode
                            ? 'bg-gray-800 text-white cursor-not-allowed opacity-60 pointer-events-none'
                            : 'bg-gray-800 text-white hover:bg-gray-900'
                        }`}
                      >
                        <Github className="w-4 h-4 mr-1" /> Code
                      </a>

                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
                      editMode ? 'cursor-text' : ''
                    }`}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onFocus={() => setFocusedField(`title-${index}`)}
                    onBlur={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].title = e.target.textContent || '';
                      setProjects(newProjects);
                      setFocusedField(null);
                    }}
                    style={{
                      border: focusedField === `title-${index}` ? '2px solid black' : '2px solid transparent',
                      borderRadius: '6px',
                      padding: '2px 4px',
                      display: 'inline-block',
                      transition: 'border 0.2s ease',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 ${
                      editMode ? 'cursor-text' : ''
                    }`}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onFocus={() => setFocusedField(`desc-${index}`)}
                    onBlur={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].description = e.target.textContent || '';
                      setProjects(newProjects);
                      setFocusedField(null);
                    }}
                    style={{
                      border: focusedField === `desc-${index}` ? '2px solid black' : '2px solid transparent',
                      borderRadius: '6px',
                      padding: '2px 4px',
                      display: 'inline-block',
                      transition: 'border 0.2s ease',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found for the selected category.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Projects;










// import React, { useState } from 'react';
// import { ExternalLink, Github, Filter, Smartphone, Globe, Brain, Layers } from 'lucide-react';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// interface ProjectsProps {
//   editMode: boolean;
// }

// const Projects: React.FC<ProjectsProps> = ({ editMode }) => {
//   const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [focusedField, setFocusedField] = useState<string | null>(null);

//   const categories = [
//     { id: 'All', label: 'All Projects', icon: Layers },
//     { id: 'Web', label: 'Web Development', icon: Globe },
//     { id: 'App', label: 'App Development', icon: Smartphone },
//     { id: 'AI', label: 'AI Projects', icon: Brain }
//   ];

//   const [sectionTitle, setSectionTitle] = useState("My Projects");
//   const [sectionSubtitle, setSectionSubtitle] = useState(
//     "Explore my portfolio of innovative projects spanning web development, mobile apps, and AI solutions."
//   );

//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       title: "Bank Management System",
//       description: "Object-oriented banking system with account management, transaction processing, and customer data handling using C++ OOP concepts.",
//       category: "Web",
//       image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg",
//       technologies: ["C++", "OOP", "File Handling"],
//       liveUrl: "#",
//       githubUrl: 'https://github.com/Navneetkumar2918/Simple-Bank-Management-System',
//     },
//     {
//       id: 2,
//       title: "Doctor Connect",
//       description: "Healthcare management system connecting patients with doctors, featuring appointment scheduling and medical record management using C++ OOP principles.",
//       category: "Web",
//       image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
//       technologies: ["C++", "OOP", "Data Structures"],
//       liveUrl: "#",
//       githubUrl: "#",
//     },
//     {
//       id: 3,
//       title: "Face Recognition Attendance System",
//       description: "Automated attendance using face recognition technology for real-time student identification.",
//       category: "AI",
//       image: "https://images.pexels.com/photos/1181333/pexels-photo-1181333.jpeg",
//       technologies: ["Python", "OpenCV", "Face Recognition"],
//       liveUrl: "#",
//       githubUrl: 'https://github.com/Navneetkumar2918/Face_Recognition_System',
//     },
//     {
//       id: 4,
//       title: "Voice-Based Image Descriptor for Visually Impaired Users in Indian Language",
//       description: "AI-powered system that describes images in Indian languages using vision models, text-to-speech, and translation for accessibility.",
//       category: "AI",
//       image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
//       technologies: ["Python", "FastAPI", "PyTorch", "BLIP", "YOLOv8", "OpenCV"],
//       liveUrl: "#",
//       githubUrl: 'https://github.com/Navneetkumar2918/Voice_Based_Image_Descriptor_in_Indian_Language',
//     },
//     {
//       id: 5,
//       title: "Weather Forecast App",
//       description: "Beautiful weather application with location-based forecasts and interactive maps.",
//       category: "App",
//       image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
//       technologies: ["Flutter", "APIs", "Maps SDK"],
//       liveUrl: "#",
//       githubUrl: 'https://github.com/Navneetkumar2918/Weather_Forecast_App',
//     },
//     {
//       id: 6,
//       title: 'Posts Explorer',
//       description:
//         'A React Native (Expo) application that fetches posts from a public API, supports real-time search by title, and saves user search history using AsyncStorage with proper loading, empty state, and error handling.',
//       category: 'App',
//       image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
//       technologies: [
//         'React Native',
//         'Expo',
//         'JavaScript',
//         'AsyncStorage',
//         'REST API',
//       ],
//       liveUrl: 'https://YOUR-VERCEL-LINK.vercel.app',
//       githubUrl: 'https://github.com/Navneetkumar2918/React-Native-Posts-App',
//     },
//   ]);

//   const filteredProjects = activeFilter === 'All'
//     ? projects
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
//       <div className="container mx-auto px-6">
//         <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

//           {/* Section Title */}
//           <div className="text-center mb-16">
//             <h2
//               className="text-4xl md:text-5xl font-bold mb-6 inline-block"
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onFocus={() => setFocusedField("title")}
//               onBlur={(e) => {
//                 setFocusedField(null);
//                 setSectionTitle(e.target.textContent || "My Projects");
//               }}
//               style={{
//                 border: focusedField === "title" ? "2px solid black" : "2px solid transparent",
//                 borderRadius: "6px",
//                 padding: "2px 6px",
//                 transition: "border 0.2s ease",
//               }}
//             >
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {sectionTitle}
//               </span>
//             </h2>

//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>

//             <p
//               className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed inline-block"
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onFocus={() => setFocusedField("subtitle")}
//               onBlur={(e) => {
//                 setFocusedField(null);
//                 setSectionSubtitle(e.target.textContent || "");
//               }}
//               style={{
//                 border: focusedField === "subtitle" ? "2px solid black" : "2px solid transparent",
//                 borderRadius: "6px",
//                 padding: "2px 6px",
//                 transition: "border 0.2s ease",
//               }}
//             >
//               {sectionSubtitle}
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map((category, index) => (
//               <button
//                 key={category.id}
//                 onClick={(e) => {
//                   if (!editMode) setActiveFilter(category.id);
//                   else e.preventDefault();
//                 }}
//                 contentEditable={editMode}
//                 suppressContentEditableWarning
//                 className={`group flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
//                   activeFilter === category.id && !editMode
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                     : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms`, cursor: editMode ? 'text' : 'pointer' }}
//               >
//                 <category.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
//                 {category.label}
//               </button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden h-48">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      
//                       {/* Show Live button only if project is not Bank Management System or Doctor Connect */}
//                       {project.title !== "Bank Management System" && project.title !== "Doctor Connect" && (
//                         <a
//                           href={project.liveUrl}
//                           className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                             editMode
//                               ? 'bg-blue-600 text-white cursor-not-allowed opacity-60 pointer-events-none'
//                               : 'bg-blue-600 text-white hover:bg-blue-700'
//                           }`}
//                         >
//                           <ExternalLink className="w-4 h-4 mr-1" /> Live
//                         </a>
//                       )}

//                       {/* Always show GitHub button */}
//                       <a
//                         href={project.githubUrl}
//                         className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
//                           editMode
//                             ? 'bg-gray-800 text-white cursor-not-allowed opacity-60 pointer-events-none'
//                             : 'bg-gray-800 text-white hover:bg-gray-900'
//                         }`}
//                       >
//                         <Github className="w-4 h-4 mr-1" /> Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3
//                     className={`text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
//                       editMode ? 'cursor-text' : ''
//                     }`}
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onFocus={() => setFocusedField(`title-${index}`)}
//                     onBlur={(e) => {
//                       const newProjects = [...projects];
//                       newProjects[index].title = e.target.textContent || '';
//                       setProjects(newProjects);
//                       setFocusedField(null);
//                     }}
//                     style={{
//                       border: focusedField === `title-${index}` ? '2px solid black' : '2px solid transparent',
//                       borderRadius: '6px',
//                       padding: '2px 4px',
//                       display: 'inline-block',
//                       transition: 'border 0.2s ease',
//                     }}
//                   >
//                     {project.title}
//                   </h3>

//                   <p
//                     className={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 ${
//                       editMode ? 'cursor-text' : ''
//                     }`}
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onFocus={() => setFocusedField(`desc-${index}`)}
//                     onBlur={(e) => {
//                       const newProjects = [...projects];
//                       newProjects[index].description = e.target.textContent || '';
//                       setProjects(newProjects);
//                       setFocusedField(null);
//                     }}
//                     style={{
//                       border: focusedField === `desc-${index}` ? '2px solid black' : '2px solid transparent',
//                       borderRadius: '6px',
//                       padding: '2px 4px',
//                       display: 'inline-block',
//                       transition: 'border 0.2s ease',
//                     }}
//                   >
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-default"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Empty State */}
//           {filteredProjects.length === 0 && (
//             <div className="text-center py-12">
//               <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Filter className="w-12 h-12 text-gray-400" />
//               </div>
//               <p className="text-gray-500 dark:text-gray-400 text-lg">
//                 No projects found for the selected category.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;









<<<<<<< HEAD
// import React, { useState } from 'react';
// import { Github, Filter, Smartphone, Globe, Brain, Layers } from 'lucide-react';
// import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
=======
import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Smartphone, Globe, Brain, Layers } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
>>>>>>> bd0e48f0d151e8625368b44fc89249aeb4fb66b7

// interface ProjectsProps {
//   editMode: boolean;
// }

// const Projects: React.FC<ProjectsProps> = ({ editMode }) => {
//   const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [focusedField, setFocusedField] = useState<string | null>(null);

<<<<<<< HEAD
//   const categories = [
//     { id: 'All', label: 'All Projects', icon: Layers },
//     { id: 'Web', label: 'Web Development', icon: Globe },
//     { id: 'App', label: 'App Development', icon: Smartphone },
//     { id: 'AI', label: 'AI Projects', icon: Brain },
//   ];

//   const [sectionTitle, setSectionTitle] = useState('My Projects');
//   const [sectionSubtitle, setSectionSubtitle] = useState(
//     'Explore my portfolio of innovative projects spanning web development, mobile apps, and AI solutions.'
//   );

//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       title: 'Bank Management System',
//       description:
//         'Object-oriented banking system with account management, transaction processing, and customer data handling using C++ OOP concepts.',
//       category: 'Web',
//       image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
//       technologies: ['C++', 'OOP', 'File Handling'],
//       githubUrl: 'https://github.com/Navneetkumar2918/Simple-Bank-Management-System',
//     },
//     {
//       id: 2,
//       title: 'Doctor Connect',
//       description:
//         'Healthcare management system connecting patients with doctors, featuring appointment scheduling and medical record management using C++ OOP principles.',
//       category: 'Web',
//       image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
//       technologies: ['C++', 'OOP', 'Data Structures'],
//       githubUrl: 'https://github.com/Navneetkumar2918/Doctor_Connect',
//     },
//     {
//       id: 3,
//       title: 'Face Recognition Attendance System',
//       description:
//         'Automated attendance using face recognition technology for real-time student identification.',
//       category: 'AI',
//       image: 'https://images.pexels.com/photos/1181333/pexels-photo-1181333.jpeg',
//       technologies: ['Python', 'OpenCV', 'Face Recognition'],
//       githubUrl: 'https://github.com/Navneetkumar2918/Face_Recognition_System',
//     },
//     {
//       id: 4,
//       title:
//         'Voice-Based Image Descriptor for Visually Impaired Users in Indian Language',
//       description:
//         'AI-powered system that describes images in Indian languages using vision models, text-to-speech, and translation for accessibility.',
//       category: 'AI',
//       image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
//       technologies: [
//         'Python',
//         'FastAPI',
//         'PyTorch',
//         'BLIP',
//         'YOLOv8',
//         'OpenCV',
//       ],
//       githubUrl: 'https://github.com/Navneetkumar2918/Voice_Based_Image_Descriptor_in_Indian_Language',
//     },
//     {
//       id: 5,
//       title: 'Weather Forecast App',
//       description:
//         'Beautiful weather application with location-based forecasts and interactive maps.',
//       category: 'App',
//       image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
//       technologies: ['Flutter', 'APIs', 'Maps SDK'],
//       githubUrl: 'https://github.com/Navneetkumar2918/Weather_Forecast_App',
//     },
//   ]);

//   const filteredProjects =
//     activeFilter === 'All'
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
//     >
//       <div className="container mx-auto px-6">
//         <div
//           ref={ref}
//           className={`transition-all duration-1000 ${
//             isVisible
//               ? 'opacity-100 translate-y-0'
//               : 'opacity-0 translate-y-8'
//           }`}
//         >
//           {/* Section Title */}
//           <div className="text-center mb-16">
//             <h2
//               className="text-4xl md:text-5xl font-bold mb-6 inline-block"
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onFocus={() => setFocusedField('title')}
//               onBlur={(e) => {
//                 setFocusedField(null);
//                 setSectionTitle(e.target.textContent || 'My Projects');
//               }}
//               style={{
//                 border:
//                   focusedField === 'title'
//                     ? '2px solid black'
//                     : '2px solid transparent',
//                 borderRadius: '6px',
//                 padding: '2px 6px',
//                 transition: 'border 0.2s ease',
//               }}
//             >
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {sectionTitle}
//               </span>
//             </h2>
=======
  const categories = [
    { id: 'All', label: 'All Projects', icon: Layers },
    { id: 'Web', label: 'Web Development', icon: Globe },
    { id: 'App', label: 'App Development', icon: Smartphone },
    { id: 'AI', label: 'AI Projects', icon: Brain }
  ];

  const [sectionTitle, setSectionTitle] = useState("My Projects");
  const [sectionSubtitle, setSectionSubtitle] = useState(
    "Explore my portfolio of innovative projects spanning web development, mobile apps, and AI solutions."
  );

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Bank Management System",
      description: "Object-oriented banking system with account management, transaction processing, and customer data handling using C++ OOP concepts.",
      category: "Web",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg",
      technologies: ["C++", "OOP", "File Handling"],
      liveUrl: "#",
      githubUrl: 'https://github.com/Navneetkumar2918/Simple-Bank-Management-System',
    },
    {
      id: 2,
      title: "Doctor Connect",
      description: "Healthcare management system connecting patients with doctors, featuring appointment scheduling and medical record management using C++ OOP principles.",
      category: "Web",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
      technologies: ["C++", "OOP", "Data Structures"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Face Recognition Attendance System",
      description: "Automated attendance using face recognition technology for real-time student identification.",
      category: "AI",
      image: "https://images.pexels.com/photos/1181333/pexels-photo-1181333.jpeg",
      technologies: ["Python", "OpenCV", "Face Recognition"],
      liveUrl: "#",
      githubUrl: 'https://github.com/Navneetkumar2918/Face_Recognition_System',
    },
    {
      id: 4,
      title: "Voice-Based Image Descriptor for Visually Impaired Users in Indian Language",
      description: "AI-powered system that describes images in Indian languages using vision models, text-to-speech, and translation for accessibility.",
      category: "AI",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      technologies: ["Python", "FastAPI", "PyTorch", "BLIP", "YOLOv8", "OpenCV"],
      liveUrl: "#",
      githubUrl: 'https://github.com/Navneetkumar2918/Voice_Based_Image_Descriptor_in_Indian_Language',
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      category: "App",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      technologies: ["Flutter", "APIs", "Maps SDK"],
      liveUrl: 'https://weatherforcast-navneet.netlify.app',
      githubUrl: 'https://github.com/Navneetkumar2918/Weather_Forecast_App',
    },
    {
      id: 6,
      title: 'Posts Explorer',
      description:
        'A React Native (Expo) application that fetches posts from a public API, supports real-time search by title, and saves user search history using AsyncStorage with proper loading, empty state, and error handling.',
      category: 'App',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      technologies: [
        'React Native',
        'Expo',
        'JavaScript',
        'AsyncStorage',
        'REST API',
      ],
      liveUrl: 'https://postsexplorer-navneet.netlify.app',
      githubUrl: 'https://github.com/Navneetkumar2918/React-Native-Posts-App',
    },
  ]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 inline-block"
              contentEditable={editMode}
              suppressContentEditableWarning
              onFocus={() => setFocusedField("title")}
              onBlur={(e) => {
                setFocusedField(null);
                setSectionTitle(e.target.textContent || "My Projects");
              }}
              style={{
                border: focusedField === "title" ? "2px solid black" : "2px solid transparent",
                borderRadius: "6px",
                padding: "2px 6px",
                transition: "border 0.2s ease",
              }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {sectionTitle}
              </span>
            </h2>
>>>>>>> bd0e48f0d151e8625368b44fc89249aeb4fb66b7

//             <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>

<<<<<<< HEAD
//             <p
//               className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed inline-block"
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onFocus={() => setFocusedField('subtitle')}
//               onBlur={(e) => {
//                 setFocusedField(null);
//                 setSectionSubtitle(e.target.textContent || '');
//               }}
//               style={{
//                 border:
//                   focusedField === 'subtitle'
//                     ? '2px solid black'
//                     : '2px solid transparent',
//                 borderRadius: '6px',
//                 padding: '2px 6px',
//                 transition: 'border 0.2s ease',
//               }}
//             >
//               {sectionSubtitle}
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map((category, index) => (
//               <button
//                 key={category.id}
//                 onClick={(e) => {
//                   if (!editMode) setActiveFilter(category.id);
//                   else e.preventDefault();
//                 }}
//                 contentEditable={editMode}
//                 suppressContentEditableWarning
//                 className={`group flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
//                   activeFilter === category.id && !editMode
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                     : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
//                 }`}
//                 style={{
//                   transitionDelay: `${index * 100}ms`,
//                   cursor: editMode ? 'text' : 'pointer',
//                 }}
//               >
//                 <category.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
//                 {category.label}
//               </button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 ${
//                   isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden h-48">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Dark mode smooth glow overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_25px_rgba(100,100,255,0.3)]"></div>

//                   {/* Code button only */}
//                   <div className="absolute bottom-4 left-4">
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                         editMode
//                           ? 'bg-gray-800 text-white cursor-not-allowed opacity-60 pointer-events-none'
//                           : 'bg-gray-800 text-white hover:bg-gray-900 hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]'
//                       }`}
//                     >
//                       <Github className="w-4 h-4 mr-1" /> Code
//                     </a>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3
//                     className={`text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
//                       editMode ? 'cursor-text' : ''
//                     }`}
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onFocus={() => setFocusedField(`title-${index}`)}
//                     onBlur={(e) => {
//                       const newProjects = [...projects];
//                       newProjects[index].title = e.target.textContent || '';
//                       setProjects(newProjects);
//                       setFocusedField(null);
//                     }}
//                     style={{
//                       border:
//                         focusedField === `title-${index}`
//                           ? '2px solid black'
//                           : '2px solid transparent',
//                       borderRadius: '6px',
//                       padding: '2px 4px',
//                       display: 'inline-block',
//                       transition: 'border 0.2s ease',
//                     }}
//                   >
//                     {project.title}
//                   </h3>

//                   <p
//                     className={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 ${
//                       editMode ? 'cursor-text' : ''
//                     }`}
//                     contentEditable={editMode}
//                     suppressContentEditableWarning
//                     onFocus={() => setFocusedField(`desc-${index}`)}
//                     onBlur={(e) => {
//                       const newProjects = [...projects];
//                       newProjects[index].description =
//                         e.target.textContent || '';
//                       setProjects(newProjects);
//                       setFocusedField(null);
//                     }}
//                     style={{
//                       border:
//                         focusedField === `desc-${index}`
//                           ? '2px solid black'
//                           : '2px solid transparent',
//                       borderRadius: '6px',
//                       padding: '2px 4px',
//                       display: 'inline-block',
//                       transition: 'border 0.2s ease',
//                     }}
//                   >
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 cursor-default"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Empty State */}
//           {filteredProjects.length === 0 && (
//             <div className="text-center py-12">
//               <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Filter className="w-12 h-12 text-gray-400" />
//               </div>
//               <p className="text-gray-500 dark:text-gray-400 text-lg">
//                 No projects found for the selected category.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
=======
            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed inline-block"
              contentEditable={editMode}
              suppressContentEditableWarning
              onFocus={() => setFocusedField("subtitle")}
              onBlur={(e) => {
                setFocusedField(null);
                setSectionSubtitle(e.target.textContent || "");
              }}
              style={{
                border: focusedField === "subtitle" ? "2px solid black" : "2px solid transparent",
                borderRadius: "6px",
                padding: "2px 6px",
                transition: "border 0.2s ease",
              }}
            >
              {sectionSubtitle}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={(e) => {
                  if (!editMode) setActiveFilter(category.id);
                  else e.preventDefault();
                }}
                contentEditable={editMode}
                suppressContentEditableWarning
                className={`group flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                  activeFilter === category.id && !editMode
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                }`}
                style={{ transitionDelay: `${index * 100}ms`, cursor: editMode ? 'text' : 'pointer' }}
              >
                <category.icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">

                      {/* Live Button */}
                      {project.title !== "Bank Management System" && project.title !== "Doctor Connect" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            editMode
                              ? 'bg-blue-600 text-white cursor-not-allowed opacity-60 pointer-events-none'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" /> Live
                        </a>
                      )}

                      {/* Code Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          editMode
                            ? 'bg-gray-800 text-white cursor-not-allowed opacity-60 pointer-events-none'
                            : 'bg-gray-800 text-white hover:bg-gray-900'
                        }`}
                      >
                        <Github className="w-4 h-4 mr-1" /> Code
                      </a>

                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
                      editMode ? 'cursor-text' : ''
                    }`}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onFocus={() => setFocusedField(`title-${index}`)}
                    onBlur={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].title = e.target.textContent || '';
                      setProjects(newProjects);
                      setFocusedField(null);
                    }}
                    style={{
                      border: focusedField === `title-${index}` ? '2px solid black' : '2px solid transparent',
                      borderRadius: '6px',
                      padding: '2px 4px',
                      display: 'inline-block',
                      transition: 'border 0.2s ease',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 ${
                      editMode ? 'cursor-text' : ''
                    }`}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onFocus={() => setFocusedField(`desc-${index}`)}
                    onBlur={(e) => {
                      const newProjects = [...projects];
                      newProjects[index].description = e.target.textContent || '';
                      setProjects(newProjects);
                      setFocusedField(null);
                    }}
                    style={{
                      border: focusedField === `desc-${index}` ? '2px solid black' : '2px solid transparent',
                      borderRadius: '6px',
                      padding: '2px 4px',
                      display: 'inline-block',
                      transition: 'border 0.2s ease',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found for the selected category.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
>>>>>>> bd0e48f0d151e8625368b44fc89249aeb4fb66b7

// export default Projects;

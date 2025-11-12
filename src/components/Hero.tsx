// import React, { useEffect, useState } from 'react';
// import { Github, Linkedin, Twitter, Facebook, Mail, Download, ChevronDown } from 'lucide-react';
// import ResumeModal from './ResumeModal'; // Ensure correct path

// interface HeroProps {
//   editMode: boolean;
// }

// const Hero: React.FC<HeroProps> = ({ editMode }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isResumeOpen, setIsResumeOpen] = useState(false);

//   const [name, setName] = useState("Navneet Kumar");
//   const [title1, setTitle1] = useState("Full Stack Developer");
//   const [title2, setTitle2] = useState("AI Designer");
//   const [email, setEmail] = useState("navneetkumar18112002@gmail.com");
//   const [address, setAddress] = useState("Prayagraj, Uttar Pradesh, India");
//   const [profileImage, setProfileImage] = useState("https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg");

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/Navneetkumar2918', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://www.linkedin.com/in/navneet-kumar-764aa92a8/', label: 'LinkedIn' },
//     { icon: Twitter, href: 'https://x.com/navneet_kumar18', label: 'Twitter' },
//     { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100089755514519', label: 'Facebook' }
//   ];

//   const scrollToAbout = () => {
//     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setProfileImage(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const caretColor = editMode
//     ? document.documentElement.classList.contains('dark')
//       ? '#ffffff'
//       : '#000000'
//     : 'transparent';

//   const editableStyle = {
//     cursor: editMode ? 'text' : 'default',
//     userSelect: 'text' as const,
//     touchAction: 'manipulation' as const,
//     WebkitUserSelect: 'text' as const,
//     MozUserSelect: 'text' as const,
//     caretColor: caretColor,
//     draggable: false
//   };

//   const handleResumeClick = () => {
//     setIsResumeOpen(true);
//   };

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-gray-900/50 dark:via-indigo-900/20 dark:to-purple-900/20" />

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute rounded-full animate-float ${
//               i % 4 === 0
//                 ? 'w-3 h-3 bg-blue-400/40'
//                 : i % 4 === 1
//                 ? 'w-2 h-2 bg-purple-400/30'
//                 : i % 4 === 2
//                 ? 'w-1 h-1 bg-teal-400/50'
//                 : 'w-2 h-2 bg-pink-400/25'
//             } dark:opacity-60`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 8}s`,
//               animationDuration: `${2 + Math.random() * 6}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-6 z-10">
//         <div className="text-center max-w-4xl mx-auto">

//           {/* Profile Photo */}
//           <div className={`flex justify-center mb-4 mt-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//             <div className="relative group">
//               <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl">
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
//                 />
//                 {editMode && (
//                   <label className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm opacity-0 hover:opacity-100 cursor-pointer transition-opacity duration-300">
//                     Change Photo
//                     <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
//                   </label>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Name */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
//             <span
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => setName(e.target.textContent || "")}
//               className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600
//                 ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
//               style={editableStyle}
//             >
//               {name}
//             </span>
//           </h1>

//           {/* Tagline */}
//           <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light">
//             <span
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => setTitle1(e.target.textContent || "")}
//               className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600
//                 ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
//               style={editableStyle}
//             >
//               {title1}
//             </span>
//             <span className="mx-4 text-blue-500 text-4xl">&</span>
//             <span
//               contentEditable={editMode}
//               suppressContentEditableWarning
//               onBlur={(e) => setTitle2(e.target.textContent || "")}
//               className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600
//                 ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
//               style={editableStyle}
//             >
//               {title2}
//             </span>
//           </p>

//           {/* Email */}
//           <div className="flex items-center justify-center mb-2 group p-4 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
//             <Mail className="w-6 h-6 text-blue-600 mr-3" />
//             {editMode ? (
//               <span
//                 contentEditable
//                 suppressContentEditableWarning
//                 onBlur={(e) => setEmail(e.currentTarget.textContent || "")}
//                 className="text-lg font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 outline-black outline-2 outline-offset-2 caret-black px-1"
//                 style={{ cursor: 'text' }}
//               >
//                 {email}
//               </span>
//             ) : (
//               <a
//                 href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
//                 style={{ textDecoration: 'none' }}
//               >
//                 {email}
//               </a>
//             )}
//             <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//           </div>

//           {/* Address */}
//           <p
//             contentEditable={editMode}
//             suppressContentEditableWarning
//             onBlur={(e) => setAddress(e.target.textContent || "")}
//             className={`text-gray-600 dark:text-gray-300 text-center mb-6 inline-block ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
//             style={editableStyle}
//           >
//             {address}
//           </p>

//           {/* Social Icons */}
//           <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
//             <div className="flex justify-center space-x-6">
//               {socialLinks.map((social) => (
//                 <div key={social.label} className="relative group">
//                   {editMode ? (
//                     <div
//                       className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 
//                                  shadow-lg border border-gray-300 dark:border-gray-600 cursor-default pointer-events-none"
//                     >
//                       <social.icon className="w-6 h-6 text-gray-400 dark:text-gray-600" />
//                     </div>
//                   ) : (
//                     <a
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 
//                                  shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-110 
//                                  border border-gray-300 dark:border-gray-600 transition-all duration-300"
//                     >
//                       <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-200 group-hover:scale-125" />
//                     </a>
//                   )}
//                   <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm font-semibold 
//                                    rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 
//                                    transition-all duration-200 pointer-events-none
//                                    bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white shadow-md">
//                     {social.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Resume Button */}
//           <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
//             <button
//               onClick={handleResumeClick}
//               className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
//             >
//               <Download className="w-6 h-6 mr-3" />
//               View Resume
//             </button>
//           </div>

//           {/* Scroll Indicator */}
//           <div className="mb-8">
//             <button
//               onClick={scrollToAbout}
//               className="group flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-4 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 mx-auto"
//             >
//               <span className="text-sm mb-2 font-semibold">Explore More</span>
//               <ChevronDown className="w-7 h-7 animate-bounce group-hover:text-purple-500 transition-all duration-300" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Resume Modal */}
//       {isResumeOpen && (
//         <ResumeModal onClose={() => setIsResumeOpen(false)} editMode={editMode} />
//       )}
//     </section>
//   );
// };

// export default Hero;




import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Facebook, Mail, Download, ChevronDown } from 'lucide-react';
import ResumeModal from './ResumeModal'; // Ensure correct path

interface HeroProps {
  editMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ editMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const [name, setName] = useState("Navneet Kumar");
  const [title1, setTitle1] = useState("Full Stack Developer");
  const [title2, setTitle2] = useState("AI Designer");
  const [email, setEmail] = useState("navneetkumar18112002@gmail.com");
  const [address, setAddress] = useState("Prayagraj, Uttar Pradesh, India");

  // ✅ Local image from public folder
  const [profileImage, setProfileImage] = useState("/navneet.jpg");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Navneetkumar2918', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/navneet-kumar-764aa92a8/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/navneet_kumar18', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100089755514519', label: 'Facebook' }
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ Optional: Allow local image change only if edit mode is on
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const caretColor = editMode
    ? document.documentElement.classList.contains('dark')
      ? '#ffffff'
      : '#000000'
    : 'transparent';

  const editableStyle = {
    cursor: editMode ? 'text' : 'default',
    userSelect: 'text' as const,
    touchAction: 'manipulation' as const,
    WebkitUserSelect: 'text' as const,
    MozUserSelect: 'text' as const,
    caretColor: caretColor,
    draggable: false
  };

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-gray-900/50 dark:via-indigo-900/20 dark:to-purple-900/20" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 4 === 0
                ? 'w-3 h-3 bg-blue-400/40'
                : i % 4 === 1
                ? 'w-2 h-2 bg-purple-400/30'
                : i % 4 === 2
                ? 'w-1 h-1 bg-teal-400/50'
                : 'w-2 h-2 bg-pink-400/25'
            } dark:opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${2 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* ✅ Profile Photo */}
          <div className={`flex justify-center mb-4 mt-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Navneet Kumar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
                {editMode && (
                  <label className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm opacity-0 hover:opacity-100 cursor-pointer transition-opacity duration-300">
                    Change Photo
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => setName(e.target.textContent || "")}
              className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600
                ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
              style={editableStyle}
            >
              {name}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light">
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => setTitle1(e.target.textContent || "")}
              className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600
                ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
              style={editableStyle}
            >
              {title1}
            </span>
            <span className="mx-4 text-blue-500 text-4xl">&</span>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => setTitle2(e.target.textContent || "")}
              className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600
                ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
              style={editableStyle}
            >
              {title2}
            </span>
          </p>

          {/* Email */}
          <div className="flex items-center justify-center mb-2 group p-4 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
            <Mail className="w-6 h-6 text-blue-600 mr-3" />
            {editMode ? (
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEmail(e.currentTarget.textContent || "")}
                className="text-lg font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 outline-black outline-2 outline-offset-2 caret-black px-1"
                style={{ cursor: 'text' }}
              >
                {email}
              </span>
            ) : (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                {email}
              </a>
            )}
            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Address */}
          <p
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => setAddress(e.target.textContent || "")}
            className={`text-gray-600 dark:text-gray-300 text-center mb-6 inline-block ${editMode ? 'outline-black outline-2 outline-offset-2 caret-black px-1' : ''}`}
            style={editableStyle}
          >
            {address}
          </p>

          {/* Social Icons */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <div key={social.label} className="relative group">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 
                               shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-110 
                               border border-gray-300 dark:border-gray-600 transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-200 group-hover:scale-125" />
                  </a>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 text-sm font-semibold 
                                   rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 
                                   transition-all duration-200 pointer-events-none
                                   bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white shadow-md">
                    {social.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Button */}
          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
            <button
              onClick={handleResumeClick}
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold text-lg rounded-full hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              <Download className="w-6 h-6 mr-3" />
              View Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mb-8">
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 p-4 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 mx-auto"
            >
              <span className="text-sm mb-2 font-semibold">Explore More</span>
              <ChevronDown className="w-7 h-7 animate-bounce group-hover:text-purple-500 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} editMode={editMode} />
      )}
    </section>
  );
};

export default Hero;

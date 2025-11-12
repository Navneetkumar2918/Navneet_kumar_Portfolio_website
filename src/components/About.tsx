import myPhoto from '../assets/navneet.jpg';
import React, { useState } from 'react';
import { GraduationCap, MapPin, School, Award, Code, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AboutProps {
  editMode: boolean;
}

const About: React.FC<AboutProps> = ({ editMode }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const [aboutText, setAboutText] = useState(
    "A passionate developer from Prayagraj, UP, India, dedicated to creating innovative solutions through technology and design."
  );
  const [address, setAddress] = useState("Prayagraj, Uttar Pradesh, India");
  const [basedInTitle, setBasedInTitle] = useState("Based in");
  const [eduTitle, setEduTitle] = useState("Educational Journey");

  const [educationData, setEducationData] = useState([
    {
      icon: GraduationCap,
      title: "B.Tech in Computer Science and Engineering",
      institution: "National Institute of Technology Silchar, Assam",
      status: "Currently Pursuing",
      color: "text-blue-600"
    },
    {
      icon: School,
      title: "12th Grade",
      institution: "Kendriya Vidyalaya New Cantt, Prayagraj, Uttar Pradesh",
      status: "Completed",
      color: "text-green-600"
    },
    {
      icon: School,
      title: "10th Grade",
      institution: "Kendriya Vidyalaya New Cantt, Prayagraj, Uttar Pradesh",
      status: "Completed",
      color: "text-purple-600"
    }
  ]);

  const [highlights, setHighlights] = useState([
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: Sparkles,
      title: "AI & Machine Learning",
      description: "Passionate about creating intelligent solutions"
    },
    {
      icon: Award,
      title: "Problem Solver",
      description: "Strong analytical and algorithmic thinking skills"
    }
  ]);

  // Tailwind focus class for editable text with exact text-sized black border
  const editableClass = editMode
    ? "focus:outline-black focus:outline-2 focus:outline-offset-0 focus:caret-black inline-block"
    : "";

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                contentEditable={editMode}
                suppressContentEditableWarning
              >
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p
              className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed ${editableClass}`}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => setAboutText(e.target.textContent || "")}
            >
              {aboutText}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left Column - Location & Highlights */}
              <div className="space-y-8">
                <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
                  <MapPin className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3
                      className={`text-xl font-bold text-gray-800 dark:text-white mb-1 ${editableClass}`}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => setBasedInTitle(e.target.textContent || "Based in")}
                    >
                      {basedInTitle}
                    </h3>
                    <p
                      className={`text-gray-600 dark:text-gray-300`}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => setAddress(e.target.textContent || "")}
                    >
                      {address}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 flex-shrink-0">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-semibold text-gray-800 dark:text-white mb-2 ${editableClass}`}
                          contentEditable={editMode}
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const newHighlights = [...highlights];
                            newHighlights[index].title = e.target.textContent || "";
                            setHighlights(newHighlights);
                          }}
                        >
                          {highlight.title}
                        </h4>
                        <p
                          className={`text-gray-600 dark:text-gray-300 ${editableClass}`}
                          contentEditable={editMode}
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const newHighlights = [...highlights];
                            newHighlights[index].description = e.target.textContent || "";
                            setHighlights(newHighlights);
                          }}
                        >
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Education Timeline */}
              <div className="space-y-8 flex flex-col items-center lg:items-start w-full">
                <h3
                  className={`text-2xl font-bold text-gray-800 dark:text-white mb-8 ${editableClass}`}
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => setEduTitle(e.target.textContent || "Educational Journey")}
                  style={{
                    display: 'inline-block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center'
                  }}
                >
                  {eduTitle}
                </h3>

                <div className="relative w-full">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                  {educationData.map((edu, index) => (
                    <div key={index} className="relative pl-20 pb-12 last:pb-0">
                      <div
                        className={`absolute left-6 w-4 h-4 ${edu.color} bg-current rounded-full border-4 border-white dark:border-gray-900`}
                      ></div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start mb-4">
                          <div className={`p-2 ${edu.color} bg-opacity-10 rounded-lg mr-4`}>
                            <edu.icon className={`w-6 h-6 ${edu.color}`} />
                          </div>
                          <div className="flex-1">
                            <span
                              className={`inline-block px-3 py-1 text-xs font-semibold ${edu.color} bg-opacity-10 bg-current rounded-full mb-2`}
                            >
                              {edu.status}
                            </span>
                            <h4
                              className={`text-lg font-bold text-gray-800 dark:text-white ${editableClass}`}
                              contentEditable={editMode}
                              suppressContentEditableWarning
                              onBlur={(e) => {
                                const newEdu = [...educationData];
                                newEdu[index].title = e.target.textContent || "";
                                setEducationData(newEdu);
                              }}
                            >
                              {edu.title}
                            </h4>
                          </div>
                        </div>
                        <p
                          className={`text-gray-600 dark:text-gray-300 ${editableClass}`}
                          contentEditable={editMode}
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const newEdu = [...educationData];
                            newEdu[index].institution = e.target.textContent || "";
                            setEducationData(newEdu);
                          }}
                        >
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

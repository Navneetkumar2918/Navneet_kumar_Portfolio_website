import React, { useState } from 'react';
import { Code2, Palette, Database, Server, Smartphone, Brain } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: Skill[];
}

interface SkillsProps {
  editMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ editMode }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 55, color: 'bg-orange-500' },
        { name: 'CSS3', level: 52, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 48, color: 'bg-yellow-500' },
        { name: 'React', level: 45, color: 'bg-blue-600' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 42, color: 'bg-green-600' },
        { name: 'Python', level: 48, color: 'bg-blue-500' },
        { name: 'C', level: 55, color: 'bg-gray-600' },
        { name: 'C++', level: 52, color: 'bg-blue-700' },
        { name: 'Django', level: 45, color: 'bg-green-700' },
        { name: 'REST APIs', level: 50, color: 'bg-purple-500' }
      ]
    },
    {
      id: 'database',
      title: 'Database & Tools',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 45, color: 'bg-green-500' },
        { name: 'MySQL', level: 48, color: 'bg-orange-500' },
        { name: 'Git', level: 50, color: 'bg-red-500' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'React Native', level: 45, color: 'bg-blue-600' },
        { name: 'Flutter', level: 40, color: 'bg-blue-500' },
        { name: 'Firebase', level: 50, color: 'bg-orange-500' }
      ]
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'TensorFlow', level: 45, color: 'bg-orange-600' },
        { name: 'PyTorch', level: 40, color: 'bg-red-600' },
        { name: 'OpenCV', level: 42, color: 'bg-green-600' },
        { name: 'NLP', level: 48, color: 'bg-purple-600' }
      ]
    },
    {
      id: 'design',
      title: 'Design & Editing',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'UI/UX Design', level: 52, color: 'bg-pink-500' },
        { name: 'Figma', level: 50, color: 'bg-purple-500' },
        { name: 'Photoshop', level: 45, color: 'bg-blue-600' },
        { name: 'Video Editing', level: 48, color: 'bg-red-500' }
      ]
    }
  ]);

  // Skill editing handler
  const handleSkillChange = (
    categoryId: string,
    skillName: string,
    field: 'name' | 'level',
    value: string
  ) => {
    setSkillCategories(prev =>
      prev.map(category => {
        if (category.id !== categoryId) return category;
        return {
          ...category,
          skills: category.skills.map(skill => {
            if (skill.name !== skillName) return skill;
            return {
              ...skill,
              [field]: field === 'level' ? Number(value) : value
            };
          })
        };
      })
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span
                contentEditable={editMode}
                suppressContentEditableWarning
                className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 border border-transparent focus:border-black inline-block px-1 ${
                  editMode ? 'focus:border-black' : ''
                }`}
              >
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p
              contentEditable={editMode}
              suppressContentEditableWarning
              className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed border border-transparent focus:border-black inline-block px-1 ${
                editMode ? 'focus:border-black' : ''
              }`}
            >
              A comprehensive overview of my technical skills and proficiency levels across various domains.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, i) => (
              <div
                key={category.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-500`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div
                    className={`p-4 bg-gradient-to-r ${category.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    className={`text-xl font-bold text-gray-800 dark:text-white border border-transparent focus:border-black inline-block px-1 ${
                      editMode ? 'focus:border-black' : ''
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        {editMode ? (
                          <>
                            <input
                              type="text"
                              value={skill.name}
                              onChange={e =>
                                handleSkillChange(category.id, skill.name, 'name', e.target.value)
                              }
                              className="font-semibold text-gray-700 dark:text-gray-300 bg-transparent border-b border-gray-400 focus:outline-none focus:border-black"
                            />
                            <input
                              type="number"
                              value={skill.level}
                              onChange={e =>
                                handleSkillChange(category.id, skill.name, 'level', e.target.value)
                              }
                              className="text-sm font-bold text-gray-700 dark:text-gray-300 bg-transparent border-b border-gray-400 focus:outline-none focus:border-black"
                            />
                          </>
                        ) : (
                          <>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </>
                        )}
                      </div>
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

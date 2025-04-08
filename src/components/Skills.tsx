
const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Vue.js", level: 75 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Responsive Web Design", level: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "PHP", level: 70 },
    { name: "Python", level: 65 },
    { name: "RESTful APIs", level: 80 },
    { name: "Authentication & Authorization", level: 80 },
  ];

  const databaseSkills = [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ];

  const devopsTools = [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
    { name: "Docker", level: 70 },
  ];

  const otherSkills = [
    { name: "AI Tools", level: 65 },
    { name: "Ethical Hacking", level: 60 },
    { name: "Microsoft Power BI", level: 70 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Skills & Abilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 animate-fade-in">
            <h3 className="text-xl font-semibold text-primary mb-6">Frontend Development</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 animate-fade-in">
            <h3 className="text-xl font-semibold text-primary mb-6">Backend Development</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
            <h3 className="text-xl font-semibold text-primary mb-6 mt-8">Database Management</h3>
            {databaseSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 animate-fade-in lg:col-span-1 md:col-span-2 lg:col-start-3 lg:row-start-1">
            <h3 className="text-xl font-semibold text-primary mb-6">DevOps & Tools</h3>
            {devopsTools.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
            <h3 className="text-xl font-semibold text-primary mb-6 mt-8">Other Technical Skills</h3>
            {otherSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Writing stories & poetry</span>
                <span className="skill-tag">Traveling & cycling</span>
                <span className="skill-tag">Home workouts</span>
                <span className="skill-tag">Learning new technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

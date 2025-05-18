import React from "react";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      category: "Frontend Development",
      icon: "Code",
      competencies: [
        "Expert in React.js with Redux state management",
        "Advanced CSS/SCSS with responsive design principles",
        "Performance optimization and accessibility compliance"
      ]
    },
    {
      id: 2,
      category: "Backend Development",
      icon: "Server",
      competencies: [
        "Node.js and Express API development",
        "Database design with MongoDB and PostgreSQL",
        "RESTful and GraphQL API architecture"
      ]
    },
    {
      id: 3,
      category: "DevOps & Cloud",
      icon: "Cloud",
      competencies: [
        "CI/CD pipeline implementation with GitHub Actions",
        "AWS and Azure cloud infrastructure management",
        "Docker containerization and Kubernetes orchestration"
      ]
    },
    {
      id: 4,
      category: "Project Management",
      icon: "Kanban",
      competencies: [
        "Agile methodology implementation and team leadership",
        "Sprint planning and backlog prioritization",
        "Stakeholder communication and requirement gathering"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My professional expertise spans across multiple domains of software development,
            with a focus on creating robust and user-friendly applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard 
              key={skill.id}
              category={skill.category}
              icon={skill.icon}
              competencies={skill.competencies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
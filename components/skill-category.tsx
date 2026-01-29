interface SkillCategoryProps {
  category: string;
  skills: string[];
}

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-4 border-l-2 border-accent pl-4">
        {category}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-muted-foreground hover:text-accent transition-colors">
            • {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

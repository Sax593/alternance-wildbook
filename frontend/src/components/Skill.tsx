export interface SkillProps {
  title: string;
  votes: number;
}

export default function Skill({ title, votes }: SkillProps) {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}

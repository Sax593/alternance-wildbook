import axios from "axios";
import blank_profile from "../assets/profile.png";
import Skill, { SkillProps } from "./Skill";
import { GradeApi } from "../App";

export interface WilderProps {
  name: string;
  id: number;
  skills: SkillProps[];
  city: string;
  grades: GradeApi[];
}

export default function Wilder({ id, name, skills }: WilderProps) {
  const handleDelete = (id: number) => {
    axios.delete("http://localhost:5000/api/wilder/" + id);
  };
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <button onClick={() => handleDelete}>Delete</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
}

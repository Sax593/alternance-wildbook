import axios from "axios";
import { useEffect, useState } from "react";
import { SkillApi } from "../App";

export default function AddGradeForm() {
  const [wilder, setWilder] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [skills, setSkills] = useState<SkillApi[]>([]);
  const [grade, setGrade] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/skill").then((data: any) => {
      setSkills(data.data);
    });
  }, []);

  return (
    <div>
      <form
        className="form"
        onSubmit={() => {
          axios.post("http://localhost5000/api/grade", {
            wilder: wilder,
            skill: skill,
            grade: grade,
          });
        }}>
        <label>Select a Wilder : </label>
        <select name="wilders" onChange={(e) => setWilder(e.target.value)}>
          <option value="">--Select a wilder--</option>
          {wilder.map((wilder, key) => (
            <option key={key} value={wilder.id}>
              {wilder.name}
            </option>
          ))}
        </select>
        <label>Select a Skill : </label>
        <select name="skills" onChange={(e) => setSkill(e.target.value)}>
          <option value="">--Select a skill--</option>
          {skills.map((skill, key) => (
            <option key={key} value={skill.id}>
              {skill.name}
            </option>
          ))}
        </select>
        <label>Add a grade : </label>
        <input
          type="number"
          min="0"
          max="10"
          value={grade}
          onChange={(e) => setGrade(parseInt(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

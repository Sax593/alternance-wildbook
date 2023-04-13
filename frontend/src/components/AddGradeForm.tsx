import axios from "axios";
import { useEffect, useState } from "react";
import { WilderProps } from "./Wilder";

export default function AddGradeForm() {
  const [wilderId, setWilderId] = useState("");
  const [skillId, setSkillId] = useState("");
  const [grade, setGrade] = useState("");
  const [wilders, setWilders] = useState<WilderProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/wilder").then((data: any) => {
      setWilders(data.data);
      console.log(setWilders);
    });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/grade", {
          wilderId: wilderId,
          skillId: skillId,
          grade: grade,
        });
      }}>
      wilderid
      <select
        onChange={(e) => {
          setWilderId(e.target.value);
        }}
        name="wilders"
        id="wilderselect">
        <option value="">--Please choose an option--</option>
        {wilders.map((wilder) => (
          <option key={wilder.id} value={wilder.id}>
            {wilder.name}
          </option>
        ))}
      </select>
      <br></br>
      skillid
      <input
        value={skillId}
        onChange={(e) => {
          setSkillId(e.target.value);
        }}
      />
      <br></br>
      grade
      <input
        value={grade}
        onChange={(e) => {
          setGrade(e.target.value);
        }}
      />
      <br></br>
      <button>Submit</button>
    </form>
  );
}

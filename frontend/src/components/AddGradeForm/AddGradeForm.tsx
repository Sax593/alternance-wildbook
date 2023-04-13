import { useState } from "react";
import { GET_WILDERS } from "../../App";
import './style.css';

export default function AddGradeForm() {
  const [, setWilderId] = useState("");
  const [skillId, setSkillId] = useState("");
  const [grade, setGrade] = useState("");

  return (
    <section className="gradeFormSection">
      <h3>Add Grade for Wilder</h3>
      <form className="gradeForm">
        <label className="gradeLabel" htmlFor="wilder">
          Wilder Id:
          <br/>
          <select name="wilder" id="wilderselect">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </label>
        <label className="gradeLabel" htmlFor="skill">
          Skill Id:
          <br/>
          <input name="skill" type="text" />
        </label>
        <label className="gradeLabel" htmlFor="grade">
          Grade:
          <br/>
          <input name="grade" type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
    // <form
    // onSubmit={(e) => {
    //   e.preventDefault();
    // }}>
    //   wilderid
    //   <select
    //     onChange={(e) => {
    //       setWilderId(e.target.value);
    //     }}
    //     name="wilders"
    //     id="wilderselect">
    //     <option value="">--Please choose an option--</option>
    //     {/* {wilders.map((wilder) => (
    //       <option key={wilder.id} value={wilder.id}>
    //         {wilder.name}
    //       </option>
    //     ))} */}
    //   </select>
    //   <br/>
    //   skillid
    //   <input
    //     value={skillId}
    //     onChange={(e) => {
    //       setSkillId(e.target.value);
    //     }}
    //   />
    //   <br/>
    //   grade
    //   <input
    //     value={grade}
    //     onChange={(e) => {
    //       setGrade(e.target.value);
    //     }}
    //   />
    //   <br/>
    //   <button>Submit</button>
    // </form>
  );
}

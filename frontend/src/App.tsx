import { useEffect, useState } from "react";
import axios from "axios";
import Wilder, { WilderProps } from "./components/Wilder";
import AddGradeForm from "./components/AddGradeForm";
import "./App.css";

export interface SkillApi {
  id: any;
  name: string;
}
export interface GradeApi {
  grade: number;
  skill: SkillApi;
}
export interface WilderApi {
  id: any;
  city: string;
  name: string;
  grades: GradeApi[];
}

export default function App() {
  const [wilders, setWilders] = useState<WilderApi[]>([]);
  const [skills, setSkills] = useState<SkillApi[]>([]);

  const formatWildersFromApi = (wilders: WilderApi[]): WilderProps[] =>
    wilders.map((wilder) => {
      return {
        id: wilder.id,
        name: wilder.name,
        city: wilder.city,
        skills: wilder.grades.map((grade) => {
          return { votes: grade.grade, title: grade.skill.name };
        }),
      };
    });

  useEffect(() => {
    axios.get("http://localhost:5000/api/wilder").then((data: any) => {
      setWilders(formatWildersFromApi(data.data));
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/api/skill").then((data: any) => {
      setSkills(data.data);
    });
  }, []);

  console.log(wilders);
  console.log(skills);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <AddGradeForm />
        <h2>Wilders</h2>
        <div className="addform">

        </div>
        <section className="card-row">
          {wilders.map((element) => {
            return (
              <Wilder
                key={element.id}
                id={element.id}
                name={element.name}
                skills={element.skills}
                city={element.city}
              />
            );
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

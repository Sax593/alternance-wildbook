import { useQuery, gql } from "@apollo/client";
import Wilder, { WilderProps } from "./components/Wilder";
import "./App.css";

export interface SkillApi {
  id: number;
  name: string;
}
export interface GradeApi {
  grade: number;
  skill: SkillApi;
}
export interface WilderApi {
  id: string;
  name: string;
  grades: GradeApi[];
}

const GET_WILDERS = gql`
  query GetWilders {
    wilders {
      name
      grades {
        grade
        skill {
          name
        }
      }
    }
  }
`;

const formatWildersFromApi = (wilders: WilderApi[]): WilderProps[] =>
  wilders.map((wilder) => {
    return {
      id: wilder.id,
      name: wilder.name,
      skills: wilder.grades.map((grade) => {
        return { votes: grade.grade, title: grade.skill.name };
      }),
    };
  });

export default function App() {
  const { loading, error, data } = useQuery(GET_WILDERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const wilders = formatWildersFromApi(data.wilders);
  console.log(wilders);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <div className="addform"></div>
        <section className="card-row">
          {wilders.map((element) => {
            return (
              <Wilder
                key={element.id}
                id={element.id}
                name={element.name}
                skills={element.skills}
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

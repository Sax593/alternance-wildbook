import { Entity, ManyToOne, Column, PrimaryGeneratedColumn } from "typeorm";
import { Wilder } from "./Wilder";
import { Skill } from "./Skill";

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wilderId: number;

  @Column()
  skillId: number;

  @Column()
  grade: number;

  @ManyToOne(() => Wilder, (wilder) => wilder.grades)
  wilder: Wilder;

  @ManyToOne(() => Skill, (skill) => skill.grades)
  skill: Skill;
}

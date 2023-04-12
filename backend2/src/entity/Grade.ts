import {
  Entity,
  ManyToOne,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Skill } from "./Skill";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  wilderId: string;

  @PrimaryColumn()
  skillId: string;

  @Field()
  @Column()
  grade: number;

  @Field(() => Wilder)
  @ManyToOne(() => Wilder, (wilder) => wilder.grades, { onDelete: "CASCADE" })
  wilder: Wilder;

  @Field(() => Skill)
  @ManyToOne(() => Skill, (skill) => skill.grades)
  skill: Skill;
}

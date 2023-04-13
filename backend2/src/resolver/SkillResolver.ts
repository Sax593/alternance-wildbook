import { Mutation,Arg,Query,Resolver } from "type-graphql";
import dataSource from "../utils";
import { Skill } from "../entity/Skill";

@Resolver()
class SkillResolver{
    @Query(()=>[Skill])
    async getAllSkills(): Promise<Skill[]>{
        const result = await dataSource.getRepository(Skill).find();
        return result
    }

    @Mutation(() => Skill)
        async addSkill(@Arg("name") name: string): Promise<Skill> {
            const createSkill = await dataSource
            .getRepository(Skill)
            .save({ name });
        return createSkill;
    }

    @Mutation(()=> String)
        async deleteSkills(@Arg("id") id: string): Promise<string>{
            const deleteSkill = await dataSource.getRepository(Skill).delete({id});
            console.log(deleteSkill);
        return "skill deleted"; 
    }
}

export default SkillResolver;
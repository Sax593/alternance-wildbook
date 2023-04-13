import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Wilder } from "../entity/Wilder";
import dataSource from "../utils";

@Resolver()
class WilderResolver {
  @Query(() => [Wilder])
  async wilders(): Promise<Wilder[]> {
    const result = await dataSource
      .getRepository(Wilder)
      .find({ relations: { grades: { skill: true } } });
    return result;
  }

  @Mutation(() => Wilder)
  async addWilder(@Arg("name") name: string): Promise<Wilder> {
    const createWilder = await dataSource
      .getRepository(Wilder)
      .save({ name: "" });
    return createWilder;
  }
}

export default WilderResolver;

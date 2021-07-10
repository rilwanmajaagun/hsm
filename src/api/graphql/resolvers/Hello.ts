import {Resolver, Query } from 'type-graphql';
import { Todo } from '../schemas/Hello';


@Resolver(() => String)
export class HelloWorldResolver {
  @Query(() => Todo)
  async getTodos(): Promise<string> {
    return 'hello';
  }
}

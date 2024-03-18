import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from './enum.entity';

@ObjectType()
export class User {
  @Field()
  id: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => String, { nullable: true })
  firstName: string;
  @Field(() => String, { nullable: true })
  email: string;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field()
  role: Role;
  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

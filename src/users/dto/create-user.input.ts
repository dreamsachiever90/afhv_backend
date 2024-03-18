import { InputType, registerEnumType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Role } from '@prisma/client';

import { Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  @Exclude()
  password?: string;

  @Field(() => Role, { nullable: true })
  role?: Role;
}

registerEnumType(Role, {
  name: 'Role',
});

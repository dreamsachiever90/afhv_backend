import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(id: string, updateUserInput: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserInput,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

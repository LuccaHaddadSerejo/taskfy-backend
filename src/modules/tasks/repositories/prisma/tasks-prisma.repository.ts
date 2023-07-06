import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TasksRepository } from '../tasks.repository';
import { CreateTaskDto } from '../../dto';
import { TaskEnt } from '../../entities/task.entity';

@Injectable()
export class TasksPrismaRepository implements TasksRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateTaskDto): Promise<TaskEnt> {
    const task = new TaskEnt();
    const newTask = Object.assign(task, {
      ...data,
    });
    const { id, ...taskWithoutId } = newTask;

    const prismaTask = await this.prisma.task.create({
      data: {
        ...taskWithoutId,
      },
    });

    return prismaTask;
  }
}

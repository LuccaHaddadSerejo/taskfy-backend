import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TasksRepository } from '../tasks.repository';
import { CreateTaskDto, UpdateTaskDto } from '../../dto';
import { TaskEnt } from '../../entities/task.entity';
import { plainToInstance } from 'class-transformer';

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

    return plainToInstance(TaskEnt, prismaTask);
  }

  async findAll(status: string): Promise<TaskEnt[]> {
    if (status === 'done') {
      const task = await this.prisma.task.findMany({ where: { done: true } });
      return plainToInstance(TaskEnt, task);
    }
    if (status === 'pending') {
      const task = await this.prisma.task.findMany({ where: { done: false } });
      return plainToInstance(TaskEnt, task);
    }

    const task = await this.prisma.task.findMany();

    return plainToInstance(TaskEnt, task);
  }

  async findOne(id: string): Promise<TaskEnt> {
    const task = await this.prisma.task.findUnique({ where: { id: +id } });

    return plainToInstance(TaskEnt, task);
  }

  async update(id: string, data: UpdateTaskDto): Promise<TaskEnt> {
    const task = await this.prisma.task.update({
      where: { id: +id },
      data: { ...data },
    });

    return plainToInstance(TaskEnt, task);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({ where: { id: +id } });
  }
}

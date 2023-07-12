import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TasksRepository } from '../tasks.repository';
import { CreateTaskDto, UpdateTaskDto } from '../../dto';
import { TaskEnt, TaskEntReturn } from '../../entities/task.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class TasksPrismaRepository implements TasksRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTaskDto): Promise<TaskEntReturn> {
    const task = new TaskEnt();
    const newTask = Object.assign(task, {
      ...data,
    });

    const { id, ...taskWithoutId } = newTask;

    const prismaTask = await this.prisma.task.create({
      data: {
        ...taskWithoutId,
      },
      include: { subtasks: true },
    });

    return plainToInstance(TaskEntReturn, prismaTask);
  }

  async findAll(status: string): Promise<TaskEntReturn[]> {
    if (status === 'done') {
      const task = await this.prisma.task.findMany({
        where: { done: true },
        include: { subtasks: true },
      });
      return plainToInstance(TaskEntReturn, task);
    }
    if (status === 'pending') {
      const task = await this.prisma.task.findMany({
        where: { done: false },
        include: { subtasks: true },
      });
      return plainToInstance(TaskEntReturn, task);
    }

    const task = await this.prisma.task.findMany({
      include: { subtasks: true },
    });

    return plainToInstance(TaskEntReturn, task);
  }

  async findOne(id: string): Promise<TaskEntReturn> {
    const task = await this.prisma.task.findUnique({
      where: { id: +id },
      include: { subtasks: true },
    });

    return plainToInstance(TaskEntReturn, task);
  }

  async update(id: string, data: UpdateTaskDto): Promise<TaskEntReturn> {
    const task = await this.prisma.task.update({
      where: { id: +id },
      include: { subtasks: true },
      data: { ...data },
    });

    return plainToInstance(TaskEntReturn, task);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({ where: { id: +id } });
  }
}

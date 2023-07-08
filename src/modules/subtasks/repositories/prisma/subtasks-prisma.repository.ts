import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SubtasksRepository } from '../subtasks.repository';
import { CreateSubtaskDto } from '../../dto';
import { SubtaskEnt } from '../../entities/subtask.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SubtasksPrismaRepository implements SubtasksRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSubtaskDto, taskId: string): Promise<SubtaskEnt> {
    const subtask = new SubtaskEnt();
    const newSubtask = Object.assign(subtask, {
      ...data,
    });

    const { id, ...subtaskWithoutId } = newSubtask;

    const numId: number = parseInt(taskId);

    const prismaSubtask = await this.prisma.subtask.create({
      data: {
        ...subtaskWithoutId,
        taskId: numId,
      },
    });

    return plainToInstance(SubtaskEnt, prismaSubtask);
  }

  async findAll(): Promise<SubtaskEnt[]> {
    const subtask = await this.prisma.subtask.findMany({
      include: { task: true },
    });

    return plainToInstance(SubtaskEnt, subtask);
  }
}

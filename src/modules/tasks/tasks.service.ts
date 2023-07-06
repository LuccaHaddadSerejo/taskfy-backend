import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './repositories/tasks.repository';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.tasksRepository.create(createTaskDto);
    return task;
  }

  async findAll(status: string | undefined) {
    return this.tasksRepository.findAll(status);
  }

  async findOne(id: string) {
    const findTask = await this.tasksRepository.findOne(id);
    if (!findTask) {
      throw new NotFoundException('Task not found');
    }
    return findTask;
  }

  async update(id: string, data: UpdateTaskDto) {
    const task = await this.tasksRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return await this.tasksRepository.update(id, data);
  }

  async remove(id: string) {
    const task = await this.tasksRepository.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    await this.tasksRepository.delete(id);
    return;
  }
}

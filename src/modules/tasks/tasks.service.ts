import { Injectable } from '@nestjs/common';
import { TasksRepository } from './repositories/tasks.repository';
import { CreateTaskDto } from './dto';

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
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { SubtasksRepository } from './repositories/subtasks.repository';
import { CreateSubtaskDto } from './dto';

@Injectable()
export class SubtasksService {
  constructor(private subtasksRepository: SubtasksRepository) {}

  async create(createSubtaskDto: CreateSubtaskDto, taskId: string) {
    const subtask = await this.subtasksRepository.create(
      createSubtaskDto,
      taskId,
    );
    return subtask;
  }

  async findAll() {
    return this.subtasksRepository.findAll();
  }

  async findOne(id: string) {
    const findSubtask = await this.subtasksRepository.findOne(id);
    if (!findSubtask) {
      throw new NotFoundException('Subask not found');
    }
    return findSubtask;
  }
}

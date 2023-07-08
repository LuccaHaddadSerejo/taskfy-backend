import { Injectable } from '@nestjs/common';
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
}

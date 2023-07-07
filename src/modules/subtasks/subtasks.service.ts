import { Injectable } from '@nestjs/common';
import { SubtasksRepository } from './repositories/subtasks.repository';

@Injectable()
export class SubtasksService {
  constructor(private subtasksRepository: SubtasksRepository) {}
}

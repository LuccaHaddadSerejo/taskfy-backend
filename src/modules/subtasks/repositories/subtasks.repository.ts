import { CreateSubtaskDto } from '../dto';
import { SubtaskEnt } from '../entities/subtask.entity';

export abstract class SubtasksRepository {
  abstract create(data: CreateSubtaskDto, taskId: string): Promise<SubtaskEnt>;
}

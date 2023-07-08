import { CreateSubtaskDto, UpdateSubtaskDto } from '../dto';
import { SubtaskEnt } from '../entities/subtask.entity';

export abstract class SubtasksRepository {
  abstract create(data: CreateSubtaskDto, taskId: string): Promise<SubtaskEnt>;
  abstract findAll(): Promise<SubtaskEnt[]>;
  abstract findOne(id: string): Promise<SubtaskEnt>;
  abstract update(id: string, data: UpdateSubtaskDto): Promise<SubtaskEnt>;
  abstract delete(id: string): Promise<void>;
}

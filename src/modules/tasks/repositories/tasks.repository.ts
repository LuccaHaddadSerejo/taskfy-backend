import { CreateTaskDto, UpdateTaskDto } from '../dto';
import { TaskEnt } from '../entities/task.entity';

export abstract class TasksRepository {
  abstract create(data: CreateTaskDto): Promise<TaskEnt>;
  abstract findAll(status: string | undefined): Promise<TaskEnt[]>;
  abstract findOne(id: string): Promise<TaskEnt>;
  abstract update(id: string, data: UpdateTaskDto): Promise<TaskEnt>;
  abstract delete(id: string): Promise<void>;
}

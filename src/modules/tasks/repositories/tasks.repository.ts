import { CreateTaskDto, UpdateTaskDto } from '../dto';
import { TaskEntReturn } from '../entities/task.entity';

export abstract class TasksRepository {
  abstract create(data: CreateTaskDto): Promise<TaskEntReturn>;
  abstract findAll(status: string | undefined): Promise<TaskEntReturn[]>;
  abstract findOne(id: string): Promise<TaskEntReturn>;
  abstract update(id: string, data: UpdateTaskDto): Promise<TaskEntReturn>;
  abstract delete(id: string): Promise<void>;
}

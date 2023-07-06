import { CreateTaskDto } from '../dto';
import { TaskEnt } from '../entities/task.entity';

export abstract class TasksRepository {
  abstract create(data: CreateTaskDto): Promise<TaskEnt>;
}

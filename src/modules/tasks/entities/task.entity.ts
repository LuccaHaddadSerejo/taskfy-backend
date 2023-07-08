import { Subtask } from '@prisma/client';

export class TaskEnt {
  readonly id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  done: boolean;
}

export class TaskEntReturn extends TaskEnt {
  subtasks: Subtask[];
}

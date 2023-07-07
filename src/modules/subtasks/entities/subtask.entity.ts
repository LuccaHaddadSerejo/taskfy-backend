export class SubtaskEnt {
  readonly id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  done: boolean;
  task_id?: number;
}

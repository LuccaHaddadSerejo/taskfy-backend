import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { SubtasksModule } from './modules/subtasks/subtasks.module';

@Module({
  imports: [TasksModule, SubtasksModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SubtasksController } from './subtasks.controller';
import { SubtasksService } from './subtasks.service';
import { SubtasksRepository } from './repositories/subtasks.repository';
import { SubtasksPrismaRepository } from './repositories/prisma/subtasks-prisma.repository';

@Module({
  controllers: [SubtasksController],
  providers: [
    SubtasksService,
    PrismaService,
    { provide: SubtasksRepository, useClass: SubtasksPrismaRepository },
  ],
})
export class SubtasksModule {}

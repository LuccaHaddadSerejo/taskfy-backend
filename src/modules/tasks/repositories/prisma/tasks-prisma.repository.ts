import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TasksRepository } from '../tasks.repository';

@Injectable()
export class TasksPrismaRepository implements TasksRepository {
  constructor(private prisma: PrismaService) {}
}

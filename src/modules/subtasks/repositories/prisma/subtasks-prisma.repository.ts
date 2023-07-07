import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SubtasksRepository } from '../subtasks.repository';

@Injectable()
export class SubtasksPrismaRepository implements SubtasksRepository {
  constructor(private prisma: PrismaService) {}
}

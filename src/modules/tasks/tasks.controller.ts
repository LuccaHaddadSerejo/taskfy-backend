import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('')
  findAll(@Query('status') status: string | undefined) {
    return this.tasksService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }
}

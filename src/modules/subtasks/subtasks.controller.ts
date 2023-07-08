import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { SubtasksService } from './subtasks.service';
import { CreateSubtaskDto } from './dto';

@Controller('subtasks')
export class SubtasksController {
  constructor(private readonly subtasksService: SubtasksService) {}

  @Post(':taskId')
  create(
    @Body() createSubtaskDto: CreateSubtaskDto,
    @Param('taskId') taskId: string,
  ) {
    return this.subtasksService.create(createSubtaskDto, taskId);
  }

  @Get('')
  findAll() {
    return this.subtasksService.findAll();
  }
}

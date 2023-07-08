import {
  Body,
  Controller,
  Post,
  Param,
  Get,
  Delete,
  HttpCode,
  Patch,
} from '@nestjs/common';
import { SubtasksService } from './subtasks.service';
import { CreateSubtaskDto, UpdateSubtaskDto } from './dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateSubtaskDto) {
    return this.subtasksService.update(id, data);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subtasksService.remove(id);
  }
}

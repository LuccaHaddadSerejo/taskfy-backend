import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsOptional()
  title: string | null;

  @IsString()
  @IsOptional()
  content: string | null;

  @IsBoolean()
  @IsOptional()
  done: boolean;
}

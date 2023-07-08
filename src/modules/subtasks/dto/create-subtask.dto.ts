import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateSubtaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  @IsOptional()
  done: boolean;
}

import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsInt,
  Min,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  price: number;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  @IsOptional()
  stock?: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
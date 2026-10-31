import { Module } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CourseController } from './course.controller.js';

@Module({
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  send(
    @Body('studentName') studentName: string,
    @Body('message') message: string,
  ) {
    return this.notificationService.sendNotification(studentName, message);
  }

  @Post('check')
  check(
    @Body('studentName') studentName: string,
    @Body('courseId') courseId: string,
  ) {
    return this.notificationService.checkEnrollmentAndNotify(
      studentName,
      courseId,
    );
  }
}
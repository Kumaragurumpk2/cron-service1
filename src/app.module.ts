import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { CronJobService } from './cron-job/cron-job.service';
import { CronJobController } from './cron-job/cron-job.controller';
import { CronJob, CronJobSchema } from './cron-job/cron-job.schema';
import { WebhookService } from './webhook/webhook.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cronJobsDB'),
    MongooseModule.forFeature([{ name: CronJob.name, schema: CronJobSchema }]),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
  ],
  controllers: [CronJobController],
  providers: [CronJobService, WebhookService],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNoficiationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNoficiationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}

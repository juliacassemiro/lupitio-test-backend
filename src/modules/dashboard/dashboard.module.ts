import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { DashboardController } from './dashboard.controller';
import { DashboardCountsUseCase } from './use-cases/dashboard-counts.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [DashboardController],
  providers: [DashboardCountsUseCase],
})
export class DashboardModule {}

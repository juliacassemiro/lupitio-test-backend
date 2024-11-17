import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { FileModule } from 'src/common/file/file.module';
import { TeamsController } from './teams.controller';
import { CreateTeamUseCase } from './use-cases/create-team.use-case';
import { DeleteTeamUseCase } from './use-cases/delete-team.use-case';
import { GetAllTeamsUseCase } from './use-cases/get-all-teams.use-case';
import { GetOneTeamUseCase } from './use-cases/get-one-team.use-case';
import { UpdateTeamUseCase } from './use-cases/update-team.use-case';

@Module({
  imports: [DatabaseModule, FileModule],
  controllers: [TeamsController],
  providers: [
    CreateTeamUseCase,
    DeleteTeamUseCase,
    GetAllTeamsUseCase,
    GetOneTeamUseCase,
    UpdateTeamUseCase,
  ],
})
export class TeamsModule {}

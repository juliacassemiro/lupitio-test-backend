import { TeamsGatewayAdapter } from 'src/common/database/adapters/teams-gateway.adapter';
import { PlayerEntity } from './entities/player.entity';
import { TeamEntity } from './entities/team.entity';
import { PlayersGatewayAdapter } from './adapters/players-gateway.adapter';

export const databaseEntities = [PlayerEntity, TeamEntity];
export const databaseAdapters = [PlayersGatewayAdapter, TeamsGatewayAdapter];

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { FileService } from './file.service';
import { GoogleDriveGateway } from './gateways/google-drive.gateway';

@Module({
  imports: [DatabaseModule],
  providers: [GoogleDriveGateway, FileService],
  exports: [FileService],
})
export class FileModule {}

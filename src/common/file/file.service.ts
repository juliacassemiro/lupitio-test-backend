import { Injectable } from '@nestjs/common';
import { GoogleDriveGateway } from './gateways/google-drive.gateway';

@Injectable()
export class FileService {
  constructor(private readonly googleDriveGateway: GoogleDriveGateway) {}

  async upload(buffer: Buffer, mimeType: string) {
    const file = await this.googleDriveGateway.uploadFile(buffer, mimeType);
    await this.googleDriveGateway.setPermissions(file.id);

    return `https://drive.google.com/file/d/${file.id}/view`;
  }
}

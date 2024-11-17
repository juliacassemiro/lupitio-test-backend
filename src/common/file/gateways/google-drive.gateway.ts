import { Injectable } from '@nestjs/common';
import { drive_v3, google } from 'googleapis';

@Injectable()
export class GoogleDriveGateway {
  private readonly driveClient: drive_v3.Drive;

  constructor() {
    const keyFile =
      'src\\common\\file\\credentials\\google-service-account-key.json';

    const auth = new google.auth.GoogleAuth({
      keyFile: keyFile,
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    this.driveClient = google.drive({
      version: 'v3',
      auth,
    });
  }

  async uploadFile(
    buffer: Buffer,
    mimeType: string,
  ): Promise<drive_v3.Schema$File> {
    const media = {
      mimeType,
      body: buffer,
    };

    const response = await this.driveClient.files.create({
      media,
      fields: 'id, name',
    });

    return response.data;
  }

  async setPermissions(fileId: string): Promise<void> {
    await this.driveClient.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });
  }
}

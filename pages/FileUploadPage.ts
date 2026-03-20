import { BasePage } from '../pages/BasePage';
import { Page, Locator } from '@playwright/test';

export class FileUploadPage extends BasePage {

  readonly fileUploadLink: Locator;
  readonly fileInput: Locator;
  readonly uploadButton: Locator;

  constructor(page: Page) {
    super(page);

    this.fileUploadLink = page.getByRole('link', { name: 'File Upload' });
    this.fileInput = page.locator('#logo');   // input type=file
    this.uploadButton = page.getByRole('button', { name: 'Upload' });
  }

  async openFileUploadPage() {
    await this.fileUploadLink.waitFor({ state: 'visible' });
    await this.fileUploadLink.click();
  }

  async uploadFile(filePath: string) {
    await this.fileInput.waitFor({ state: 'visible' });

    // set file
    await this.fileInput.setInputFiles(filePath);

    // screenshot after selecting file
    await this.page.screenshot({
      path: `screenshots/file-upload-selected-${Date.now()}.png`
    });
  }

  async clickUpload() {
    await this.uploadButton.click();

    // screenshot after clicking upload
    await this.page.screenshot({
      path: `screenshots/file-upload-clicked-${Date.now()}.png`
    });
  }

}
import { BasePage } from '../pages/BasePage';
import { Page, Locator } from '@playwright/test';

export class SwitchToPage extends BasePage {

  readonly switchToMenu: Locator;
  readonly windowsOption: Locator;
  readonly alertsOption: Locator;
  readonly tabOption: Locator;

  readonly windowAlertButton: Locator;
  readonly promptAlertButton: Locator;
  readonly promptMessage: Locator;

  constructor(page: Page) {
    super(page);

    // main hover menu
    this.switchToMenu = page.getByRole('button', { name: 'Switch To' });
  

     // submenu items
    this.windowsOption = page.getByRole('link', {name: 'Windows'})
    this.alertsOption = page.getByRole('link', { name: 'Alert' });
    this.tabOption = page.getByRole('link', { name: 'Tabs' });

    //alert options

    this.windowAlertButton = page.getByRole('button', { name: 'Window Alert' });
    this.promptAlertButton = page.locator('button:has-text("Prompt Alert")');

    this.promptMessage = page.locator('#demo');
  }

  async hoverSwitchTo() {
    await this.switchToMenu.waitFor({ state: 'visible', timeout: 15000 });
    await this.switchToMenu.hover();
  }

  async clickAlerts() {
    await this.alertsOption.waitFor({ state: 'visible', timeout: 15000 });
    await this.alertsOption.click();
  }

 async handleWindowAlert() {

  // listen for dialog
    this.page.on('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await this.page.waitForTimeout(1000);
    await dialog.accept();
    // screenshot
    //await this.page.screenshot({
     // path: `screenshots/window-alert-${Date.now()}.png`
    //});   
  });

  // click alert button
  await this.windowAlertButton.click();
}
  // Handle prompt alert with text
  //async handlePromptAlert(name: string) {

   // this.page.once('dialog', async dialog => {
     // console.log(dialog.message());
     // await dialog.accept(name); // enter text and press OK
   // });

    //await this.promptAlertButton.click();
  //}

  // Handle prompt cancel
 // async cancelPromptAlert() {

   // this.page.once('dialog', async dialog => {
   //   await dialog.dismiss(); // press cancel
   // });

    //await this.promptAlertButton.click();
 // }

  //async getPromptMessage() {
   // return await this.promptMessage.textContent();
 // }
//}

  //async clickWindows() {
    //await this.windowsOption.waitFor({ state: 'visible', timeout: 15000 });
    //await this.windowsOption.click();
 // }
  //async clickTabOption() {
   // await this.tabOption.waitFor({ state: 'visible' });
   // await this.tabOption.click();
  //}
}
import { BasePage } from '../pages/BasePage';
import { Page, Locator } from '@playwright/test';

export class InteractionsPage extends BasePage {

  readonly interactionsMenu: Locator;
  readonly tooltipLink: Locator;

  // Tooltip buttons
  readonly tooltipRight: Locator;
  readonly tooltipLeft: Locator;
  readonly tooltipTop: Locator;
  readonly tooltipBottom: Locator;

  constructor(page: Page) {
    super(page);

    // Dropdown menu
    this.interactionsMenu = page.getByRole('button', { name: 'Intractions' });
    this.tooltipLink = page.locator('a[href="./tooltip.html"]');

    // Tooltip buttons (after clicking tooltip page)
    this.tooltipRight = page.locator('.tooltipr');
    this.tooltipLeft = page.locator('.tooltipl');
    this.tooltipTop = page.locator('.tooltipt');
    this.tooltipBottom = page.locator('.tooltipb');
  }

  // Hover Interactions menu
  async hoverInteractions() {
    await this.interactionsMenu.waitFor({ state: 'visible', timeout: 15000 });
    await this.interactionsMenu.hover();
  }

  // Click Tooltip submenu
  async clickTooltip() {
    await this.tooltipLink.waitFor({ state: 'visible', timeout: 15000 });
    await this.tooltipLink.click();
  }

  // Tooltip hover + get text
  async getRightTooltipText(): Promise<string> {
  await this.tooltipRight.hover();
  const tooltip = this.tooltipRight.locator('.tooltiptextr');
  await tooltip.waitFor({ state: 'visible', timeout: 50000 });
  await tooltip.screenshot({ path: 'tooltip-right.png' });
  return (await tooltip.textContent())!;
}
  async getLeftTooltipText(): Promise<string> {
  await this.tooltipLeft.hover();
  const tooltip = this.tooltipLeft.locator('.tooltiptextl');
  await tooltip.waitFor({ state: 'visible', timeout: 50000 });
  await tooltip.screenshot({ path: 'tooltip-left.png' });
  return (await tooltip.textContent())!;
}

async getTopTooltipText(): Promise<string> {
  await this.tooltipTop.hover();
  const tooltip = this.tooltipTop.locator('.tooltiptextt');
  await tooltip.waitFor({ state: 'visible', timeout: 50000 });
  await tooltip.screenshot({ path: 'tooltip-top.png' });
  return (await tooltip.textContent())!;
}

async getBottomTooltipText(): Promise<string> {
  await this.tooltipBottom.hover();
  const tooltip = this.tooltipBottom.locator('.tooltiptextb');
  await tooltip.waitFor({ state: 'visible', timeout: 50000 });
  await tooltip.screenshot({ path: 'tooltip-bottom.png' });
  return (await tooltip.textContent())!;
}
  
}
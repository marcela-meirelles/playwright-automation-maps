import { Page, Locator } from '@playwright/test';

class ParkingPage {
  readonly page: Page;
//   readonly locationButton: Locator;
//   readonly datesButton: Locator;
//   readonly guestsButton: Locator;
//   readonly searchButton: Locator;

//   readonly locationInput: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.locationButton = page.getByTestId('category(static:hotels)_search-form_location_trigger');
    // this.datesButton = page.getByTestId('category(static:hotels)_search-form_dates_trigger');
    // this.guestsButton = page.getByTestId('category(static:hotels)_search-form_guests_trigger');
    // this.searchButton = page.locator('button[type="submit"]');

    // this.locationInput = page.getByTestId('category(static:hotels)_search-form_location_input');
    // getByRole('button', { name: 'Montevideo Montevideo, Montevideo Department, Uruguay' })
  }

  async search(location: string, checkInDate: string, checkOutDate: string) {
    // await this.locationButton.fill(location);
    // await this.datesButton.fill(checkInDate);
    // await this.guestsButton.fill(checkOutDate);
    // await this.searchButton.click();
  }
}

export default ParkingPage;
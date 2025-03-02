import { Page, Locator } from '@playwright/test';
import HotelsPage from './hotels.page';
import FlightsPage from './flights.page';
import CarRentalPage from './carRental.page';
import TransportationPage from './transportation.page';
import ThingsToDoPage from './thingsToDo.page';
import ShowsAndEventsPage from './showsAndEvents.page';
import DiningPage from './dining.page';
import ParkingPage from './parking.page';

class SearchPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly hotelsButton: Locator;
  readonly flightsButton: Locator;
  readonly carRentalButton: Locator;
  readonly transportationButton: Locator;
  readonly thingsToDoButton: Locator;
  readonly showsAndEventsButton: Locator;
  readonly diningButton: Locator;
  readonly parkingButton: Locator;

  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByRole('heading', { name: 'Book Everything, Anywhere.®' });
    this.hotelsButton = page.getByTestId('category-search-bar-tab(static:hotels)');
    this.flightsButton = page.getByTestId('category-search-bar-tab(static:flights)');
    this.carRentalButton = page.getByTestId('category-search-bar-tab(static:car-rental)');
    this.transportationButton = page.getByTestId('category-search-bar-tab(static:transportation)');
    this.thingsToDoButton = page.getByTestId('category-search-bar-tab(static:things-to-do)');
    this.showsAndEventsButton = page.getByTestId('category-search-bar-tab(static:shows-events)');
    this.diningButton = page.getByTestId('category-search-bar-tab(static:dining)');
    this.parkingButton = page.getByTestId('category-search-bar-tab(static:parking)');

    this.searchButton = page.locator('button[type="submit"]');
  }

  // getByTestId('category(static:hotels)_search-form_location_trigger')

  async gotoHotelsPage() {
    await this.hotelsButton.click();
    return new HotelsPage(this.page);
  }

  async gotoFlightsButton() {
    await this.flightsButton.click();
    return new FlightsPage(this.page);
  }

  async gotoCarRentalButton() {
    await this.carRentalButton.click();
    return new CarRentalPage(this.page);
  }

  async gotoTransportationButton() {
    await this.transportationButton.click();
    return new TransportationPage(this.page);
  }

  async gotoThingsToDoButton() {
    await this.thingsToDoButton.click();
    return new ThingsToDoPage(this.page);
  }

  async gotoShowsAndEventsButton() {
    await this.showsAndEventsButton.click();
    return new ShowsAndEventsPage(this.page);
  }

  async gotoDiningButton() {
    await this.diningButton.click();
    return new DiningPage(this.page);
  }

  async gotoParkingButton() {
    await this.parkingButton.click();
    return new ParkingPage(this.page);
  }

  async clickSearchButton(query: string) {
    await this.searchButton.click();
  }
}

export default SearchPage;
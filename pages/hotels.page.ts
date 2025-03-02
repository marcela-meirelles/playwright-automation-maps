import { Page, Locator } from '@playwright/test';

class HotelsPage {
    readonly page: Page;
    readonly locationButton: Locator;
    readonly datesButton: Locator;
    readonly guestsButton: Locator;
    readonly searchButton: Locator;

    readonly locationInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.locationButton = page.getByTestId('category(static:hotels)_search-form_location_trigger');
        this.datesButton = page.getByTestId('category(static:hotels)_search-form_dates_trigger');
        this.guestsButton = page.getByTestId('category(static:hotels)_search-form_guests_trigger');
        this.searchButton = page.locator('button[type="submit"]');

        this.locationInput = page.getByTestId('category(static:hotels)_search-form_location_input');

    }

    async setDestination(location: string) {
        await this.locationButton.click();
        await this.locationInput.fill(location);
        // Select the searched location
        await this.page.getByRole('button', { name: location }).click();
    }

    async setDates(checkInDate: string, checkOutDate: string) {
        await this.datesButton.click();
        // Set check-in date
        const checkInDateSelector = this.page.getByRole('button', { name: checkInDate, exact: true });
        await checkInDateSelector.click();
        // Set check-out date
        await this.page.getByRole('button', { name: checkOutDate, exact: true }).click();
        // click Apply button
        const applyButton = this.page.getByTestId('category(static:hotels)_search-form_dates_apply-button');
        await checkInDateSelector.hover();
        await this.page.mouse.wheel(0, 100);
        await applyButton.click();
    }

    async setGuests(adults: number, children: number) {
        await this.guestsButton.click();
        // Set number of adults
        for (let i = 1; i < adults; i++) {
            await this.page.getByTestId('category(static:hotels)_search-form_guests_room(1)_age(adults)_add-button').click();
        }
        // Set number of children
        for (let i = 0; i < children; i++) {
            await this.page.getByTestId('category(static:hotels)_search-form_guests_room(1)_age(children)_add-button').click();
        }
        // Click on the guests button to close the modal
        await this.guestsButton.click();
    }

    async search(destination: string, dates: { checkIn: string, checkOut: string }, guests: { adults: number, children: number }) {
        await this.setDestination(destination);
        await this.setDates(dates.checkIn, dates.checkOut);
        await this.setGuests(guests.adults, guests.children);
        await this.searchButton.click();
    }
}

export default HotelsPage;
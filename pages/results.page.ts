import { Page, Locator, expect } from '@playwright/test';

class ResultsPage {
    readonly page: Page;
    readonly changeViewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.changeViewButton = page.getByRole('button', { name: 'Grid' });

    }

    async selectMapView() {
        await this.changeViewButton.click();
        const mapViewOption = this.page.getByRole('option', { name: 'Map' });
        await mapViewOption.click();
    }

    async selectListView() {
        await this.changeViewButton.click();
        const mapViewOption = this.page.getByRole('option', { name: 'List' });
        await mapViewOption.click();
    }

    async selectGridView() {
        await this.changeViewButton.click();
        const mapViewOption = this.page.getByRole('option', { name: 'Grid' });
        await mapViewOption.click();
    }

    async selectPriceRange(min: number, max: number) {
        // getByRole('slider').filter({ hasText: '$937' })
        const minPriceHandle = this.page.locator('.mantine-Slider-thumb').first();
        const maxPriceHandle = this.page.locator('.mantine-Slider-thumb').nth(1);
        const sliderTrack = this.page.locator('.mantine-Slider-track').first();

        const sliderBound = await sliderTrack.boundingBox();
        if (sliderBound === null) {
            return;
        }
        // Calculate the target X coordinates for the min and max handles
        const minTargetX = sliderBound.x + (sliderBound.width * (min - 86) / (1714 - 86));
        const maxTargetX = sliderBound.x + (sliderBound.width * (max - 86) / (1714 - 86));
        const targetY = sliderBound.y + sliderBound.height / 2;

        // Move the min price handle
        const minHandleBox = await minPriceHandle.boundingBox();
        if (minHandleBox) {
            await this.page.mouse.move(minHandleBox.x + minHandleBox.width / 2, minHandleBox.y + minHandleBox.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(minTargetX, targetY);
            await this.page.mouse.up();
        }

        // Move the max price handle
        const maxHandleBox = await maxPriceHandle.boundingBox();
        if (maxHandleBox) {
            await this.page.mouse.move(maxHandleBox.x + maxHandleBox.width / 2, maxHandleBox.y + maxHandleBox.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(maxTargetX, targetY);
            await this.page.mouse.up();
        }

    }

    async selectGuestScore(score: string) {
        // getByRole('slider').filter({ hasText: '9.0' })
        await this.page.getByRole('checkbox', { name: 'Very Good (7+)' }).click();
    }
}

export default ResultsPage;
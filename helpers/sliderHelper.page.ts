import { Page, Locator } from 'playwright';

async function changeSlider(page: Page, thumb: Locator, slider: Locator, targetPercentage: number) {
    const thumbBoundingBox = await thumb.boundingBox();
    const sliderBoundingBox = await slider.boundingBox();

    if (thumbBoundingBox === null || sliderBoundingBox === null) {
        return; // NOTE it's probably better to throw an error here
    }

    // Start from the middle of the slider's thumb
    const startPoint = {
        x: thumbBoundingBox.x + thumbBoundingBox.width / 2,
        y: thumbBoundingBox.y + thumbBoundingBox.height / 2,
    };

    // Slide it to some endpoint determined by the target percentage
    const endPoint = {
        x: sliderBoundingBox.x + sliderBoundingBox.width * targetPercentage,
        y: thumbBoundingBox.y + thumbBoundingBox.height / 2,
    };

    await page.mouse.move(startPoint.x, startPoint.y);
    await page.mouse.down();
    await page.mouse.move(endPoint.x, endPoint.y);
    await page.mouse.up();
}
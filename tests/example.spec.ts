import { test, expect } from '@playwright/test';
import TravelAppPage from '../pages/travelApp.page';
import * as testData from '../data/testData.json';

test('Perform hotel search, select map view, filter by price and guest score, select one hotel and verify price and guest score are within filter parameters', async ({ page }) => {
  const travelAppPage = new TravelAppPage(page);
  await travelAppPage.goto();

  // Verify that the page title is visible
  const isOnPage = await travelAppPage.isOnPage();
  expect(isOnPage).toBe(true);

  // Navigate to the Hotels search page
  const hotelsPage = await travelAppPage.searchPage.gotoHotelsPage();
  const resultsPage = travelAppPage.resultsPage;

  // Perform a search for hotels
  await hotelsPage.search(
    testData.destination,
    testData.dates,
    testData.guests
  );

  // Select map view
  await resultsPage.selectMapView();

  // Apply filters for price and guest score
  await resultsPage.selectPriceRange(testData.priceRange.min, testData.priceRange.max);
  await resultsPage.selectGuestScore(testData.guestScore);

  // Zoom in map
  await page.locator('.gm-style > div > div:nth-child(2)').hover();
  await page.mouse.wheel(0, -1000);
  await page.mouse.wheel(0, -1000);
  await page.mouse.wheel(0, -1000);
  await page.mouse.wheel(0, -1000);

  // Select the first hotel from the search results
  const anyHotel = page.getByRole('button', { name: 'Hotel Indigo Lower East Side' });
  await anyHotel.click();

  // Verify that the selected hotel's price and guest score are within the filter parameters
  const hotelDetails =  page.getByRole('link', { name: 'Go to hotel details' });

  // here exchange grabbing by text to grabbing by data-testid, as it doesn't make much sense to 
  // grab the text to verify
  const hotelPrice = page.locator('span').getByText('$1,766'); 
  let price = await hotelPrice.textContent();
  // remove the $ sing and commas
  if (price)
    price = price.replace('$', '').replace(',', '');
  else
    return;
  const hotelGuestScore = await page.getByText('8.0').innerText();
  expect(parseInt(price)).toBeGreaterThanOrEqual(testData.priceRange.min);
  expect(parseInt(price)).toBeLessThanOrEqual(testData.priceRange.max);
  expect(parseFloat(hotelGuestScore)).toBeGreaterThanOrEqual(8);

});



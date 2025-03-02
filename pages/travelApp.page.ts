import { Page } from '@playwright/test';
import BasePage from './base.page';
import NavBar from './navBar.page';
import SearchPage from './search.page';
import ResultsPage from './results.page';

class TravelAppPage extends BasePage {
    readonly navBar: NavBar;
    readonly searchPage: SearchPage;
    readonly resultsPage: ResultsPage;

    constructor(page: Page) {
        super(page);
        this.navBar = new NavBar(page);
        this.searchPage = new SearchPage(page);
        this.resultsPage = new ResultsPage(page);
    }

    async goto() {
        await super.goto('https://app.simplenight.com/');
    }

    async isOnPage() {
        try {
            await this.searchPage.pageTitle.waitFor({ state: 'visible' });
            return true;
        } catch {
            return false;
        }
    }
}

export default TravelAppPage;
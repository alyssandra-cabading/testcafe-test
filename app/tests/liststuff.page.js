import { Selector } from 'testcafe';

class ListStuffPage {
  constructor() {
    this.pageId = '#list-stuff-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Asserts that this page has table w/at least 2 rows. */
  async hasTable(testController) {
    /** Recall chromedev tools inspection -- select <tr> html element */
    const rCount = Selector('tr').count;
    await testController.expect(rCount).gte(2); // greater than or equal to
  }
}

export const listStuffPage = new ListStuffPage();

import { SatterfieldsurveyinternationalPage } from './app.po';

describe('satterfieldsurveyinternational App', () => {
  let page: SatterfieldsurveyinternationalPage;

  beforeEach(() => {
    page = new SatterfieldsurveyinternationalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

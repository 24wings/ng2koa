import { TeachPage } from './app.po';

describe('teach App', () => {
  let page: TeachPage;

  beforeEach(() => {
    page = new TeachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ProgPage } from './app.po';

describe('prog App', () => {
  let page: ProgPage;

  beforeEach(() => {
    page = new ProgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

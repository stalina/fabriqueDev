import { FabriqueDevPage } from './app.po';

describe('fabrique-dev App', () => {
  let page: FabriqueDevPage;

  beforeEach(() => {
    page = new FabriqueDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

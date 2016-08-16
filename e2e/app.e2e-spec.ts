import { WeathrPage } from './app.po';

describe('weathr App', function() {
  let page: WeathrPage;

  beforeEach(() => {
    page = new WeathrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SanseAngularAppPage } from './app.po';

describe('sanse-angular-app App', function() {
  let page: SanseAngularAppPage;

  beforeEach(() => {
    page = new SanseAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { MyPersonalPagePage } from './app.po';

describe('my-personal-page App', function() {
  let page: MyPersonalPagePage;

  beforeEach(() => {
    page = new MyPersonalPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

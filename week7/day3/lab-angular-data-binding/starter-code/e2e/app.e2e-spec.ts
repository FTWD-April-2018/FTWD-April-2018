import { LabAngularDataBindingPage } from './app.po';

describe('lab-angular-data-binding App', function() {
  let page: LabAngularDataBindingPage;

  beforeEach(() => {
    page = new LabAngularDataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

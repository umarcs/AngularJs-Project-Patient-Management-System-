import { PmsDemoPage } from './app.po';

describe('pms-demo App', () => {
  let page: PmsDemoPage;

  beforeEach(() => {
    page = new PmsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { QanswerPage } from './app.po';

describe('qanswer App', () => {
  let page: QanswerPage;

  beforeEach(() => {
    page = new QanswerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

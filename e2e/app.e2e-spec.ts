import { RestApiPage } from './app.po';

describe('rest-api App', () => {
  let page: RestApiPage;

  beforeEach(() => {
    page = new RestApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

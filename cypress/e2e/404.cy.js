describe('404 페이지', () => {
  describe('존재하지 않는 url 인 경우', () => {
    beforeEach(() => {
      cy.visit('/not-found-url', { failOnStatusCode: false });
    });

    it('404 페이지를 렌더링한다.', () => {
      cy.get("[data-testid='error-page-main-image']");
      cy.contains('PAGE NOT FOUND');
      cy.contains('페이지를 찾을 수 없습니다.');
      cy.get('button');
    });

    it('버튼을 클릭하면 홈으로 이동한다.', () => {
      cy.url().then((url) => {
        cy.get('button').click();

        cy.url().should('not.eq', url);
        cy.url().should('eq', Cypress.config().baseUrl);
      });
    });
  });
});

describe('헤더', () => {
  describe('다른 페이지에서', () => {
    beforeEach(() => {
      //다른 페이지에서
      cy.visit('/posts/a4b07623-a5b8-43df-b6e2-5279c921d243');
    });

    it('"로고"를 클릭하면 home("/") 으로 이동한다.', () => {
      cy.url().then((url) => {
        cy.get('[alt="logo"]').click();

        cy.url().should('not.eq', url);
        cy.url().should('eq', Cypress.config().baseUrl);
      });
    });

    it('"블로그" 메뉴를 클릭하면 home("/") 으로 이동한다.', () => {
      cy.url().then((url) => {
        cy.contains('블로그').click();

        cy.url().should('not.eq', url);
        cy.url().should('eq', Cypress.config().baseUrl);
      });
    });
  });
});

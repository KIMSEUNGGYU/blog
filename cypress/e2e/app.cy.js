describe('블로그 홈화면', () => {
  describe('렌더 테스트', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('헤더를 렌더링한다.', () => {
      cy.get("[alt = 'logo']");
      cy.contains('블로그');
      cy.contains('시리즈');
      cy.contains('나');
    });

    it('태그들을 렌더링한다.', () => {
      cy.contains('#전체보기');
    });

    it('등록된 게시물들을 렌더링한다.', () => {
      cy.get('.css-1dlunpp > :nth-child(1)');
      cy.get('.css-1dlunpp > :nth-child(2)');
    });
  });
});

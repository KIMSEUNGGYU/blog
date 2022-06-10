// TODO-GYU: cypress 테스트 좋은 방법 찾아보기
// 우선은 dev 환경에 있는 자료들로 사용
// 🤔 THINK-GYU: cypress 테스트 좋은 방법 찾아보기
// 실제 UI 인 경우 데이터가 변동되는데 이에 따라 cypress 에서는 어떻게 할 수 있을까??

describe('블로그 홈화면', () => {
  describe('렌더 테스트', () => {
    beforeEach(() => {
      cy.visit('/');

      cy.fixture('tags.json').as('tagsData');
    });

    it('헤더를 렌더링한다.', () => {
      cy.get("[alt = 'logo']");
      cy.contains('블로그');
      cy.contains('시리즈');
      cy.contains('나');
    });

    it('태그들을 렌더링한다.', () => {
      // ❓ fixture 를 하드코딩해서 ?처리하는게 낫나??
      // cy.get('@tagsData').then(({ tags }) => {
      //   tags.map((tag) => {
      //     cy.contains(tag.name);
      //   });
      // });

      // 아니면 임의로 이렇게 테스트하는게 낫나?
      cy.contains('#전체보기');
      cy.contains('#tag1');
      cy.contains('#tag2');
      cy.contains('#자바스크립트');
    });

    it('등록된 게시물들을 렌더링한다.', () => {
      cy.get('.css-1dlunpp > li').should('have.length', 5);
    });
  });

  describe('태그 클릭 테스트', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('다른 태그(#tag1) 를 클릭하면 그와 관련된 게시물들이 확인된다.', () => {
      cy.contains('#전체보기').should('have.class', 'active');

      cy.contains('#tag1').click().should('have.class', 'active');

      cy.get('.css-1dlunpp > li').should('have.length', 2);
    });

    it('다른 태그(#tag1) 에서 기본 태그인 #전체보기 를 클릭하면 모든 게시물들을 확인할 수 있다.', () => {
      cy.contains('#tag1').click().should('have.class', 'active');

      cy.contains('#전체보기').click();

      cy.get('.css-1dlunpp > li').should('have.length', 5);
    });
  });

  describe('게시물 선택', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('특정 게시물을 선택하면 해당 게시물의 상세 페이지로 전환된다.', () => {
      cy.get('.css-1dlunpp > :nth-child(1)').click(); // 바닐라 자바스크립트로 리액트 ...

      cy.url().should('include', '/posts/a4b07623-a5b8-43df-b6e2-5279c921d24');
      cy.contains('바닐라 자바스크립트로 리액트 흉내내기 1 - 웹 컴포넌트');
      cy.contains('6/5/2022');
      cy.contains('#자바스크립트');

      // 노션 데이터 렌더
      cy.get('.notion');
    });
  });
});

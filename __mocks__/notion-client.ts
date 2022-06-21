// const NotionAPI = jest.fn();

// export { NotionAPI };

class NotionAPI {
  getPage: jest.Mock;
  constructor() {
    this.getPage = jest.fn();
  }
}

export { NotionAPI };

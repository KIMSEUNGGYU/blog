class Client {
  databases: { retrieve: jest.Mock; query: jest.Mock };
  pages: { retrieve: jest.Mock };
  constructor() {
    this.databases = {
      retrieve: jest.fn(),
      query: jest.fn(),
    };
    this.pages = {
      retrieve: jest.fn(),
    };
  }
}

export { Client };

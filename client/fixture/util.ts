import { faker } from '@faker-js/faker';

export function getRandomTags() {
  const count = faker.mersenne.rand(1, 3);
  const tags = [];

  for (let i = 0; i < count; i++) {
    tags.push({
      id: faker.random.alpha(16),
      name: faker.random.word(),
    });
  }

  return tags;
}

export function getRandomPosts() {
  const count = faker.mersenne.rand(1, 3);
  const posts = [];

  for (let i = 0; i < count; i++) {
    posts.push({
      id: faker.random.alpha(10),
      title: faker.random.words(3),
      tags: getRandomTags(),
      description: faker.lorem.sentence(5),
      createdTime: faker.date.between('2022-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z').toLocaleDateString(),
    });
  }

  return posts;
}

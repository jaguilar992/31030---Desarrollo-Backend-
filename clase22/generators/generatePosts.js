const { faker } = require("@faker-js/faker");
const fs = require("fs");
const JSONStream = require("JSONStream");

function generateUsers(n=10) {
  return Array(n).fill(null).map((user, i) => ({
    id: i+1,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`
  }));
}


function generatePosts(n=100) {
  const users = generateUsers();
  return Array(n).fill(null).map((_, i) => ({
      id: i + 1,
      title: `${faker.word.adjective()} ${faker.word.noun()} post`,
      description: faker.lorem.sentence(7),
      content: faker.lorem.paragraph(),
      author: users[faker.datatype.number({min: 0, max: users.length - 1})],
      comments: Array(faker.datatype.number({min: 0, max: 10})).fill(null).map((_, j) => ({
        id: j+1,
        commenter: users[faker.datatype.number({min: 0, max: users.length - 1})],
        content: faker.lorem.paragraph()
      }))
    }))
}

const posts = generatePosts();
try {
  fs.writeFileSync(__dirname +"/../data/posts.json", JSON.stringify(posts, null, 2), "utf-8");
} catch (err) {
  console.log("🚀 ~ file: generateCompany.js ~ line 30 ~ err", err)
}
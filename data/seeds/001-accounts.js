
const faker = require('faker');

const createFakeUsers = () =>({
  'user_name':faker.internet.email(),
  'hashed_password':faker.random.alphaNumeric()
})

const desiredFakes = 100;
const fakesContainer = []
for(let i = 0; i < desiredFakes; i ++){
  let fake = createFakeUsers();
  fakesContainer.push(fake)
}

console.log(fakesContainer)

exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert(fakesContainer);
    });
};

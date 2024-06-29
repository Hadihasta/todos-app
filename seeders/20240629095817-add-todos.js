'use strict';

const fs = require("fs")

let data = fs.readFileSync("./todos.json", "utf-8");

// pharsing data string ke json

data = JSON.parse(data).map((element) => {
  return {
    title: element.title,
    description: element.description,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos',data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos',null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

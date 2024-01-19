function getRandomUserData() {
    const users = require("../../fixtures/userPurchaseData.json").users;
    const userKeys = Object.keys(users);
    const randomUserKey = userKeys[Math.floor(Math.random() * userKeys.length)];
  
    return users[randomUserKey];
  }
  
  module.exports = {
    getRandomUserData,
  };
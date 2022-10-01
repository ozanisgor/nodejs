const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'learning_mongo';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = await client.db(dbName);
  return db;
  // the following code examples can be pasted here...
}

module.exports = main;

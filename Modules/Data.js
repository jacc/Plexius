const fs = require('fs');

module.exports = class Data {
  constructor(client) {
    this.client = client;
  }

  async load() {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(fs.readFileSync(__dirname + '/../Database.json')));
    })
  }

  async save(data) {
    return new Promise((resolve, reject) => {
      resolve(fs.writeFileSync(__dirname + '/../Database.json', JSON.stringify(data, null, "\t")));
    })
  }
}

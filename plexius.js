const Discord = require('discord.js')
const chalk  = require('chalk')
const events = require('./Modules/Events.js');
const data   = require('./Modules/Data.js');

const client = new class Client extends Discord.Client {
  constructor() {
    super();

    this.events   = new events(this)
    this.data     = new data(this);
    this.commands = new Map();

    // Event Handling
    this.on('ready', () => {
      this.events.ready();
    })
    this.on('message', message => {
      this.events.message(message);
    })
    this.on('error', error => {
      console.error(error);
    })
    this.on('warn', error => {
      console.warn(error)
    })

    // Login
    this.login(require('./config.json').token);

  }

}

process.on('unhandledRejection', err => console.error(err))

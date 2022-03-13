const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const conf = require('./ayarlar')
const commands = [{
  name: 'text',
  description: 'Text Modals Komutu'
}]; 

const rest = new REST({ version: '9' }).setToken(conf.token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(conf.botid,conf.sunucid),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
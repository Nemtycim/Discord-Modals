const { Client } = require('discord.js') 
const { Modal, TextInputComponent, showModal, Formatters } = require('discord-modals') 
const client = new Client({ intents: 32767 }) 
const cnf = require('./ayarlar')
const discordModals = require('discord-modals') 
discordModals(client); 

client.on('ready', () => {
    console.log('Bot Hazır')
})
const modal = new Modal() 
.setCustomId('birincitanimid')
.setTitle('BİR METİN GİR')
.addComponents([
  new TextInputComponent() 
  .setCustomId('ikincitanimid')
  .setLabel('Text Gir')
  .setStyle('SHORT')
  .setMinLength(4)
  .setMaxLength(65)
  .setPlaceholder('Yazını yaz')
  .setRequired(true) 
]);

client.on('interactionCreate', (interaction) => {
  
  if(interaction.commandName === 'text'){
    showModal(modal, {
      client: client, 
      interaction: interaction 
    })
  }
  
});

client.on('modalSubmit', async (modal) => {
    if(modal.customId === 'birincitanimid'){
      const firstResponse = modal.getTextInputValue('ikincitanimid')
      modal.reply(`Yeni Gelen Modulu Denedin!

\`\`\`${firstResponse}\`\`\``)
    }  
  });



  client.login(cnf.token)
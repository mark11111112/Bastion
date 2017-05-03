/*
 * Copyright (C) 2017 Sankarsan Kampa
 *                    https://sankarsankampa.com/contact
 *
 * This file is a part of Bastion Discord BOT.
 *                        https://github.com/snkrsnkampa/Bastion
 *
 * This code is licensed under the SNKRSN Shared License. It is free to
 * download, copy, compile, use, study and refer under the terms of the
 * SNKRSN Shared License. You can modify the code only for personal or
 * internal use only. However, you can not redistribute the code without
 * explicitly getting permission fot it.
 *
 * Bastion BOT is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY. See the SNKRSN Shared License for
 * more details.
 *
 * You should have received a copy of the SNKRSN Shared License along
 * with this program. If not, see <https://github.com/snkrsnkampa/Bastion/LICENSE>.
 */

exports.run = (Bastion, message, args) => {
  if (!Bastion.credentials.ownerId.includes(message.author.id)) return Bastion.log.info('User doesn\'t have permission to use this command.');
  if (args.length < 1) {
    return message.channel.send({embed: {
      color: Bastion.colors.yellow,
      title: 'Usage',
      description: `\`${Bastion.config.prefix}${this.help.usage}\``
    }}).catch(e => {
      Bastion.log.error(e.stack);
    });
  }

  let guilds = Bastion.guilds.filter(g => g.name.toLowerCase().includes(args.join(' ').toLowerCase())).map(g => g.name);
  let total = guilds.length;
  guilds = total > 0 ? guilds.slice(0,10).join(', ') : 'None';

  message.channel.send({embed: {
    color: Bastion.colors.dark_grey,
    title: 'Server search',
    description: `Found **${total}** servers with **${args.join(' ')}** in it's name.`,
    fields: [
      {
        name: 'Servers',
        value: total > 10 ? `and ${total - 10} more.` : guilds
      }
    ]
  }}).catch(e => {
    Bastion.log.error(e.stack);
  });
};

exports.config = {
  aliases: ['servers']
};

exports.help = {
  name: 'searchserver',
  description: 'Searches for servers, by specified text, the bot is connected to.',
  botPermission: '',
  permission: 'Bot Owner',
  usage: 'searchServer <name>',
  example: ['searchServer Bastion']
};

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

  if (args.length >= 1) {
    Bastion.user.setGame(args.join(' ')).then(() => {
      message.channel.send({embed: {
        color: Bastion.colors.yellow,
        description: `${Bastion.user.username}'s game is now set to **${args.join(' ')}**`
      }}).catch(e => {
        Bastion.log.error(e.stack);
      });
    }).catch(e => {
      Bastion.log.error(e.stack);
    });
  }
  else {
    Bastion.user.setGame(Bastion.config.game).then(() => {
      message.channel.send({embed: {
        color: Bastion.colors.green,
        description: `${Bastion.user.username}'s game is now set to the default game **${Bastion.config.game}**`
      }}).catch(e => {
        Bastion.log.error(e.stack);
      });
    }).catch(e => {
      Bastion.log.error(e.stack);
    });
  }
};

exports.config = {
  aliases: ['setg']
};

exports.help = {
  name: 'setgame',
  description: 'Sets the bot\'s game to the given text. If no text is given, sets the bot\'s game to the default game (given in `config.json`).',
  botPermission: '',
  permission: 'Bot Owner',
  usage: 'setGame [text]',
  example: ['setGame with minions!', 'setGame']
};

const a66_0x1fae=['193102RpTgDx',':one:\u2003:two:\u2003:three:\x0a\x0a:four:\u2003:five:\u2003:six:\x0a\x0a:seven:\u2003:eight:\u2003:nine:','apply','seven','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20didn\x27t\x20make\x20a\x20move.\x20Game\x20terminated.','playerTwo','SOMEWHAT_DARK','fields','**\x20won\x20against\x20**','message','getPositionString','moves','checkWinner','🇽\x20Player\x20One','@bastion/tesseract','constructor','2mYRBtP','two','BASTION_ERROR_TYPE','**\x20and\x20**','board','first','exports','176938RAeYNS','eight','one','channel','You\x20have\x2015\x20seconds\x20to\x20make\x20each\x20move.','COLORS','edit','member','awaitMessages','embeds','ticTacToe','delete','DiscordError','five','displayName','bot','../../utils/errors','six','getState','A\x20game\x20is\x20already\x20running\x20in\x20this\x20channel.\x20Wait\x20for\x20it\x20to\x20end\x20before\x20starting\x20another.','Board','191645kqHVAN','guild','19546FFSzlr','parseInt','INVALID_COMMAND_SYNTAX','Game\x20Ended','**.','get','set','name','members','Players\x20can\x20type\x20the\x20position\x20number\x20to\x20make\x20their\x20moves.','103237wMObGy','77373zoKmKb','has','catch','content','test','ticTacToe\x20@USER','481882gUEpzq','Tic\x20Tac\x20Toe','send','exec','ttt','games','mentions','1UAMLty','6ojgIUe','26oYQEnG','size','collectMove','INDIGO','length','author','four','Constants','playerOne'];const a66_0xd905=function(_0x7866a7,_0x54a284){_0x7866a7=_0x7866a7-0x189;let _0x33d016=a66_0x1fae[_0x7866a7];return _0x33d016;};const a66_0x15d920=a66_0xd905;(function(_0xe0592,_0x165e14){const _0x332cbb=a66_0xd905;while(!![]){try{const _0x4ab4a7=-parseInt(_0x332cbb(0x1bc))+parseInt(_0x332cbb(0x1c3))+-parseInt(_0x332cbb(0x1d5))+parseInt(_0x332cbb(0x1cb))*parseInt(_0x332cbb(0x1bd))+-parseInt(_0x332cbb(0x19b))*-parseInt(_0x332cbb(0x194))+-parseInt(_0x332cbb(0x1cc))*parseInt(_0x332cbb(0x1b2))+parseInt(_0x332cbb(0x1b0))*-parseInt(_0x332cbb(0x1ca));if(_0x4ab4a7===_0x165e14)break;else _0xe0592['push'](_0xe0592['shift']());}catch(_0xbbf875){_0xe0592['push'](_0xe0592['shift']());}}}(a66_0x1fae,0x4a2c8));const a66_0x87cd2d=function(){let _0x1a8cd1=!![];return function(_0x4b580c,_0x239c51){const _0x5809ff=_0x1a8cd1?function(){const _0x2eafdf=a66_0xd905;if(_0x239c51){const _0x1ad5e2=_0x239c51[_0x2eafdf(0x1d7)](_0x4b580c,arguments);return _0x239c51=null,_0x1ad5e2;}}:function(){};return _0x1a8cd1=![],_0x5809ff;};}(),a66_0x310ffb=a66_0x87cd2d(this,function(){const _0x27a19a=function(){const _0x7a7060=a66_0xd905,_0x592c4e=_0x27a19a[_0x7a7060(0x193)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x7a7060(0x193)](_0x7a7060(0x1d9));return!_0x592c4e[_0x7a7060(0x1c1)](a66_0x310ffb);};return _0x27a19a();});a66_0x310ffb();'use strict';const tesseract_1=require(a66_0x15d920(0x192)),errors=require(a66_0x15d920(0x1ab));module[a66_0x15d920(0x19a)]=class TicTacToeCommand extends tesseract_1['Command']{constructor(){const _0x36964d=a66_0x15d920;super(_0x36964d(0x1a5),{'description':'It\x20allows\x20you\x20to\x20play\x20a\x20game\x20of\x20Tic\x20Tac\x20Toe\x20with\x20another\x20member\x20of\x20the\x20server.','triggers':[_0x36964d(0x1c7)],'arguments':{},'scope':_0x36964d(0x1b1),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x36964d(0x1c2)]}),this[_0x36964d(0x18e)]=_0xf6b989=>{const _0x3ba10d=_0x36964d;if(_0xf6b989===0x0)return _0x3ba10d(0x19d);if(_0xf6b989===0x1)return _0x3ba10d(0x195);if(_0xf6b989===0x2)return'three';if(_0xf6b989===0x3)return _0x3ba10d(0x1d2);if(_0xf6b989===0x4)return _0x3ba10d(0x1a8);if(_0xf6b989===0x5)return _0x3ba10d(0x1ac);if(_0xf6b989===0x6)return _0x3ba10d(0x1d8);if(_0xf6b989===0x7)return _0x3ba10d(0x19c);if(_0xf6b989===0x8)return'nine';},this[_0x36964d(0x1ad)]=(_0x5d9c0f,_0x182dd7)=>{const _0x2eb92a=_0x36964d;if(_0x5d9c0f[_0x182dd7]===-0x1)return':'+this[_0x2eb92a(0x18e)](_0x182dd7)+':';if(_0x5d9c0f[_0x182dd7]===0x0)return'🇴';if(_0x5d9c0f[_0x182dd7]===0x1)return'🇽';},this[_0x36964d(0x190)]=_0x15709a=>{if(_0x15709a[0x0]!==-0x1&&_0x15709a[0x1]===_0x15709a[0x0]&&_0x15709a[0x2]===_0x15709a[0x0])return _0x15709a[0x0];if(_0x15709a[0x3]!==-0x1&&_0x15709a[0x4]===_0x15709a[0x3]&&_0x15709a[0x5]===_0x15709a[0x3])return _0x15709a[0x3];if(_0x15709a[0x6]!==-0x1&&_0x15709a[0x7]===_0x15709a[0x6]&&_0x15709a[0x8]===_0x15709a[0x6])return _0x15709a[0x6];if(_0x15709a[0x0]!==-0x1&&_0x15709a[0x3]===_0x15709a[0x0]&&_0x15709a[0x6]===_0x15709a[0x0])return _0x15709a[0x0];if(_0x15709a[0x1]!==-0x1&&_0x15709a[0x4]===_0x15709a[0x1]&&_0x15709a[0x7]===_0x15709a[0x1])return _0x15709a[0x1];if(_0x15709a[0x2]!==-0x1&&_0x15709a[0x5]===_0x15709a[0x2]&&_0x15709a[0x8]===_0x15709a[0x2])return _0x15709a[0x2];if(_0x15709a[0x0]!==-0x1&&_0x15709a[0x4]===_0x15709a[0x0]&&_0x15709a[0x8]===_0x15709a[0x0])return _0x15709a[0x0];if(_0x15709a[0x2]!==-0x1&&_0x15709a[0x4]===_0x15709a[0x2]&&_0x15709a[0x6]===_0x15709a[0x2])return _0x15709a[0x2];return null;},this[_0x36964d(0x1ce)]=async _0x31c7b2=>{const _0x5975fe=_0x36964d,_0x26e55c=this['games']['get'](_0x31c7b2),_0x8fb594=await _0x26e55c[_0x5975fe(0x18d)][_0x5975fe(0x19e)][_0x5975fe(0x1a3)](_0x122951=>!_0x122951[_0x5975fe(0x1d1)][_0x5975fe(0x1aa)]&&_0x122951['content'][_0x5975fe(0x1d0)]===0x1&&Number[_0x5975fe(0x1b3)](_0x122951['content'])>0x0&&Number[_0x5975fe(0x1b3)](_0x122951[_0x5975fe(0x1c0)])<0xa&&_0x26e55c[_0x5975fe(0x198)][Number[_0x5975fe(0x1b3)](_0x122951[_0x5975fe(0x1c0)])-0x1]===-0x1&&(_0x26e55c[_0x5975fe(0x18f)]%0x2===0x0?_0x122951['member']['id']===_0x26e55c[_0x5975fe(0x1d4)]['id']:_0x122951[_0x5975fe(0x1a2)]['id']===_0x26e55c['playerTwo']['id']),{'time':0x3a98,'max':0x1});if(_0x8fb594[_0x5975fe(0x1cd)]!==0x1){this[_0x5975fe(0x1c8)][_0x5975fe(0x1a6)](_0x31c7b2);throw new Error((_0x26e55c[_0x5975fe(0x18f)]%0x2===0x0?_0x26e55c[_0x5975fe(0x1d4)]:_0x26e55c['playerTwo'])[_0x5975fe(0x1a9)]+_0x5975fe(0x1da));}_0x26e55c[_0x5975fe(0x198)][Number[_0x5975fe(0x1b3)](_0x8fb594['first']()[_0x5975fe(0x1c0)])-0x1]=_0x26e55c['moves']%0x2===0x0?0x1:0x0,_0x26e55c[_0x5975fe(0x18f)]+=0x1,this[_0x5975fe(0x1c8)][_0x5975fe(0x1b8)](_0x31c7b2,_0x26e55c),await _0x26e55c['message'][_0x5975fe(0x1a1)]({'embed':{..._0x26e55c[_0x5975fe(0x18d)][_0x5975fe(0x1a4)][0x0],'fields':[_0x26e55c[_0x5975fe(0x18d)][_0x5975fe(0x1a4)][0x0][_0x5975fe(0x18b)][0x0],_0x26e55c[_0x5975fe(0x18d)][_0x5975fe(0x1a4)][0x0][_0x5975fe(0x18b)][0x1],{'name':_0x5975fe(0x1af),'value':this[_0x5975fe(0x1ad)](_0x26e55c[_0x5975fe(0x198)],0x0)+'\u2003'+this['getState'](_0x26e55c[_0x5975fe(0x198)],0x1)+'\u2003'+this[_0x5975fe(0x1ad)](_0x26e55c['board'],0x2)+'\x0a\x0a'+this[_0x5975fe(0x1ad)](_0x26e55c[_0x5975fe(0x198)],0x3)+'\u2003'+this[_0x5975fe(0x1ad)](_0x26e55c['board'],0x4)+'\u2003'+this['getState'](_0x26e55c['board'],0x5)+'\x0a\x0a'+this[_0x5975fe(0x1ad)](_0x26e55c[_0x5975fe(0x198)],0x6)+'\u2003'+this[_0x5975fe(0x1ad)](_0x26e55c[_0x5975fe(0x198)],0x7)+'\u2003'+this[_0x5975fe(0x1ad)](_0x26e55c[_0x5975fe(0x198)],0x8)}]}});},this[_0x36964d(0x1c6)]=async _0x34fbda=>{const _0x3f5de4=_0x36964d;if(!_0x34fbda[_0x3f5de4(0x1c9)][_0x3f5de4(0x1ba)][_0x3f5de4(0x1cd)])throw new errors[(_0x3f5de4(0x1a7))](errors[_0x3f5de4(0x196)][_0x3f5de4(0x1b4)],this[_0x3f5de4(0x1b9)]);if(this[_0x3f5de4(0x1c8)][_0x3f5de4(0x1be)](_0x34fbda[_0x3f5de4(0x19e)]['id']))throw new errors['DiscordError'](errors[_0x3f5de4(0x196)]['ERROR'],_0x3f5de4(0x1ae));const _0x15a653=await _0x34fbda[_0x3f5de4(0x19e)][_0x3f5de4(0x1c5)]({'embed':{'color':tesseract_1[_0x3f5de4(0x1d3)]['COLORS'][_0x3f5de4(0x1cf)],'title':_0x3f5de4(0x1c4),'description':_0x3f5de4(0x1bb),'fields':[{'name':_0x3f5de4(0x191),'value':_0x34fbda[_0x3f5de4(0x1a2)][_0x3f5de4(0x1a9)],'inline':!![]},{'name':'🇴\x20Player\x20Two','value':_0x34fbda[_0x3f5de4(0x1c9)][_0x3f5de4(0x1ba)][_0x3f5de4(0x199)]()[_0x3f5de4(0x1a9)],'inline':!![]},{'name':_0x3f5de4(0x1af),'value':_0x3f5de4(0x1d6)}],'footer':{'text':_0x3f5de4(0x19f)}}});this[_0x3f5de4(0x1c8)][_0x3f5de4(0x1b8)](_0x34fbda[_0x3f5de4(0x19e)]['id'],{'playerOne':_0x34fbda[_0x3f5de4(0x1a2)],'playerTwo':_0x34fbda[_0x3f5de4(0x1c9)]['members'][_0x3f5de4(0x199)](),'message':_0x15a653,'board':new Array(0x9)['fill'](-0x1),'moves':0x0});while(!![]){await this[_0x3f5de4(0x1ce)](_0x34fbda[_0x3f5de4(0x19e)]['id']);const _0x1df352=this[_0x3f5de4(0x1c8)][_0x3f5de4(0x1b7)](_0x34fbda[_0x3f5de4(0x19e)]['id']);if(!_0x1df352)break;const _0x50a23c=this[_0x3f5de4(0x190)](_0x1df352[_0x3f5de4(0x198)]);if(typeof _0x50a23c==='number'){this['games'][_0x3f5de4(0x1a6)](_0x34fbda[_0x3f5de4(0x19e)]['id']),_0x34fbda['channel']['send']({'embed':{'color':tesseract_1[_0x3f5de4(0x1d3)][_0x3f5de4(0x1a0)][_0x3f5de4(0x18a)],'author':{'name':_0x3f5de4(0x1c4)},'title':'Game\x20Ended','description':'**'+(_0x50a23c?_0x1df352[_0x3f5de4(0x1d4)]:_0x1df352[_0x3f5de4(0x189)])[_0x3f5de4(0x1a9)]+_0x3f5de4(0x18c)+(_0x50a23c?_0x1df352[_0x3f5de4(0x189)]:_0x1df352[_0x3f5de4(0x1d4)])['displayName']+_0x3f5de4(0x1b6)}})['catch'](()=>{});break;}if(_0x1df352[_0x3f5de4(0x18f)]===0x9){this[_0x3f5de4(0x1c8)][_0x3f5de4(0x1a6)](_0x34fbda[_0x3f5de4(0x19e)]['id']),_0x34fbda[_0x3f5de4(0x19e)]['send']({'embed':{'color':tesseract_1[_0x3f5de4(0x1d3)]['COLORS']['SOMEWHAT_DARK'],'author':{'name':'Tic\x20Tac\x20Toe'},'title':_0x3f5de4(0x1b5),'description':'The\x20game\x20ended\x20in\x20a\x20tie\x20between\x20**'+_0x1df352[_0x3f5de4(0x1d4)][_0x3f5de4(0x1a9)]+_0x3f5de4(0x197)+_0x1df352[_0x3f5de4(0x189)][_0x3f5de4(0x1a9)]+'**.'}})[_0x3f5de4(0x1bf)](()=>{});break;}}},this[_0x36964d(0x1c8)]=new Map();}};
const a142_0x4c41=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20to\x20search\x20for\x20information\x20on\x20the\x20specified\x20game.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','cover','url','Powered\x20by\x20IGDB','channel','total_rating','exec','name','test','/games/search/','COLORS','INVALID_COMMAND_SYNTAX','exports','game','Links','../../utils/omnic','join','length','121018tttsjZ','IRIS','Constants','Command','json','summary','send','20399HOImcU','toFixed','makeRequest','constructor','1197972cyXtak','apply','1QCuIPX','first_release_date','947129JxbYoR','228406lQpOEn','Rating','NOT_FOUND','slice','5CpFuDa','487585xqgldK','527206sdWFqE','1viiENp','version_title','\x0a...','websites','DiscordError','sanitize','Release\x20Date'];const a142_0x1b35=function(_0xd34236,_0xea17ba){_0xd34236=_0xd34236-0x182;let _0x1049c7=a142_0x4c41[_0xd34236];return _0x1049c7;};const a142_0x458fae=a142_0x1b35;(function(_0x4534f0,_0xe9f0a){const _0x7e5fdc=a142_0x1b35;while(!![]){try{const _0x583da2=-parseInt(_0x7e5fdc(0x1aa))+-parseInt(_0x7e5fdc(0x182))+-parseInt(_0x7e5fdc(0x184))*-parseInt(_0x7e5fdc(0x1ae))+-parseInt(_0x7e5fdc(0x1a6))+parseInt(_0x7e5fdc(0x183))+-parseInt(_0x7e5fdc(0x19f))*-parseInt(_0x7e5fdc(0x1b3))+parseInt(_0x7e5fdc(0x1af))*parseInt(_0x7e5fdc(0x1ac));if(_0x583da2===_0xe9f0a)break;else _0x4534f0['push'](_0x4534f0['shift']());}catch(_0x1dae37){_0x4534f0['push'](_0x4534f0['shift']());}}}(a142_0x4c41,0x92f13));const a142_0x55472a=function(){let _0x272643=!![];return function(_0x321201,_0x4308b6){const _0xc55554=_0x272643?function(){const _0x253f4d=a142_0x1b35;if(_0x4308b6){const _0x89da06=_0x4308b6[_0x253f4d(0x1ab)](_0x321201,arguments);return _0x4308b6=null,_0x89da06;}}:function(){};return _0x272643=![],_0xc55554;};}(),a142_0x17b4bc=a142_0x55472a(this,function(){const _0x3f2f3e=function(){const _0x25af84=a142_0x1b35,_0x137e09=_0x3f2f3e[_0x25af84(0x1a9)](_0x25af84(0x18d))()[_0x25af84(0x1a9)](_0x25af84(0x18b));return!_0x137e09[_0x25af84(0x195)](a142_0x17b4bc);};return _0x3f2f3e();});a142_0x17b4bc();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require('../../utils/errors'),omnic=require(a142_0x458fae(0x19c));module[a142_0x458fae(0x199)]=class GameCommand extends tesseract_1[a142_0x458fae(0x1a2)]{constructor(){const _0x5ec246=a142_0x458fae;super(_0x5ec246(0x19a),{'description':_0x5ec246(0x18c),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['game\x20TITLE']}),this[_0x5ec246(0x189)]=_0x319fd9=>{const _0x348254=_0x5ec246;return _0x319fd9['length']>0x7d0?_0x319fd9[_0x348254(0x1b2)](0x0,0x7d0)+_0x348254(0x186):_0x319fd9;},this[_0x5ec246(0x193)]=async(_0x57b8c5,_0x4d8fcc)=>{const _0x4a42ba=_0x5ec246;if(!_0x4d8fcc['_'][_0x4a42ba(0x19e)])throw new errors[(_0x4a42ba(0x188))](errors['BASTION_ERROR_TYPE'][_0x4a42ba(0x198)],this['name']);const _0x1ab0b0=_0x4d8fcc['_']['join']('\x20'),_0x3dc873=await omnic[_0x4a42ba(0x1a8)](_0x4a42ba(0x196)+_0x1ab0b0),_0x2d6b75=await _0x3dc873[_0x4a42ba(0x1a3)]();if(!_0x2d6b75[_0x4a42ba(0x19e)])throw new Error(_0x4a42ba(0x1b1));await _0x57b8c5[_0x4a42ba(0x191)][_0x4a42ba(0x1a5)]({'embed':{'color':tesseract_1[_0x4a42ba(0x1a1)][_0x4a42ba(0x197)][_0x4a42ba(0x1a0)],'author':{'name':_0x2d6b75[0x0][_0x4a42ba(0x185)]},'title':_0x2d6b75[0x0][_0x4a42ba(0x194)],'url':_0x2d6b75[0x0][_0x4a42ba(0x18f)],'description':this[_0x4a42ba(0x189)](_0x2d6b75[0x0][_0x4a42ba(0x1a4)]),'fields':[{'name':_0x4a42ba(0x1b0),'value':_0x2d6b75[0x0][_0x4a42ba(0x192)]?_0x2d6b75[0x0]['total_rating'][_0x4a42ba(0x1a7)](0x2):'-','inline':!![]},{'name':_0x4a42ba(0x18a),'value':_0x2d6b75[0x0]['first_release_date']?new Date(_0x2d6b75[0x0][_0x4a42ba(0x1ad)]*0x3e8)['toDateString']():'-','inline':!![]},{'name':_0x4a42ba(0x19b),'value':_0x2d6b75[0x0][_0x4a42ba(0x187)]?_0x2d6b75[0x0][_0x4a42ba(0x187)][_0x4a42ba(0x19d)]('\x0a'):'-'}],'image':{'url':_0x2d6b75[0x0][_0x4a42ba(0x18e)]},'footer':{'text':_0x4a42ba(0x190)}}});};}};
const a84_0x17d7=['MANAGE_GUILD','Constants','user','resolver','language','226699NQiUOX','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','1277093CdzNbE','info','apply','grant\x20--coins\x20NUMBER','761382KSAodW','20685ooIsbD','566719RljpEC','3PUCTWc','coins','resolveGuildMember','errors','GREEN','grantMembers','test','updateOne','guild','COLORS','4IFkjiz','updateMany','author','tag','default','grant','grant\x20--user\x20USER\x20--coins\x20NUMBER','Command','locale','document','send','return\x20/\x22\x20+\x20this\x20+\x20\x22/','@bastion/tesseract','426772UtarBN','grantMember','client','INVALID_COMMAND_SYNTAX','It\x20allows\x20you\x20to\x20grant\x20experience\x20or\x20coins\x20to\x20the\x20members\x20of\x20the\x20server.','channel','BASTION_ERROR_TYPE','../../utils/errors','grant\x20--xp\x20NUMBER','DiscordError','exports','643240eVuRiM','1KcarNn','constructor','displayName','getString'];const a84_0x4803=function(_0xbcf591,_0x59ca3a){_0xbcf591=_0xbcf591-0x123;let _0x5b48d1=a84_0x17d7[_0xbcf591];return _0x5b48d1;};const a84_0x14b2e4=a84_0x4803;(function(_0x48414f,_0x5e3c28){const _0x3ae298=a84_0x4803;while(!![]){try{const _0x4cf3f1=parseInt(_0x3ae298(0x13b))+-parseInt(_0x3ae298(0x13c))+parseInt(_0x3ae298(0x13d))*parseInt(_0x3ae298(0x134))+parseInt(_0x3ae298(0x13a))+-parseInt(_0x3ae298(0x136))+-parseInt(_0x3ae298(0x12a))*parseInt(_0x3ae298(0x12b))+-parseInt(_0x3ae298(0x154))*-parseInt(_0x3ae298(0x147));if(_0x4cf3f1===_0x5e3c28)break;else _0x48414f['push'](_0x48414f['shift']());}catch(_0x19de86){_0x48414f['push'](_0x48414f['shift']());}}}(a84_0x17d7,0xa68d8));const a84_0x38a0e7=function(){let _0x11631a=!![];return function(_0x5ea678,_0xf673ab){const _0x7a6e8=_0x11631a?function(){const _0x294b51=a84_0x4803;if(_0xf673ab){const _0x23bca7=_0xf673ab[_0x294b51(0x138)](_0x5ea678,arguments);return _0xf673ab=null,_0x23bca7;}}:function(){};return _0x11631a=![],_0x7a6e8;};}(),a84_0x568242=a84_0x38a0e7(this,function(){const _0xaec956=function(){const _0x1d21e7=a84_0x4803,_0xd12a74=_0xaec956[_0x1d21e7(0x12c)](_0x1d21e7(0x152))()[_0x1d21e7(0x12c)](_0x1d21e7(0x135));return!_0xd12a74[_0x1d21e7(0x143)](a84_0x568242);};return _0xaec956();});a84_0x568242();'use strict';const tesseract_1=require(a84_0x14b2e4(0x153)),Member_1=require('../../models/Member'),errors=require(a84_0x14b2e4(0x126));module[a84_0x14b2e4(0x129)]=class GrantCommand extends tesseract_1[a84_0x14b2e4(0x14e)]{constructor(){const _0x2e6c38=a84_0x14b2e4;super(_0x2e6c38(0x14c),{'description':_0x2e6c38(0x123),'triggers':[],'arguments':{'default':{'xp':0x0,'coins':0x0},'number':['xp',_0x2e6c38(0x13e)],'string':[_0x2e6c38(0x131)]},'scope':_0x2e6c38(0x145),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x2e6c38(0x12f)],'syntax':[_0x2e6c38(0x127),_0x2e6c38(0x139),'grant\x20--user\x20USER\x20--xp\x20NUMBER',_0x2e6c38(0x14d)]}),this['exec']=async(_0x11060b,_0x1209b7)=>{const _0x219579=_0x2e6c38;if(!_0x1209b7['xp']&&!_0x1209b7[_0x219579(0x13e)])throw new errors[(_0x219579(0x128))](errors[_0x219579(0x125)][_0x219579(0x157)],this['name']);if(_0x1209b7[_0x219579(0x131)]){const _0x160db4=this[_0x219579(0x156)][_0x219579(0x132)][_0x219579(0x13f)](_0x11060b[_0x219579(0x145)],_0x1209b7['user']);if(!_0x160db4)throw new Error(this[_0x219579(0x156)][_0x219579(0x14f)]['getString'](_0x11060b[_0x219579(0x145)][_0x219579(0x150)][_0x219579(0x133)],_0x219579(0x140),'memberNotFound'));const _0x157448=await Member_1[_0x219579(0x14b)]['findOne']({'user':_0x160db4['id'],'guild':_0x11060b[_0x219579(0x145)]['id']});if(!_0x157448)throw new Error(this[_0x219579(0x156)][_0x219579(0x14f)][_0x219579(0x12e)](_0x11060b[_0x219579(0x145)]['document'][_0x219579(0x133)],'errors','profileNotFound',_0x160db4[_0x219579(0x131)][_0x219579(0x14a)]));return await Member_1[_0x219579(0x14b)][_0x219579(0x144)]({'user':_0x160db4['id'],'guild':_0x11060b['guild']['id']},{'$inc':{'experience':_0x1209b7['xp']?_0x1209b7['xp']:0x0,'balance':_0x1209b7[_0x219579(0x13e)]?_0x1209b7['coins']:0x0}}),await _0x11060b[_0x219579(0x124)][_0x219579(0x151)]({'embed':{'color':tesseract_1[_0x219579(0x130)][_0x219579(0x146)][_0x219579(0x141)],'description':this[_0x219579(0x156)][_0x219579(0x14f)][_0x219579(0x12e)](_0x11060b[_0x219579(0x145)]['document'][_0x219579(0x133)],_0x219579(0x137),_0x219579(0x155),_0x11060b[_0x219579(0x149)][_0x219579(0x14a)],_0x1209b7['xp']?_0x1209b7['xp']:0x0,_0x1209b7[_0x219579(0x13e)]?_0x1209b7[_0x219579(0x13e)]:0x0,_0x160db4[_0x219579(0x12d)])}});}return await Member_1[_0x219579(0x14b)][_0x219579(0x148)]({'guild':_0x11060b[_0x219579(0x145)]['id']},{'$inc':{'experience':_0x1209b7['xp']?_0x1209b7['xp']:0x0,'balance':_0x1209b7[_0x219579(0x13e)]?_0x1209b7['coins']:0x0}}),await _0x11060b[_0x219579(0x124)]['send']({'embed':{'color':tesseract_1[_0x219579(0x130)]['COLORS'][_0x219579(0x141)],'description':this[_0x219579(0x156)][_0x219579(0x14f)]['getString'](_0x11060b[_0x219579(0x145)][_0x219579(0x150)][_0x219579(0x133)],_0x219579(0x137),_0x219579(0x142),_0x11060b[_0x219579(0x149)][_0x219579(0x14a)],_0x1209b7['xp']?_0x1209b7['xp']:0x0,_0x1209b7['coins']?_0x1209b7[_0x219579(0x13e)]:0x0)}});};}};
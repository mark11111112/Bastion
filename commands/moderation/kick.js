const a103_0x4618=['ownerID','catch','INVALID_COMMAND_SYNTAX','resolver','errors','ORANGE','BASTION_ERROR_TYPE','return\x20/\x22\x20+\x20this\x20+\x20\x22/','787297aserRR','2149rfHNZQ','constructor','channel','417CDdPfF','name','COLORS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','775434DziqIL','language','memberKick','locale','55SnqMJy','kick\x20--user\x20USER_ID\x20--\x20REASON','info','send','316254mkFZvx','exports','230384VXHGzS','28326IxxElU','Reason','join','guild','6pEZUjC','../../utils/errors','canManage','Constants','4633oRKxYs','getString','client','exec','author','user','document','resolveGuildMember','KICK_MEMBERS'];const a103_0x1341=function(_0x57c7e3,_0x3d6897){_0x57c7e3=_0x57c7e3-0xf9;let _0x2324ce=a103_0x4618[_0x57c7e3];return _0x2324ce;};const a103_0x4f5841=a103_0x1341;(function(_0x2dfa74,_0x39af8a){const _0x4bd4ea=a103_0x1341;while(!![]){try{const _0x515f24=-parseInt(_0x4bd4ea(0x10d))+parseInt(_0x4bd4ea(0xfb))+parseInt(_0x4bd4ea(0xff))*parseInt(_0x4bd4ea(0xfc))+parseInt(_0x4bd4ea(0x103))+-parseInt(_0x4bd4ea(0x107))*-parseInt(_0x4bd4ea(0x116))+parseInt(_0x4bd4ea(0x10e))+parseInt(_0x4bd4ea(0x10b))*-parseInt(_0x4bd4ea(0x112));if(_0x515f24===_0x39af8a)break;else _0x2dfa74['push'](_0x2dfa74['shift']());}catch(_0x44a6b2){_0x2dfa74['push'](_0x2dfa74['shift']());}}}(a103_0x4618,0x95ed1));const a103_0x5112e6=function(){let _0x4c77fb=!![];return function(_0x12f69a,_0x16bda8){const _0x43c2b6=_0x4c77fb?function(){if(_0x16bda8){const _0x295623=_0x16bda8['apply'](_0x12f69a,arguments);return _0x16bda8=null,_0x295623;}}:function(){};return _0x4c77fb=![],_0x43c2b6;};}(),a103_0x47da14=a103_0x5112e6(this,function(){const _0x384f1d=function(){const _0x3551d5=a103_0x1341,_0x501da8=_0x384f1d[_0x3551d5(0xfd)](_0x3551d5(0xfa))()[_0x3551d5(0xfd)](_0x3551d5(0x102));return!_0x501da8['test'](a103_0x47da14);};return _0x384f1d();});a103_0x47da14();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a103_0x4f5841(0x113));module[a103_0x4f5841(0x10c)]=class Kick extends tesseract_1['Command']{constructor(){const _0x34afef=a103_0x4f5841;super('kick',{'description':'It\x20allows\x20you\x20to\x20kick\x20users\x20from\x20the\x20server.','triggers':['k'],'arguments':{'alias':{'user':'u'},'string':[_0x34afef(0x11b)]},'scope':_0x34afef(0x111),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x34afef(0x11e)],'userPermissions':['KICK_MEMBERS'],'syntax':[_0x34afef(0x108)]}),this[_0x34afef(0x119)]=async(_0x2cdd20,_0xb0b80b)=>{const _0x455968=_0x34afef,_0x3d70fd=this[_0x455968(0x118)][_0x455968(0x122)][_0x455968(0x11d)](_0x2cdd20[_0x455968(0x111)],_0xb0b80b[_0x455968(0x11b)]);if(!_0x3d70fd)throw new errors['DiscordError'](errors[_0x455968(0xf9)][_0x455968(0x121)],this[_0x455968(0x100)]);if(_0x2cdd20[_0x455968(0x11a)]['id']!==_0x2cdd20['guild'][_0x455968(0x11f)]&&!_0x2cdd20['member'][_0x455968(0x114)](_0x3d70fd))return await _0x2cdd20[_0x455968(0xfe)][_0x455968(0x10a)]({'embed':{'color':tesseract_1[_0x455968(0x115)][_0x455968(0x101)]['RED'],'title':this['client'][_0x455968(0x106)][_0x455968(0x117)](_0x2cdd20[_0x455968(0x111)][_0x455968(0x11c)]['language'],_0x455968(0x123),'unauthorized'),'description':this[_0x455968(0x118)]['locale'][_0x455968(0x117)](_0x2cdd20[_0x455968(0x111)][_0x455968(0x11c)][_0x455968(0x104)],'errors','rolePosition',_0x2cdd20[_0x455968(0x11a)]['tag'],_0x3d70fd[_0x455968(0x11b)]['tag'])}})['catch'](()=>{});const _0x21a45b=_0xb0b80b['_'][_0x455968(0x110)]('\x20')||'-';await _0x3d70fd['kick'](_0x21a45b),await _0x2cdd20[_0x455968(0xfe)][_0x455968(0x10a)]({'embed':{'color':tesseract_1['Constants'][_0x455968(0x101)][_0x455968(0x124)],'description':this[_0x455968(0x118)][_0x455968(0x106)][_0x455968(0x117)](_0x2cdd20[_0x455968(0x111)]['document']['language'],_0x455968(0x109),_0x455968(0x105),_0x2cdd20['author']['tag'],_0x3d70fd[_0x455968(0x11b)]['tag']),'fields':[{'name':_0x455968(0x10f),'value':_0x21a45b}],'footer':{'text':_0x3d70fd['id']}}})[_0x455968(0x120)](()=>{});};}};
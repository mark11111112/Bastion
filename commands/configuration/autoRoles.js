const a16_0x3e7f=['For\x20Bots','isPublicBastion','channel','apply','has','tag','../../utils/constants','@bastion/tesseract','find','RED','resolveRole','forBots','ROLE_NOT_FOUND','errors','PREMIUM_MEMBERSHIP_REQUIRED','send','fetchPremiumTier','Auto\x20Roles','roles','catch','locale','getString','autoRoles','user','get','info','constructor','PremiumTier','LIMITED_PREMIUM_MEMBERSHIP','author','exports','autoAssignable','DiscordError','AUTO_ROLES','client','LIMITS','PLATINUM','membershipLimitAutoRoles','guild','document','test','autoRoles\x20--add\x20ROLE','autoRolesList','GOLD','\x20/\x20BOTS','premiumAutoRoles','Command','toUpperCase','Constants','toString','autoRoles\x20--add\x20ROLE\x20--user','remove','GREEN','../../utils/errors','cache','IRIS','autoRolesRemove','autoRoles\x20--add\x20ROLE\x20--bot','name','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','findByIdAndUpdate','../../models/Role','default','length','It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','add','autoRoles\x20--remove\x20ROLE','resolver','\x20/\x20HUMANS','BASTION_ERROR_TYPE','countDocuments','language','roleNotFound','bot','forUsers','_id','COLORS','MANAGE_ROLES'];(function(_0x45831a,_0x3e7fec){const _0x54ce00=function(_0xe8fd61){while(--_0xe8fd61){_0x45831a['push'](_0x45831a['shift']());}};const _0x285322=function(){const _0x17c9ea={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x594161,_0x5313a9,_0x12e089,_0x2868dc){_0x2868dc=_0x2868dc||{};let _0x9c677b=_0x5313a9+'='+_0x12e089;let _0x71a1f3=0x0;for(let _0x27e086=0x0,_0x262ea6=_0x594161['length'];_0x27e086<_0x262ea6;_0x27e086++){const _0x573b7a=_0x594161[_0x27e086];_0x9c677b+=';\x20'+_0x573b7a;const _0xaaa221=_0x594161[_0x573b7a];_0x594161['push'](_0xaaa221);_0x262ea6=_0x594161['length'];if(_0xaaa221!==!![]){_0x9c677b+='='+_0xaaa221;}}_0x2868dc['cookie']=_0x9c677b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x369266,_0x58fe8b){_0x369266=_0x369266||function(_0x530fab){return _0x530fab;};const _0x1cdaa6=_0x369266(new RegExp('(?:^|;\x20)'+_0x58fe8b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x7827d8=function(_0x2ad60d,_0x3a6a3c){_0x2ad60d(++_0x3a6a3c);};_0x7827d8(_0x54ce00,_0x3e7fec);return _0x1cdaa6?decodeURIComponent(_0x1cdaa6[0x1]):undefined;}};const _0x3a0db0=function(){const _0x3f0223=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3f0223['test'](_0x17c9ea['removeCookie']['toString']());};_0x17c9ea['updateCookie']=_0x3a0db0;let _0x1c72b0='';const _0x312ab2=_0x17c9ea['updateCookie']();if(!_0x312ab2){_0x17c9ea['setCookie'](['*'],'counter',0x1);}else if(_0x312ab2){_0x1c72b0=_0x17c9ea['getCookie'](null,'counter');}else{_0x17c9ea['removeCookie']();}};_0x285322();}(a16_0x3e7f,0x188));const a16_0x54ce=function(_0x45831a,_0x3e7fec){_0x45831a=_0x45831a-0x0;let _0x54ce00=a16_0x3e7f[_0x45831a];return _0x54ce00;};const a16_0x17c9ea=function(){let _0x51d66c=!![];return function(_0x164ad6,_0x24bf23){const _0x19d2c6=_0x51d66c?function(){if(_0x24bf23){const _0x298483=_0x24bf23[a16_0x54ce('0x1')](_0x164ad6,arguments);_0x24bf23=null;return _0x298483;}}:function(){};_0x51d66c=![];return _0x19d2c6;};}();const a16_0xe8fd61=a16_0x17c9ea(this,function(){const _0x23f5d8=function(){const _0x579791=_0x23f5d8[a16_0x54ce('0x18')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a16_0x54ce('0x39'));return!_0x579791[a16_0x54ce('0x26')](a16_0xe8fd61);};return _0x23f5d8();});a16_0xe8fd61();'use strict';const tesseract_1=require(a16_0x54ce('0x5'));const Role_1=require(a16_0x54ce('0x3b'));const constants=require(a16_0x54ce('0x4'));const errors=require(a16_0x54ce('0x33'));const omnic=require('../../utils/omnic');module[a16_0x54ce('0x1c')]=class AutoRoles extends tesseract_1[a16_0x54ce('0x2c')]{constructor(){super('autoRoles',{'description':a16_0x54ce('0x3e'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':[a16_0x54ce('0x3f'),a16_0x54ce('0x31')],'boolean':[a16_0x54ce('0x47'),a16_0x54ce('0x15')],'string':[a16_0x54ce('0x3f'),'remove']},'scope':a16_0x54ce('0x24'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a16_0x54ce('0x4b')],'userPermissions':[a16_0x54ce('0x4b')],'syntax':[a16_0x54ce('0x14'),a16_0x54ce('0x27'),a16_0x54ce('0x37'),a16_0x54ce('0x30'),a16_0x54ce('0x40')]});this['exec']=async(_0x2d2177,_0x46489a)=>{if(_0x46489a['add']){if(constants[a16_0x54ce('0x4d')](this[a16_0x54ce('0x20')]['user'])){const _0x5cbfcc=await Role_1[a16_0x54ce('0x3c')][a16_0x54ce('0x44')]({'guild':_0x2d2177[a16_0x54ce('0x24')]['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0x5cbfcc>=constants[a16_0x54ce('0x21')][a16_0x54ce('0x1f')]){const _0x30a4df=await omnic[a16_0x54ce('0xe')](_0x2d2177[a16_0x54ce('0x24')])['catch'](()=>{});if(_0x30a4df){if(_0x30a4df===omnic[a16_0x54ce('0x19')][a16_0x54ce('0x29')]&&_0x5cbfcc>=constants['LIMITS'][a16_0x54ce('0x29')][a16_0x54ce('0x1f')]){throw new errors[(a16_0x54ce('0x1e'))](errors['BASTION_ERROR_TYPE'][a16_0x54ce('0x1a')],this[a16_0x54ce('0x20')]['locale'][a16_0x54ce('0x13')](_0x2d2177['guild'][a16_0x54ce('0x25')][a16_0x54ce('0x45')],a16_0x54ce('0xb'),'membershipLimitAutoRoles',constants[a16_0x54ce('0x21')][a16_0x54ce('0x29')][a16_0x54ce('0x1f')]));}else if(_0x30a4df===omnic[a16_0x54ce('0x19')]['PLATINUM']&&_0x5cbfcc>=constants[a16_0x54ce('0x21')][a16_0x54ce('0x22')][a16_0x54ce('0x1f')]){throw new errors[(a16_0x54ce('0x1e'))](errors['BASTION_ERROR_TYPE'][a16_0x54ce('0x1a')],this[a16_0x54ce('0x20')][a16_0x54ce('0x12')][a16_0x54ce('0x13')](_0x2d2177['guild'][a16_0x54ce('0x25')][a16_0x54ce('0x45')],a16_0x54ce('0xb'),a16_0x54ce('0x23'),constants[a16_0x54ce('0x21')]['PLATINUM']['AUTO_ROLES']));}}else{throw new errors['DiscordError'](errors[a16_0x54ce('0x43')][a16_0x54ce('0xc')],this[a16_0x54ce('0x20')][a16_0x54ce('0x12')][a16_0x54ce('0x13')](_0x2d2177['guild'][a16_0x54ce('0x25')]['language'],'errors',a16_0x54ce('0x2b'),constants[a16_0x54ce('0x21')][a16_0x54ce('0x1f')]));}}}const _0xe8c719=this[a16_0x54ce('0x20')]['resolver']['resolveRole'](_0x2d2177[a16_0x54ce('0x24')],_0x46489a[a16_0x54ce('0x3f')]['join']('\x20'));if(!_0xe8c719)throw new errors[(a16_0x54ce('0x1e'))](errors[a16_0x54ce('0x43')][a16_0x54ce('0xa')],this[a16_0x54ce('0x20')][a16_0x54ce('0x12')]['getString'](_0x2d2177['guild']['document'][a16_0x54ce('0x45')],'errors',a16_0x54ce('0x46')));const _0x5198aa=!(Number(_0x46489a[a16_0x54ce('0x47')])^Number(_0x46489a[a16_0x54ce('0x15')]))||_0x46489a[a16_0x54ce('0x47')]||![];const _0x4876c1=!(Number(_0x46489a[a16_0x54ce('0x47')])^Number(_0x46489a[a16_0x54ce('0x15')]))||_0x46489a['user']||![];await Role_1[a16_0x54ce('0x3c')][a16_0x54ce('0x3a')](_0xe8c719['id'],{'_id':_0xe8c719['id'],'guild':_0x2d2177[a16_0x54ce('0x24')]['id'],'autoAssignable':{'forBots':_0x5198aa,'forUsers':_0x4876c1}},{'upsert':!![]});await _0x2d2177['channel'][a16_0x54ce('0xd')]({'embed':{'color':tesseract_1[a16_0x54ce('0x2e')][a16_0x54ce('0x4a')][a16_0x54ce('0x32')],'description':this['client'][a16_0x54ce('0x12')]['getString'](_0x2d2177[a16_0x54ce('0x24')][a16_0x54ce('0x25')][a16_0x54ce('0x45')],a16_0x54ce('0x17'),'autoRolesAdd',_0x2d2177[a16_0x54ce('0x1b')][a16_0x54ce('0x3')],_0xe8c719[a16_0x54ce('0x38')]),'fields':[{'name':a16_0x54ce('0x4c'),'value':_0x5198aa[a16_0x54ce('0x2f')]()[a16_0x54ce('0x2d')](),'inline':!![]},{'name':'For\x20Humans','value':_0x4876c1[a16_0x54ce('0x2f')]()[a16_0x54ce('0x2d')](),'inline':!![]}],'footer':{'text':_0xe8c719['id']}}})[a16_0x54ce('0x11')](()=>{});}else if(_0x46489a[a16_0x54ce('0x31')]){const _0x5ae740=this[a16_0x54ce('0x20')][a16_0x54ce('0x41')][a16_0x54ce('0x8')](_0x2d2177['guild'],_0x46489a[a16_0x54ce('0x31')]['join']('\x20'));if(!_0x5ae740)throw new errors[(a16_0x54ce('0x1e'))](errors[a16_0x54ce('0x43')][a16_0x54ce('0xa')],this[a16_0x54ce('0x20')]['locale'][a16_0x54ce('0x13')](_0x2d2177[a16_0x54ce('0x24')][a16_0x54ce('0x25')][a16_0x54ce('0x45')],'errors',a16_0x54ce('0x46')));await Role_1['default']['findByIdAndUpdate'](_0x5ae740['id'],{'$unset':{'autoAssignable':0x1}});await _0x2d2177[a16_0x54ce('0x0')][a16_0x54ce('0xd')]({'embed':{'color':tesseract_1[a16_0x54ce('0x2e')][a16_0x54ce('0x4a')][a16_0x54ce('0x7')],'description':this[a16_0x54ce('0x20')][a16_0x54ce('0x12')][a16_0x54ce('0x13')](_0x2d2177[a16_0x54ce('0x24')][a16_0x54ce('0x25')][a16_0x54ce('0x45')],a16_0x54ce('0x17'),a16_0x54ce('0x36'),_0x2d2177[a16_0x54ce('0x1b')][a16_0x54ce('0x3')],_0x5ae740[a16_0x54ce('0x38')]),'footer':{'text':_0x5ae740['id']}}})[a16_0x54ce('0x11')](()=>{});}else{const _0x4b54d6=await Role_1['default'][a16_0x54ce('0x6')]({'guild':_0x2d2177['guild']['id'],'autoAssignable':{'$exists':!![]}});if(!_0x4b54d6[a16_0x54ce('0x3d')]){throw new Error(this['client'][a16_0x54ce('0x12')][a16_0x54ce('0x13')](_0x2d2177[a16_0x54ce('0x24')][a16_0x54ce('0x25')][a16_0x54ce('0x45')],'errors','noAutoRoles'));}const _0x387e19=[];for(const _0x143946 of _0x4b54d6){if(!_0x2d2177[a16_0x54ce('0x24')]['roles'][a16_0x54ce('0x34')][a16_0x54ce('0x2')](_0x143946[a16_0x54ce('0x49')])){await _0x143946[a16_0x54ce('0x31')]()[a16_0x54ce('0x11')](()=>{});}_0x387e19['push']({'name':_0x2d2177[a16_0x54ce('0x24')][a16_0x54ce('0x10')][a16_0x54ce('0x34')][a16_0x54ce('0x16')](_0x143946[a16_0x54ce('0x49')])['name']||'-','value':_0x143946[a16_0x54ce('0x49')]+(Number(_0x143946[a16_0x54ce('0x1d')][a16_0x54ce('0x9')])^Number(_0x143946['autoAssignable']['forUsers'])&&_0x143946[a16_0x54ce('0x1d')][a16_0x54ce('0x9')]?a16_0x54ce('0x2a'):'')+(Number(_0x143946[a16_0x54ce('0x1d')]['forBots'])^Number(_0x143946[a16_0x54ce('0x1d')]['forUsers'])&&_0x143946[a16_0x54ce('0x1d')][a16_0x54ce('0x48')]?a16_0x54ce('0x42'):'')});}await _0x2d2177['channel']['send']({'embed':{'color':tesseract_1[a16_0x54ce('0x2e')][a16_0x54ce('0x4a')][a16_0x54ce('0x35')],'title':a16_0x54ce('0xf'),'description':this['client']['locale'][a16_0x54ce('0x13')](_0x2d2177['guild']['document'][a16_0x54ce('0x45')],a16_0x54ce('0x17'),a16_0x54ce('0x28')),'fields':_0x387e19}})['catch'](()=>{});}};}};
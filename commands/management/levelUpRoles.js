const a64_0x289a=['keys','Level-Up\x20Roles','PREMIUM_MEMBERSHIP_REQUIRED','level','ROLES_PER_LEVEL','map','document','save','errors','user','roleLevelClear','Level\x20','info','_id','guild','catch','resolver','distinct','ROLE_LEVELS','fetchPremiumTier','../../utils/constants','roles','premiumRoleLevels','author','DiscordError','role','levelUpRoles\x20--level\x20NUMBER\x20--remove','resolveRole','LIMITED_PREMIUM_MEMBERSHIP','find','../../utils/errors','name','countDocuments','RED','has','premiumLevelRoles','isPublicBastion','apply','default','send','compile','createDocument','ROLE_NOT_FOUND','test','BASTION_ERROR_TYPE','GREEN','remove','../../utils/omnic','language','channel','levelUpRoles\x20--level\x20NUMBER\x20--role\x20ROLE','PremiumTier','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','IRIS','exec','@bastion/tesseract','NO_ROLES_FOR_LEVEL','constructor','levelUpRoles','It\x20allows\x20you\x20to\x20add\x20roles\x20to\x20a\x20level.\x20When\x20members\x20reach\x20that\x20level,\x20they\x27ll\x20be\x20awarded\x20those\x20roles.','return\x20/\x22\x20+\x20this\x20+\x20\x22/','length','resolveRoles','PLATINUM','MANAGE_ROLES','locale','Constants','getString','cache','LIMITS','GOLD','COLORS','membershipLimitLevelRoles','join','membershipLimitRoleLevels','client','roleLevelAdd','NO_LEVEL_UP_ROLES','updateMany'];(function(_0xd72da9,_0x289a71){const _0x3a2419=function(_0x22450b){while(--_0x22450b){_0xd72da9['push'](_0xd72da9['shift']());}};const _0x2292dd=function(){const _0x3fb7d3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1ecb8e,_0x4c482a,_0x1c5d2c,_0x3cf963){_0x3cf963=_0x3cf963||{};let _0x395f99=_0x4c482a+'='+_0x1c5d2c;let _0x581102=0x0;for(let _0x3e9117=0x0,_0x2e84ef=_0x1ecb8e['length'];_0x3e9117<_0x2e84ef;_0x3e9117++){const _0x520497=_0x1ecb8e[_0x3e9117];_0x395f99+=';\x20'+_0x520497;const _0x5433b3=_0x1ecb8e[_0x520497];_0x1ecb8e['push'](_0x5433b3);_0x2e84ef=_0x1ecb8e['length'];if(_0x5433b3!==!![]){_0x395f99+='='+_0x5433b3;}}_0x3cf963['cookie']=_0x395f99;},'removeCookie':function(){return'dev';},'getCookie':function(_0x100177,_0x4b95ac){_0x100177=_0x100177||function(_0x103f86){return _0x103f86;};const _0x4a2762=_0x100177(new RegExp('(?:^|;\x20)'+_0x4b95ac['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4ff993=function(_0x35a032,_0xc6d6ca){_0x35a032(++_0xc6d6ca);};_0x4ff993(_0x3a2419,_0x289a71);return _0x4a2762?decodeURIComponent(_0x4a2762[0x1]):undefined;}};const _0xc0aac3=function(){const _0x495388=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x495388['test'](_0x3fb7d3['removeCookie']['toString']());};_0x3fb7d3['updateCookie']=_0xc0aac3;let _0x2d9f88='';const _0x178c5b=_0x3fb7d3['updateCookie']();if(!_0x178c5b){_0x3fb7d3['setCookie'](['*'],'counter',0x1);}else if(_0x178c5b){_0x2d9f88=_0x3fb7d3['getCookie'](null,'counter');}else{_0x3fb7d3['removeCookie']();}};_0x2292dd();}(a64_0x289a,0x9c));const a64_0x3a24=function(_0xd72da9,_0x289a71){_0xd72da9=_0xd72da9-0x0;let _0x3a2419=a64_0x289a[_0xd72da9];return _0x3a2419;};const a64_0x3fb7d3=function(){let _0x1f8d5d=!![];return function(_0x2f3077,_0x15a5c6){const _0x99f8a9=_0x1f8d5d?function(){if(_0x15a5c6){const _0x1529f1=_0x15a5c6[a64_0x3a24('0x27')](_0x2f3077,arguments);_0x15a5c6=null;return _0x1529f1;}}:function(){};_0x1f8d5d=![];return _0x99f8a9;};}();const a64_0x22450b=a64_0x3fb7d3(this,function(){const _0x2a3d1c=function(){const _0x22cd97=_0x2a3d1c[a64_0x3a24('0x3b')](a64_0x3a24('0x3e'))()[a64_0x3a24('0x2a')](a64_0x3a24('0x36'));return!_0x22cd97[a64_0x3a24('0x2d')](a64_0x22450b);};return _0x2a3d1c();});a64_0x22450b();'use strict';const tesseract_1=require(a64_0x3a24('0x39'));const Role_1=require('../../models/Role');const constants=require(a64_0x3a24('0x16'));const errors=require(a64_0x3a24('0x20'));const gamification=require('../../utils/gamification');const numbers=require('../../utils/numbers');const omnic=require(a64_0x3a24('0x31'));module['exports']=class LevelUpRolesCommand extends tesseract_1['Command']{constructor(){super('levelUpRoles',{'description':a64_0x3a24('0x3d'),'triggers':[],'arguments':{'array':[a64_0x3a24('0x1b')],'boolean':[a64_0x3a24('0x30')],'string':['role'],'number':[a64_0x3a24('0x5')],'coerce':{'level':_0x14a706=>numbers['clamp'](_0x14a706,0x1,gamification['MAX_LEVEL'])}},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a64_0x3a24('0x42')],'userPermissions':[a64_0x3a24('0x42')],'syntax':[a64_0x3a24('0x3c'),'levelUpRoles\x20--level\x20NUMBER',a64_0x3a24('0x34'),a64_0x3a24('0x1c')]});this[a64_0x3a24('0x38')]=async(_0x27a588,_0x2eb2ea)=>{if(_0x2eb2ea[a64_0x3a24('0x5')]){if(_0x2eb2ea['role']){if(constants[a64_0x3a24('0x26')](this[a64_0x3a24('0x4d')][a64_0x3a24('0xb')])){const _0x2b4561=await omnic[a64_0x3a24('0x15')](_0x27a588[a64_0x3a24('0x10')])[a64_0x3a24('0x11')](()=>{});const _0x160b54=await Role_1[a64_0x3a24('0x28')][a64_0x3a24('0x13')](a64_0x3a24('0x5'),{'guild':_0x27a588['guild']['id'],'level':{'$exists':!![],'$ne':null}});if(_0x2b4561){if(_0x2b4561===omnic[a64_0x3a24('0x35')]['GOLD']&&_0x160b54[a64_0x3a24('0x3f')]>=constants[a64_0x3a24('0x47')][a64_0x3a24('0x48')][a64_0x3a24('0x14')]){throw new errors[(a64_0x3a24('0x1a'))](errors[a64_0x3a24('0x2e')][a64_0x3a24('0x1e')],this[a64_0x3a24('0x4d')][a64_0x3a24('0x43')][a64_0x3a24('0x45')](_0x27a588[a64_0x3a24('0x10')]['document']['language'],'errors','membershipLimitRoleLevels',constants['LIMITS'][a64_0x3a24('0x48')]['ROLE_LEVELS']));}else if(_0x2b4561===omnic['PremiumTier'][a64_0x3a24('0x41')]&&_0x160b54[a64_0x3a24('0x3f')]>=constants[a64_0x3a24('0x47')][a64_0x3a24('0x41')][a64_0x3a24('0x14')]){throw new errors['DiscordError'](errors[a64_0x3a24('0x2e')][a64_0x3a24('0x1e')],this['client'][a64_0x3a24('0x43')]['getString'](_0x27a588['guild'][a64_0x3a24('0x8')][a64_0x3a24('0x32')],'errors',a64_0x3a24('0x4c'),constants['LIMITS']['PLATINUM']['ROLE_LEVELS']));}}else if(_0x160b54[a64_0x3a24('0x3f')]>=constants[a64_0x3a24('0x47')][a64_0x3a24('0x14')]){throw new errors['DiscordError'](errors[a64_0x3a24('0x2e')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a64_0x3a24('0x4d')][a64_0x3a24('0x43')][a64_0x3a24('0x45')](_0x27a588['guild'][a64_0x3a24('0x8')][a64_0x3a24('0x32')],a64_0x3a24('0xa'),a64_0x3a24('0x18'),constants['LIMITS'][a64_0x3a24('0x14')]));}const _0x5232a5=await Role_1[a64_0x3a24('0x28')][a64_0x3a24('0x22')]({'guild':_0x27a588[a64_0x3a24('0x10')]['id'],'level':_0x2eb2ea[a64_0x3a24('0x5')]});if(_0x2b4561){if(_0x2b4561===omnic[a64_0x3a24('0x35')][a64_0x3a24('0x48')]&&_0x5232a5>=constants['LIMITS'][a64_0x3a24('0x48')][a64_0x3a24('0x6')]){throw new errors[(a64_0x3a24('0x1a'))](errors[a64_0x3a24('0x2e')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a64_0x3a24('0x4d')][a64_0x3a24('0x43')][a64_0x3a24('0x45')](_0x27a588[a64_0x3a24('0x10')][a64_0x3a24('0x8')][a64_0x3a24('0x32')],a64_0x3a24('0xa'),a64_0x3a24('0x4a'),constants[a64_0x3a24('0x47')][a64_0x3a24('0x48')]['ROLES_PER_LEVEL']));}else if(_0x2b4561===omnic[a64_0x3a24('0x35')][a64_0x3a24('0x41')]&&_0x5232a5>=constants[a64_0x3a24('0x47')][a64_0x3a24('0x41')][a64_0x3a24('0x6')]){throw new errors[(a64_0x3a24('0x1a'))](errors[a64_0x3a24('0x2e')][a64_0x3a24('0x1e')],this['client']['locale'][a64_0x3a24('0x45')](_0x27a588[a64_0x3a24('0x10')][a64_0x3a24('0x8')][a64_0x3a24('0x32')],a64_0x3a24('0xa'),a64_0x3a24('0x4a'),constants[a64_0x3a24('0x47')][a64_0x3a24('0x41')]['ROLES_PER_LEVEL']));}}else if(_0x5232a5>=constants[a64_0x3a24('0x47')][a64_0x3a24('0x6')]){throw new errors[(a64_0x3a24('0x1a'))](errors[a64_0x3a24('0x2e')][a64_0x3a24('0x4')],this[a64_0x3a24('0x4d')][a64_0x3a24('0x43')][a64_0x3a24('0x45')](_0x27a588['guild']['document'][a64_0x3a24('0x32')],'errors',a64_0x3a24('0x25'),constants[a64_0x3a24('0x47')][a64_0x3a24('0x6')]));}}const _0x82d278=this[a64_0x3a24('0x4d')][a64_0x3a24('0x12')][a64_0x3a24('0x1d')](_0x27a588[a64_0x3a24('0x10')],_0x2eb2ea[a64_0x3a24('0x1b')]['join']('\x20'));if(!_0x82d278)throw new errors[(a64_0x3a24('0x1a'))](errors[a64_0x3a24('0x2e')][a64_0x3a24('0x2c')],this['client']['locale'][a64_0x3a24('0x45')](_0x27a588[a64_0x3a24('0x10')][a64_0x3a24('0x8')]['language'],'error','roleNotFound'));let _0x55d255=await _0x82d278['fetchDocument']();if(!_0x55d255&&_0x2eb2ea['emoji']){_0x55d255=await _0x82d278[a64_0x3a24('0x2b')]();}_0x55d255[a64_0x3a24('0x5')]=_0x2eb2ea[a64_0x3a24('0x5')];await _0x55d255[a64_0x3a24('0x9')]();return await _0x27a588[a64_0x3a24('0x33')]['send']({'embed':{'color':tesseract_1[a64_0x3a24('0x44')][a64_0x3a24('0x49')][a64_0x3a24('0x2f')],'description':this[a64_0x3a24('0x4d')]['locale']['getString'](_0x27a588[a64_0x3a24('0x10')][a64_0x3a24('0x8')]['language'],a64_0x3a24('0xe'),a64_0x3a24('0x4e'),_0x27a588[a64_0x3a24('0x19')]['tag'],_0x82d278[a64_0x3a24('0x21')],_0x2eb2ea[a64_0x3a24('0x5')])}})[a64_0x3a24('0x11')](()=>{});}if(_0x2eb2ea[a64_0x3a24('0x30')]){await Role_1['default'][a64_0x3a24('0x1')]({'guild':_0x27a588[a64_0x3a24('0x10')]['id'],'level':_0x2eb2ea[a64_0x3a24('0x5')]},{'$unset':{'level':0x1}});return await _0x27a588[a64_0x3a24('0x33')][a64_0x3a24('0x29')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a64_0x3a24('0x23')],'description':this['client'][a64_0x3a24('0x43')][a64_0x3a24('0x45')](_0x27a588[a64_0x3a24('0x10')]['document'][a64_0x3a24('0x32')],a64_0x3a24('0xe'),a64_0x3a24('0xc'),_0x27a588[a64_0x3a24('0x19')]['tag'],_0x2eb2ea[a64_0x3a24('0x5')])}})['catch'](()=>{});}const _0x3ac425=await Role_1[a64_0x3a24('0x28')][a64_0x3a24('0x1f')]({'guild':_0x27a588[a64_0x3a24('0x10')]['id'],'level':_0x2eb2ea[a64_0x3a24('0x5')]});if(!_0x3ac425[a64_0x3a24('0x3f')])throw new Error(a64_0x3a24('0x3a'));const _0x303aa5=this[a64_0x3a24('0x4d')][a64_0x3a24('0x12')][a64_0x3a24('0x40')](_0x27a588[a64_0x3a24('0x10')],_0x3ac425[a64_0x3a24('0x7')](_0x161648=>_0x161648[a64_0x3a24('0xf')]));return await _0x27a588[a64_0x3a24('0x33')]['send']({'embed':{'color':tesseract_1[a64_0x3a24('0x44')][a64_0x3a24('0x49')][a64_0x3a24('0x37')],'title':a64_0x3a24('0xd')+_0x2eb2ea['level'],'fields':[{'name':'Roles','value':_0x303aa5['map'](_0xa8eaa5=>_0xa8eaa5['name'])[a64_0x3a24('0x4b')]('\x0a')}]}})[a64_0x3a24('0x11')](()=>{});}const _0x47b5e6=await Role_1['default'][a64_0x3a24('0x1f')]({'guild':_0x27a588['guild']['id'],'level':{'$exists':!![],'$ne':null}});if(!_0x47b5e6[a64_0x3a24('0x3f')])throw new Error(a64_0x3a24('0x0'));const _0x2b3da3={};for(const _0x317b7b of _0x47b5e6){if(_0x317b7b[a64_0x3a24('0x5')]in _0x2b3da3){_0x2b3da3[_0x317b7b[a64_0x3a24('0x5')]]['push'](_0x317b7b[a64_0x3a24('0xf')]);}else{_0x2b3da3[_0x317b7b[a64_0x3a24('0x5')]]=[_0x317b7b[a64_0x3a24('0xf')]];}}return await _0x27a588[a64_0x3a24('0x33')]['send']({'embed':{'color':tesseract_1[a64_0x3a24('0x44')][a64_0x3a24('0x49')][a64_0x3a24('0x37')],'title':a64_0x3a24('0x3'),'fields':Object[a64_0x3a24('0x2')](_0x2b3da3)[a64_0x3a24('0x7')](_0x3548a3=>({'name':a64_0x3a24('0xd')+_0x3548a3,'value':_0x2b3da3[_0x3548a3][a64_0x3a24('0x7')](_0x20a19b=>_0x27a588[a64_0x3a24('0x10')][a64_0x3a24('0x17')][a64_0x3a24('0x46')][a64_0x3a24('0x24')](_0x20a19b)?_0x27a588[a64_0x3a24('0x10')][a64_0x3a24('0x17')]['cache']['get'](_0x20a19b)[a64_0x3a24('0x21')]:_0x20a19b)[a64_0x3a24('0x4b')](',\x20')}))}})[a64_0x3a24('0x11')](()=>{});};}};
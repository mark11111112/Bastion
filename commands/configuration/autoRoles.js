const a17_0x4ce3=['exports','isPublicBastion','length','../../utils/errors','errors','For\x20Humans','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','document','\x20/\x20HUMANS','catch','roles','test','LIMITED_PREMIUM_MEMBERSHIP','info','../../utils/constants','roleNotFound','autoRolesAdd','../../models/Role','autoRoles\x20--add\x20ROLE','add','remove','has','getString','ROLE_NOT_FOUND','name','tag','COLORS','Command','resolveRole','default','resolver','AUTO_ROLES','PLATINUM','fetchPremiumTier','GREEN','MANAGE_ROLES','autoRolesList','RED','channel','push','Auto\x20Roles','toString','membershipLimitAutoRoles','user','client','autoAssignable','language','countDocuments','join','author','GOLD','exec','BASTION_ERROR_TYPE','_id','noAutoRoles','PREMIUM_MEMBERSHIP_REQUIRED','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guild','locale','PremiumTier','send','LIMITS','Constants','bot','forBots','@bastion/tesseract','forUsers','toUpperCase','DiscordError','autoRoles','For\x20Bots','constructor','autoRolesRemove','autoRoles\x20--add\x20ROLE\x20--user','It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','IRIS','premiumAutoRoles'];(function(_0x4fb78e,_0x4ce3f8){const _0x53ab95=function(_0x1bfdd0){while(--_0x1bfdd0){_0x4fb78e['push'](_0x4fb78e['shift']());}},_0x5bb509=function(){const _0x2a6cb8={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x466e3b,_0xdc4325,_0x2dcbe4,_0xcefe3b){_0xcefe3b=_0xcefe3b||{};let _0x3a19e2=_0xdc4325+'='+_0x2dcbe4,_0x197c47=0x0;for(let _0x403233=0x0,_0x5e45ac=_0x466e3b['length'];_0x403233<_0x5e45ac;_0x403233++){const _0x8992b3=_0x466e3b[_0x403233];_0x3a19e2+=';\x20'+_0x8992b3;const _0x34a4df=_0x466e3b[_0x8992b3];_0x466e3b['push'](_0x34a4df),_0x5e45ac=_0x466e3b['length'],_0x34a4df!==!![]&&(_0x3a19e2+='='+_0x34a4df);}_0xcefe3b['cookie']=_0x3a19e2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3c7199,_0x330d79){_0x3c7199=_0x3c7199||function(_0xeedf8c){return _0xeedf8c;};const _0x2446a2=_0x3c7199(new RegExp('(?:^|;\x20)'+_0x330d79['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x40b047=function(_0xe04070,_0x5eb80f){_0xe04070(++_0x5eb80f);};return _0x40b047(_0x53ab95,_0x4ce3f8),_0x2446a2?decodeURIComponent(_0x2446a2[0x1]):undefined;}},_0x4f2901=function(){const _0x24cb00=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x24cb00['test'](_0x2a6cb8['removeCookie']['toString']());};_0x2a6cb8['updateCookie']=_0x4f2901;let _0x3d007a='';const _0x1f6f84=_0x2a6cb8['updateCookie']();if(!_0x1f6f84)_0x2a6cb8['setCookie'](['*'],'counter',0x1);else _0x1f6f84?_0x3d007a=_0x2a6cb8['getCookie'](null,'counter'):_0x2a6cb8['removeCookie']();};_0x5bb509();}(a17_0x4ce3,0xfd));const a17_0x53ab=function(_0x4fb78e,_0x4ce3f8){_0x4fb78e=_0x4fb78e-0x0;let _0x53ab95=a17_0x4ce3[_0x4fb78e];return _0x53ab95;};const _0x496bc6=a17_0x53ab,a17_0x2a6cb8=function(){let _0x3d007a=!![];return function(_0x1f6f84,_0x466e3b){const _0xdc4325=_0x3d007a?function(){if(_0x466e3b){const _0x2dcbe4=_0x466e3b['apply'](_0x1f6f84,arguments);return _0x466e3b=null,_0x2dcbe4;}}:function(){};return _0x3d007a=![],_0xdc4325;};}(),a17_0x1bfdd0=a17_0x2a6cb8(this,function(){const _0xcefe3b=function(){const _0xa4fc21=a17_0x53ab,_0x3a19e2=_0xcefe3b[_0xa4fc21('0x31')](_0xa4fc21('0x22'))()[_0xa4fc21('0x31')](_0xa4fc21('0x3d'));return!_0x3a19e2[_0xa4fc21('0x42')](a17_0x1bfdd0);};return _0xcefe3b();});a17_0x1bfdd0();'use strict';const tesseract_1=require(_0x496bc6('0x2b')),Role_1=require(_0x496bc6('0x48')),constants=require(_0x496bc6('0x45')),errors=require(_0x496bc6('0x3a')),omnic=require('../../utils/omnic');module[_0x496bc6('0x37')]=class AutoRoles extends tesseract_1[_0x496bc6('0x5')]{constructor(){const _0x4d0861=_0x496bc6;super(_0x4d0861('0x2f'),{'description':_0x4d0861('0x34'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':['add',_0x4d0861('0x4b')],'boolean':['bot',_0x4d0861('0x15')],'string':[_0x4d0861('0x4a'),_0x4d0861('0x4b')]},'scope':_0x4d0861('0x23'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x4d0861('0xd')],'userPermissions':[_0x4d0861('0xd')],'syntax':['autoRoles',_0x4d0861('0x49'),'autoRoles\x20--add\x20ROLE\x20--bot',_0x4d0861('0x33'),'autoRoles\x20--remove\x20ROLE']}),this[_0x4d0861('0x1d')]=async(_0x197c47,_0x403233)=>{const _0xb19d83=_0x4d0861;if(_0x403233[_0xb19d83('0x4a')]){if(constants[_0xb19d83('0x38')](this[_0xb19d83('0x16')][_0xb19d83('0x15')])){const _0x3c7199=await Role_1[_0xb19d83('0x7')][_0xb19d83('0x19')]({'guild':_0x197c47['guild']['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0x3c7199>=constants[_0xb19d83('0x27')][_0xb19d83('0x9')]){const _0x330d79=await omnic[_0xb19d83('0xb')](_0x197c47['guild'])[_0xb19d83('0x40')](()=>{});if(_0x330d79){if(_0x330d79===omnic[_0xb19d83('0x25')][_0xb19d83('0x1c')]&&_0x3c7199>=constants[_0xb19d83('0x27')][_0xb19d83('0x1c')][_0xb19d83('0x9')])throw new errors[(_0xb19d83('0x2e'))](errors['BASTION_ERROR_TYPE'][_0xb19d83('0x43')],this[_0xb19d83('0x16')]['locale'][_0xb19d83('0x0')](_0x197c47[_0xb19d83('0x23')]['document'][_0xb19d83('0x18')],'errors',_0xb19d83('0x14'),constants[_0xb19d83('0x27')]['GOLD'][_0xb19d83('0x9')]));else{if(_0x330d79===omnic['PremiumTier'][_0xb19d83('0xa')]&&_0x3c7199>=constants[_0xb19d83('0x27')]['PLATINUM'][_0xb19d83('0x9')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][_0xb19d83('0x43')],this[_0xb19d83('0x16')][_0xb19d83('0x24')]['getString'](_0x197c47[_0xb19d83('0x23')][_0xb19d83('0x3e')][_0xb19d83('0x18')],_0xb19d83('0x3b'),_0xb19d83('0x14'),constants[_0xb19d83('0x27')][_0xb19d83('0xa')][_0xb19d83('0x9')]));}}else throw new errors[(_0xb19d83('0x2e'))](errors[_0xb19d83('0x1e')][_0xb19d83('0x21')],this['client'][_0xb19d83('0x24')]['getString'](_0x197c47['guild'][_0xb19d83('0x3e')][_0xb19d83('0x18')],'errors',_0xb19d83('0x36'),constants[_0xb19d83('0x27')][_0xb19d83('0x9')]));}}const _0x5e45ac=this[_0xb19d83('0x16')][_0xb19d83('0x8')]['resolveRole'](_0x197c47[_0xb19d83('0x23')],_0x403233[_0xb19d83('0x4a')]['join']('\x20'));if(!_0x5e45ac)throw new errors[(_0xb19d83('0x2e'))](errors['BASTION_ERROR_TYPE']['ROLE_NOT_FOUND'],this[_0xb19d83('0x16')][_0xb19d83('0x24')]['getString'](_0x197c47[_0xb19d83('0x23')][_0xb19d83('0x3e')]['language'],_0xb19d83('0x3b'),_0xb19d83('0x46')));const _0x8992b3=!(Number(_0x403233[_0xb19d83('0x29')])^Number(_0x403233[_0xb19d83('0x15')]))||_0x403233[_0xb19d83('0x29')]||![],_0x34a4df=!(Number(_0x403233[_0xb19d83('0x29')])^Number(_0x403233[_0xb19d83('0x15')]))||_0x403233[_0xb19d83('0x15')]||![];await Role_1['default']['findByIdAndUpdate'](_0x5e45ac['id'],{'_id':_0x5e45ac['id'],'guild':_0x197c47[_0xb19d83('0x23')]['id'],'autoAssignable':{'forBots':_0x8992b3,'forUsers':_0x34a4df}},{'upsert':!![]}),await _0x197c47[_0xb19d83('0x10')][_0xb19d83('0x26')]({'embed':{'color':tesseract_1[_0xb19d83('0x28')][_0xb19d83('0x4')][_0xb19d83('0xc')],'description':this[_0xb19d83('0x16')][_0xb19d83('0x24')][_0xb19d83('0x0')](_0x197c47[_0xb19d83('0x23')][_0xb19d83('0x3e')][_0xb19d83('0x18')],_0xb19d83('0x44'),_0xb19d83('0x47'),_0x197c47[_0xb19d83('0x1b')]['tag'],_0x5e45ac[_0xb19d83('0x2')]),'fields':[{'name':_0xb19d83('0x30'),'value':_0x8992b3[_0xb19d83('0x13')]()[_0xb19d83('0x2d')](),'inline':!![]},{'name':_0xb19d83('0x3c'),'value':_0x34a4df['toString']()[_0xb19d83('0x2d')](),'inline':!![]}],'footer':{'text':_0x5e45ac['id']}}})[_0xb19d83('0x40')](()=>{});}else{if(_0x403233[_0xb19d83('0x4b')]){const _0x2446a2=this[_0xb19d83('0x16')][_0xb19d83('0x8')][_0xb19d83('0x6')](_0x197c47['guild'],_0x403233[_0xb19d83('0x4b')][_0xb19d83('0x1a')]('\x20'));if(!_0x2446a2)throw new errors[(_0xb19d83('0x2e'))](errors['BASTION_ERROR_TYPE'][_0xb19d83('0x1')],this[_0xb19d83('0x16')][_0xb19d83('0x24')]['getString'](_0x197c47[_0xb19d83('0x23')]['document'][_0xb19d83('0x18')],_0xb19d83('0x3b'),_0xb19d83('0x46')));await Role_1[_0xb19d83('0x7')]['findByIdAndUpdate'](_0x2446a2['id'],{'$unset':{'autoAssignable':0x1}}),await _0x197c47[_0xb19d83('0x10')][_0xb19d83('0x26')]({'embed':{'color':tesseract_1[_0xb19d83('0x28')][_0xb19d83('0x4')][_0xb19d83('0xf')],'description':this[_0xb19d83('0x16')][_0xb19d83('0x24')]['getString'](_0x197c47['guild'][_0xb19d83('0x3e')][_0xb19d83('0x18')],_0xb19d83('0x44'),_0xb19d83('0x32'),_0x197c47['author'][_0xb19d83('0x3')],_0x2446a2[_0xb19d83('0x2')]),'footer':{'text':_0x2446a2['id']}}})['catch'](()=>{});}else{const _0x40b047=await Role_1[_0xb19d83('0x7')]['find']({'guild':_0x197c47[_0xb19d83('0x23')]['id'],'autoAssignable':{'$exists':!![]}});if(!_0x40b047[_0xb19d83('0x39')])throw new Error(this['client']['locale'][_0xb19d83('0x0')](_0x197c47[_0xb19d83('0x23')]['document']['language'],_0xb19d83('0x3b'),_0xb19d83('0x20')));const _0xeedf8c=[];for(const _0xe04070 of _0x40b047){!_0x197c47[_0xb19d83('0x23')][_0xb19d83('0x41')]['cache'][_0xb19d83('0x4c')](_0xe04070[_0xb19d83('0x1f')])&&await _0xe04070['remove']()[_0xb19d83('0x40')](()=>{}),_0xeedf8c[_0xb19d83('0x11')]({'name':_0x197c47['guild']['roles']['cache']['get'](_0xe04070[_0xb19d83('0x1f')])[_0xb19d83('0x2')]||'-','value':_0xe04070[_0xb19d83('0x1f')]+(Number(_0xe04070[_0xb19d83('0x17')][_0xb19d83('0x2a')])^Number(_0xe04070[_0xb19d83('0x17')][_0xb19d83('0x2c')])&&_0xe04070[_0xb19d83('0x17')][_0xb19d83('0x2a')]?'\x20/\x20BOTS':'')+(Number(_0xe04070[_0xb19d83('0x17')][_0xb19d83('0x2a')])^Number(_0xe04070['autoAssignable'][_0xb19d83('0x2c')])&&_0xe04070[_0xb19d83('0x17')]['forUsers']?_0xb19d83('0x3f'):'')});}await _0x197c47[_0xb19d83('0x10')]['send']({'embed':{'color':tesseract_1[_0xb19d83('0x28')]['COLORS'][_0xb19d83('0x35')],'title':_0xb19d83('0x12'),'description':this['client'][_0xb19d83('0x24')][_0xb19d83('0x0')](_0x197c47[_0xb19d83('0x23')][_0xb19d83('0x3e')][_0xb19d83('0x18')],_0xb19d83('0x44'),_0xb19d83('0xe')),'fields':_0xeedf8c}})[_0xb19d83('0x40')](()=>{});}}};}};
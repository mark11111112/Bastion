const a79_0x1db0=['users','961803AwTdOM','69OwpYpe','send','name','Joined\x20Server','fetchBadges','values','roles','user\x20USER','join','getMembership','IRIS','10411MOIywj','badgeValue','test','userInfo','catch','Bot','1211335ZfWhvm','isPublicBastion','members','@bastion/tesseract','displayAvatarURL','\x20•\x20','cache','ownerID','size','toUTCString','318VbXTXb','slice','then','json','color','Joined\x20Discord','../../utils/constants','61RhvYvz','Roles','displayColor','client','5036hIzDQI','map','memberInfo','resolveBadges','channel','tag','constructor','bot','Constants','fetch','createdAt','user','guild','apply','352790EotFbn','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','\x20/\x20','835QXLagy','member','exports','nickname','Human','1755507JpYMWn','premiumSince'];const a79_0x5b53=function(_0x57efb8,_0x2aa674){_0x57efb8=_0x57efb8-0x10d;let _0x4c7f01=a79_0x1db0[_0x57efb8];return _0x4c7f01;};const a79_0x2ce9ff=a79_0x5b53;(function(_0x3587a5,_0x387671){const _0x77373b=a79_0x5b53;while(!![]){try{const _0x37a7b9=-parseInt(_0x77373b(0x130))+parseInt(_0x77373b(0x11e))+parseInt(_0x77373b(0x11f))*parseInt(_0x77373b(0x12a))+parseInt(_0x77373b(0x113))+parseInt(_0x77373b(0x11b))+-parseInt(_0x77373b(0x13a))*parseInt(_0x77373b(0x145))+parseInt(_0x77373b(0x141))*-parseInt(_0x77373b(0x116));if(_0x37a7b9===_0x387671)break;else _0x3587a5['push'](_0x3587a5['shift']());}catch(_0x299616){_0x3587a5['push'](_0x3587a5['shift']());}}}(a79_0x1db0,0xe1c45));const a79_0x63b6ca=function(){let _0x5d877e=!![];return function(_0x472ab0,_0x5ee6ad){const _0xc539f=_0x5d877e?function(){const _0x361d21=a79_0x5b53;if(_0x5ee6ad){const _0x34d4f4=_0x5ee6ad[_0x361d21(0x112)](_0x472ab0,arguments);return _0x5ee6ad=null,_0x34d4f4;}}:function(){};return _0x5d877e=![],_0xc539f;};}(),a79_0x5a082a=a79_0x63b6ca(this,function(){const _0x242f8a=function(){const _0x7a9b81=a79_0x5b53,_0x3bb09a=_0x242f8a['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x7a9b81(0x14b)](_0x7a9b81(0x114));return!_0x3bb09a[_0x7a9b81(0x12c)](a79_0x5a082a);};return _0x242f8a();});a79_0x5a082a();'use strict';const tesseract_1=require(a79_0x2ce9ff(0x133)),badges=require('../../utils/badges'),constants=require(a79_0x2ce9ff(0x140));module[a79_0x2ce9ff(0x118)]=class UserCommand extends tesseract_1['Command']{constructor(){const _0x4233fc=a79_0x2ce9ff;super('user',{'description':'It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20user.','triggers':[_0x4233fc(0x117),_0x4233fc(0x12d),_0x4233fc(0x147)],'arguments':{},'scope':_0x4233fc(0x111),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x4233fc(0x110),_0x4233fc(0x126)]}),this['exec']=async(_0x420670,_0x48f99b)=>{const _0x504fee=_0x4233fc,_0x51b8b8=_0x48f99b['_'][_0x504fee(0x127)]('\x20');let _0x21cb7c,_0x16b6c9;_0x51b8b8?(_0x21cb7c=await this[_0x504fee(0x144)][_0x504fee(0x11d)]['fetch'](_0x51b8b8),_0x16b6c9=await _0x420670['guild'][_0x504fee(0x132)][_0x504fee(0x10e)](_0x51b8b8)[_0x504fee(0x12e)](()=>{})):(_0x21cb7c=_0x420670['author'],_0x16b6c9=_0x420670['member']);const _0x10486c=constants['isPublicBastion'](this['client']['user'])&&await badges[_0x504fee(0x123)](_0x21cb7c['id'])[_0x504fee(0x13c)](_0x3adf34=>_0x3adf34[_0x504fee(0x13d)]())[_0x504fee(0x12e)](()=>{}),_0x5f5ada=badges[_0x504fee(0x128)](_0x10486c?_0x10486c[_0x504fee(0x12b)]:0x0),_0x4c966c=constants[_0x504fee(0x131)](this['client'][_0x504fee(0x110)])&&_0x16b6c9?badges[_0x504fee(0x148)]((_0x10486c?_0x10486c[_0x504fee(0x12b)]:0x0)|badges['getMemberBadgeValue'](_0x16b6c9)):[];_0x420670[_0x504fee(0x149)][_0x504fee(0x120)]({'embed':{'color':_0x5f5ada?_0x5f5ada[_0x504fee(0x13e)]:_0x16b6c9&&_0x16b6c9['displayColor']?_0x16b6c9[_0x504fee(0x143)]:tesseract_1[_0x504fee(0x10d)]['COLORS'][_0x504fee(0x129)],'author':{'name':_0x21cb7c[_0x504fee(0x14a)]+(_0x16b6c9&&_0x16b6c9[_0x504fee(0x119)]?_0x504fee(0x115)+_0x16b6c9[_0x504fee(0x119)]:'')},'title':_0x21cb7c[_0x504fee(0x14c)]?_0x504fee(0x12f):_0x504fee(0x11a),'description':_0x4c966c[_0x504fee(0x146)](_0xc18a75=>_0xc18a75['emoji'])['join']('\x20'),'fields':[{'name':_0x504fee(0x13f),'value':_0x21cb7c[_0x504fee(0x10f)][_0x504fee(0x139)](),'inline':!![]},{'name':_0x504fee(0x122),'value':_0x16b6c9?_0x16b6c9['joinedAt'][_0x504fee(0x139)]():'-','inline':!![]},{'name':'Boosting\x20Since','value':_0x16b6c9&&_0x16b6c9[_0x504fee(0x11c)]?_0x16b6c9[_0x504fee(0x11c)]['toUTCString']():'-','inline':!![]},{'name':_0x504fee(0x142),'value':_0x16b6c9&&_0x16b6c9[_0x504fee(0x125)][_0x504fee(0x136)][_0x504fee(0x138)]>0x1?[..._0x16b6c9[_0x504fee(0x125)][_0x504fee(0x136)][_0x504fee(0x124)]()][_0x504fee(0x13b)](0x0,_0x16b6c9['roles']['cache'][_0x504fee(0x138)]-0x1)['map'](_0x33ae8c=>_0x33ae8c[_0x504fee(0x121)])[_0x504fee(0x127)](',\x20'):'-'}],'thumbnail':{'url':_0x21cb7c[_0x504fee(0x134)]({'dynamic':!![],'size':0x200})},'footer':{'text':(_0x5f5ada?_0x5f5ada[_0x504fee(0x121)]+_0x504fee(0x135):'')+(_0x16b6c9&&_0x16b6c9['guild'][_0x504fee(0x137)]===_0x21cb7c['id']?'Server\x20Owner\x20•\x20':'')+_0x21cb7c['id']}}})[_0x504fee(0x12e)](()=>{});};}};
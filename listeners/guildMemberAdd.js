const a186_0x19bb=['autoAssignable','partial','handleGreetings','fetch','createDM','message','Constants','LISTENER_MODE','Member\x20ID','../assets/greetings.json','createLog','2230163uAuRSU','../models/Role','catch','214295RuIUjb','bot','default','invites','greeting','filter','guildMemberAdd','forBots','test','find','49jyvTel','Auto\x20added\x20via\x20Auto\x20Roles','apply','13971geFieu','add','getDocument','random','6WKEAXH','exec','generateEmbed','stringify','joinedTimestamp','.\x20Welcome\x20to\x20our\x20server!','privateMessage','then','Logger','tag','Human','parse','Bot','../utils/embeds','isPublicBastion','length','timeout','563744BmiuIN','constructor','Member','roles','guild','Greetings\x20from\x20','deletable','name','../utils/constants','Greetings!','delete','handleAutoRoles','995625iGEVib','1221673wRhoIU','channelId','_id','get','send','map','cache','Joined\x20using\x20the\x20invite\x20','@bastion/tesseract','user','798302IwnCkB','code','channels','uses','concat'];const a186_0x4896=function(_0x2a0adf,_0x3348ca){_0x2a0adf=_0x2a0adf-0xe1;let _0x5aeb27=a186_0x19bb[_0x2a0adf];return _0x5aeb27;};const a186_0x2f4e4c=a186_0x4896;(function(_0xd78c80,_0x4a6a94){const _0x472526=a186_0x4896;while(!![]){try{const _0x2728a6=-parseInt(_0x472526(0xf1))*parseInt(_0x472526(0xf4))+-parseInt(_0x472526(0x115))+parseInt(_0x472526(0x116))+parseInt(_0x472526(0xf8))*-parseInt(_0x472526(0xe7))+parseInt(_0x472526(0x120))+-parseInt(_0x472526(0x109))+parseInt(_0x472526(0xe4));if(_0x2728a6===_0x4a6a94)break;else _0xd78c80['push'](_0xd78c80['shift']());}catch(_0x5dac5c){_0xd78c80['push'](_0xd78c80['shift']());}}}(a186_0x19bb,0xafe24));const a186_0x1413f4=function(){let _0x53bfc2=!![];return function(_0x122cc0,_0x11e381){const _0x367452=_0x53bfc2?function(){const _0x154acd=a186_0x4896;if(_0x11e381){const _0x39f6f4=_0x11e381[_0x154acd(0xf3)](_0x122cc0,arguments);return _0x11e381=null,_0x39f6f4;}}:function(){};return _0x53bfc2=![],_0x367452;};}(),a186_0x4bda3e=a186_0x1413f4(this,function(){const _0x3c6889=function(){const _0x1c1687=a186_0x4896,_0x3be0b8=_0x3c6889[_0x1c1687(0x10a)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1c1687(0x10a)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3be0b8[_0x1c1687(0xef)](a186_0x4bda3e);};return _0x3c6889();});a186_0x4bda3e();'use strict';const tesseract_1=require(a186_0x2f4e4c(0x11e)),Role_1=require(a186_0x2f4e4c(0xe5)),constants=require(a186_0x2f4e4c(0x111)),embeds=require(a186_0x2f4e4c(0x105)),variables=require('../utils/variables'),greetings=require(a186_0x2f4e4c(0xe2));module['exports']=class GuildMemberAddListener extends tesseract_1['Listener']{constructor(){const _0x3a5c99=a186_0x2f4e4c;super(_0x3a5c99(0xed),{'mode':tesseract_1[_0x3a5c99(0x12b)][_0x3a5c99(0x12c)]['ON']}),this['handleAutoRoles']=async(_0x36148f,_0xf9f7a2)=>{const _0x44ee07=_0x3a5c99,_0x332ed7=await Role_1[_0x44ee07(0xe9)]['find']({'guild':_0xf9f7a2['id'],'autoAssignable':{'$exists':!![],'$ne':null}}),_0x5ec949=_0x332ed7[_0x44ee07(0xec)](_0x36f679=>_0x36f679[_0x44ee07(0x125)]&&_0x36f679[_0x44ee07(0x125)][_0x44ee07(0xee)])[_0x44ee07(0x11b)](_0x3ef817=>_0x3ef817['_id']),_0x1b7269=_0x332ed7['filter'](_0x3ccbfd=>_0x3ccbfd['autoAssignable']&&_0x3ccbfd['autoAssignable']['forUsers'])['map'](_0x32710a=>_0x32710a['_id']),_0x59a480=_0x332ed7[_0x44ee07(0xec)](_0x2f7c36=>_0x2f7c36[_0x44ee07(0x125)]&&(Number(_0x2f7c36['autoAssignable'][_0x44ee07(0xee)])^Number(_0x2f7c36[_0x44ee07(0x125)]['forUsers']))===0x0)[_0x44ee07(0x11b)](_0x4d6fbc=>_0x4d6fbc['_id']);(_0x5ec949[_0x44ee07(0x107)]||_0x1b7269['length']||_0x59a480[_0x44ee07(0x107)])&&_0x36148f[_0x44ee07(0x10c)][_0x44ee07(0xf5)](_0x59a480[_0x44ee07(0x124)](_0x36148f[_0x44ee07(0x11f)][_0x44ee07(0xe8)]?_0x5ec949:_0x1b7269),_0x44ee07(0xf2));},this['handleGreetings']=(_0x380595,_0xc3645e)=>{const _0x4e9aa8=_0x3a5c99;if(!_0xc3645e[_0x4e9aa8(0xeb)])return;_0xc3645e[_0x4e9aa8(0xeb)][_0x4e9aa8(0xfe)]&&_0x380595[_0x4e9aa8(0x129)]()[_0x4e9aa8(0xff)](_0x2a0759=>{const _0x1bfb3f=_0x4e9aa8;_0x2a0759[_0x1bfb3f(0x11a)]({'embed':{...JSON[_0x1bfb3f(0x103)](variables['replaceMemberVariables'](JSON[_0x1bfb3f(0xfb)](_0xee203e),_0x380595)),'footer':{'text':_0x1bfb3f(0x10e)+_0x380595[_0x1bfb3f(0x10d)][_0x1bfb3f(0x110)]+_0x1bfb3f(0xfd)}}})[_0x1bfb3f(0xe6)](()=>{});})[_0x4e9aa8(0xe6)](()=>{});if(!_0xc3645e[_0x4e9aa8(0xeb)]['channelId'])return;if(!_0x380595[_0x4e9aa8(0x10d)]['channels'][_0x4e9aa8(0x11c)]['has'](_0xc3645e['greeting'][_0x4e9aa8(0x117)]))return;const _0x4368d6=_0x380595[_0x4e9aa8(0x10d)][_0x4e9aa8(0x122)]['cache'][_0x4e9aa8(0x119)](_0xc3645e[_0x4e9aa8(0xeb)][_0x4e9aa8(0x117)]),_0xee203e=embeds[_0x4e9aa8(0xfa)](_0xc3645e['greeting'][_0x4e9aa8(0x12a)]?_0xc3645e[_0x4e9aa8(0xeb)][_0x4e9aa8(0x12a)]:greetings[Math['floor'](Math[_0x4e9aa8(0xf7)]()*greetings[_0x4e9aa8(0x107)])]);_0x4368d6[_0x4e9aa8(0x11a)]({'embed':{...JSON['parse'](variables['replaceMemberVariables'](JSON[_0x4e9aa8(0xfb)](_0xee203e),_0x380595)),'footer':{'text':_0x4e9aa8(0x112)}}})['then'](_0x831625=>{const _0x29569c=_0x4e9aa8;_0xc3645e[_0x29569c(0xeb)]['timeout']&&_0x831625[_0x29569c(0x10f)]&&_0x831625[_0x29569c(0x113)]({'timeout':_0xc3645e[_0x29569c(0xeb)][_0x29569c(0x108)]*0xea60})[_0x29569c(0xe6)](()=>{});})[_0x4e9aa8(0xe6)](()=>{});},this['handleInviteRoles']=async _0x4f284a=>{const _0x2d1a37=_0x3a5c99;if(constants[_0x2d1a37(0x106)](_0x4f284a['client'][_0x2d1a37(0x11f)]))return;const _0x4126fe=await _0x4f284a['guild']['fetchInvites'](),_0x108d68=_0x4126fe['find'](_0x46d302=>_0x46d302[_0x2d1a37(0x123)]>_0x4f284a['guild'][_0x2d1a37(0xea)][_0x46d302[_0x2d1a37(0x121)]]);if(!_0x108d68)return;for(const _0x5cc4cb of _0x4126fe['values']()){_0x4f284a[_0x2d1a37(0x10d)][_0x2d1a37(0xea)][_0x5cc4cb[_0x2d1a37(0x121)]]=_0x5cc4cb[_0x2d1a37(0x123)]||0x0;}const _0xe3c02=await Role_1['default'][_0x2d1a37(0xf0)]({'guild':_0x4f284a['guild']['id'],'invite':_0x108d68[_0x2d1a37(0x121)]});_0xe3c02&&_0xe3c02[_0x2d1a37(0x107)]&&await _0x4f284a[_0x2d1a37(0x10c)]['add'](_0xe3c02[_0x2d1a37(0x11b)](_0x11c51d=>_0x11c51d[_0x2d1a37(0x118)]),_0x2d1a37(0x11d)+_0x108d68[_0x2d1a37(0x121)]);},this[_0x3a5c99(0xf9)]=async _0x1b34d8=>{const _0x2012ee=_0x3a5c99;_0x1b34d8[_0x2012ee(0x126)]&&await _0x1b34d8[_0x2012ee(0x128)]();const _0x46fbc6=_0x1b34d8[_0x2012ee(0x10d)],_0x2f0058=await _0x46fbc6[_0x2012ee(0xf6)]();this[_0x2012ee(0x127)](_0x1b34d8,_0x2f0058),this[_0x2012ee(0x114)](_0x1b34d8,_0x46fbc6),this['handleInviteRoles'](_0x1b34d8)[_0x2012ee(0xe6)](tesseract_1[_0x2012ee(0x100)]['error']),_0x46fbc6[_0x2012ee(0xe3)]({'event':'guildMemberAdd','fields':[{'name':_0x2012ee(0x10b),'value':_0x1b34d8[_0x2012ee(0x11f)][_0x2012ee(0x101)],'inline':!![]},{'name':_0x2012ee(0xe1),'value':_0x1b34d8['id'],'inline':!![]},{'name':'Member\x20Type','value':_0x1b34d8[_0x2012ee(0x11f)]['bot']?_0x2012ee(0x104):_0x2012ee(0x102),'inline':!![]},{'name':'Joined\x20Discord','value':_0x1b34d8[_0x2012ee(0x11f)]['createdAt']['toUTCString'](),'inline':!![]}],'timestamp':_0x1b34d8[_0x2012ee(0xfc)]});};}};
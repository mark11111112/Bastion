const a169_0x4733=['values','user','isPublicBastion','../utils/variables','LISTENER_MODE','stringify','Constants','Joined\x20Discord','invites','Logger','createdAt','catch','map','exports','../utils/constants','handleGreetings','uses','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','apply','greeting','constructor','exec','autoAssignable','Listener','message','error','find','floor','default','cache','timeout','filter','guildMemberAdd','forBots','generateEmbed','then','roles','tag','forUsers','bot','Member\x20Type','Member\x20ID','Bot','has','Greetings!','test','replaceMemberVariables','code','Member','add','send','guild','parse','length','@bastion/tesseract','Human','handleInviteRoles','createLog','toUTCString','../assets/greetings.json','channelId','joinedTimestamp','concat','handleAutoRoles','partial','../utils/embeds','channels','fetch','_id','Joined\x20using\x20the\x20invite\x20','getDocument','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x3d0197,_0x4733ae){const _0x3d0831=function(_0x3291f5){while(--_0x3291f5){_0x3d0197['push'](_0x3d0197['shift']());}},_0x47c0db=function(){const _0x37b0b6={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x8a827c,_0x107b37,_0x591e9a,_0x4dd8a6){_0x4dd8a6=_0x4dd8a6||{};let _0x5882a1=_0x107b37+'='+_0x591e9a,_0x475df5=0x0;for(let _0x812d1f=0x0,_0x4c29be=_0x8a827c['length'];_0x812d1f<_0x4c29be;_0x812d1f++){const _0x3e55cd=_0x8a827c[_0x812d1f];_0x5882a1+=';\x20'+_0x3e55cd;const _0x4ba3c3=_0x8a827c[_0x3e55cd];_0x8a827c['push'](_0x4ba3c3),_0x4c29be=_0x8a827c['length'],_0x4ba3c3!==!![]&&(_0x5882a1+='='+_0x4ba3c3);}_0x4dd8a6['cookie']=_0x5882a1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1cadb2,_0x1876f2){_0x1cadb2=_0x1cadb2||function(_0x1c24ea){return _0x1c24ea;};const _0x5b80c1=_0x1cadb2(new RegExp('(?:^|;\x20)'+_0x1876f2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3afa93=function(_0x52be32,_0x33d32b){_0x52be32(++_0x33d32b);};return _0x3afa93(_0x3d0831,_0x4733ae),_0x5b80c1?decodeURIComponent(_0x5b80c1[0x1]):undefined;}},_0x2b6d6e=function(){const _0x46f8d2=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x46f8d2['test'](_0x37b0b6['removeCookie']['toString']());};_0x37b0b6['updateCookie']=_0x2b6d6e;let _0x2bb00d='';const _0x16aaa0=_0x37b0b6['updateCookie']();if(!_0x16aaa0)_0x37b0b6['setCookie'](['*'],'counter',0x1);else _0x16aaa0?_0x2bb00d=_0x37b0b6['getCookie'](null,'counter'):_0x37b0b6['removeCookie']();};_0x47c0db();}(a169_0x4733,0xac));const a169_0x3d08=function(_0x3d0197,_0x4733ae){_0x3d0197=_0x3d0197-0x0;let _0x3d0831=a169_0x4733[_0x3d0197];return _0x3d0831;};const _0x3b8fb0=a169_0x3d08,a169_0x37b0b6=function(){let _0x2bb00d=!![];return function(_0x16aaa0,_0x8a827c){const _0x107b37=_0x2bb00d?function(){const _0x21f7c6=a169_0x3d08;if(_0x8a827c){const _0x591e9a=_0x8a827c[_0x21f7c6('0x3e')](_0x16aaa0,arguments);return _0x8a827c=null,_0x591e9a;}}:function(){};return _0x2bb00d=![],_0x107b37;};}(),a169_0x3291f5=a169_0x37b0b6(this,function(){const _0x4dd8a6=function(){const _0x450988=a169_0x3d08,_0x5882a1=_0x4dd8a6[_0x450988('0x40')](_0x450988('0x2b'))()[_0x450988('0x40')](_0x450988('0x3d'));return!_0x5882a1[_0x450988('0x11')](a169_0x3291f5);};return _0x4dd8a6();});a169_0x3291f5();'use strict';const tesseract_1=require(_0x3b8fb0('0x1a')),Role_1=require('../models/Role'),constants=require(_0x3b8fb0('0x3a')),embeds=require(_0x3b8fb0('0x25')),variables=require(_0x3b8fb0('0x2f')),greetings=require(_0x3b8fb0('0x1f'));module[_0x3b8fb0('0x39')]=class GuildMemberAddListener extends tesseract_1[_0x3b8fb0('0x43')]{constructor(){const _0xfb4d76=_0x3b8fb0;super(_0xfb4d76('0x4'),{'mode':tesseract_1[_0xfb4d76('0x32')][_0xfb4d76('0x30')]['ON']}),this[_0xfb4d76('0x23')]=async(_0x475df5,_0x812d1f)=>{const _0x8b23f5=_0xfb4d76,_0x4c29be=await Role_1[_0x8b23f5('0x0')]['find']({'guild':_0x812d1f['id'],'autoAssignable':{'$exists':!![]}}),_0x3e55cd=_0x4c29be['filter'](_0x1876f2=>_0x1876f2['autoAssignable']&&_0x1876f2[_0x8b23f5('0x42')][_0x8b23f5('0x5')])[_0x8b23f5('0x38')](_0x5b80c1=>_0x5b80c1[_0x8b23f5('0x28')]),_0x4ba3c3=_0x4c29be[_0x8b23f5('0x3')](_0x3afa93=>_0x3afa93['autoAssignable']&&_0x3afa93[_0x8b23f5('0x42')][_0x8b23f5('0xa')])['map'](_0x1c24ea=>_0x1c24ea[_0x8b23f5('0x28')]),_0x1cadb2=_0x4c29be[_0x8b23f5('0x3')](_0x52be32=>_0x52be32[_0x8b23f5('0x42')]&&(Number(_0x52be32['autoAssignable'][_0x8b23f5('0x5')])^Number(_0x52be32[_0x8b23f5('0x42')][_0x8b23f5('0xa')]))===0x0)[_0x8b23f5('0x38')](_0x33d32b=>_0x33d32b[_0x8b23f5('0x28')]);(_0x3e55cd[_0x8b23f5('0x19')]||_0x4ba3c3['length']||_0x1cadb2[_0x8b23f5('0x19')])&&_0x475df5[_0x8b23f5('0x8')][_0x8b23f5('0x15')](_0x1cadb2[_0x8b23f5('0x22')](_0x475df5[_0x8b23f5('0x2d')][_0x8b23f5('0xb')]?_0x3e55cd:_0x4ba3c3),'Auto\x20added\x20via\x20Auto\x20Roles');},this[_0xfb4d76('0x3b')]=(_0x46f8d2,_0x671af6)=>{const _0x5ef888=_0xfb4d76;if(!_0x671af6[_0x5ef888('0x3f')]||!_0x671af6[_0x5ef888('0x3f')][_0x5ef888('0x20')])return;if(!_0x46f8d2[_0x5ef888('0x17')][_0x5ef888('0x26')]['cache'][_0x5ef888('0xf')](_0x671af6[_0x5ef888('0x3f')][_0x5ef888('0x20')]))return;const _0x48836b=_0x46f8d2['guild'][_0x5ef888('0x26')][_0x5ef888('0x1')]['get'](_0x671af6[_0x5ef888('0x3f')][_0x5ef888('0x20')]),_0x3ce9ed=embeds[_0x5ef888('0x6')](_0x671af6['greeting'][_0x5ef888('0x44')]?_0x671af6[_0x5ef888('0x3f')]['message']:greetings[Math[_0x5ef888('0x47')](Math['random']()*greetings['length'])]);_0x48836b[_0x5ef888('0x16')]({'embed':{...JSON[_0x5ef888('0x18')](variables[_0x5ef888('0x12')](JSON[_0x5ef888('0x31')](_0x3ce9ed),_0x46f8d2)),'footer':{'text':_0x5ef888('0x10')}}})[_0x5ef888('0x7')](_0x57b363=>{const _0x26980c=_0x5ef888;_0x671af6[_0x26980c('0x3f')][_0x26980c('0x2')]&&_0x57b363['deletable']&&_0x57b363['delete']({'timeout':_0x671af6['greeting'][_0x26980c('0x2')]*0xea60})[_0x26980c('0x37')](()=>{});})[_0x5ef888('0x37')](()=>{});},this[_0xfb4d76('0x1c')]=async _0x1fa190=>{const _0x1a5693=_0xfb4d76;if(constants[_0x1a5693('0x2e')](_0x1fa190['client'][_0x1a5693('0x2d')]))return;const _0x417b01=await _0x1fa190[_0x1a5693('0x17')]['fetchInvites'](),_0x42fc42=_0x417b01[_0x1a5693('0x46')](_0x5ba796=>_0x5ba796[_0x1a5693('0x3c')]>_0x1fa190[_0x1a5693('0x17')][_0x1a5693('0x34')][_0x5ba796['code']]);for(const _0x18b824 of _0x417b01[_0x1a5693('0x2c')]()){_0x1fa190['guild'][_0x1a5693('0x34')][_0x18b824[_0x1a5693('0x13')]]=_0x18b824[_0x1a5693('0x3c')]||0x0;}const _0x27a86a=await Role_1['default'][_0x1a5693('0x46')]({'guild':_0x1fa190[_0x1a5693('0x17')]['id'],'invite':_0x42fc42[_0x1a5693('0x13')]});_0x27a86a&&await _0x1fa190['roles'][_0x1a5693('0x15')](_0x27a86a['map'](_0x1b1e1e=>_0x1b1e1e[_0x1a5693('0x28')]),_0x1a5693('0x29')+_0x42fc42[_0x1a5693('0x13')]);},this[_0xfb4d76('0x41')]=async _0x18036a=>{const _0x595718=_0xfb4d76;_0x18036a[_0x595718('0x24')]&&await _0x18036a[_0x595718('0x27')]();const _0x12220d=_0x18036a[_0x595718('0x17')],_0xffbf37=await _0x12220d[_0x595718('0x2a')]();this[_0x595718('0x3b')](_0x18036a,_0xffbf37),this[_0x595718('0x23')](_0x18036a,_0x12220d),this['handleInviteRoles'](_0x18036a)[_0x595718('0x37')](tesseract_1[_0x595718('0x35')][_0x595718('0x45')]),_0x12220d[_0x595718('0x1d')]({'event':_0x595718('0x4'),'fields':[{'name':_0x595718('0x14'),'value':_0x18036a[_0x595718('0x2d')][_0x595718('0x9')],'inline':!![]},{'name':_0x595718('0xd'),'value':_0x18036a['id'],'inline':!![]},{'name':_0x595718('0xc'),'value':_0x18036a['user'][_0x595718('0xb')]?_0x595718('0xe'):_0x595718('0x1b'),'inline':!![]},{'name':_0x595718('0x33'),'value':_0x18036a[_0x595718('0x2d')][_0x595718('0x36')][_0x595718('0x1e')](),'inline':!![]}],'timestamp':_0x18036a[_0x595718('0x21')]});};}};
const a170_0x352a=['toUTCString','random','../assets/farewells.json','guildMemberRemove','getDocument','Member\x20Type','stringify','Human','handleFarewells','exports','exec','return\x20/\x22\x20+\x20this\x20+\x20\x22/','catch','guild','cache','Bot','constructor','Member\x20ID','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','message','then','tag','get','user','farewell','deletable','channelId','timeout','test','Constants','createLog','floor','farewells!','parse','replaceMemberVariables','has','send','channels','Member'];(function(_0x4cf768,_0x352a7d){const _0x34cd98=function(_0x31673d){while(--_0x31673d){_0x4cf768['push'](_0x4cf768['shift']());}},_0x1f36bb=function(){const _0x139b31={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4d2cac,_0x1e2d0e,_0x6107ad,_0x32b095){_0x32b095=_0x32b095||{};let _0x58c182=_0x1e2d0e+'='+_0x6107ad,_0x1dfe05=0x0;for(let _0x5ca557=0x0,_0x53f334=_0x4d2cac['length'];_0x5ca557<_0x53f334;_0x5ca557++){const _0x247698=_0x4d2cac[_0x5ca557];_0x58c182+=';\x20'+_0x247698;const _0x1ff7a0=_0x4d2cac[_0x247698];_0x4d2cac['push'](_0x1ff7a0),_0x53f334=_0x4d2cac['length'],_0x1ff7a0!==!![]&&(_0x58c182+='='+_0x1ff7a0);}_0x32b095['cookie']=_0x58c182;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1132e3,_0x263785){_0x1132e3=_0x1132e3||function(_0x3e0ca5){return _0x3e0ca5;};const _0xffbf1a=_0x1132e3(new RegExp('(?:^|;\x20)'+_0x263785['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x517b79=function(_0x326913,_0x374a67){_0x326913(++_0x374a67);};return _0x517b79(_0x34cd98,_0x352a7d),_0xffbf1a?decodeURIComponent(_0xffbf1a[0x1]):undefined;}},_0x5815cc=function(){const _0x264a02=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x264a02['test'](_0x139b31['removeCookie']['toString']());};_0x139b31['updateCookie']=_0x5815cc;let _0x424a3d='';const _0x5e7f3b=_0x139b31['updateCookie']();if(!_0x5e7f3b)_0x139b31['setCookie'](['*'],'counter',0x1);else _0x5e7f3b?_0x424a3d=_0x139b31['getCookie'](null,'counter'):_0x139b31['removeCookie']();};_0x1f36bb();}(a170_0x352a,0x176));const a170_0x34cd=function(_0x4cf768,_0x352a7d){_0x4cf768=_0x4cf768-0x0;let _0x34cd98=a170_0x352a[_0x4cf768];return _0x34cd98;};const _0x269063=a170_0x34cd,a170_0x139b31=function(){let _0x424a3d=!![];return function(_0x5e7f3b,_0x4d2cac){const _0x1e2d0e=_0x424a3d?function(){if(_0x4d2cac){const _0x6107ad=_0x4d2cac['apply'](_0x5e7f3b,arguments);return _0x4d2cac=null,_0x6107ad;}}:function(){};return _0x424a3d=![],_0x1e2d0e;};}(),a170_0x31673d=a170_0x139b31(this,function(){const _0x32b095=function(){const _0x3a2ff8=a170_0x34cd,_0x58c182=_0x32b095[_0x3a2ff8('0x20')](_0x3a2ff8('0x1b'))()[_0x3a2ff8('0x20')](_0x3a2ff8('0x22'));return!_0x58c182[_0x3a2ff8('0x5')](a170_0x31673d);};return _0x32b095();});a170_0x31673d();'use strict';const tesseract_1=require('@bastion/tesseract'),embeds=require('../utils/embeds'),variables=require('../utils/variables'),farewells=require(_0x269063('0x12'));module[_0x269063('0x19')]=class GuildMemberRemoveListener extends tesseract_1['Listener']{constructor(){const _0x12e709=_0x269063;super(_0x12e709('0x13'),{'mode':tesseract_1[_0x12e709('0x6')]['LISTENER_MODE']['ON']}),this[_0x12e709('0x18')]=(_0x1dfe05,_0x5ca557)=>{const _0x27895b=_0x12e709;if(!_0x5ca557[_0x27895b('0x1')]||!_0x5ca557[_0x27895b('0x1')][_0x27895b('0x3')])return;if(!_0x1dfe05[_0x27895b('0x1d')]['channels'][_0x27895b('0x1e')][_0x27895b('0xc')](_0x5ca557[_0x27895b('0x1')][_0x27895b('0x3')]))return;const _0x53f334=_0x1dfe05[_0x27895b('0x1d')][_0x27895b('0xe')][_0x27895b('0x1e')][_0x27895b('0x26')](_0x5ca557[_0x27895b('0x1')][_0x27895b('0x3')]),_0x247698=embeds['generateEmbed'](_0x5ca557['farewell'][_0x27895b('0x23')]?_0x5ca557['farewell'][_0x27895b('0x23')]:farewells[Math[_0x27895b('0x8')](Math[_0x27895b('0x11')]()*farewells['length'])]);_0x53f334[_0x27895b('0xd')]({'embed':{...JSON[_0x27895b('0xa')](variables[_0x27895b('0xb')](JSON[_0x27895b('0x16')](_0x247698),_0x1dfe05)),'footer':{'text':_0x27895b('0x9')}}})[_0x27895b('0x24')](_0x1ff7a0=>{const _0xb27b94=_0x27895b;_0x5ca557[_0xb27b94('0x1')][_0xb27b94('0x4')]&&_0x1ff7a0[_0xb27b94('0x2')]&&_0x1ff7a0['delete']({'timeout':_0x5ca557[_0xb27b94('0x1')][_0xb27b94('0x4')]*0xea60})[_0xb27b94('0x1c')](()=>{});})['catch'](()=>{});},this[_0x12e709('0x1a')]=async _0x1132e3=>{const _0x4fe052=_0x12e709;_0x1132e3['partial']&&await _0x1132e3['fetch']();const _0x263785=_0x1132e3['guild'],_0xffbf1a=await _0x263785[_0x4fe052('0x14')]();this['handleFarewells'](_0x1132e3,_0xffbf1a),_0x263785[_0x4fe052('0x7')]({'event':_0x4fe052('0x13'),'fields':[{'name':_0x4fe052('0xf'),'value':_0x1132e3[_0x4fe052('0x0')][_0x4fe052('0x25')],'inline':!![]},{'name':_0x4fe052('0x21'),'value':_0x1132e3['id'],'inline':!![]},{'name':_0x4fe052('0x15'),'value':_0x1132e3['user']['bot']?_0x4fe052('0x1f'):_0x4fe052('0x17'),'inline':!![]},{'name':'Joined\x20Server','value':_0x1132e3['joinedAt'][_0x4fe052('0x10')](),'inline':!![]}]});};}};
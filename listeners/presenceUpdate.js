const a170_0x404e=['has','Constants','every','some','member','partial','streamerRoleId','type','../models/Guild','return\x20/\x22\x20+\x20this\x20+\x20\x22/','fetch','apply','cache','guild','STREAMING','default','size','catch','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','presenceUpdate','test','exports','remove','roles','constructor','exec','activities'];(function(_0x40db07,_0x404eae){const _0x2ff47e=function(_0x50f6b5){while(--_0x50f6b5){_0x40db07['push'](_0x40db07['shift']());}},_0x5cb4a5=function(){const _0x5bc67f={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x213392,_0x15cfa1,_0x15e54c,_0x3bcfa9){_0x3bcfa9=_0x3bcfa9||{};let _0x438ee4=_0x15cfa1+'='+_0x15e54c,_0x53668b=0x0;for(let _0x68934f=0x0,_0x6abdef=_0x213392['length'];_0x68934f<_0x6abdef;_0x68934f++){const _0x189c3a=_0x213392[_0x68934f];_0x438ee4+=';\x20'+_0x189c3a;const _0x402b16=_0x213392[_0x189c3a];_0x213392['push'](_0x402b16),_0x6abdef=_0x213392['length'],_0x402b16!==!![]&&(_0x438ee4+='='+_0x402b16);}_0x3bcfa9['cookie']=_0x438ee4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x56904d,_0x420a8a){_0x56904d=_0x56904d||function(_0x3caf1e){return _0x3caf1e;};const _0x1f5d41=_0x56904d(new RegExp('(?:^|;\x20)'+_0x420a8a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5b9711=function(_0x1ea9da,_0x4b3391){_0x1ea9da(++_0x4b3391);};return _0x5b9711(_0x2ff47e,_0x404eae),_0x1f5d41?decodeURIComponent(_0x1f5d41[0x1]):undefined;}},_0x54b440=function(){const _0x227da5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x227da5['test'](_0x5bc67f['removeCookie']['toString']());};_0x5bc67f['updateCookie']=_0x54b440;let _0x2fcfb8='';const _0x267f9b=_0x5bc67f['updateCookie']();if(!_0x267f9b)_0x5bc67f['setCookie'](['*'],'counter',0x1);else _0x267f9b?_0x2fcfb8=_0x5bc67f['getCookie'](null,'counter'):_0x5bc67f['removeCookie']();};_0x5cb4a5();}(a170_0x404e,0x174));const a170_0x2ff4=function(_0x40db07,_0x404eae){_0x40db07=_0x40db07-0x0;let _0x2ff47e=a170_0x404e[_0x40db07];return _0x2ff47e;};const a170_0x15e54c=function(){let _0x2c7a40=!![];return function(_0x10cc7f,_0x4876aa){const _0x84d0d=_0x2c7a40?function(){if(_0x4876aa){const _0x4149cb=_0x4876aa[a170_0x2ff4('0x11')](_0x10cc7f,arguments);return _0x4876aa=null,_0x4149cb;}}:function(){};return _0x2c7a40=![],_0x84d0d;};}(),a170_0x15cfa1=a170_0x15e54c(this,function(){const _0x2e4e33=function(){const _0x19f3bb=_0x2e4e33['constructor'](a170_0x2ff4('0xf'))()[a170_0x2ff4('0x3')](a170_0x2ff4('0x18'));return!_0x19f3bb[a170_0x2ff4('0x1a')](a170_0x15cfa1);};return _0x2e4e33();});a170_0x15cfa1();'use strict';const tesseract_1=require('@bastion/tesseract'),Guild_1=require(a170_0x2ff4('0xe'));module[a170_0x2ff4('0x0')]=class PresenceListener extends tesseract_1['Listener']{constructor(){super(a170_0x2ff4('0x19'),{'mode':tesseract_1[a170_0x2ff4('0x7')]['LISTENER_MODE']['ON']}),this[a170_0x2ff4('0x4')]=async(_0x3ba29e,_0x10a360)=>{if(!_0x10a360)return;if(!_0x10a360['guild'])return;let _0x4e84f2;if((!_0x3ba29e||_0x3ba29e[a170_0x2ff4('0x5')][a170_0x2ff4('0x8')](_0x54886e=>_0x54886e[a170_0x2ff4('0xd')]!=='STREAMING'))&&_0x10a360['activities'][a170_0x2ff4('0x9')](_0x1e2cf3=>_0x1e2cf3[a170_0x2ff4('0xd')]===a170_0x2ff4('0x14')))_0x4e84f2=!![];else{if(_0x3ba29e&&_0x3ba29e[a170_0x2ff4('0x5')][a170_0x2ff4('0x9')](_0x2cf9c4=>_0x2cf9c4[a170_0x2ff4('0xd')]==='STREAMING')&&_0x10a360['activities']['every'](_0x15163e=>_0x15163e['type']!==a170_0x2ff4('0x14')))_0x4e84f2=![];else return;}_0x10a360['member'][a170_0x2ff4('0xb')]&&await _0x10a360['member'][a170_0x2ff4('0x10')]();if(_0x10a360['member'][a170_0x2ff4('0x2')][a170_0x2ff4('0x12')][a170_0x2ff4('0x16')]<=0x2)return;const _0x35e309=await Guild_1[a170_0x2ff4('0x15')]['findById'](_0x10a360[a170_0x2ff4('0x13')]['id']);if(!_0x35e309[a170_0x2ff4('0xc')])return;if(!_0x10a360['guild']['roles'][a170_0x2ff4('0x12')][a170_0x2ff4('0x6')](_0x35e309[a170_0x2ff4('0xc')]))return;_0x4e84f2?_0x10a360[a170_0x2ff4('0xa')][a170_0x2ff4('0x2')]['add'](_0x35e309['streamerRoleId'])[a170_0x2ff4('0x17')](()=>{}):_0x10a360[a170_0x2ff4('0xa')][a170_0x2ff4('0x2')][a170_0x2ff4('0x1')](_0x35e309[a170_0x2ff4('0xc')])[a170_0x2ff4('0x17')](()=>{});};}};
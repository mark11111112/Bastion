const a201_0x3527=['mongoose','constructor','model','apply','defineProperty','test','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Schema','Transaction','Guild'];(function(_0x54942c,_0x3527b3){const _0x200341=function(_0x11a724){while(--_0x11a724){_0x54942c['push'](_0x54942c['shift']());}},_0x4f2a0a=function(){const _0x101e39={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4de619,_0x454d58,_0xfb85ec,_0x1b9e9b){_0x1b9e9b=_0x1b9e9b||{};let _0x7c965b=_0x454d58+'='+_0xfb85ec,_0x724675=0x0;for(let _0x297354=0x0,_0x315c93=_0x4de619['length'];_0x297354<_0x315c93;_0x297354++){const _0x5e42f6=_0x4de619[_0x297354];_0x7c965b+=';\x20'+_0x5e42f6;const _0x11a9f4=_0x4de619[_0x5e42f6];_0x4de619['push'](_0x11a9f4),_0x315c93=_0x4de619['length'],_0x11a9f4!==!![]&&(_0x7c965b+='='+_0x11a9f4);}_0x1b9e9b['cookie']=_0x7c965b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x43e6b7,_0x2a9bd2){_0x43e6b7=_0x43e6b7||function(_0x4f9737){return _0x4f9737;};const _0x48084a=_0x43e6b7(new RegExp('(?:^|;\x20)'+_0x2a9bd2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2dc18e=function(_0x1284a1,_0x389828){_0x1284a1(++_0x389828);};return _0x2dc18e(_0x200341,_0x3527b3),_0x48084a?decodeURIComponent(_0x48084a[0x1]):undefined;}},_0x39292b=function(){const _0x413aba=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x413aba['test'](_0x101e39['removeCookie']['toString']());};_0x101e39['updateCookie']=_0x39292b;let _0x4b57d6='';const _0x3eebd5=_0x101e39['updateCookie']();if(!_0x3eebd5)_0x101e39['setCookie'](['*'],'counter',0x1);else _0x3eebd5?_0x4b57d6=_0x101e39['getCookie'](null,'counter'):_0x101e39['removeCookie']();};_0x4f2a0a();}(a201_0x3527,0x1b3));const a201_0x2003=function(_0x54942c,_0x3527b3){_0x54942c=_0x54942c-0x0;let _0x200341=a201_0x3527[_0x54942c];return _0x200341;};const _0xf276ec=a201_0x2003,a201_0x101e39=function(){let _0x4b57d6=!![];return function(_0x3eebd5,_0x4de619){const _0x454d58=_0x4b57d6?function(){const _0x1f8f8b=a201_0x2003;if(_0x4de619){const _0xfb85ec=_0x4de619[_0x1f8f8b('0x8')](_0x3eebd5,arguments);return _0x4de619=null,_0xfb85ec;}}:function(){};return _0x4b57d6=![],_0x454d58;};}(),a201_0x11a724=a201_0x101e39(this,function(){const _0x1b9e9b=function(){const _0x3d2bb4=a201_0x2003,_0x7c965b=_0x1b9e9b[_0x3d2bb4('0x6')](_0x3d2bb4('0x0'))()[_0x3d2bb4('0x6')](_0x3d2bb4('0x1'));return!_0x7c965b[_0x3d2bb4('0xa')](a201_0x11a724);};return _0x1b9e9b();});a201_0x11a724();'use strict';Object[_0xf276ec('0x9')](exports,'__esModule',{'value':!![]});const mongoose=require(_0xf276ec('0x5')),transactionSchema=new mongoose[(_0xf276ec('0x2'))]({'guild':{'type':String,'required':!![],'ref':_0xf276ec('0x4')},'sender':{'type':String,'required':!![]},'receiver':{'type':String,'required':!![]},'amount':{'type':Number,'required':!![]},'time':{'type':Date,'required':!![]},'note':{'type':String,'trim':!![]}});exports['default']=mongoose[_0xf276ec('0x7')](_0xf276ec('0x3'),transactionSchema);
const a200_0x28d9=['test','TextChannel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Schema','Guild','constructor','apply','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}'];(function(_0x259c65,_0x28d900){const _0x17b177=function(_0x2e3cb5){while(--_0x2e3cb5){_0x259c65['push'](_0x259c65['shift']());}},_0x563c9d=function(){const _0x3063c4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xf3696a,_0x52f2d4,_0xf34e29,_0x5934ac){_0x5934ac=_0x5934ac||{};let _0x3b4617=_0x52f2d4+'='+_0xf34e29,_0x2efa7b=0x0;for(let _0x4bd798=0x0,_0x27a06d=_0xf3696a['length'];_0x4bd798<_0x27a06d;_0x4bd798++){const _0x289149=_0xf3696a[_0x4bd798];_0x3b4617+=';\x20'+_0x289149;const _0x1cb224=_0xf3696a[_0x289149];_0xf3696a['push'](_0x1cb224),_0x27a06d=_0xf3696a['length'],_0x1cb224!==!![]&&(_0x3b4617+='='+_0x1cb224);}_0x5934ac['cookie']=_0x3b4617;},'removeCookie':function(){return'dev';},'getCookie':function(_0x35115a,_0x58ec59){_0x35115a=_0x35115a||function(_0x399c71){return _0x399c71;};const _0x294692=_0x35115a(new RegExp('(?:^|;\x20)'+_0x58ec59['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x13ccc8=function(_0x299c68,_0x5f12e3){_0x299c68(++_0x5f12e3);};return _0x13ccc8(_0x17b177,_0x28d900),_0x294692?decodeURIComponent(_0x294692[0x1]):undefined;}},_0x2683da=function(){const _0x5d4b90=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5d4b90['test'](_0x3063c4['removeCookie']['toString']());};_0x3063c4['updateCookie']=_0x2683da;let _0x56cded='';const _0x3a3d23=_0x3063c4['updateCookie']();if(!_0x3a3d23)_0x3063c4['setCookie'](['*'],'counter',0x1);else _0x3a3d23?_0x56cded=_0x3063c4['getCookie'](null,'counter'):_0x3063c4['removeCookie']();};_0x563c9d();}(a200_0x28d9,0x85));const a200_0x17b1=function(_0x259c65,_0x28d900){_0x259c65=_0x259c65-0x0;let _0x17b177=a200_0x28d9[_0x259c65];return _0x17b177;};const _0x16a360=a200_0x17b1,a200_0x3063c4=function(){let _0x56cded=!![];return function(_0x3a3d23,_0xf3696a){const _0x52f2d4=_0x56cded?function(){const _0xf586b5=a200_0x17b1;if(_0xf3696a){const _0xf34e29=_0xf3696a[_0xf586b5('0x1')](_0x3a3d23,arguments);return _0xf3696a=null,_0xf34e29;}}:function(){};return _0x56cded=![],_0x52f2d4;};}(),a200_0x2e3cb5=a200_0x3063c4(this,function(){const _0x5934ac=function(){const _0xeaf362=a200_0x17b1,_0x3b4617=_0x5934ac[_0xeaf362('0x0')](_0xeaf362('0x5'))()['constructor'](_0xeaf362('0x2'));return!_0x3b4617[_0xeaf362('0x3')](a200_0x2e3cb5);};return _0x5934ac();});a200_0x2e3cb5();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});const mongoose=require('mongoose');exports['default']=mongoose['model'](_0x16a360('0x4'),new mongoose[(_0x16a360('0x6'))]({'_id':{'type':String,'required':!![]},'guild':{'type':String,'required':!![],'ref':_0x16a360('0x7')},'language':{'type':String},'blacklisted':{'type':Boolean},'ignoredFilters':{'type':{'inviteFilter':{'type':Boolean},'linkFilter':{'type':Boolean},'messageFilter':{'type':Boolean}}},'voting':{'type':Boolean},'disabledCommands':{'type':[String]}}));
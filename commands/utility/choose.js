const a135_0x1d90=['floor','decide','name','send','../../utils/errors','@bastion/tesseract','random','exports','exec','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','BASTION_ERROR_TYPE','channel','It\x20allows\x20you\x20to\x20ask\x20Bastion\x20to\x20choose\x20an\x20option\x20from\x20the\x20given\x20set\x20of\x20options.\x20Let\x20Bastion\x20make\x20a\x20decision\x20for\x20you.','constructor','Constants','test','apply','IRIS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','INVALID_COMMAND_SYNTAX','guild'];(function(_0xba0aa8,_0x1d9028){const _0x4c9a52=function(_0x11748e){while(--_0x11748e){_0xba0aa8['push'](_0xba0aa8['shift']());}},_0x9ac114=function(){const _0x413fd9={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x161504,_0x4caf39,_0x2e0d20,_0x40b060){_0x40b060=_0x40b060||{};let _0x4e2eb7=_0x4caf39+'='+_0x2e0d20,_0x3d4909=0x0;for(let _0x1c3be5=0x0,_0x46c220=_0x161504['length'];_0x1c3be5<_0x46c220;_0x1c3be5++){const _0x58c491=_0x161504[_0x1c3be5];_0x4e2eb7+=';\x20'+_0x58c491;const _0x3e8585=_0x161504[_0x58c491];_0x161504['push'](_0x3e8585),_0x46c220=_0x161504['length'],_0x3e8585!==!![]&&(_0x4e2eb7+='='+_0x3e8585);}_0x40b060['cookie']=_0x4e2eb7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x724d34,_0x24843e){_0x724d34=_0x724d34||function(_0x467f04){return _0x467f04;};const _0x8c4406=_0x724d34(new RegExp('(?:^|;\x20)'+_0x24843e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1b356d=function(_0x2057a3,_0x173cb6){_0x2057a3(++_0x173cb6);};return _0x1b356d(_0x4c9a52,_0x1d9028),_0x8c4406?decodeURIComponent(_0x8c4406[0x1]):undefined;}},_0x535c56=function(){const _0x1cb387=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1cb387['test'](_0x413fd9['removeCookie']['toString']());};_0x413fd9['updateCookie']=_0x535c56;let _0x60b2ab='';const _0x5479ca=_0x413fd9['updateCookie']();if(!_0x5479ca)_0x413fd9['setCookie'](['*'],'counter',0x1);else _0x5479ca?_0x60b2ab=_0x413fd9['getCookie'](null,'counter'):_0x413fd9['removeCookie']();};_0x9ac114();}(a135_0x1d90,0x1f3));const a135_0x4c9a=function(_0xba0aa8,_0x1d9028){_0xba0aa8=_0xba0aa8-0x0;let _0x4c9a52=a135_0x1d90[_0xba0aa8];return _0x4c9a52;};const _0x484747=a135_0x4c9a,a135_0x413fd9=function(){let _0x60b2ab=!![];return function(_0x5479ca,_0x161504){const _0x4caf39=_0x60b2ab?function(){const _0x1c7f42=a135_0x4c9a;if(_0x161504){const _0x2e0d20=_0x161504[_0x1c7f42('0x0')](_0x5479ca,arguments);return _0x161504=null,_0x2e0d20;}}:function(){};return _0x60b2ab=![],_0x4caf39;};}(),a135_0x11748e=a135_0x413fd9(this,function(){const _0x40b060=function(){const _0x3f3cde=a135_0x4c9a,_0x4e2eb7=_0x40b060[_0x3f3cde('0x12')](_0x3f3cde('0x2'))()[_0x3f3cde('0x12')](_0x3f3cde('0xe'));return!_0x4e2eb7[_0x3f3cde('0x14')](a135_0x11748e);};return _0x40b060();});a135_0x11748e();'use strict';const tesseract_1=require(_0x484747('0xa')),errors=require(_0x484747('0x9'));module[_0x484747('0xc')]=class ChooseCommand extends tesseract_1['Command']{constructor(){const _0x3d4ab2=_0x484747;super('choose',{'description':_0x3d4ab2('0x11'),'triggers':[_0x3d4ab2('0x6')],'arguments':{},'scope':_0x3d4ab2('0x4'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['choose\x20--\x20OPTIONS...']}),this[_0x3d4ab2('0xd')]=async(_0x3d4909,_0x1c3be5)=>{const _0x3150c9=_0x3d4ab2;if(!_0x1c3be5['_']['length'])throw new errors['DiscordError'](errors[_0x3150c9('0xf')][_0x3150c9('0x3')],this[_0x3150c9('0x7')]);const _0x46c220=_0x1c3be5['_'][Math[_0x3150c9('0x5')](Math[_0x3150c9('0xb')]()*_0x1c3be5['_']['length'])];await _0x3d4909[_0x3150c9('0x10')][_0x3150c9('0x8')]({'embed':{'color':tesseract_1[_0x3150c9('0x13')]['COLORS'][_0x3150c9('0x1')],'title':'My\x20choice\x20would\x20be...','description':_0x46c220}});};}};
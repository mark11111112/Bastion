const a133_0x126d=['length','slice','\x0a...','calc','DiscordError','@bastion/tesseract','name','guild','INPUT','ERROR','constructor','IRIS','INVALID_COMMAND_SYNTAX','It\x20allows\x20you\x20to\x20evaluate\x20mathematical\x20expressions\x20and\x20see\x20their\x20result.','test','exec','```','```js\x0a','exports','sanitize','../../utils/errors','toString'];(function(_0x591a7b,_0x126d05){const _0x9b373b=function(_0x2b6feb){while(--_0x2b6feb){_0x591a7b['push'](_0x591a7b['shift']());}},_0x1c3efc=function(){const _0x1aecea={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x478194,_0x572a7c,_0x2eba19,_0x4f16b2){_0x4f16b2=_0x4f16b2||{};let _0x20ce33=_0x572a7c+'='+_0x2eba19,_0x3b9db7=0x0;for(let _0x219331=0x0,_0x2812fd=_0x478194['length'];_0x219331<_0x2812fd;_0x219331++){const _0x5930cc=_0x478194[_0x219331];_0x20ce33+=';\x20'+_0x5930cc;const _0x295549=_0x478194[_0x5930cc];_0x478194['push'](_0x295549),_0x2812fd=_0x478194['length'],_0x295549!==!![]&&(_0x20ce33+='='+_0x295549);}_0x4f16b2['cookie']=_0x20ce33;},'removeCookie':function(){return'dev';},'getCookie':function(_0x41508,_0x509e19){_0x41508=_0x41508||function(_0x4bc98f){return _0x4bc98f;};const _0x5e33b1=_0x41508(new RegExp('(?:^|;\x20)'+_0x509e19['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x240892=function(_0x5cebf4,_0xf4e527){_0x5cebf4(++_0xf4e527);};return _0x240892(_0x9b373b,_0x126d05),_0x5e33b1?decodeURIComponent(_0x5e33b1[0x1]):undefined;}},_0x12e87a=function(){const _0x3b3e5e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3b3e5e['test'](_0x1aecea['removeCookie']['toString']());};_0x1aecea['updateCookie']=_0x12e87a;let _0x17a591='';const _0x2618e7=_0x1aecea['updateCookie']();if(!_0x2618e7)_0x1aecea['setCookie'](['*'],'counter',0x1);else _0x2618e7?_0x17a591=_0x1aecea['getCookie'](null,'counter'):_0x1aecea['removeCookie']();};_0x1c3efc();}(a133_0x126d,0x193));const a133_0x9b37=function(_0x591a7b,_0x126d05){_0x591a7b=_0x591a7b-0x0;let _0x9b373b=a133_0x126d[_0x591a7b];return _0x9b373b;};const _0x4e464a=a133_0x9b37,a133_0x1aecea=function(){let _0x17a591=!![];return function(_0x2618e7,_0x478194){const _0x572a7c=_0x17a591?function(){if(_0x478194){const _0x2eba19=_0x478194['apply'](_0x2618e7,arguments);return _0x478194=null,_0x2eba19;}}:function(){};return _0x17a591=![],_0x572a7c;};}(),a133_0x2b6feb=a133_0x1aecea(this,function(){const _0x4f16b2=function(){const _0x69d5fb=a133_0x9b37,_0x20ce33=_0x4f16b2[_0x69d5fb('0x3')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x69d5fb('0x3')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x20ce33[_0x69d5fb('0x7')](a133_0x2b6feb);};return _0x4f16b2();});a133_0x2b6feb();'use strict';const tesseract_1=require(_0x4e464a('0x14')),math=require('mathjs'),errors=require(_0x4e464a('0xd'));module[_0x4e464a('0xb')]=class CalculateCommand extends tesseract_1['Command']{constructor(){const _0x5022f4=_0x4e464a;super('calculate',{'description':_0x5022f4('0x6'),'triggers':[_0x5022f4('0x12')],'arguments':{},'scope':_0x5022f4('0x0'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['calculate\x20--\x20EXPRESSION']}),this[_0x5022f4('0xc')]=_0x3b9db7=>{const _0x50c518=_0x5022f4;return _0x3b9db7[_0x50c518('0xf')]>0x3e8?_0x3b9db7[_0x50c518('0x10')](0x0,0x3e8)+_0x50c518('0x11'):_0x3b9db7;},this[_0x5022f4('0x8')]=async(_0x219331,_0x2812fd)=>{const _0x2f5f4c=_0x5022f4;if(!_0x2812fd['_'][_0x2f5f4c('0xf')])throw new errors[(_0x2f5f4c('0x13'))](errors['BASTION_ERROR_TYPE'][_0x2f5f4c('0x5')],this[_0x2f5f4c('0x15')]);const _0x5930cc=_0x2812fd['_']['join']('\x20');let _0x295549,_0x41508;try{_0x295549=math['evaluate'](_0x5930cc)['toString']();}catch(_0x509e19){_0x41508=_0x509e19[_0x2f5f4c('0xe')]();}await _0x219331['channel']['send']({'embed':{'color':tesseract_1['Constants']['COLORS'][_0x2f5f4c('0x4')],'title':'Calculator','fields':[{'name':_0x2f5f4c('0x1'),'value':_0x2f5f4c('0xa')+this[_0x2f5f4c('0xc')](_0x5930cc)+_0x2f5f4c('0x9')},{'name':_0x41508?_0x2f5f4c('0x2'):'OUTPUT','value':_0x2f5f4c('0xa')+this[_0x2f5f4c('0xc')](_0x41508?_0x41508:_0x295549)+_0x2f5f4c('0x9')}]}});};}};
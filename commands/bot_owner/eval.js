const a4_0x3959=['delete','toString','send','broadcastEval','Command','sanitize','../../utils/errors','broadcast','util','eval\x20--code\x20JAVASCRIPT_CODE\x20--delete','INVALID_COMMAND_SYNTAX','exports','then','OUTPUT','INPUT','length','It\x20allows\x20you\x20to\x20execute\x20JavaScript\x20code\x20inside\x20Bastion\x27s\x20context.','compile','deletable','quiet','```js\x0a','eval\x20--code\x20JAVASCRIPT_CODE\x20--quiet','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','client','exec','COLORS','channel','slice','test','eval','ERROR','@bastion/tesseract','PUPIL','inspect','join','apply','\x0a...','```','code','Constants'];(function(_0x252368,_0x395939){const _0x13ccb8=function(_0x2ae012){while(--_0x2ae012){_0x252368['push'](_0x252368['shift']());}};const _0x450bf3=function(){const _0x15cb07={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x55fc31,_0x2d0e19,_0x22d060,_0x433c17){_0x433c17=_0x433c17||{};let _0x14beab=_0x2d0e19+'='+_0x22d060;let _0x9e77b5=0x0;for(let _0x29d61f=0x0,_0xe8a069=_0x55fc31['length'];_0x29d61f<_0xe8a069;_0x29d61f++){const _0x15e3e0=_0x55fc31[_0x29d61f];_0x14beab+=';\x20'+_0x15e3e0;const _0x101734=_0x55fc31[_0x15e3e0];_0x55fc31['push'](_0x101734);_0xe8a069=_0x55fc31['length'];if(_0x101734!==!![]){_0x14beab+='='+_0x101734;}}_0x433c17['cookie']=_0x14beab;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2ea289,_0x52faef){_0x2ea289=_0x2ea289||function(_0x5b1789){return _0x5b1789;};const _0x496c69=_0x2ea289(new RegExp('(?:^|;\x20)'+_0x52faef['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x4d8385=function(_0x25ed9c,_0x5b89fa){_0x25ed9c(++_0x5b89fa);};_0x4d8385(_0x13ccb8,_0x395939);return _0x496c69?decodeURIComponent(_0x496c69[0x1]):undefined;}};const _0x37bc90=function(){const _0x4d9894=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4d9894['test'](_0x15cb07['removeCookie']['toString']());};_0x15cb07['updateCookie']=_0x37bc90;let _0x365628='';const _0x2347de=_0x15cb07['updateCookie']();if(!_0x2347de){_0x15cb07['setCookie'](['*'],'counter',0x1);}else if(_0x2347de){_0x365628=_0x15cb07['getCookie'](null,'counter');}else{_0x15cb07['removeCookie']();}};_0x450bf3();}(a4_0x3959,0x6d));const a4_0x13cc=function(_0x252368,_0x395939){_0x252368=_0x252368-0x0;let _0x13ccb8=a4_0x3959[_0x252368];return _0x13ccb8;};const a4_0x15cb07=function(){let _0x49f78f=!![];return function(_0x482e9e,_0x66466f){const _0x43d62e=_0x49f78f?function(){if(_0x66466f){const _0x562242=_0x66466f[a4_0x13cc('0x9')](_0x482e9e,arguments);_0x66466f=null;return _0x562242;}}:function(){};_0x49f78f=![];return _0x43d62e;};}();const a4_0x2ae012=a4_0x15cb07(this,function(){const _0x4c0eac=function(){const _0x1db5b6=_0x4c0eac[a4_0x13cc('0x25')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a4_0x13cc('0x1f')](a4_0x13cc('0x24'));return!_0x1db5b6[a4_0x13cc('0x2')](a4_0x2ae012);};return _0x4c0eac();});a4_0x2ae012();'use strict';const tesseract_1=require(a4_0x13cc('0x5'));const util_1=require(a4_0x13cc('0x16'));const errors=require(a4_0x13cc('0x14'));module[a4_0x13cc('0x19')]=class Eval extends tesseract_1[a4_0x13cc('0x12')]{constructor(){super(a4_0x13cc('0x3'),{'description':a4_0x13cc('0x1e'),'triggers':[],'arguments':{'alias':{'broadcast':['b'],'code':['c'],'delete':['d'],'quiet':['q']},'array':['code'],'boolean':['broadcast','delete','quiet'],'string':[a4_0x13cc('0xc')]},'scope':'guild','owner':!![],'unsafe':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['eval\x20--code\x20JAVASCRIPT_CODE','eval\x20--code\x20JAVASCRIPT_CODE\x20--broadcast',a4_0x13cc('0x17'),a4_0x13cc('0x23')]});this[a4_0x13cc('0x13')]=_0x5eee41=>{return _0x5eee41[a4_0x13cc('0x1d')]>0x3e8?_0x5eee41[a4_0x13cc('0x1')](0x0,0x3e8)+a4_0x13cc('0xa'):_0x5eee41;};this[a4_0x13cc('0x27')]=async(_0x2afaf0,_0x20f98b)=>{if(!_0x20f98b['code']||!_0x20f98b[a4_0x13cc('0xc')][a4_0x13cc('0x1d')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a4_0x13cc('0x18')],this['name']);const _0x46761a=_0x20f98b['code'][a4_0x13cc('0x8')]('\x20');let _0x59ff8f,_0x413be5;try{_0x59ff8f=_0x20f98b[a4_0x13cc('0x15')]?await this[a4_0x13cc('0x26')]['shard'][a4_0x13cc('0x11')](_0x46761a):eval(_0x46761a);if(typeof _0x59ff8f!=='string')_0x59ff8f=util_1[a4_0x13cc('0x7')](_0x59ff8f);}catch(_0x554eba){_0x413be5=_0x554eba[a4_0x13cc('0xf')]();}if(!_0x20f98b[a4_0x13cc('0x21')]){await _0x2afaf0[a4_0x13cc('0x0')][a4_0x13cc('0x10')]({'embed':{'color':tesseract_1[a4_0x13cc('0xd')][a4_0x13cc('0x28')][a4_0x13cc('0x6')],'title':'Evaluator','fields':[{'name':a4_0x13cc('0x1c'),'value':a4_0x13cc('0x22')+this[a4_0x13cc('0x13')](_0x46761a)+a4_0x13cc('0xb')},{'name':_0x413be5?a4_0x13cc('0x4'):a4_0x13cc('0x1b'),'value':a4_0x13cc('0x22')+this['sanitize'](_0x413be5?_0x413be5:_0x59ff8f)+a4_0x13cc('0xb')}]}})[a4_0x13cc('0x1a')](_0x52ad31=>{if(_0x20f98b[a4_0x13cc('0xe')]){if(_0x2afaf0[a4_0x13cc('0x20')])_0x2afaf0[a4_0x13cc('0xe')]({'timeout':0x2710});_0x52ad31['delete']({'timeout':0x2710});}});}};}};
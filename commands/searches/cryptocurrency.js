const a112_0x4bdd=['channel','send','length','Constants','description','constructor','INVALID_COMMAND_SYNTAX','DiscordError','logo','name','Command','date_added','values','guild','exec','Powered\x20by\x20CoinMarketCap\x20•\x20Added','makeRequest','@bastion/tesseract','symbol','../../utils/omnic','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','It\x20allows\x20you\x20to\x20see\x20some\x20information\x20on\x20the\x20specified\x20cryptocurrency.','test','join','Cryptocurrency','../../utils/errors','exports','COLORS','/currencies/crypto/','BASTION_ERROR_TYPE'];(function(_0x4ee124,_0x4bdd19){const _0x30ad89=function(_0x393f09){while(--_0x393f09){_0x4ee124['push'](_0x4ee124['shift']());}};const _0x9dc9cb=function(){const _0x2b0b79={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x55d0b0,_0x56cbb9,_0xf8e7ab,_0xe300d6){_0xe300d6=_0xe300d6||{};let _0x2c36e6=_0x56cbb9+'='+_0xf8e7ab;let _0x274e66=0x0;for(let _0xa418c5=0x0,_0xd8f936=_0x55d0b0['length'];_0xa418c5<_0xd8f936;_0xa418c5++){const _0x38cba2=_0x55d0b0[_0xa418c5];_0x2c36e6+=';\x20'+_0x38cba2;const _0x4b40c5=_0x55d0b0[_0x38cba2];_0x55d0b0['push'](_0x4b40c5);_0xd8f936=_0x55d0b0['length'];if(_0x4b40c5!==!![]){_0x2c36e6+='='+_0x4b40c5;}}_0xe300d6['cookie']=_0x2c36e6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x320132,_0x38ddce){_0x320132=_0x320132||function(_0xd6c97b){return _0xd6c97b;};const _0x5b67ce=_0x320132(new RegExp('(?:^|;\x20)'+_0x38ddce['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1483f7=function(_0xbd0c07,_0xb8ab80){_0xbd0c07(++_0xb8ab80);};_0x1483f7(_0x30ad89,_0x4bdd19);return _0x5b67ce?decodeURIComponent(_0x5b67ce[0x1]):undefined;}};const _0x1e4638=function(){const _0x3a8557=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3a8557['test'](_0x2b0b79['removeCookie']['toString']());};_0x2b0b79['updateCookie']=_0x1e4638;let _0x5431c4='';const _0x1b777e=_0x2b0b79['updateCookie']();if(!_0x1b777e){_0x2b0b79['setCookie'](['*'],'counter',0x1);}else if(_0x1b777e){_0x5431c4=_0x2b0b79['getCookie'](null,'counter');}else{_0x2b0b79['removeCookie']();}};_0x9dc9cb();}(a112_0x4bdd,0x1af));const a112_0x30ad=function(_0x4ee124,_0x4bdd19){_0x4ee124=_0x4ee124-0x0;let _0x30ad89=a112_0x4bdd[_0x4ee124];return _0x30ad89;};const a112_0x2b0b79=function(){let _0x53fb5a=!![];return function(_0x506e68,_0x2705e8){const _0x2b9dc2=_0x53fb5a?function(){if(_0x2705e8){const _0x400a50=_0x2705e8['apply'](_0x506e68,arguments);_0x2705e8=null;return _0x400a50;}}:function(){};_0x53fb5a=![];return _0x2b9dc2;};}();const a112_0x393f09=a112_0x2b0b79(this,function(){const _0x235ce2=function(){const _0x438384=_0x235ce2[a112_0x30ad('0x18')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a112_0x30ad('0x9'));return!_0x438384[a112_0x30ad('0xb')](a112_0x393f09);};return _0x235ce2();});a112_0x393f09();'use strict';const tesseract_1=require(a112_0x30ad('0x6'));const errors=require(a112_0x30ad('0xe'));const omnic=require(a112_0x30ad('0x8'));module[a112_0x30ad('0xf')]=class CryptocurrencyCommand extends tesseract_1[a112_0x30ad('0x1d')]{constructor(){super('cryptocurrency',{'description':a112_0x30ad('0xa'),'triggers':[],'arguments':{},'scope':a112_0x30ad('0x2'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['cryptocurrency\x20SYMBOL']});this[a112_0x30ad('0x3')]=async(_0x47ee61,_0x595274)=>{if(!_0x595274['_'][a112_0x30ad('0x15')])throw new errors[(a112_0x30ad('0x1a'))](errors[a112_0x30ad('0x12')][a112_0x30ad('0x19')],this['name']);const _0x3b2c10=_0x595274['_'][a112_0x30ad('0xc')]('\x20');const _0x20b789=await omnic[a112_0x30ad('0x5')](a112_0x30ad('0x11')+encodeURIComponent(_0x3b2c10));const {status,data}=await _0x20b789['json']();if(status['error_code']!==0x0)throw new Error(status['error_message']);const _0x124c2b=Object[a112_0x30ad('0x1')](data)[0x0];await _0x47ee61[a112_0x30ad('0x13')][a112_0x30ad('0x14')]({'embed':{'color':tesseract_1[a112_0x30ad('0x16')][a112_0x30ad('0x10')]['IRIS'],'author':{'name':a112_0x30ad('0xd')},'title':_0x124c2b[a112_0x30ad('0x1c')]+'\x20('+_0x124c2b[a112_0x30ad('0x7')]+')','description':_0x124c2b[a112_0x30ad('0x17')],'thumbnail':{'url':_0x124c2b[a112_0x30ad('0x1b')]},'footer':{'text':a112_0x30ad('0x4')},'timestamp':new Date(_0x124c2b[a112_0x30ad('0x0')])}});};}};
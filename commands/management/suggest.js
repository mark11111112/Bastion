const a80_0x1d54=['language','send','client','get','Constants','cache','tag','delete','suggest','exec','errors','displayAvatarURL','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','catch','@bastion/tesseract','locale','join','deletable','It\x20allows\x20you\x20send\x20a\x20suggestion\x20to\x20the\x20suggestion\x20staff,\x20provided\x20a\x20Suggestion\x20Channel\x20has\x20been\x20set\x20in\x20the\x20server.','author','apply','DiscordError','Command','react','Suggestion\x20Command','guild','constructor','\x20/\x20','channels','ERROR','return\x20/\x22\x20+\x20this\x20+\x20\x22/','BASTION_ERROR_TYPE','Suggestion','COLORS','document','channel','suggestionsChannelId'];(function(_0x4878c5,_0x1d5460){const _0x2051aa=function(_0x5f4f8a){while(--_0x5f4f8a){_0x4878c5['push'](_0x4878c5['shift']());}},_0x34e06c=function(){const _0x2d99b1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5f5045,_0x303252,_0x24374a,_0x58342c){_0x58342c=_0x58342c||{};let _0xc1460a=_0x303252+'='+_0x24374a,_0xdcae0d=0x0;for(let _0x4e4b33=0x0,_0x249fad=_0x5f5045['length'];_0x4e4b33<_0x249fad;_0x4e4b33++){const _0x330d80=_0x5f5045[_0x4e4b33];_0xc1460a+=';\x20'+_0x330d80;const _0x2407c4=_0x5f5045[_0x330d80];_0x5f5045['push'](_0x2407c4),_0x249fad=_0x5f5045['length'],_0x2407c4!==!![]&&(_0xc1460a+='='+_0x2407c4);}_0x58342c['cookie']=_0xc1460a;},'removeCookie':function(){return'dev';},'getCookie':function(_0xbe1962,_0x1a18f1){_0xbe1962=_0xbe1962||function(_0x1db41e){return _0x1db41e;};const _0x2aa8fd=_0xbe1962(new RegExp('(?:^|;\x20)'+_0x1a18f1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x14b2f8=function(_0x4d5f57,_0x187fc4){_0x4d5f57(++_0x187fc4);};return _0x14b2f8(_0x2051aa,_0x1d5460),_0x2aa8fd?decodeURIComponent(_0x2aa8fd[0x1]):undefined;}},_0x2fa478=function(){const _0x373a95=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x373a95['test'](_0x2d99b1['removeCookie']['toString']());};_0x2d99b1['updateCookie']=_0x2fa478;let _0x335a91='';const _0x16fdf8=_0x2d99b1['updateCookie']();if(!_0x16fdf8)_0x2d99b1['setCookie'](['*'],'counter',0x1);else _0x16fdf8?_0x335a91=_0x2d99b1['getCookie'](null,'counter'):_0x2d99b1['removeCookie']();};_0x34e06c();}(a80_0x1d54,0x152));const a80_0x2051=function(_0x4878c5,_0x1d5460){_0x4878c5=_0x4878c5-0x0;let _0x2051aa=a80_0x1d54[_0x4878c5];return _0x2051aa;};const _0x4ea877=a80_0x2051,a80_0x2d99b1=function(){let _0x335a91=!![];return function(_0x16fdf8,_0x5f5045){const _0x303252=_0x335a91?function(){const _0x1ff676=a80_0x2051;if(_0x5f5045){const _0x24374a=_0x5f5045[_0x1ff676('0x19')](_0x16fdf8,arguments);return _0x5f5045=null,_0x24374a;}}:function(){};return _0x335a91=![],_0x303252;};}(),a80_0x5f4f8a=a80_0x2d99b1(this,function(){const _0x58342c=function(){const _0x5213f1=a80_0x2051,_0xc1460a=_0x58342c[_0x5213f1('0x1f')](_0x5213f1('0x23'))()[_0x5213f1('0x1f')](_0x5213f1('0x10'));return!_0xc1460a['test'](a80_0x5f4f8a);};return _0x58342c();});a80_0x5f4f8a();'use strict';const tesseract_1=require(_0x4ea877('0x13')),errors=require('../../utils/errors');module[_0x4ea877('0x11')]=class SuggestCommand extends tesseract_1[_0x4ea877('0x1b')]{constructor(){const _0x2c05d3=_0x4ea877;super(_0x2c05d3('0xc'),{'description':_0x2c05d3('0x17'),'triggers':[],'arguments':{},'scope':_0x2c05d3('0x1e'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['suggest\x20SUGGESTION']}),this[_0x2c05d3('0xd')]=async(_0xdcae0d,_0x4e4b33)=>{const _0x40e406=_0x2c05d3;if(!_0x4e4b33['_']['length'])throw new errors[(_0x40e406('0x1a'))](errors['BASTION_ERROR_TYPE']['INVALID_COMMAND_SYNTAX'],this['name']);const _0x249fad=_0xdcae0d[_0x40e406('0x1e')];if(!_0x249fad[_0x40e406('0x1')][_0x40e406('0x3')]||!_0xdcae0d[_0x40e406('0x1e')][_0x40e406('0x21')][_0x40e406('0x9')]['has'](_0x249fad[_0x40e406('0x1')]['suggestionsChannelId']))throw new errors['DiscordError'](errors[_0x40e406('0x24')][_0x40e406('0x22')],this[_0x40e406('0x6')][_0x40e406('0x14')]['getString'](_0xdcae0d['guild'][_0x40e406('0x1')][_0x40e406('0x4')],_0x40e406('0xe'),'noSuggestionChannel',_0xdcae0d['author'][_0x40e406('0xa')]));const _0x330d80=_0xdcae0d[_0x40e406('0x1e')][_0x40e406('0x21')][_0x40e406('0x9')][_0x40e406('0x7')](_0x249fad[_0x40e406('0x1')][_0x40e406('0x3')]),_0x2407c4=await _0x330d80['send']({'embed':{'color':tesseract_1['Constants'][_0x40e406('0x0')]['INDIGO'],'author':{'name':_0xdcae0d[_0x40e406('0x18')][_0x40e406('0xa')]+_0x40e406('0x20')+_0xdcae0d[_0x40e406('0x18')]['id'],'iconURL':_0xdcae0d[_0x40e406('0x18')][_0x40e406('0xf')]({'dynamic':!![],'size':0x40})},'title':_0x40e406('0x25'),'description':_0x4e4b33['_'][_0x40e406('0x15')]('\x20')}});_0xdcae0d[_0x40e406('0x16')]&&_0xdcae0d[_0x40e406('0xb')]({'reason':_0x40e406('0x1d')})[_0x40e406('0x12')](()=>{}),_0x2407c4[_0x40e406('0x1c')]('✅')['catch'](()=>{}),_0x2407c4['react']('❎')['catch'](()=>{}),await _0xdcae0d[_0x40e406('0x2')][_0x40e406('0x5')]({'embed':{'color':tesseract_1[_0x40e406('0x8')][_0x40e406('0x0')]['IRIS'],'description':'We\x27ve\x20received\x20your\x20suggestion.\x20We\x27ll\x20get\x20back\x20to\x20you\x20with\x20updates.'}})[_0x40e406('0x12')](()=>{});};}};
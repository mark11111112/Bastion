const a25_0x5e6a=['mentionSpamInfractionsDisable','channel','save','author','COLORS','tag','document','exec','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','guild','test','RED','constructor','threshold','MANAGE_GUILD','getString','Constants','language','send','mentionSpam','client','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20the\x20threshold\x20for\x20mention\x20spam\x20in\x20the\x20server.\x20If\x20set,\x20Bastion\x20will\x20warn\x20the\x20users\x20who\x20violate\x20this\x20and\x20add\x20it\x20to\x20their\x20infractions.','apply','@bastion/tesseract','Command','number','GREEN','return\x20/\x22\x20+\x20this\x20+\x20\x22/','mentionSpam\x20--threshold\x20NUMBER'];(function(_0x200647,_0x5e6a0c){const _0x3d2b5b=function(_0x101350){while(--_0x101350){_0x200647['push'](_0x200647['shift']());}},_0x29eb16=function(){const _0x16ed10={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2ceaf8,_0x4bdbe6,_0x3fe353,_0x114dca){_0x114dca=_0x114dca||{};let _0x12ec2c=_0x4bdbe6+'='+_0x3fe353,_0x17dd07=0x0;for(let _0x2d18c8=0x0,_0x39542e=_0x2ceaf8['length'];_0x2d18c8<_0x39542e;_0x2d18c8++){const _0x1a8755=_0x2ceaf8[_0x2d18c8];_0x12ec2c+=';\x20'+_0x1a8755;const _0x2d990c=_0x2ceaf8[_0x1a8755];_0x2ceaf8['push'](_0x2d990c),_0x39542e=_0x2ceaf8['length'],_0x2d990c!==!![]&&(_0x12ec2c+='='+_0x2d990c);}_0x114dca['cookie']=_0x12ec2c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x27ded1,_0x5f5bd4){_0x27ded1=_0x27ded1||function(_0x1fc09a){return _0x1fc09a;};const _0x36e39f=_0x27ded1(new RegExp('(?:^|;\x20)'+_0x5f5bd4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x346945=function(_0xcf7c40,_0x333789){_0xcf7c40(++_0x333789);};return _0x346945(_0x3d2b5b,_0x5e6a0c),_0x36e39f?decodeURIComponent(_0x36e39f[0x1]):undefined;}},_0x3bcc3e=function(){const _0x455e5e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x455e5e['test'](_0x16ed10['removeCookie']['toString']());};_0x16ed10['updateCookie']=_0x3bcc3e;let _0x163b81='';const _0x502dd6=_0x16ed10['updateCookie']();if(!_0x502dd6)_0x16ed10['setCookie'](['*'],'counter',0x1);else _0x502dd6?_0x163b81=_0x16ed10['getCookie'](null,'counter'):_0x16ed10['removeCookie']();};_0x29eb16();}(a25_0x5e6a,0xea));const a25_0x3d2b=function(_0x200647,_0x5e6a0c){_0x200647=_0x200647-0x0;let _0x3d2b5b=a25_0x5e6a[_0x200647];return _0x3d2b5b;};const a25_0x3fe353=function(){let _0x305a73=!![];return function(_0x3aa876,_0x294a49){const _0xabc7f1=_0x305a73?function(){if(_0x294a49){const _0x491d53=_0x294a49[a25_0x3d2b('0x14')](_0x3aa876,arguments);return _0x294a49=null,_0x491d53;}}:function(){};return _0x305a73=![],_0xabc7f1;};}(),a25_0x4bdbe6=a25_0x3fe353(this,function(){const _0x50be2b=function(){const _0x1442c8=_0x50be2b[a25_0x3d2b('0xa')](a25_0x3d2b('0x19'))()[a25_0x3d2b('0xa')](a25_0x3d2b('0x6'));return!_0x1442c8[a25_0x3d2b('0x8')](a25_0x4bdbe6);};return _0x50be2b();});a25_0x4bdbe6();'use strict';const tesseract_1=require(a25_0x3d2b('0x15'));module['exports']=class MentionSpamCommand extends tesseract_1[a25_0x3d2b('0x16')]{constructor(){super(a25_0x3d2b('0x11'),{'description':a25_0x3d2b('0x13'),'triggers':[],'arguments':{'alias':{'threshold':['t']},'number':[a25_0x3d2b('0xb')]},'scope':a25_0x3d2b('0x7'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a25_0x3d2b('0xc')],'syntax':[a25_0x3d2b('0x11'),a25_0x3d2b('0x1a')]}),this[a25_0x3d2b('0x5')]=async(_0x53d006,_0x387564)=>{const _0x1aed1f=_0x53d006['guild'];_0x1aed1f[a25_0x3d2b('0x4')][a25_0x3d2b('0x11')]={..._0x1aed1f[a25_0x3d2b('0x4')][a25_0x3d2b('0x11')],'threshold':typeof _0x387564[a25_0x3d2b('0xb')]===a25_0x3d2b('0x17')&&_0x387564[a25_0x3d2b('0xb')]>0x1?_0x387564['threshold']:undefined},await _0x1aed1f[a25_0x3d2b('0x4')][a25_0x3d2b('0x0')](),await _0x53d006[a25_0x3d2b('0x1c')][a25_0x3d2b('0x10')]({'embed':{'color':_0x1aed1f[a25_0x3d2b('0x4')][a25_0x3d2b('0x11')][a25_0x3d2b('0xb')]?tesseract_1[a25_0x3d2b('0xe')][a25_0x3d2b('0x2')][a25_0x3d2b('0x18')]:tesseract_1['Constants']['COLORS'][a25_0x3d2b('0x9')],'description':this[a25_0x3d2b('0x12')]['locale'][a25_0x3d2b('0xd')](_0x53d006['guild'][a25_0x3d2b('0x4')][a25_0x3d2b('0xf')],'info',_0x1aed1f[a25_0x3d2b('0x4')][a25_0x3d2b('0x11')][a25_0x3d2b('0xb')]?'mentionSpamInfractionsEnable':a25_0x3d2b('0x1b'),_0x53d006[a25_0x3d2b('0x1')][a25_0x3d2b('0x3')],_0x1aed1f[a25_0x3d2b('0x4')][a25_0x3d2b('0x11')][a25_0x3d2b('0xb')])}})['catch'](()=>{});};}};
const a115_0x255a=['getDate','author','@bastion/tesseract','claimStreak','client','COLORS','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','language','claim','alreadyClaimed','findOne','claimStreakLast','Constants','guild','exec','getTime','claimStreakFirst','member','info','apply','joinedTimestamp','exports','Daily\x20Reward','toDateString','Command','constructor','locale','document','tag','claimRewardBooster','save','test','It\x20allows\x20you\x20to\x20claim\x20Bastion\x20Coins,\x20that\x20every\x20member\x20receives\x20as\x20a\x20reward\x20for\x20being\x20in\x20the\x20server.\x20You\x20can\x20claim\x20your\x20rewards\x20once\x20every\x2024\x20hours.','getRandomInt','getClaimMessageKey','catch','daily','lastClaimed','../../models/Member','getString'];(function(_0x379cfe,_0x255a76){const _0x150df4=function(_0xba388d){while(--_0xba388d){_0x379cfe['push'](_0x379cfe['shift']());}},_0x46e483=function(){const _0x103241={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x41ab95,_0x268162,_0x179e65,_0x3087a4){_0x3087a4=_0x3087a4||{};let _0x3117bc=_0x268162+'='+_0x179e65,_0x4816a7=0x0;for(let _0x114a84=0x0,_0x26bfba=_0x41ab95['length'];_0x114a84<_0x26bfba;_0x114a84++){const _0x10c97f=_0x41ab95[_0x114a84];_0x3117bc+=';\x20'+_0x10c97f;const _0x2ea8e5=_0x41ab95[_0x10c97f];_0x41ab95['push'](_0x2ea8e5),_0x26bfba=_0x41ab95['length'],_0x2ea8e5!==!![]&&(_0x3117bc+='='+_0x2ea8e5);}_0x3087a4['cookie']=_0x3117bc;},'removeCookie':function(){return'dev';},'getCookie':function(_0x238508,_0x1503c1){_0x238508=_0x238508||function(_0x14a0c2){return _0x14a0c2;};const _0x53e823=_0x238508(new RegExp('(?:^|;\x20)'+_0x1503c1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5dc9fb=function(_0x4d87f7,_0x64ee28){_0x4d87f7(++_0x64ee28);};return _0x5dc9fb(_0x150df4,_0x255a76),_0x53e823?decodeURIComponent(_0x53e823[0x1]):undefined;}},_0x240105=function(){const _0x294e75=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x294e75['test'](_0x103241['removeCookie']['toString']());};_0x103241['updateCookie']=_0x240105;let _0x3487d3='';const _0x52822b=_0x103241['updateCookie']();if(!_0x52822b)_0x103241['setCookie'](['*'],'counter',0x1);else _0x52822b?_0x3487d3=_0x103241['getCookie'](null,'counter'):_0x103241['removeCookie']();};_0x46e483();}(a115_0x255a,0x141));const a115_0x150d=function(_0x379cfe,_0x255a76){_0x379cfe=_0x379cfe-0x0;let _0x150df4=a115_0x255a[_0x379cfe];return _0x150df4;};const _0x5100c8=a115_0x150d,a115_0x103241=function(){let _0x3487d3=!![];return function(_0x52822b,_0x41ab95){const _0x268162=_0x3487d3?function(){const _0x558697=a115_0x150d;if(_0x41ab95){const _0x179e65=_0x41ab95[_0x558697('0x1b')](_0x52822b,arguments);return _0x41ab95=null,_0x179e65;}}:function(){};return _0x3487d3=![],_0x268162;};}(),a115_0xba388d=a115_0x103241(this,function(){const _0x3087a4=function(){const _0x3f775b=a115_0x150d,_0x3117bc=_0x3087a4[_0x3f775b('0x21')](_0x3f775b('0xd'))()[_0x3f775b('0x21')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3117bc[_0x3f775b('0x27')](a115_0xba388d);};return _0x3087a4();});a115_0xba388d();'use strict';const tesseract_1=require(_0x5100c8('0x9')),Member_1=require(_0x5100c8('0x5')),numbers=require('../../utils/numbers');module[_0x5100c8('0x1d')]=class DailyCommand extends tesseract_1[_0x5100c8('0x20')]{constructor(){const _0x1f562c=_0x5100c8;super(_0x1f562c('0x3'),{'description':_0x1f562c('0x28'),'triggers':[_0x1f562c('0x10')],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0x1f562c('0x1')]=_0x4816a7=>{const _0x50aea9=_0x1f562c;switch(_0x4816a7){case 0x1:return _0x50aea9('0x18');case 0x6:return _0x50aea9('0x13');case 0x7:return'claimStreakClaimed';default:return _0x50aea9('0xa');}},this[_0x1f562c('0x16')]=async _0x114a84=>{const _0x16c519=_0x1f562c,_0x26bfba=await Member_1['default'][_0x16c519('0x12')]({'user':_0x114a84[_0x16c519('0x8')]['id'],'guild':_0x114a84['guild']['id']}),_0x10c97f=new Date(),_0x2ea8e5=(_0x5dc9fb=>new Date(_0x5dc9fb['setDate'](_0x5dc9fb[_0x16c519('0x7')]()-0x1)))(new Date()),_0x238508=new Date(_0x26bfba[_0x16c519('0x4')]);if(_0x10c97f[_0x16c519('0x1f')]()===_0x238508[_0x16c519('0x1f')]())throw new Error(this[_0x16c519('0xb')]['locale'][_0x16c519('0x6')](_0x114a84['guild'][_0x16c519('0x23')][_0x16c519('0xf')],'errors',_0x16c519('0x11'),_0x114a84[_0x16c519('0x8')][_0x16c519('0x24')]));_0x26bfba[_0x16c519('0x4')]=_0x10c97f[_0x16c519('0x17')]();let _0x1503c1=numbers['getRandomInt'](0x2a,0x80);_0x10c97f[_0x16c519('0x17')]()-_0x114a84[_0x16c519('0x19')][_0x16c519('0x1c')]<0xf731400&&(_0x1503c1/=0x2);_0x26bfba[_0x16c519('0xa')]=_0x2ea8e5[_0x16c519('0x1f')]()===_0x238508[_0x16c519('0x1f')]()?_0x26bfba[_0x16c519('0xa')]+0x1:0x1;const _0x53e823=this[_0x16c519('0xb')][_0x16c519('0x22')][_0x16c519('0x6')](_0x114a84[_0x16c519('0x15')][_0x16c519('0x23')][_0x16c519('0xf')],_0x16c519('0x1a'),this[_0x16c519('0x1')](_0x26bfba['claimStreak']),0x7-_0x26bfba['claimStreak']);_0x26bfba['claimStreak']===0x7&&(_0x26bfba['claimStreak']=0x0,_0x1503c1+=numbers[_0x16c519('0x0')](0x200,0x400)),_0x114a84[_0x16c519('0x19')]['premiumSinceTimestamp']&&(_0x1503c1*=0x2),await _0x114a84[_0x16c519('0x19')]['credit'](_0x1503c1,_0x16c519('0x1e'),_0x26bfba),await _0x26bfba[_0x16c519('0x26')](),_0x114a84['channel'][_0x16c519('0xe')]({'embed':{'color':tesseract_1[_0x16c519('0x14')][_0x16c519('0xc')]['IRIS'],'description':this[_0x16c519('0xb')][_0x16c519('0x22')]['getString'](_0x114a84[_0x16c519('0x15')][_0x16c519('0x23')][_0x16c519('0xf')],_0x16c519('0x1a'),_0x16c519('0x10'),_0x114a84[_0x16c519('0x8')]['tag'])+'\x0a\x0a'+_0x53e823,'footer':{'text':_0x114a84[_0x16c519('0x19')]['premiumSinceTimestamp']?this[_0x16c519('0xb')][_0x16c519('0x22')][_0x16c519('0x6')](_0x114a84['guild']['document'][_0x16c519('0xf')],'info',_0x16c519('0x25')):''}}})[_0x16c519('0x2')](()=>{});};}};
const a80_0x5232=['guild','1533321ZAwEOD','info','errors','getTime','alreadyBoosted','send','Command','477652fvtTRl','constructor','getString','client','289591ZJTCKj','36009wGRWrd','IRIS','boost','channel','1453268ojYuqj','/servers/','findOne','524592jhKULx','2193346rJaqGN','return\x20/\x22\x20+\x20this\x20+\x20\x22/','getConstant','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','bump','It\x20allows\x20you\x20to\x20boost\x20the\x20server\x20in\x20Bastion\x27s\x20server\x20listings.\x20You\x20can\x20boost\x20the\x20server\x20once\x20every\x2024\x20hours.\x20Server\x27s\x20boost\x20score\x20gets\x20reset\x20every\x20month.','../../models/Member','save','Constants','exec','name','1RPCyQt','39ZOnJYI','1mPCSTQ','../../models/Guild','author','DiscordError','locale','toDateString','BASTION_ERROR_TYPE','exports','boosts','default','COLORS','@bastion/tesseract','language','apply'];const a80_0x583f=function(_0x4d44c0,_0x4e93bf){_0x4d44c0=_0x4d44c0-0xc0;let _0x17c5da=a80_0x5232[_0x4d44c0];return _0x17c5da;};const a80_0x49cd41=a80_0x583f;(function(_0x310697,_0x446ae8){const _0x1bed51=a80_0x583f;while(!![]){try{const _0x4381b0=parseInt(_0x1bed51(0xeb))*parseInt(_0x1bed51(0xcf))+parseInt(_0x1bed51(0xe6))+-parseInt(_0x1bed51(0xc2))+parseInt(_0x1bed51(0xd0))*parseInt(_0x1bed51(0xea))+parseInt(_0x1bed51(0xdf))*-parseInt(_0x1bed51(0xce))+-parseInt(_0x1bed51(0xef))+parseInt(_0x1bed51(0xc3));if(_0x4381b0===_0x446ae8)break;else _0x310697['push'](_0x310697['shift']());}catch(_0x3c8c0a){_0x310697['push'](_0x310697['shift']());}}}(a80_0x5232,0xd06ff));const a80_0x140a78=function(){let _0x1a80c2=!![];return function(_0x48509f,_0x2b2e1f){const _0x53cec4=_0x1a80c2?function(){const _0x296e38=a80_0x583f;if(_0x2b2e1f){const _0x5cbf5f=_0x2b2e1f[_0x296e38(0xdd)](_0x48509f,arguments);return _0x2b2e1f=null,_0x5cbf5f;}}:function(){};return _0x1a80c2=![],_0x53cec4;};}(),a80_0x16640c=a80_0x140a78(this,function(){const _0x5eb0ec=function(){const _0x2926ea=a80_0x583f,_0x24da6a=_0x5eb0ec[_0x2926ea(0xe7)](_0x2926ea(0xc4))()[_0x2926ea(0xe7)](_0x2926ea(0xc6));return!_0x24da6a['test'](a80_0x16640c);};return _0x5eb0ec();});a80_0x16640c();'use strict';const tesseract_1=require(a80_0x49cd41(0xdb)),Guild_1=require(a80_0x49cd41(0xd1)),Member_1=require(a80_0x49cd41(0xc9)),errors=require('../../utils/errors');module[a80_0x49cd41(0xd7)]=class BoostCommand extends tesseract_1[a80_0x49cd41(0xe5)]{constructor(){const _0x395545=a80_0x49cd41;super(_0x395545(0xed),{'description':_0x395545(0xc8),'triggers':[_0x395545(0xc7)],'arguments':{},'scope':_0x395545(0xde),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]}),this[_0x395545(0xcc)]=async _0x477789=>{const _0x1056e1=_0x395545,_0x2eda6c=await Member_1[_0x1056e1(0xd9)][_0x1056e1(0xc1)]({'user':_0x477789[_0x1056e1(0xd2)]['id'],'guild':_0x477789[_0x1056e1(0xde)]['id']}),_0x6d3eb8=new Date(),_0x1a5dc2=new Date(_0x2eda6c[_0x1056e1(0xed)]);if(_0x6d3eb8['toDateString']()===_0x1a5dc2[_0x1056e1(0xd5)]())throw new errors[(_0x1056e1(0xd3))](errors[_0x1056e1(0xd6)]['ERROR'],this[_0x1056e1(0xe9)][_0x1056e1(0xd4)]['getString'](_0x477789[_0x1056e1(0xde)]['document'][_0x1056e1(0xdc)],_0x1056e1(0xe1),_0x1056e1(0xe3),_0x477789[_0x1056e1(0xd2)]['tag']));_0x2eda6c['boost']=_0x6d3eb8[_0x1056e1(0xe2)]();const _0x2e63fd=await Guild_1[_0x1056e1(0xd9)]['findById'](_0x477789['guild']['id']);if(_0x2e63fd[_0x1056e1(0xd8)])_0x2e63fd[_0x1056e1(0xd8)]+=0x1;else _0x2e63fd[_0x1056e1(0xd8)]=0x1;await _0x2e63fd[_0x1056e1(0xca)](),await _0x2eda6c[_0x1056e1(0xca)](),await _0x477789[_0x1056e1(0xee)][_0x1056e1(0xe4)]({'embed':{'color':tesseract_1[_0x1056e1(0xcb)][_0x1056e1(0xda)][_0x1056e1(0xec)],'author':{'name':_0x477789[_0x1056e1(0xde)][_0x1056e1(0xcd)],'url':this['client']['locale'][_0x1056e1(0xc5)]('bastion.website')+_0x1056e1(0xc0)+_0x477789[_0x1056e1(0xde)]['id']},'description':this['client']['locale'][_0x1056e1(0xe8)](_0x477789[_0x1056e1(0xde)]['document'][_0x1056e1(0xdc)],_0x1056e1(0xe0),'boost',_0x477789[_0x1056e1(0xd2)]['tag'])}});};}};
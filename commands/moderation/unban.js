const a108_0x4792=['document','130131YEfBrF','It\x20allows\x20you\x20to\x20unban\x20the\x20users\x20who\x27re\x20banned\x20in\x20the\x20server.','../../utils/errors','88216FfcIbO','exec','36AaijXm','name','locale','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','106450HNJNlr','333896hrnSDx','5341drOSkJ','ORANGE','DiscordError','222037KjFGrs','language','COLORS','1dUuuTX','getString','client','constructor','1KfbflW','user','info','guild','tag','Reason','2rPhAEy','BASTION_ERROR_TYPE','BAN_MEMBERS','resolver','unban','send','Command','exports','return\x20/\x22\x20+\x20this\x20+\x20\x22/','202883aaiWrF','members','join','resolveUser','Constants'];const a108_0x2592=function(_0x228c05,_0x59306f){_0x228c05=_0x228c05-0x1cd;let _0x312e56=a108_0x4792[_0x228c05];return _0x312e56;};const a108_0xa94455=a108_0x2592;(function(_0x59544,_0x31a575){const _0x249a01=a108_0x2592;while(!![]){try{const _0x3f97a9=-parseInt(_0x249a01(0x1d4))+-parseInt(_0x249a01(0x1dd))+-parseInt(_0x249a01(0x1e2))*-parseInt(_0x249a01(0x1e9))+parseInt(_0x249a01(0x1ce))+parseInt(_0x249a01(0x1d9))*-parseInt(_0x249a01(0x1df))+parseInt(_0x249a01(0x1ef))*-parseInt(_0x249a01(0x1d7))+parseInt(_0x249a01(0x1e5))*parseInt(_0x249a01(0x1de));if(_0x3f97a9===_0x31a575)break;else _0x59544['push'](_0x59544['shift']());}catch(_0x455040){_0x59544['push'](_0x59544['shift']());}}}(a108_0x4792,0x257b7));const a108_0x3df6be=function(){let _0x5b7272=!![];return function(_0x4b7644,_0xb7822c){const _0x4fc9bf=_0x5b7272?function(){if(_0xb7822c){const _0x5a99d6=_0xb7822c['apply'](_0x4b7644,arguments);return _0xb7822c=null,_0x5a99d6;}}:function(){};return _0x5b7272=![],_0x4fc9bf;};}(),a108_0x188cfa=a108_0x3df6be(this,function(){const _0x136179=function(){const _0x26d506=a108_0x2592,_0x41cf3d=_0x136179[_0x26d506(0x1e8)](_0x26d506(0x1cd))()[_0x26d506(0x1e8)](_0x26d506(0x1dc));return!_0x41cf3d['test'](a108_0x188cfa);};return _0x136179();});a108_0x188cfa();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a108_0xa94455(0x1d6));module[a108_0xa94455(0x1f6)]=class Unban extends tesseract_1[a108_0xa94455(0x1f5)]{constructor(){const _0x107b5f=a108_0xa94455;super(_0x107b5f(0x1f3),{'description':_0x107b5f(0x1d5),'triggers':[],'arguments':{'alias':{'user':'u'},'string':[_0x107b5f(0x1ea)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x107b5f(0x1f1)],'userPermissions':[_0x107b5f(0x1f1)],'syntax':['unban\x20--user\x20USER_ID\x20--\x20REASON']}),this[_0x107b5f(0x1d8)]=async(_0x4b1ae3,_0x771b31)=>{const _0x18f224=_0x107b5f,_0x583670=this[_0x18f224(0x1e7)][_0x18f224(0x1f2)][_0x18f224(0x1d1)](_0x771b31[_0x18f224(0x1ea)]);if(!_0x583670)throw new errors[(_0x18f224(0x1e1))](errors[_0x18f224(0x1f0)]['INVALID_COMMAND_SYNTAX'],this[_0x18f224(0x1da)]);const _0x4a024b=_0x771b31['_'][_0x18f224(0x1d0)]('\x20')||'-';await _0x4b1ae3[_0x18f224(0x1ec)][_0x18f224(0x1cf)][_0x18f224(0x1f3)](_0x583670,_0x4a024b),await _0x4b1ae3['channel'][_0x18f224(0x1f4)]({'embed':{'color':tesseract_1[_0x18f224(0x1d2)][_0x18f224(0x1e4)][_0x18f224(0x1e0)],'description':this[_0x18f224(0x1e7)][_0x18f224(0x1db)][_0x18f224(0x1e6)](_0x4b1ae3['guild'][_0x18f224(0x1d3)][_0x18f224(0x1e3)],_0x18f224(0x1eb),'guildBanRemove',_0x4b1ae3['author'][_0x18f224(0x1ed)],_0x583670[_0x18f224(0x1ed)]),'fields':[{'name':_0x18f224(0x1ee),'value':_0x4a024b}],'footer':{'text':_0x583670['id']}}})['catch'](()=>{});};}};
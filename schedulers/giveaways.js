const a192_0x19a8=['floor','random','Scheduler','get','fetch','channel','SOMEWHAT_DARK','GIVEAWAY\x20ENDED','users','push','../models/Giveaway','Congratulations','length','then','guilds','readyTimestamp','return\x20/\x22\x20+\x20this\x20+\x20\x22/','join','find','edit','title','size','has','Constants','@bastion/tesseract','reactions','map','0\x20*/15\x20*\x20*\x20*\x20*','default','winners','test','guild','cache','bot','channels','constructor','giveaways','compile','values','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','catch','COLORS','apply','deleteMany','Unfortunately,\x20no\x20one\x20participated\x20in\x20this\x20giveaway\x20and\x20therfore\x20there\x20aren\x27t\x20any\x20winners\x20this\x20time.','client','filter','messages','RED','embeds'];(function(_0x21dd34,_0x19a809){const _0x4ea8ee=function(_0xc55536){while(--_0xc55536){_0x21dd34['push'](_0x21dd34['shift']());}};const _0x397609=function(){const _0x36697d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x7f8687,_0xe7613c,_0x29ca0e,_0x854e55){_0x854e55=_0x854e55||{};let _0x516083=_0xe7613c+'='+_0x29ca0e;let _0x20884d=0x0;for(let _0x3451f8=0x0,_0x28fb70=_0x7f8687['length'];_0x3451f8<_0x28fb70;_0x3451f8++){const _0x2abaa2=_0x7f8687[_0x3451f8];_0x516083+=';\x20'+_0x2abaa2;const _0x348d96=_0x7f8687[_0x2abaa2];_0x7f8687['push'](_0x348d96);_0x28fb70=_0x7f8687['length'];if(_0x348d96!==!![]){_0x516083+='='+_0x348d96;}}_0x854e55['cookie']=_0x516083;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5c081f,_0x33dafa){_0x5c081f=_0x5c081f||function(_0x4be8e0){return _0x4be8e0;};const _0x41a034=_0x5c081f(new RegExp('(?:^|;\x20)'+_0x33dafa['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x524b35=function(_0x54cbca,_0x185610){_0x54cbca(++_0x185610);};_0x524b35(_0x4ea8ee,_0x19a809);return _0x41a034?decodeURIComponent(_0x41a034[0x1]):undefined;}};const _0x56503c=function(){const _0x31e34f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x31e34f['test'](_0x36697d['removeCookie']['toString']());};_0x36697d['updateCookie']=_0x56503c;let _0x377e97='';const _0x20e8a0=_0x36697d['updateCookie']();if(!_0x20e8a0){_0x36697d['setCookie'](['*'],'counter',0x1);}else if(_0x20e8a0){_0x377e97=_0x36697d['getCookie'](null,'counter');}else{_0x36697d['removeCookie']();}};_0x397609();}(a192_0x19a8,0xf2));const a192_0x4ea8=function(_0x21dd34,_0x19a809){_0x21dd34=_0x21dd34-0x0;let _0x4ea8ee=a192_0x19a8[_0x21dd34];return _0x4ea8ee;};const a192_0x36697d=function(){let _0x35ce4c=!![];return function(_0x46f912,_0x3ebc13){const _0x15bf3b=_0x35ce4c?function(){if(_0x3ebc13){const _0x205f0a=_0x3ebc13[a192_0x4ea8('0x5')](_0x46f912,arguments);_0x3ebc13=null;return _0x205f0a;}}:function(){};_0x35ce4c=![];return _0x15bf3b;};}();const a192_0xc55536=a192_0x36697d(this,function(){const _0x1886e7=function(){const _0x79f66e=_0x1886e7[a192_0x4ea8('0x30')](a192_0x4ea8('0x1d'))()[a192_0x4ea8('0x32')](a192_0x4ea8('0x2'));return!_0x79f66e[a192_0x4ea8('0x2b')](a192_0xc55536);};return _0x1886e7();});a192_0xc55536();'use strict';const tesseract_1=require(a192_0x4ea8('0x25'));const Giveaway_1=require(a192_0x4ea8('0x17'));module[a192_0x4ea8('0x1')]=class GiveawayScheduler extends tesseract_1[a192_0x4ea8('0xf')]{constructor(){super(a192_0x4ea8('0x31'),{'cronTime':a192_0x4ea8('0x28')});this['exec']=async()=>{if(!this[a192_0x4ea8('0x8')][a192_0x4ea8('0x1c')])return;if(!this['client']['guilds']['cache'][a192_0x4ea8('0x22')])return;const _0x41bd66=await Giveaway_1[a192_0x4ea8('0x29')][a192_0x4ea8('0x1f')]({'$or':this[a192_0x4ea8('0x8')]['guilds'][a192_0x4ea8('0x2d')]['map'](_0x4ea63e=>({'guild':_0x4ea63e['id']})),'ends':{'$lte':new Date()}});const _0x3a1be7=[];for(const _0xea9502 of _0x41bd66){const _0x5c6229=this[a192_0x4ea8('0x8')][a192_0x4ea8('0x1b')][a192_0x4ea8('0x2d')][a192_0x4ea8('0x10')](_0xea9502[a192_0x4ea8('0x2c')]);if(_0x5c6229[a192_0x4ea8('0x2f')][a192_0x4ea8('0x2d')][a192_0x4ea8('0x23')](_0xea9502[a192_0x4ea8('0x12')])){const _0x5dd792=_0x5c6229[a192_0x4ea8('0x2f')]['cache'][a192_0x4ea8('0x10')](_0xea9502['channel']);const _0x435ae1=await _0x5dd792[a192_0x4ea8('0xa')][a192_0x4ea8('0x11')](_0xea9502['_id'])[a192_0x4ea8('0x3')](()=>{});if(!_0x435ae1)continue;let _0x131908=[];for(const _0x3ec8f3 of['🎊','🎉']){if(_0x435ae1[a192_0x4ea8('0x26')]['cache'][a192_0x4ea8('0x23')](_0x3ec8f3)){await _0x435ae1['reactions'][a192_0x4ea8('0x2d')][a192_0x4ea8('0x10')](_0x3ec8f3)[a192_0x4ea8('0x15')]['fetch']()[a192_0x4ea8('0x3')](()=>{});_0x131908['push'](..._0x435ae1[a192_0x4ea8('0x26')]['cache'][a192_0x4ea8('0x10')](_0x3ec8f3)[a192_0x4ea8('0x15')][a192_0x4ea8('0x2d')][a192_0x4ea8('0x9')](_0x4c5859=>!_0x4c5859[a192_0x4ea8('0x2e')])[a192_0x4ea8('0x0')]());}}const _0x501e02=[];for(let _0x4adb60=0x0;_0x4adb60<(_0xea9502[a192_0x4ea8('0x2a')]||0x1);_0x4adb60++){if(!_0x131908[a192_0x4ea8('0x19')])break;const _0x2d6eec=_0x131908[Math[a192_0x4ea8('0xd')](Math[a192_0x4ea8('0xe')]()*_0x131908[a192_0x4ea8('0x19')])];_0x501e02[a192_0x4ea8('0x16')](_0x2d6eec);_0x131908=_0x131908[a192_0x4ea8('0x9')](_0x447f6c=>_0x447f6c['id']!==_0x2d6eec['id']);}if(_0x501e02[a192_0x4ea8('0x19')]){await _0x435ae1['edit']({'embed':{'color':tesseract_1[a192_0x4ea8('0x24')]['COLORS'][a192_0x4ea8('0x13')],'author':{'name':a192_0x4ea8('0x14')},'title':_0x435ae1[a192_0x4ea8('0xc')][0x0]['title'],'description':'The\x20following\x20users\x20have\x20won\x20the\x20giveaway\x20and\x20will\x20be\x20contacted\x20soon\x20for\x20their\x20rewards.\x0aThank\x20you\x20everyone\x20for\x20participating.\x20Better\x20luck\x20next\x20time.','fields':[{'name':a192_0x4ea8('0x18'),'value':_0x501e02[a192_0x4ea8('0x1e')](',\x20')}],'footer':{'text':_0x435ae1['id']},'timestamp':new Date()}})[a192_0x4ea8('0x1a')](()=>{_0x3a1be7[a192_0x4ea8('0x16')](_0x435ae1['id']);})['catch'](()=>{});}else{await _0x435ae1[a192_0x4ea8('0x20')]({'embed':{'color':tesseract_1[a192_0x4ea8('0x24')][a192_0x4ea8('0x4')][a192_0x4ea8('0xb')],'author':{'name':'GIVEAWAY\x20ENDED'},'title':_0x435ae1[a192_0x4ea8('0xc')][0x0][a192_0x4ea8('0x21')],'description':a192_0x4ea8('0x7'),'footer':{'text':_0x435ae1['id']},'timestamp':new Date()}})['then'](()=>{_0x3a1be7[a192_0x4ea8('0x16')](_0x435ae1['id']);})[a192_0x4ea8('0x3')](()=>{});}}}if(_0x3a1be7[a192_0x4ea8('0x19')]){await Giveaway_1[a192_0x4ea8('0x29')][a192_0x4ea8('0x6')]({'$or':_0x3a1be7[a192_0x4ea8('0x27')](_0x3ae0f4=>({'_id':_0x3ae0f4}))})[a192_0x4ea8('0x3')](()=>{});}};}};
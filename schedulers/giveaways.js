const a206_0x5eeb=['giveaways','fetch','length','Logger','catch','constructor','GIVEAWAY\x20ENDED','embeds','then','deleteMany','Constants','floor','filter','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','map','readyTimestamp','COLORS','channel','channels','guilds','return\x20/\x22\x20+\x20this\x20+\x20\x22/','size','get','0\x20*/15\x20*\x20*\x20*\x20*','RED','push','_id','guild','exec','users','../models/Giveaway','reactions','@bastion/tesseract','client','find','join','title','cache','edit','default','test','The\x20following\x20users\x20have\x20won\x20the\x20giveaway\x20and\x20will\x20be\x20contacted\x20soon\x20for\x20their\x20rewards.\x0aThank\x20you\x20everyone\x20for\x20participating.\x20Better\x20luck\x20next\x20time.'];(function(_0x5abc0c,_0x5eebee){const _0x14dfb4=function(_0x59a050){while(--_0x59a050){_0x5abc0c['push'](_0x5abc0c['shift']());}},_0x34f658=function(){const _0x2ec030={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1f5ee6,_0x47740c,_0x23587a,_0x45809e){_0x45809e=_0x45809e||{};let _0x10b269=_0x47740c+'='+_0x23587a,_0x153fde=0x0;for(let _0x5434ac=0x0,_0x37db29=_0x1f5ee6['length'];_0x5434ac<_0x37db29;_0x5434ac++){const _0x4113fa=_0x1f5ee6[_0x5434ac];_0x10b269+=';\x20'+_0x4113fa;const _0x54da2b=_0x1f5ee6[_0x4113fa];_0x1f5ee6['push'](_0x54da2b),_0x37db29=_0x1f5ee6['length'],_0x54da2b!==!![]&&(_0x10b269+='='+_0x54da2b);}_0x45809e['cookie']=_0x10b269;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2b9b4f,_0x35783b){_0x2b9b4f=_0x2b9b4f||function(_0x54c757){return _0x54c757;};const _0x85cb2f=_0x2b9b4f(new RegExp('(?:^|;\x20)'+_0x35783b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x14aca0=function(_0x57fc27,_0x42fa3d){_0x57fc27(++_0x42fa3d);};return _0x14aca0(_0x14dfb4,_0x5eebee),_0x85cb2f?decodeURIComponent(_0x85cb2f[0x1]):undefined;}},_0xd88fe6=function(){const _0x18cc9c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x18cc9c['test'](_0x2ec030['removeCookie']['toString']());};_0x2ec030['updateCookie']=_0xd88fe6;let _0x40ecd6='';const _0x3f6381=_0x2ec030['updateCookie']();if(!_0x3f6381)_0x2ec030['setCookie'](['*'],'counter',0x1);else _0x3f6381?_0x40ecd6=_0x2ec030['getCookie'](null,'counter'):_0x2ec030['removeCookie']();};_0x34f658();}(a206_0x5eeb,0xec));const a206_0x14df=function(_0x5abc0c,_0x5eebee){_0x5abc0c=_0x5abc0c-0x0;let _0x14dfb4=a206_0x5eeb[_0x5abc0c];return _0x14dfb4;};const _0x2eab7e=a206_0x14df,a206_0x2ec030=function(){let _0x40ecd6=!![];return function(_0x3f6381,_0x1f5ee6){const _0x47740c=_0x40ecd6?function(){if(_0x1f5ee6){const _0x23587a=_0x1f5ee6['apply'](_0x3f6381,arguments);return _0x1f5ee6=null,_0x23587a;}}:function(){};return _0x40ecd6=![],_0x47740c;};}(),a206_0x59a050=a206_0x2ec030(this,function(){const _0x45809e=function(){const _0x242d37=a206_0x14df,_0x10b269=_0x45809e[_0x242d37('0x15')](_0x242d37('0x24'))()[_0x242d37('0x15')](_0x242d37('0x1d'));return!_0x10b269[_0x242d37('0xe')](a206_0x59a050);};return _0x45809e();});a206_0x59a050();'use strict';const tesseract_1=require(_0x2eab7e('0x6')),Giveaway_1=require(_0x2eab7e('0x4'));module['exports']=class GiveawayScheduler extends tesseract_1['Scheduler']{constructor(){const _0x585d1e=_0x2eab7e;super(_0x585d1e('0x10'),{'cronTime':_0x585d1e('0x27')}),this[_0x585d1e('0x2')]=async()=>{const _0x18a4ba=_0x585d1e;try{if(!this['client'][_0x18a4ba('0x1f')])return;if(!this['client'][_0x18a4ba('0x23')][_0x18a4ba('0xb')][_0x18a4ba('0x25')])return;const _0x153fde=await Giveaway_1[_0x18a4ba('0xd')][_0x18a4ba('0x8')]({'$or':this[_0x18a4ba('0x7')][_0x18a4ba('0x23')][_0x18a4ba('0xb')][_0x18a4ba('0x1e')](_0x37db29=>({'guild':_0x37db29['id']})),'ends':{'$lte':new Date()}}),_0x5434ac=[];for(const _0x4113fa of _0x153fde){const _0x54da2b=this[_0x18a4ba('0x7')][_0x18a4ba('0x23')][_0x18a4ba('0xb')][_0x18a4ba('0x26')](_0x4113fa[_0x18a4ba('0x1')]);if(_0x54da2b[_0x18a4ba('0x22')][_0x18a4ba('0xb')]['has'](_0x4113fa['channel'])){const _0x2b9b4f=_0x54da2b[_0x18a4ba('0x22')]['cache'][_0x18a4ba('0x26')](_0x4113fa[_0x18a4ba('0x21')]),_0x35783b=await _0x2b9b4f['messages'][_0x18a4ba('0x11')](_0x4113fa[_0x18a4ba('0x0')])[_0x18a4ba('0x14')](()=>{});if(!_0x35783b)continue;let _0x85cb2f=[];for(const _0x54c757 of['🎊','🎉']){_0x35783b[_0x18a4ba('0x5')][_0x18a4ba('0xb')]['has'](_0x54c757)&&(await _0x35783b[_0x18a4ba('0x5')][_0x18a4ba('0xb')]['get'](_0x54c757)[_0x18a4ba('0x3')][_0x18a4ba('0x11')]()[_0x18a4ba('0x14')](()=>{}),_0x85cb2f[_0x18a4ba('0x29')](..._0x35783b[_0x18a4ba('0x5')]['cache'][_0x18a4ba('0x26')](_0x54c757)[_0x18a4ba('0x3')]['cache'][_0x18a4ba('0x1c')](_0x57fc27=>!_0x57fc27['bot'])['values']()));}const _0x14aca0=[];for(let _0x42fa3d=0x0;_0x42fa3d<(_0x4113fa['winners']||0x1);_0x42fa3d++){if(!_0x85cb2f['length'])break;const _0x18cc9c=_0x85cb2f[Math[_0x18a4ba('0x1b')](Math['random']()*_0x85cb2f['length'])];_0x14aca0['push'](_0x18cc9c),_0x85cb2f=_0x85cb2f[_0x18a4ba('0x1c')](_0x5d692b=>_0x5d692b['id']!==_0x18cc9c['id']);}_0x14aca0[_0x18a4ba('0x12')]?await _0x35783b[_0x18a4ba('0xc')]({'embed':{'color':tesseract_1[_0x18a4ba('0x1a')][_0x18a4ba('0x20')]['SOMEWHAT_DARK'],'author':{'name':'GIVEAWAY\x20ENDED'},'title':_0x35783b[_0x18a4ba('0x17')][0x0]['title'],'description':_0x18a4ba('0xf'),'fields':[{'name':'Congratulations','value':_0x14aca0[_0x18a4ba('0x9')](',\x20')}],'footer':{'text':_0x35783b['id']},'timestamp':new Date()}})[_0x18a4ba('0x18')](()=>{const _0x1d740d=_0x18a4ba;_0x5434ac[_0x1d740d('0x29')](_0x35783b['id']);})[_0x18a4ba('0x14')](()=>{}):await _0x35783b[_0x18a4ba('0xc')]({'embed':{'color':tesseract_1[_0x18a4ba('0x1a')]['COLORS'][_0x18a4ba('0x28')],'author':{'name':_0x18a4ba('0x16')},'title':_0x35783b['embeds'][0x0][_0x18a4ba('0xa')],'description':'Unfortunately,\x20no\x20one\x20participated\x20in\x20this\x20giveaway\x20and\x20therfore\x20there\x20aren\x27t\x20any\x20winners\x20this\x20time.','footer':{'text':_0x35783b['id']},'timestamp':new Date()}})[_0x18a4ba('0x18')](()=>{const _0x55c152=_0x18a4ba;_0x5434ac[_0x55c152('0x29')](_0x35783b['id']);})[_0x18a4ba('0x14')](()=>{});}}_0x5434ac['length']&&await Giveaway_1[_0x18a4ba('0xd')][_0x18a4ba('0x19')]({'$or':_0x5434ac[_0x18a4ba('0x1e')](_0xbac837=>({'_id':_0xbac837}))})['catch'](()=>{});}catch(_0xb4a27c){tesseract_1[_0x18a4ba('0x13')]['error'](_0xb4a27c);}};}};
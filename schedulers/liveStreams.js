const a208_0x8279=['toString','json','exports','1280','join','@bastion/tesseract','language','liveStreams','Scheduler','viewer_count','handleTwitchStreamers','🔴\x20LIVE','Viewers','then','send','TWITCH','twitch','{width}','channelId','size','Logger','720','user_name','client','exec','_id','guilds','&user_login=','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','https://twitch.tv/','return\x20/\x22\x20+\x20this\x20+\x20\x22/','catch','application/json','readyTimestamp','includes','twitchSubscriptions','streamers','has','title','{height}','0\x20*/5\x20*\x20*\x20*\x20*','credentials','started_at','find','constructor','../models/Guild','error','thumbnail_url','default','push','cache','../utils/constants','replace','channels'];(function(_0xe6101d,_0x827999){const _0x50ada4=function(_0x467a5d){while(--_0x467a5d){_0xe6101d['push'](_0xe6101d['shift']());}},_0x242d3d=function(){const _0x25e2a2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xaa4d2c,_0x52d104,_0x38abd7,_0x4ef395){_0x4ef395=_0x4ef395||{};let _0x41594d=_0x52d104+'='+_0x38abd7,_0x1ba3e9=0x0;for(let _0x3a4ad2=0x0,_0x41d15b=_0xaa4d2c['length'];_0x3a4ad2<_0x41d15b;_0x3a4ad2++){const _0xe3e08b=_0xaa4d2c[_0x3a4ad2];_0x41594d+=';\x20'+_0xe3e08b;const _0x12b509=_0xaa4d2c[_0xe3e08b];_0xaa4d2c['push'](_0x12b509),_0x41d15b=_0xaa4d2c['length'],_0x12b509!==!![]&&(_0x41594d+='='+_0x12b509);}_0x4ef395['cookie']=_0x41594d;},'removeCookie':function(){return'dev';},'getCookie':function(_0xbdc33d,_0x13c4b4){_0xbdc33d=_0xbdc33d||function(_0x8c311e){return _0x8c311e;};const _0x12a7ba=_0xbdc33d(new RegExp('(?:^|;\x20)'+_0x13c4b4['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x574e7c=function(_0x5ae994,_0x53ade8){_0x5ae994(++_0x53ade8);};return _0x574e7c(_0x50ada4,_0x827999),_0x12a7ba?decodeURIComponent(_0x12a7ba[0x1]):undefined;}},_0x5613d8=function(){const _0x48a4af=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x48a4af['test'](_0x25e2a2['removeCookie']['toString']());};_0x25e2a2['updateCookie']=_0x5613d8;let _0x54e305='';const _0x203a04=_0x25e2a2['updateCookie']();if(!_0x203a04)_0x25e2a2['setCookie'](['*'],'counter',0x1);else _0x203a04?_0x54e305=_0x25e2a2['getCookie'](null,'counter'):_0x25e2a2['removeCookie']();};_0x242d3d();}(a208_0x8279,0x8f));const a208_0x50ad=function(_0xe6101d,_0x827999){_0xe6101d=_0xe6101d-0x0;let _0x50ada4=a208_0x8279[_0xe6101d];return _0x50ada4;};const _0x2e2bd9=a208_0x50ad,a208_0x25e2a2=function(){let _0x54e305=!![];return function(_0x203a04,_0xaa4d2c){const _0x52d104=_0x54e305?function(){if(_0xaa4d2c){const _0x38abd7=_0xaa4d2c['apply'](_0x203a04,arguments);return _0xaa4d2c=null,_0x38abd7;}}:function(){};return _0x54e305=![],_0x52d104;};}(),a208_0x467a5d=a208_0x25e2a2(this,function(){const _0x4ef395=function(){const _0x4466ba=a208_0x50ad,_0x41594d=_0x4ef395['constructor'](_0x4466ba('0x31'))()[_0x4466ba('0x9')](_0x4466ba('0x2f'));return!_0x41594d['test'](a208_0x467a5d);};return _0x4ef395();});a208_0x467a5d();'use strict';const tesseract_1=require(_0x2e2bd9('0x18')),node_fetch_1=require('node-fetch'),Guild_1=require(_0x2e2bd9('0xa')),constants=require(_0x2e2bd9('0x10'));module[_0x2e2bd9('0x15')]=class LiveStreams extends tesseract_1[_0x2e2bd9('0x1b')]{constructor(){const _0x205570=_0x2e2bd9;super(_0x205570('0x1a'),{'cronTime':_0x205570('0x5')}),this[_0x205570('0x1d')]=async(_0x1ba3e9,_0x3a4ad2)=>{const _0x57be95=_0x205570;if(!this[_0x57be95('0x2a')][_0x57be95('0x34')])return;if(!this[_0x57be95('0x0')][_0x57be95('0x2')](_0x1ba3e9))this['twitchSubscriptions']['set'](_0x1ba3e9,[]);const _0x41d15b=this[_0x57be95('0x0')]['get'](_0x1ba3e9),_0xe3e08b=await node_fetch_1[_0x57be95('0xd')]('https://api.twitch.tv/helix/streams/?user_login='+_0x3a4ad2['users'][_0x57be95('0x17')](_0x57be95('0x2e')),{'headers':{'Accept':_0x57be95('0x33'),'Authorization':'Bearer\x20'+this[_0x57be95('0x2a')][_0x57be95('0x6')][_0x57be95('0x23')]['accessToken'],'Client-ID':this[_0x57be95('0x2a')]['credentials'][_0x57be95('0x23')]['clientId']}}),_0x12b509=(await _0xe3e08b[_0x57be95('0x14')]())['data'];for(const _0xbdc33d of _0x12b509){if(_0x41d15b[_0x57be95('0x35')](_0xbdc33d['id']))continue;this[_0x57be95('0x2a')][_0x57be95('0x12')][_0x57be95('0xf')][_0x57be95('0x2')](_0x3a4ad2[_0x57be95('0x25')])&&await this[_0x57be95('0x2a')][_0x57be95('0x12')][_0x57be95('0xf')]['get'](_0x3a4ad2[_0x57be95('0x25')])[_0x57be95('0x21')]({'embed':{'color':constants['COLORS'][_0x57be95('0x22')],'author':{'name':_0xbdc33d['user_name'],'url':_0x57be95('0x30')+_0xbdc33d[_0x57be95('0x29')]},'description':_0xbdc33d[_0x57be95('0x3')],'fields':[{'name':_0x57be95('0x1f'),'value':_0xbdc33d[_0x57be95('0x1c')][_0x57be95('0x13')](),'inline':!![]},{'name':'Language','value':_0xbdc33d[_0x57be95('0x19')]['toUpperCase'](),'inline':!![]}],'image':{'url':_0xbdc33d[_0x57be95('0xc')][_0x57be95('0x11')](_0x57be95('0x24'),_0x57be95('0x16'))[_0x57be95('0x11')](_0x57be95('0x4'),_0x57be95('0x28'))},'footer':{'text':_0x57be95('0x1e')},'timestamp':_0xbdc33d[_0x57be95('0x7')]}})[_0x57be95('0x20')](()=>{const _0x301f99=_0x57be95;_0x41d15b[_0x301f99('0xe')](_0xbdc33d['id']);})[_0x57be95('0x32')](()=>{});}this[_0x57be95('0x0')]['set'](_0x1ba3e9,_0x41d15b);},this[_0x205570('0x2b')]=async()=>{const _0x14e244=_0x205570;try{if(!this['client'][_0x14e244('0x2d')][_0x14e244('0xf')][_0x14e244('0x26')])return;const _0x13c4b4=await Guild_1[_0x14e244('0xd')][_0x14e244('0x8')]({'$or':this[_0x14e244('0x2a')][_0x14e244('0x2d')][_0x14e244('0xf')]['map'](_0x12a7ba=>({'_id':_0x12a7ba['id']})),'streamers':{'$exists':!![]}});for(const _0x574e7c of _0x13c4b4){_0x574e7c[_0x14e244('0x1')][_0x14e244('0x23')]&&_0x574e7c['streamers'][_0x14e244('0x23')][_0x14e244('0x25')]&&_0x574e7c[_0x14e244('0x1')][_0x14e244('0x23')]['users']['length']&&this[_0x14e244('0x1d')](_0x574e7c[_0x14e244('0x2c')],_0x574e7c['streamers'][_0x14e244('0x23')])[_0x14e244('0x32')](_0x8c311e=>tesseract_1[_0x14e244('0x27')]['error'](_0x8c311e));}}catch(_0x5ae994){tesseract_1[_0x14e244('0x27')][_0x14e244('0xb')](_0x5ae994);}},this[_0x205570('0x0')]=new Map();}};
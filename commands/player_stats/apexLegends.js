const a96_0x1fe6=['xbl','overview','metadata','platformUserHandle','message','segments','platform','\x20is\x20currently\x20playing\x20with\x20','psn','Rank','apex','origin','platformInfo','filter','displayValue','iconUrl','\x20•\x20Powered\x20by\x20Tracker\x20Network','toUpperCase','platforms','apexLegends\x20USERNAME\x20--platform\x20PLATFORM','map','send','keys','Command','toLowerCase','../../utils/constants','/playerstats/apexlegends/','find','INVALID_COMMAND_SYNTAX','../../utils/omnic','name','apexLegends','DiscordError','join','apply','errors','Apex\x20Legends\x20-\x20Player\x20Stats','activeLegendName','apexLegends\x20USERNAME','guild','data','test','exports','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Apex\x20Legends\x20player\x20in\x20any\x20supported\x20platform.','channel','COLORS','constructor','rankScore','json','../../utils/errors','rankName','avatarUrl','includes','stats','@bastion/tesseract','APEX_LEGENDS','return\x20/\x22\x20+\x20this\x20+\x20\x22/'];(function(_0x158960,_0x1fe649){const _0xcee308=function(_0x40f932){while(--_0x40f932){_0x158960['push'](_0x158960['shift']());}};const _0x3b56f6=function(){const _0x4a3d1a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x69d706,_0x4cedf0,_0x5cc1d2,_0xad7b78){_0xad7b78=_0xad7b78||{};let _0x91c631=_0x4cedf0+'='+_0x5cc1d2;let _0xa61d0b=0x0;for(let _0x218223=0x0,_0x78ad8=_0x69d706['length'];_0x218223<_0x78ad8;_0x218223++){const _0x2b7df5=_0x69d706[_0x218223];_0x91c631+=';\x20'+_0x2b7df5;const _0x3a936a=_0x69d706[_0x2b7df5];_0x69d706['push'](_0x3a936a);_0x78ad8=_0x69d706['length'];if(_0x3a936a!==!![]){_0x91c631+='='+_0x3a936a;}}_0xad7b78['cookie']=_0x91c631;},'removeCookie':function(){return'dev';},'getCookie':function(_0x22ecf8,_0x3c6bad){_0x22ecf8=_0x22ecf8||function(_0x5a99a4){return _0x5a99a4;};const _0x39182a=_0x22ecf8(new RegExp('(?:^|;\x20)'+_0x3c6bad['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x13c09e=function(_0x1fcb46,_0xcba266){_0x1fcb46(++_0xcba266);};_0x13c09e(_0xcee308,_0x1fe649);return _0x39182a?decodeURIComponent(_0x39182a[0x1]):undefined;}};const _0x2ae3e5=function(){const _0x4fda5c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4fda5c['test'](_0x4a3d1a['removeCookie']['toString']());};_0x4a3d1a['updateCookie']=_0x2ae3e5;let _0x1123d4='';const _0x1ae3d6=_0x4a3d1a['updateCookie']();if(!_0x1ae3d6){_0x4a3d1a['setCookie'](['*'],'counter',0x1);}else if(_0x1ae3d6){_0x1123d4=_0x4a3d1a['getCookie'](null,'counter');}else{_0x4a3d1a['removeCookie']();}};_0x3b56f6();}(a96_0x1fe6,0xbe));const a96_0xcee3=function(_0x158960,_0x1fe649){_0x158960=_0x158960-0x0;let _0xcee308=a96_0x1fe6[_0x158960];return _0xcee308;};const a96_0x4a3d1a=function(){let _0x186713=!![];return function(_0x1da5e3,_0x39c5de){const _0xbf7518=_0x186713?function(){if(_0x39c5de){const _0x53d934=_0x39c5de[a96_0xcee3('0xf')](_0x1da5e3,arguments);_0x39c5de=null;return _0x53d934;}}:function(){};_0x186713=![];return _0xbf7518;};}();const a96_0x40f932=a96_0x4a3d1a(this,function(){const _0x5513f6=function(){const _0x443b6c=_0x5513f6[a96_0xcee3('0x1b')](a96_0xcee3('0x25'))()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x443b6c[a96_0xcee3('0x16')](a96_0x40f932);};return _0x5513f6();});a96_0x40f932();'use strict';const tesseract_1=require(a96_0xcee3('0x23'));const constants=require(a96_0xcee3('0x6'));const errors=require(a96_0xcee3('0x1e'));const omnic=require(a96_0xcee3('0xa'));module[a96_0xcee3('0x17')]=class ApexLegendsCommand extends tesseract_1[a96_0xcee3('0x4')]{constructor(){super(a96_0xcee3('0xc'),{'description':a96_0xcee3('0x18'),'triggers':[a96_0xcee3('0x30')],'arguments':{'alias':{'platform':['p']},'string':[a96_0xcee3('0x2c')]},'scope':a96_0xcee3('0x14'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a96_0xcee3('0x13'),a96_0xcee3('0x0')]});this['exec']=async(_0x10a9fe,_0x173100)=>{if(!_0x173100['_']['length'])throw new errors[(a96_0xcee3('0xd'))](errors['BASTION_ERROR_TYPE'][a96_0xcee3('0x9')],this[a96_0xcee3('0xb')]);const _0x29298e=_0x173100['_'][a96_0xcee3('0xe')]('\x20');const _0x4142ae=_0x173100[a96_0xcee3('0x2c')]&&this[a96_0xcee3('0x38')][a96_0xcee3('0x21')](_0x173100[a96_0xcee3('0x2c')][a96_0xcee3('0x5')]())?_0x173100[a96_0xcee3('0x2c')][a96_0xcee3('0x5')]():this['platforms'][0x0];const _0x331a2c=await omnic['makeRequest'](a96_0xcee3('0x7')+_0x4142ae+'/'+encodeURIComponent(_0x29298e));const _0x711af=await _0x331a2c[a96_0xcee3('0x1d')]();if(_0x711af[a96_0xcee3('0x10')])throw new Error(_0x711af[a96_0xcee3('0x10')][0x0][a96_0xcee3('0x2a')]);const _0xfd3a98=_0x711af[a96_0xcee3('0x15')][a96_0xcee3('0x2b')][a96_0xcee3('0x8')](_0x5e9c06=>_0x5e9c06['type']===a96_0xcee3('0x27'));await _0x10a9fe[a96_0xcee3('0x19')][a96_0xcee3('0x2')]({'embed':{'color':constants[a96_0xcee3('0x1a')][a96_0xcee3('0x24')],'author':{'name':_0x711af['data'][a96_0xcee3('0x32')][a96_0xcee3('0x29')],'iconURL':_0x711af[a96_0xcee3('0x15')]['platformInfo'][a96_0xcee3('0x20')]},'title':a96_0xcee3('0x11'),'description':_0x711af[a96_0xcee3('0x15')][a96_0xcee3('0x28')][a96_0xcee3('0x12')]?_0x711af[a96_0xcee3('0x15')][a96_0xcee3('0x32')][a96_0xcee3('0x29')]+a96_0xcee3('0x2d')+_0x711af['data']['metadata'][a96_0xcee3('0x12')]:null,'fields':[{'name':a96_0xcee3('0x2f'),'value':_0xfd3a98[a96_0xcee3('0x22')]['rankScore']?_0xfd3a98['stats'][a96_0xcee3('0x1c')][a96_0xcee3('0x28')][a96_0xcee3('0x1f')]+'\x20/\x20'+_0xfd3a98[a96_0xcee3('0x22')]['rankScore'][a96_0xcee3('0x34')]:'-','inline':!![]},...Object[a96_0xcee3('0x3')](_0xfd3a98['stats'])[a96_0xcee3('0x33')](_0x1dad28=>_0x1dad28!==a96_0xcee3('0x1c'))[a96_0xcee3('0x1')](_0x46abb2=>({'name':_0xfd3a98[a96_0xcee3('0x22')][_0x46abb2]['displayName'],'value':_0xfd3a98[a96_0xcee3('0x22')][_0x46abb2][a96_0xcee3('0x34')],'inline':!![]}))],'thumbnail':{'url':_0xfd3a98[a96_0xcee3('0x22')][a96_0xcee3('0x1c')]?_0xfd3a98[a96_0xcee3('0x22')][a96_0xcee3('0x1c')]['metadata'][a96_0xcee3('0x35')]:_0x711af[a96_0xcee3('0x15')][a96_0xcee3('0x32')][a96_0xcee3('0x20')]},'footer':{'text':_0x4142ae[a96_0xcee3('0x37')]()+a96_0xcee3('0x36')}}});};this[a96_0xcee3('0x38')]=[a96_0xcee3('0x31'),a96_0xcee3('0x2e'),a96_0xcee3('0x26')];}};
const a80_0x261f=['save','map','resolveGuildChannel','RED','Invite\x20Filter\x20-\x20Safe\x20List','link','filter','test','document','join','inviteFilter','channel','overwrite','inviteFilterSafeListAdd','guild','text','name','safeList\x20--invite\x20CHANNEL\x20|\x20ROLE\x20--delete','INVALID_COMMAND_SYNTAX','locale','resolver','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','@bastion/tesseract','resolveRole','constructor','inviteFilterSafeListRemove','whitelist','send','safeList\x20--link','exports','Link\x20Filter\x20-\x20Safe\x20List','language','info','role','Command','default','invite','client','linkFilter','news','author','safeList','safeList\x20--link\x20CHANNEL\x20|\x20ROLE','../../utils/errors','COLORS','length','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','toObject','IRIS','push','findById','BASTION_ERROR_TYPE','ROLE_OR_CHANNEL_NOT_FOUND','MANAGE_GUILD','filters','Constants','delete','../../models/Guild','apply','GREEN','NO_LINK_FILTER_SAFE_LIST_EXISTS'];(function(_0x4d039a,_0x261f8b){const _0x392437=function(_0x4c8e67){while(--_0x4c8e67){_0x4d039a['push'](_0x4d039a['shift']());}},_0x332c2c=function(){const _0x586876={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x12c344,_0x57e345,_0x93915a,_0x29f4a9){_0x29f4a9=_0x29f4a9||{};let _0x30f2f1=_0x57e345+'='+_0x93915a,_0x3996aa=0x0;for(let _0x130fe1=0x0,_0x3b0547=_0x12c344['length'];_0x130fe1<_0x3b0547;_0x130fe1++){const _0x1d7dff=_0x12c344[_0x130fe1];_0x30f2f1+=';\x20'+_0x1d7dff;const _0x11b9a6=_0x12c344[_0x1d7dff];_0x12c344['push'](_0x11b9a6),_0x3b0547=_0x12c344['length'],_0x11b9a6!==!![]&&(_0x30f2f1+='='+_0x11b9a6);}_0x29f4a9['cookie']=_0x30f2f1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x545b5a,_0x3fc2a7){_0x545b5a=_0x545b5a||function(_0x427e36){return _0x427e36;};const _0x5e239e=_0x545b5a(new RegExp('(?:^|;\x20)'+_0x3fc2a7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x17b511=function(_0x196669,_0x50c5a9){_0x196669(++_0x50c5a9);};return _0x17b511(_0x392437,_0x261f8b),_0x5e239e?decodeURIComponent(_0x5e239e[0x1]):undefined;}},_0x2056db=function(){const _0xb9d3be=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xb9d3be['test'](_0x586876['removeCookie']['toString']());};_0x586876['updateCookie']=_0x2056db;let _0x98713a='';const _0x2c16a0=_0x586876['updateCookie']();if(!_0x2c16a0)_0x586876['setCookie'](['*'],'counter',0x1);else _0x2c16a0?_0x98713a=_0x586876['getCookie'](null,'counter'):_0x586876['removeCookie']();};_0x332c2c();}(a80_0x261f,0x127));const a80_0x3924=function(_0x4d039a,_0x261f8b){_0x4d039a=_0x4d039a-0x0;let _0x392437=a80_0x261f[_0x4d039a];return _0x392437;};const _0x17d4fb=a80_0x3924,a80_0x586876=function(){let _0x98713a=!![];return function(_0x2c16a0,_0x12c344){const _0x57e345=_0x98713a?function(){const _0x141b54=a80_0x3924;if(_0x12c344){const _0x93915a=_0x12c344[_0x141b54('0xc')](_0x2c16a0,arguments);return _0x12c344=null,_0x93915a;}}:function(){};return _0x98713a=![],_0x57e345;};}(),a80_0x4c8e67=a80_0x586876(this,function(){const _0x29f4a9=function(){const _0x5c7bb7=a80_0x3924,_0x30f2f1=_0x29f4a9[_0x5c7bb7('0x27')](_0x5c7bb7('0x3d'))()[_0x5c7bb7('0x27')](_0x5c7bb7('0x24'));return!_0x30f2f1[_0x5c7bb7('0x16')](a80_0x4c8e67);};return _0x29f4a9();});a80_0x4c8e67();'use strict';const tesseract_1=require(_0x17d4fb('0x25')),Guild_1=require(_0x17d4fb('0xb')),errors=require(_0x17d4fb('0x3a'));module[_0x17d4fb('0x2c')]=class SafeListCommand extends tesseract_1[_0x17d4fb('0x31')]{constructor(){const _0xa80a94=_0x17d4fb;super(_0xa80a94('0x38'),{'description':'It\x20allows\x20you\x20to\x20add\x20members\x20or\x20roles\x20to\x20a\x20safe\x20list\x20that\x20prevents\x20their\x20messages\x20from\x20being\x20filtered\x20by\x20invite\x20filter\x20or\x20link\x20filter\x20in\x20the\x20server.','triggers':[],'arguments':{'boolean':[_0xa80a94('0x33'),'link',_0xa80a94('0xa')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0xa80a94('0x7')],'syntax':['safeList\x20--invite','safeList\x20--invite\x20CHANNEL\x20|\x20ROLE',_0xa80a94('0x20'),_0xa80a94('0x2b'),_0xa80a94('0x39'),'safeList\x20--link\x20CHANNEL\x20|\x20ROLE\x20--delete']}),this[_0xa80a94('0x0')]=async(_0x3996aa,_0x130fe1)=>{const _0x1c40af=_0xa80a94;if(_0x130fe1[_0x1c40af('0x33')]){const _0x3b0547=await Guild_1[_0x1c40af('0x32')][_0x1c40af('0x4')](_0x3996aa['guild']['id']);if(_0x130fe1['_']&&_0x130fe1['_'][_0x1c40af('0x3c')]){const _0x1d7dff=_0x130fe1['_']['join']('\x20'),_0x11b9a6=this[_0x1c40af('0x34')][_0x1c40af('0x23')][_0x1c40af('0x11')](_0x3996aa[_0x1c40af('0x1d')],_0x1d7dff,['text',_0x1c40af('0x36')]),_0x545b5a=this['client'][_0x1c40af('0x23')][_0x1c40af('0x26')](_0x3996aa[_0x1c40af('0x1d')],_0x1d7dff),_0x3fc2a7=_0x11b9a6||_0x545b5a||undefined;if(!_0x3fc2a7)throw new Error('ROLE_OR_CHANNEL_NOT_FOUND');const _0x5e239e=_0x3b0547[_0x1c40af('0x1')]();if(_0x130fe1[_0x1c40af('0xa')]){if(_0x5e239e[_0x1c40af('0x8')]&&_0x5e239e['filters'][_0x1c40af('0x19')]&&_0x5e239e[_0x1c40af('0x8')]['inviteFilter'][_0x1c40af('0x29')]){_0x5e239e[_0x1c40af('0x8')][_0x1c40af('0x19')][_0x1c40af('0x29')]=_0x5e239e[_0x1c40af('0x8')]['inviteFilter'][_0x1c40af('0x29')][_0x1c40af('0x15')](_0x17b511=>_0x17b511!==_0x3fc2a7['id']);if(!_0x5e239e[_0x1c40af('0x8')][_0x1c40af('0x19')][_0x1c40af('0x29')][_0x1c40af('0x3c')])delete _0x5e239e[_0x1c40af('0x8')][_0x1c40af('0x19')][_0x1c40af('0x29')];}}else{if(!_0x5e239e['filters'])_0x5e239e['filters']={};if(_0x5e239e['filters'][_0x1c40af('0x19')]){if(_0x5e239e[_0x1c40af('0x8')][_0x1c40af('0x19')]['whitelist'])_0x5e239e['filters'][_0x1c40af('0x19')][_0x1c40af('0x29')][_0x1c40af('0x3')](_0x3fc2a7['id']);else _0x5e239e[_0x1c40af('0x8')]['inviteFilter'][_0x1c40af('0x29')]=[_0x3fc2a7['id']];}else _0x5e239e[_0x1c40af('0x8')]['inviteFilter']={'enabled':!![],'whitelist':[_0x3fc2a7['id']]};}return _0x3b0547[_0x1c40af('0x1b')](_0x5e239e),await _0x3b0547[_0x1c40af('0xf')](),await _0x3996aa[_0x1c40af('0x1a')][_0x1c40af('0x2a')]({'embed':{'color':_0x130fe1[_0x1c40af('0xa')]?tesseract_1[_0x1c40af('0x9')][_0x1c40af('0x3b')][_0x1c40af('0x12')]:tesseract_1[_0x1c40af('0x9')][_0x1c40af('0x3b')]['GREEN'],'description':this[_0x1c40af('0x34')][_0x1c40af('0x22')]['getString'](_0x3996aa[_0x1c40af('0x1d')][_0x1c40af('0x17')]['language'],'info',_0x130fe1[_0x1c40af('0xa')]?_0x1c40af('0x28'):_0x1c40af('0x1c'),_0x3996aa[_0x1c40af('0x37')]['tag'],_0x3fc2a7[_0x1c40af('0x1f')])}});}if(_0x3b0547[_0x1c40af('0x8')]&&_0x3b0547[_0x1c40af('0x8')][_0x1c40af('0x19')]&&_0x3b0547[_0x1c40af('0x8')]['inviteFilter']['whitelist'])return await _0x3996aa[_0x1c40af('0x1a')][_0x1c40af('0x2a')]({'embed':{'color':tesseract_1['Constants'][_0x1c40af('0x3b')]['IRIS'],'title':_0x1c40af('0x13'),'description':_0x3b0547[_0x1c40af('0x8')][_0x1c40af('0x19')][_0x1c40af('0x29')][_0x1c40af('0x10')](_0x427e36=>{const _0xdcc33=_0x1c40af,_0x196669=this[_0xdcc33('0x34')]['resolver']['resolveGuildChannel'](_0x3996aa[_0xdcc33('0x1d')],_0x427e36),_0x50c5a9=this['client'][_0xdcc33('0x23')]['resolveRole'](_0x3996aa[_0xdcc33('0x1d')],_0x130fe1[_0xdcc33('0x30')]),_0xb9d3be=_0x196669||_0x50c5a9||undefined;return _0xb9d3be?_0xb9d3be[_0xdcc33('0x1f')]:_0x427e36;})['join'](',\x20')}});else throw new Error('NO_INVITE_FILTER_SAFE_LIST_EXISTS');}if(_0x130fe1[_0x1c40af('0x14')]){const _0x2db9b3=await Guild_1[_0x1c40af('0x32')][_0x1c40af('0x4')](_0x3996aa[_0x1c40af('0x1d')]['id']);if(_0x130fe1['_']&&_0x130fe1['_'][_0x1c40af('0x3c')]){const _0x3c325e=_0x130fe1['_'][_0x1c40af('0x18')]('\x20'),_0x32e1d3=this[_0x1c40af('0x34')][_0x1c40af('0x23')][_0x1c40af('0x11')](_0x3996aa[_0x1c40af('0x1d')],_0x3c325e,[_0x1c40af('0x1e'),_0x1c40af('0x36')]),_0x2bdf16=this['client'][_0x1c40af('0x23')][_0x1c40af('0x26')](_0x3996aa[_0x1c40af('0x1d')],_0x3c325e),_0x39863e=_0x32e1d3||_0x2bdf16||undefined;if(!_0x39863e)throw new Error(_0x1c40af('0x6'));const _0xc87e24=_0x2db9b3[_0x1c40af('0x1')]();if(_0x130fe1[_0x1c40af('0xa')]){if(_0xc87e24['filters']&&_0xc87e24[_0x1c40af('0x8')]['linkFilter']&&_0xc87e24[_0x1c40af('0x8')][_0x1c40af('0x35')][_0x1c40af('0x29')]){_0xc87e24[_0x1c40af('0x8')][_0x1c40af('0x35')][_0x1c40af('0x29')]=_0xc87e24['filters'][_0x1c40af('0x35')]['whitelist'][_0x1c40af('0x15')](_0x473c83=>_0x473c83!==_0x39863e['id']);if(!_0xc87e24[_0x1c40af('0x8')][_0x1c40af('0x35')][_0x1c40af('0x29')][_0x1c40af('0x3c')])delete _0xc87e24[_0x1c40af('0x8')][_0x1c40af('0x35')][_0x1c40af('0x29')];}}else{if(!_0xc87e24['filters'])_0xc87e24[_0x1c40af('0x8')]={};if(_0xc87e24['filters']['linkFilter']){if(_0xc87e24[_0x1c40af('0x8')]['linkFilter'][_0x1c40af('0x29')])_0xc87e24[_0x1c40af('0x8')]['linkFilter']['whitelist'][_0x1c40af('0x3')](_0x39863e['id']);else _0xc87e24[_0x1c40af('0x8')][_0x1c40af('0x35')][_0x1c40af('0x29')]=[_0x39863e['id']];}else _0xc87e24[_0x1c40af('0x8')][_0x1c40af('0x35')]={'enabled':!![],'whitelist':[_0x39863e['id']]};}return _0x2db9b3[_0x1c40af('0x1b')](_0xc87e24),await _0x2db9b3[_0x1c40af('0xf')](),await _0x3996aa[_0x1c40af('0x1a')][_0x1c40af('0x2a')]({'embed':{'color':_0x130fe1[_0x1c40af('0xa')]?tesseract_1[_0x1c40af('0x9')][_0x1c40af('0x3b')][_0x1c40af('0x12')]:tesseract_1[_0x1c40af('0x9')][_0x1c40af('0x3b')][_0x1c40af('0xd')],'description':this[_0x1c40af('0x34')]['locale']['getString'](_0x3996aa[_0x1c40af('0x1d')][_0x1c40af('0x17')][_0x1c40af('0x2e')],_0x1c40af('0x2f'),_0x130fe1[_0x1c40af('0xa')]?'linkFilterSafeListRemove':'linkFilterSafeListAdd',_0x3996aa[_0x1c40af('0x37')]['tag'],_0x39863e[_0x1c40af('0x1f')])}});}if(_0x2db9b3[_0x1c40af('0x8')]&&_0x2db9b3[_0x1c40af('0x8')][_0x1c40af('0x35')]&&_0x2db9b3[_0x1c40af('0x8')][_0x1c40af('0x35')][_0x1c40af('0x29')])return await _0x3996aa['channel'][_0x1c40af('0x2a')]({'embed':{'color':tesseract_1[_0x1c40af('0x9')][_0x1c40af('0x3b')][_0x1c40af('0x2')],'title':_0x1c40af('0x2d'),'description':_0x2db9b3[_0x1c40af('0x8')][_0x1c40af('0x35')][_0x1c40af('0x29')][_0x1c40af('0x10')](_0x3106a2=>{const _0x305d4d=_0x1c40af,_0x4617fa=this[_0x305d4d('0x34')][_0x305d4d('0x23')]['resolveGuildChannel'](_0x3996aa[_0x305d4d('0x1d')],_0x3106a2),_0x231e4c=this['client'][_0x305d4d('0x23')][_0x305d4d('0x26')](_0x3996aa[_0x305d4d('0x1d')],_0x130fe1[_0x305d4d('0x30')]),_0xa8f0e5=_0x4617fa||_0x231e4c||undefined;return _0xa8f0e5?_0xa8f0e5[_0x305d4d('0x1f')]:_0x3106a2;})['join'](',\x20')}});else throw new Error(_0x1c40af('0xe'));}throw new errors['DiscordError'](errors[_0x1c40af('0x5')][_0x1c40af('0x21')],this[_0x1c40af('0x1f')]);};}};
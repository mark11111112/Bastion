const a72_0x2ef6=['INVALID_COMMAND_SYNTAX','roleCreate','locale','apply','hoist','resolveRole','document','join','Command','language','send','tag','author','roles\x20--create\x20NAME\x20--color\x20COLOR\x20--\x20REASON','ArgumentTypes','color','It\x20allows\x20you\x20create,\x20delete\x20and\x20update\x20roles\x20in\x20the\x20server.','roles\x20--create\x20NAME\x20--\x20REASON','mentionable','MANAGE_ROLES','@bastion/tesseract','exec','test','roleRename','getString','info','COLORS','roles','rename','create','edit','guild','name','delete','DiscordError','constructor','roles\x20--create\x20NAME\x20--mentionable\x20--\x20REASON','GREEN','exports','roles\x20--delete\x20ROLE\x20--\x20REASON','client','../../utils/errors','Constants','length','catch','../../utils/confirmation'];(function(_0x2291d2,_0x2ef62e){const _0x4ed456=function(_0x4440c3){while(--_0x4440c3){_0x2291d2['push'](_0x2291d2['shift']());}},_0x4ad7f9=function(){const _0x4cd693={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x29191c,_0x4eda2d,_0x2e1948,_0x158ccf){_0x158ccf=_0x158ccf||{};let _0x43b80b=_0x4eda2d+'='+_0x2e1948,_0x136221=0x0;for(let _0x55c9c7=0x0,_0x434ee1=_0x29191c['length'];_0x55c9c7<_0x434ee1;_0x55c9c7++){const _0x5ac1ec=_0x29191c[_0x55c9c7];_0x43b80b+=';\x20'+_0x5ac1ec;const _0x361dbf=_0x29191c[_0x5ac1ec];_0x29191c['push'](_0x361dbf),_0x434ee1=_0x29191c['length'],_0x361dbf!==!![]&&(_0x43b80b+='='+_0x361dbf);}_0x158ccf['cookie']=_0x43b80b;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3ef44e,_0x21eef3){_0x3ef44e=_0x3ef44e||function(_0x2e1f97){return _0x2e1f97;};const _0x40941f=_0x3ef44e(new RegExp('(?:^|;\x20)'+_0x21eef3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1e12b2=function(_0x2dfa30,_0x92e9a2){_0x2dfa30(++_0x92e9a2);};return _0x1e12b2(_0x4ed456,_0x2ef62e),_0x40941f?decodeURIComponent(_0x40941f[0x1]):undefined;}},_0x530703=function(){const _0x1788a0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1788a0['test'](_0x4cd693['removeCookie']['toString']());};_0x4cd693['updateCookie']=_0x530703;let _0x5213d='';const _0x5495c7=_0x4cd693['updateCookie']();if(!_0x5495c7)_0x4cd693['setCookie'](['*'],'counter',0x1);else _0x5495c7?_0x5213d=_0x4cd693['getCookie'](null,'counter'):_0x4cd693['removeCookie']();};_0x4ad7f9();}(a72_0x2ef6,0xf5));const a72_0x4ed4=function(_0x2291d2,_0x2ef62e){_0x2291d2=_0x2291d2-0x0;let _0x4ed456=a72_0x2ef6[_0x2291d2];return _0x4ed456;};const a72_0x2e1948=function(){let _0x5ced04=!![];return function(_0x12d662,_0x3c6043){const _0x3674c0=_0x5ced04?function(){if(_0x3c6043){const _0x5a4e4f=_0x3c6043[a72_0x4ed4('0x22')](_0x12d662,arguments);return _0x3c6043=null,_0x5a4e4f;}}:function(){};return _0x5ced04=![],_0x3674c0;};}(),a72_0x4eda2d=a72_0x2e1948(this,function(){const _0x1d1787=function(){const _0x2789b5=_0x1d1787[a72_0x4ed4('0x14')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a72_0x4ed4('0x14')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2789b5[a72_0x4ed4('0x7')](a72_0x4eda2d);};return _0x1d1787();});a72_0x4eda2d();'use strict';const tesseract_1=require(a72_0x4ed4('0x5')),confirmation_1=require(a72_0x4ed4('0x1e')),errors=require(a72_0x4ed4('0x1a'));module[a72_0x4ed4('0x17')]=class RolesCommand extends tesseract_1[a72_0x4ed4('0x27')]{constructor(){super(a72_0x4ed4('0xc'),{'description':a72_0x4ed4('0x1'),'triggers':[],'arguments':{'array':[a72_0x4ed4('0xe'),'delete',a72_0x4ed4('0x11'),a72_0x4ed4('0xd')],'boolean':[a72_0x4ed4('0x23'),a72_0x4ed4('0x3')],'string':[a72_0x4ed4('0xe'),a72_0x4ed4('0x12'),a72_0x4ed4('0xd')],'coerce':{'color':tesseract_1[a72_0x4ed4('0x1b')][a72_0x4ed4('0x2d')]['COLOR']}},'scope':a72_0x4ed4('0x10'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a72_0x4ed4('0x4')],'userPermissions':[a72_0x4ed4('0x4')],'syntax':[a72_0x4ed4('0x2'),a72_0x4ed4('0x2c'),'roles\x20--create\x20NAME\x20--hoist\x20--\x20REASON',a72_0x4ed4('0x15'),'roles\x20--rename\x20ROLE\x20--name\x20NAME\x20--\x20REASON',a72_0x4ed4('0x18')]}),this[a72_0x4ed4('0x6')]=async(_0x2f6b37,_0x19963a)=>{const _0x30acd1=_0x19963a['_']['join']('\x20')||'-';if(_0x19963a[a72_0x4ed4('0xe')]&&_0x19963a['create'][a72_0x4ed4('0x1c')]){const _0x3ed1cf=await _0x2f6b37[a72_0x4ed4('0x10')]['roles'][a72_0x4ed4('0xe')]({'data':{'name':_0x19963a[a72_0x4ed4('0xe')][a72_0x4ed4('0x26')]('\x20'),'color':_0x19963a[a72_0x4ed4('0x0')],'hoist':_0x19963a['hoist'],'mentionable':_0x19963a[a72_0x4ed4('0x3')]},'reason':_0x30acd1});return await _0x2f6b37['channel'][a72_0x4ed4('0x29')]({'embed':{'color':tesseract_1[a72_0x4ed4('0x1b')][a72_0x4ed4('0xb')][a72_0x4ed4('0x16')],'description':this[a72_0x4ed4('0x19')]['locale'][a72_0x4ed4('0x9')](_0x2f6b37[a72_0x4ed4('0x10')][a72_0x4ed4('0x25')]['language'],a72_0x4ed4('0xa'),a72_0x4ed4('0x20'),_0x2f6b37[a72_0x4ed4('0x2b')][a72_0x4ed4('0x2a')],_0x3ed1cf['name'],_0x30acd1)}})['catch'](()=>{});}if(_0x19963a[a72_0x4ed4('0x12')]&&_0x19963a['delete'][a72_0x4ed4('0x1c')]){const _0x47961e=this['client']['resolver'][a72_0x4ed4('0x24')](_0x2f6b37[a72_0x4ed4('0x10')],_0x19963a['delete']['join']('\x20')),_0x33dc6e=await confirmation_1['default'](_0x2f6b37,this[a72_0x4ed4('0x19')][a72_0x4ed4('0x21')][a72_0x4ed4('0x9')](_0x2f6b37['guild'][a72_0x4ed4('0x25')][a72_0x4ed4('0x28')],'info','roleDeleteQuestion',_0x2f6b37[a72_0x4ed4('0x2b')][a72_0x4ed4('0x2a')],_0x47961e[a72_0x4ed4('0x11')]));if(_0x33dc6e)return await _0x47961e['delete'](_0x30acd1),await _0x2f6b37['channel'][a72_0x4ed4('0x29')]({'embed':{'color':tesseract_1[a72_0x4ed4('0x1b')][a72_0x4ed4('0xb')][a72_0x4ed4('0x16')],'description':this[a72_0x4ed4('0x19')][a72_0x4ed4('0x21')]['getString'](_0x2f6b37[a72_0x4ed4('0x10')][a72_0x4ed4('0x25')][a72_0x4ed4('0x28')],a72_0x4ed4('0xa'),'roleDelete',_0x2f6b37[a72_0x4ed4('0x2b')]['tag'],_0x47961e[a72_0x4ed4('0x11')],_0x30acd1)}})[a72_0x4ed4('0x1d')](()=>{});return!![];}if(_0x19963a['rename']&&_0x19963a[a72_0x4ed4('0xd')][a72_0x4ed4('0x1c')]&&_0x19963a[a72_0x4ed4('0x11')]&&_0x19963a['name'][a72_0x4ed4('0x1c')]){let _0x3a97b5=this[a72_0x4ed4('0x19')]['resolver']['resolveRole'](_0x2f6b37[a72_0x4ed4('0x10')],_0x19963a[a72_0x4ed4('0xd')][a72_0x4ed4('0x26')]('\x20'));return _0x3a97b5=await _0x3a97b5[a72_0x4ed4('0xf')]({'name':_0x19963a[a72_0x4ed4('0x11')]['join']('\x20')}),await _0x2f6b37['channel'][a72_0x4ed4('0x29')]({'embed':{'color':tesseract_1['Constants'][a72_0x4ed4('0xb')][a72_0x4ed4('0x16')],'description':this[a72_0x4ed4('0x19')]['locale'][a72_0x4ed4('0x9')](_0x2f6b37['guild'][a72_0x4ed4('0x25')][a72_0x4ed4('0x28')],a72_0x4ed4('0xa'),a72_0x4ed4('0x8'),_0x2f6b37[a72_0x4ed4('0x2b')][a72_0x4ed4('0x2a')],_0x3a97b5[a72_0x4ed4('0x11')],_0x30acd1)}})[a72_0x4ed4('0x1d')](()=>{});}throw new errors[(a72_0x4ed4('0x13'))](errors['BASTION_ERROR_TYPE'][a72_0x4ed4('0x1f')],this['name']);};}};
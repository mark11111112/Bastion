const a76_0x5351=['document','has','includes','user','keys','MANAGE_GUILD','find','Page\x20','apply','default','referralsDisable','GREEN','referrals','\x20-\x20','tag','language','pages','constructor','disable','author','uses','test','exports','It\x20allows\x20you\x20set\x20the\x20Referrals\x20Channel\x20so\x20that\x20members\x20can\x20invite\x20others\x20to\x20the\x20server\x20and\x20gain\x20referral\x20rewards.\x20And\x20it\x20also\x20allows\x20you\x20to\x20track\x20the\x20members\x27\x20invites.','../../utils/pagination','referrals\x20--page\x20NUMBER','return\x20/\x22\x20+\x20this\x20+\x20\x22/','members','Referrals\x20Channel','findByIdAndUpdate','get','referralsEnable','Command','cache','IRIS','\x20of\x20','filter','referral','enable','@bastion/tesseract','page','items','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','send','\x20Uses','exec','COLORS','Constants','channel','Referrals','../../models/Guild','RED','guild','client','info','referrals\x20--disable'];(function(_0x41227a,_0x53515a){const _0x3e2e9c=function(_0xf365a7){while(--_0xf365a7){_0x41227a['push'](_0x41227a['shift']());}},_0x57256c=function(){const _0x2e1047={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x51b33e,_0x1564e0,_0x52e0a8,_0x2d7eb9){_0x2d7eb9=_0x2d7eb9||{};let _0x17d1f5=_0x1564e0+'='+_0x52e0a8,_0x2e9c67=0x0;for(let _0xcc247a=0x0,_0x409317=_0x51b33e['length'];_0xcc247a<_0x409317;_0xcc247a++){const _0x2bba1c=_0x51b33e[_0xcc247a];_0x17d1f5+=';\x20'+_0x2bba1c;const _0x57742c=_0x51b33e[_0x2bba1c];_0x51b33e['push'](_0x57742c),_0x409317=_0x51b33e['length'],_0x57742c!==!![]&&(_0x17d1f5+='='+_0x57742c);}_0x2d7eb9['cookie']=_0x17d1f5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5df19c,_0x12827f){_0x5df19c=_0x5df19c||function(_0x350359){return _0x350359;};const _0xcfbac6=_0x5df19c(new RegExp('(?:^|;\x20)'+_0x12827f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x498d46=function(_0x2d2d99,_0x1d1fe5){_0x2d2d99(++_0x1d1fe5);};return _0x498d46(_0x3e2e9c,_0x53515a),_0xcfbac6?decodeURIComponent(_0xcfbac6[0x1]):undefined;}},_0x3d1fab=function(){const _0x239e5f=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x239e5f['test'](_0x2e1047['removeCookie']['toString']());};_0x2e1047['updateCookie']=_0x3d1fab;let _0x269419='';const _0x47944c=_0x2e1047['updateCookie']();if(!_0x47944c)_0x2e1047['setCookie'](['*'],'counter',0x1);else _0x47944c?_0x269419=_0x2e1047['getCookie'](null,'counter'):_0x2e1047['removeCookie']();};_0x57256c();}(a76_0x5351,0x1d4));const a76_0x3e2e=function(_0x41227a,_0x53515a){_0x41227a=_0x41227a-0x0;let _0x3e2e9c=a76_0x5351[_0x41227a];return _0x3e2e9c;};const _0x40ede5=a76_0x3e2e,a76_0x2e1047=function(){let _0x269419=!![];return function(_0x47944c,_0x51b33e){const _0x1564e0=_0x269419?function(){const _0x2415a8=a76_0x3e2e;if(_0x51b33e){const _0x52e0a8=_0x51b33e[_0x2415a8('0x2c')](_0x47944c,arguments);return _0x51b33e=null,_0x52e0a8;}}:function(){};return _0x269419=![],_0x1564e0;};}(),a76_0xf365a7=a76_0x2e1047(this,function(){const _0x2d7eb9=function(){const _0x117407=a76_0x3e2e,_0x17d1f5=_0x2d7eb9[_0x117407('0x35')](_0x117407('0x6'))()[_0x117407('0x35')](_0x117407('0x16'));return!_0x17d1f5[_0x117407('0x1')](a76_0xf365a7);};return _0x2d7eb9();});a76_0xf365a7();'use strict';const tesseract_1=require(_0x40ede5('0x13')),Guild_1=require(_0x40ede5('0x1e')),Member_1=require('../../models/Member'),pagination=require(_0x40ede5('0x4'));module[_0x40ede5('0x2')]=class ReferralsCommand extends tesseract_1[_0x40ede5('0xc')]{constructor(){const _0x20e8a6=_0x40ede5;super(_0x20e8a6('0x30'),{'description':_0x20e8a6('0x3'),'triggers':[],'arguments':{'alias':{'page':['p']},'boolean':[_0x20e8a6('0x12'),_0x20e8a6('0x36')],'number':['page']},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x20e8a6('0x29')],'userPermissions':[],'syntax':[_0x20e8a6('0x30'),_0x20e8a6('0x5'),'referrals\x20--enable',_0x20e8a6('0x23')]}),this[_0x20e8a6('0x19')]=async(_0x2e9c67,_0xcc247a)=>{const _0x450911=_0x20e8a6;if(_0xcc247a['enable']||_0xcc247a[_0x450911('0x36')])return _0xcc247a[_0x450911('0x12')]?await Guild_1[_0x450911('0x2d')][_0x450911('0x9')](_0x2e9c67[_0x450911('0x20')]['id'],{'referralsChannel':_0x2e9c67[_0x450911('0x1c')]['id']}):await Guild_1[_0x450911('0x2d')]['findByIdAndUpdate'](_0x2e9c67[_0x450911('0x20')]['id'],{'$unset':{'referralsChannel':0x1}}),await _0x2e9c67[_0x450911('0x1c')][_0x450911('0x17')]({'embed':{'color':_0xcc247a[_0x450911('0x12')]?tesseract_1[_0x450911('0x1b')][_0x450911('0x1a')][_0x450911('0x2f')]:tesseract_1[_0x450911('0x1b')][_0x450911('0x1a')][_0x450911('0x1f')],'title':_0x450911('0x8'),'description':this[_0x450911('0x21')]['locale']['getString'](_0x2e9c67[_0x450911('0x20')][_0x450911('0x24')][_0x450911('0x33')],_0x450911('0x22'),_0xcc247a[_0x450911('0x12')]?_0x450911('0xb'):_0x450911('0x2e'),_0x2e9c67[_0x450911('0x37')][_0x450911('0x32')])}});const _0x409317=await Member_1['default'][_0x450911('0x2a')]({'guild':_0x2e9c67[_0x450911('0x20')]['id'],'referral':{'$exists':!![]}}),_0x2bba1c=await _0x2e9c67[_0x450911('0x20')]['fetchInvites'](),_0x57742c=pagination['paginate'](_0x409317[_0x450911('0x10')](_0x5df19c=>_0x5df19c['referral']&&Array['from'](_0x2bba1c[_0x450911('0x28')]())[_0x450911('0x26')](_0x5df19c[_0x450911('0x11')]))['map'](_0x12827f=>({'name':_0x2e9c67['guild']['members'][_0x450911('0xd')][_0x450911('0x25')](_0x12827f[_0x450911('0x27')])?_0x2e9c67['guild'][_0x450911('0x7')][_0x450911('0xd')]['get'](_0x12827f['user'])['user'][_0x450911('0x32')]:_0x12827f[_0x450911('0x27')],'value':_0x12827f['referral']+_0x450911('0x31')+_0x2bba1c[_0x450911('0xa')](_0x12827f[_0x450911('0x11')])[_0x450911('0x0')]+_0x450911('0x18')})),_0xcc247a[_0x450911('0x14')]);await _0x2e9c67[_0x450911('0x1c')]['send']({'embed':{'color':tesseract_1['Constants'][_0x450911('0x1a')][_0x450911('0xe')],'title':_0x450911('0x1d'),'fields':_0x57742c[_0x450911('0x15')],'footer':{'text':_0x450911('0x2b')+_0x57742c['page']+_0x450911('0xf')+_0x57742c[_0x450911('0x34')]}}});};}};
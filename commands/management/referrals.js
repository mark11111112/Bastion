const a77_0x3f1d=['fetchInvites','../../models/Member','\x20-\x20','getString','apply','includes','GREEN','disable','document','It\x20allows\x20you\x20set\x20the\x20Referrals\x20Channel\x20so\x20that\x20members\x20can\x20invite\x20others\x20to\x20the\x20server\x20and\x20gain\x20referral\x20rewards.\x20And\x20it\x20also\x20allows\x20you\x20to\x20track\x20the\x20members\x27\x20invites.','referrals\x20--enable','../../models/Guild','from','user','referrals\x20--disable','tag','findByIdAndUpdate','constructor','default','client','Constants','uses','Command','locale','find','exec','Page\x20','\x20of\x20','referrals','guild','Referrals\x20Channel','get','RED','test','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','members','send','referral','../../utils/pagination','exports','channel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','page','map','@bastion/tesseract','COLORS','language','enable','cache','info'];(function(_0xc0fd5a,_0x3f1d5e){const _0x3bfba3=function(_0x581310){while(--_0x581310){_0xc0fd5a['push'](_0xc0fd5a['shift']());}},_0x14103c=function(){const _0x5d3380={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x569cfd,_0x3cf485,_0x32453a,_0x398b44){_0x398b44=_0x398b44||{};let _0x599e65=_0x3cf485+'='+_0x32453a,_0x3511c2=0x0;for(let _0x3fc812=0x0,_0x1bd824=_0x569cfd['length'];_0x3fc812<_0x1bd824;_0x3fc812++){const _0x4d7251=_0x569cfd[_0x3fc812];_0x599e65+=';\x20'+_0x4d7251;const _0x534abe=_0x569cfd[_0x4d7251];_0x569cfd['push'](_0x534abe),_0x1bd824=_0x569cfd['length'],_0x534abe!==!![]&&(_0x599e65+='='+_0x534abe);}_0x398b44['cookie']=_0x599e65;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2c7e14,_0x1b19d9){_0x2c7e14=_0x2c7e14||function(_0x155404){return _0x155404;};const _0x3d7b89=_0x2c7e14(new RegExp('(?:^|;\x20)'+_0x1b19d9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x50e852=function(_0x8e9cb,_0x2e3edc){_0x8e9cb(++_0x2e3edc);};return _0x50e852(_0x3bfba3,_0x3f1d5e),_0x3d7b89?decodeURIComponent(_0x3d7b89[0x1]):undefined;}},_0x4c2ce0=function(){const _0xdba171=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xdba171['test'](_0x5d3380['removeCookie']['toString']());};_0x5d3380['updateCookie']=_0x4c2ce0;let _0x134f18='';const _0x21190e=_0x5d3380['updateCookie']();if(!_0x21190e)_0x5d3380['setCookie'](['*'],'counter',0x1);else _0x21190e?_0x134f18=_0x5d3380['getCookie'](null,'counter'):_0x5d3380['removeCookie']();};_0x14103c();}(a77_0x3f1d,0xb2));const a77_0x3bfb=function(_0xc0fd5a,_0x3f1d5e){_0xc0fd5a=_0xc0fd5a-0x0;let _0x3bfba3=a77_0x3f1d[_0xc0fd5a];return _0x3bfba3;};const _0x291090=a77_0x3bfb,a77_0x5d3380=function(){let _0x134f18=!![];return function(_0x21190e,_0x569cfd){const _0x3cf485=_0x134f18?function(){const _0x3dfa26=a77_0x3bfb;if(_0x569cfd){const _0x32453a=_0x569cfd[_0x3dfa26('0x1a')](_0x21190e,arguments);return _0x569cfd=null,_0x32453a;}}:function(){};return _0x134f18=![],_0x3cf485;};}(),a77_0x581310=a77_0x5d3380(this,function(){const _0x398b44=function(){const _0x2a0140=a77_0x3bfb,_0x599e65=_0x398b44[_0x2a0140('0x27')](_0x2a0140('0xd'))()[_0x2a0140('0x27')](_0x2a0140('0x6'));return!_0x599e65[_0x2a0140('0x5')](a77_0x581310);};return _0x398b44();});a77_0x581310();'use strict';const tesseract_1=require(_0x291090('0x10')),Guild_1=require(_0x291090('0x21')),Member_1=require(_0x291090('0x17')),pagination=require(_0x291090('0xa'));module[_0x291090('0xb')]=class ReferralsCommand extends tesseract_1[_0x291090('0x2c')]{constructor(){const _0x2020f4=_0x291090;super(_0x2020f4('0x0'),{'description':_0x2020f4('0x1f'),'triggers':[],'arguments':{'alias':{'page':['p']},'boolean':[_0x2020f4('0x13'),_0x2020f4('0x1d')],'number':[_0x2020f4('0xe')]},'scope':_0x2020f4('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_GUILD'],'userPermissions':[],'syntax':['referrals','referrals\x20--page\x20NUMBER',_0x2020f4('0x20'),_0x2020f4('0x24')]}),this[_0x2020f4('0x2f')]=async(_0x3511c2,_0x3fc812)=>{const _0x5cc249=_0x2020f4;if(_0x3fc812[_0x5cc249('0x13')]||_0x3fc812[_0x5cc249('0x1d')])return _0x3fc812[_0x5cc249('0x13')]?await Guild_1[_0x5cc249('0x28')]['findByIdAndUpdate'](_0x3511c2[_0x5cc249('0x1')]['id'],{'referralsChannel':_0x3511c2[_0x5cc249('0xc')]['id']}):await Guild_1[_0x5cc249('0x28')][_0x5cc249('0x26')](_0x3511c2[_0x5cc249('0x1')]['id'],{'$unset':{'referralsChannel':0x1}}),await _0x3511c2[_0x5cc249('0xc')][_0x5cc249('0x8')]({'embed':{'color':_0x3fc812[_0x5cc249('0x13')]?tesseract_1[_0x5cc249('0x2a')][_0x5cc249('0x11')][_0x5cc249('0x1c')]:tesseract_1[_0x5cc249('0x2a')][_0x5cc249('0x11')][_0x5cc249('0x4')],'title':_0x5cc249('0x2'),'description':this[_0x5cc249('0x29')][_0x5cc249('0x2d')][_0x5cc249('0x19')](_0x3511c2[_0x5cc249('0x1')][_0x5cc249('0x1e')][_0x5cc249('0x12')],_0x5cc249('0x15'),_0x3fc812[_0x5cc249('0x13')]?'referralsEnable':'referralsDisable',_0x3511c2['author'][_0x5cc249('0x25')])}});const _0x1bd824=await Member_1[_0x5cc249('0x28')][_0x5cc249('0x2e')]({'guild':_0x3511c2['guild']['id'],'referral':{'$exists':!![]}}),_0x4d7251=await _0x3511c2[_0x5cc249('0x1')][_0x5cc249('0x16')](),_0x534abe=pagination['paginate'](_0x1bd824['filter'](_0x2c7e14=>_0x2c7e14[_0x5cc249('0x9')]&&Array[_0x5cc249('0x22')](_0x4d7251['keys']())[_0x5cc249('0x1b')](_0x2c7e14[_0x5cc249('0x9')]))[_0x5cc249('0xf')](_0x1b19d9=>({'name':_0x3511c2[_0x5cc249('0x1')][_0x5cc249('0x7')][_0x5cc249('0x14')]['has'](_0x1b19d9[_0x5cc249('0x23')])?_0x3511c2[_0x5cc249('0x1')]['members']['cache'][_0x5cc249('0x3')](_0x1b19d9[_0x5cc249('0x23')])[_0x5cc249('0x23')][_0x5cc249('0x25')]:_0x1b19d9['user'],'value':_0x1b19d9[_0x5cc249('0x9')]+_0x5cc249('0x18')+_0x4d7251[_0x5cc249('0x3')](_0x1b19d9[_0x5cc249('0x9')])[_0x5cc249('0x2b')]+'\x20Uses'})),_0x3fc812[_0x5cc249('0xe')]);await _0x3511c2[_0x5cc249('0xc')]['send']({'embed':{'color':tesseract_1[_0x5cc249('0x2a')][_0x5cc249('0x11')]['IRIS'],'title':'Referrals','fields':_0x534abe['items'],'footer':{'text':_0x5cc249('0x30')+_0x534abe['page']+_0x5cc249('0x31')+_0x534abe['pages']}}});};}};
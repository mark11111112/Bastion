const a79_0xcb12=['getString','name','reportsChannelId','apply','Reported\x20by\x20','DiscordError','return\x20/\x22\x20+\x20this\x20+\x20\x22/','join','guild','@bastion/tesseract','../../utils/errors','user','COLORS','cache','report\x20--user\x20USER_ID\x20--\x20REASON','report','document','tag','compile','constructor','resolveUser','RED','ORANGE','reportConfirmation','language','channels','channel','noReportChannel','Constants','\x20/\x20','send','exports','exec','deletable','locale','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','delete','author','INVALID_COMMAND_SYNTAX','client','User\x20Report\x20Command','Report','catch'];(function(_0x2a6d57,_0xcb1264){const _0x3da0cf=function(_0x1913be){while(--_0x1913be){_0x2a6d57['push'](_0x2a6d57['shift']());}};const _0x1ab380=function(){const _0x17474d={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x263727,_0x105382,_0x7c86f8,_0x4babc9){_0x4babc9=_0x4babc9||{};let _0x109262=_0x105382+'='+_0x7c86f8;let _0x11b142=0x0;for(let _0x53e088=0x0,_0x596a7b=_0x263727['length'];_0x53e088<_0x596a7b;_0x53e088++){const _0x9f374e=_0x263727[_0x53e088];_0x109262+=';\x20'+_0x9f374e;const _0x54a485=_0x263727[_0x9f374e];_0x263727['push'](_0x54a485);_0x596a7b=_0x263727['length'];if(_0x54a485!==!![]){_0x109262+='='+_0x54a485;}}_0x4babc9['cookie']=_0x109262;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1d880b,_0x5a4d8a){_0x1d880b=_0x1d880b||function(_0x530140){return _0x530140;};const _0x3269f5=_0x1d880b(new RegExp('(?:^|;\x20)'+_0x5a4d8a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1383a6=function(_0x57257d,_0x2066ca){_0x57257d(++_0x2066ca);};_0x1383a6(_0x3da0cf,_0xcb1264);return _0x3269f5?decodeURIComponent(_0x3269f5[0x1]):undefined;}};const _0x10fada=function(){const _0x3a92c5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3a92c5['test'](_0x17474d['removeCookie']['toString']());};_0x17474d['updateCookie']=_0x10fada;let _0x15ec89='';const _0x166ab7=_0x17474d['updateCookie']();if(!_0x166ab7){_0x17474d['setCookie'](['*'],'counter',0x1);}else if(_0x166ab7){_0x15ec89=_0x17474d['getCookie'](null,'counter');}else{_0x17474d['removeCookie']();}};_0x1ab380();}(a79_0xcb12,0x116));const a79_0x3da0=function(_0x2a6d57,_0xcb1264){_0x2a6d57=_0x2a6d57-0x0;let _0x3da0cf=a79_0xcb12[_0x2a6d57];return _0x3da0cf;};const a79_0x17474d=function(){let _0x32293d=!![];return function(_0x51ef6e,_0x466ac4){const _0x214ae2=_0x32293d?function(){if(_0x466ac4){const _0x9bae26=_0x466ac4[a79_0x3da0('0x1a')](_0x51ef6e,arguments);_0x466ac4=null;return _0x9bae26;}}:function(){};_0x32293d=![];return _0x214ae2;};}();const a79_0x1913be=a79_0x17474d(this,function(){const _0x36af2b=function(){const _0x51f3db=_0x36af2b[a79_0x3da0('0x2a')](a79_0x3da0('0x1d'))()[a79_0x3da0('0x29')](a79_0x3da0('0xf'));return!_0x51f3db['test'](a79_0x1913be);};return _0x36af2b();});a79_0x1913be();'use strict';const tesseract_1=require(a79_0x3da0('0x20'));const errors=require(a79_0x3da0('0x21'));module[a79_0x3da0('0xb')]=class Report extends tesseract_1['Command']{constructor(){super(a79_0x3da0('0x26'),{'description':'It\x20allows\x20you\x20to\x20report\x20a\x20server\x20member\x20to\x20the\x20moderators\x20of\x20the\x20server,\x20provided\x20a\x20Report\x20Channel\x20is\x20set.','triggers':[],'arguments':{'alias':{'user':'u'},'string':[a79_0x3da0('0x22')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a79_0x3da0('0x25')]});this[a79_0x3da0('0xc')]=async(_0x21727d,_0x1b7644)=>{const _0x21151a=this['client']['resolver'][a79_0x3da0('0x0')](_0x1b7644[a79_0x3da0('0x22')]);const _0x4aa8d8=_0x1b7644['_'][a79_0x3da0('0x1e')]('\x20');if(!_0x21151a||!_0x4aa8d8)throw new errors[(a79_0x3da0('0x1c'))](errors['BASTION_ERROR_TYPE'][a79_0x3da0('0x12')],this[a79_0x3da0('0x18')]);if(_0x21727d['guild'][a79_0x3da0('0x27')]['reportsChannelId']){await _0x21727d[a79_0x3da0('0x1f')][a79_0x3da0('0x5')][a79_0x3da0('0x24')]['get'](_0x21727d[a79_0x3da0('0x1f')]['document'][a79_0x3da0('0x19')])[a79_0x3da0('0xa')]({'embed':{'color':tesseract_1[a79_0x3da0('0x8')][a79_0x3da0('0x23')]['ORANGE'],'title':'User\x20Report','fields':[{'name':'User','value':_0x21151a[a79_0x3da0('0x28')]+a79_0x3da0('0x9')+_0x21151a['id']},{'name':a79_0x3da0('0x15'),'value':_0x4aa8d8}],'footer':{'text':a79_0x3da0('0x1b')+_0x21727d[a79_0x3da0('0x11')][a79_0x3da0('0x28')]+'\x20/\x20'+_0x21727d['author']['id']}}});await _0x21727d[a79_0x3da0('0x6')][a79_0x3da0('0xa')]({'embed':{'color':tesseract_1[a79_0x3da0('0x8')][a79_0x3da0('0x23')][a79_0x3da0('0x2')],'description':this[a79_0x3da0('0x13')]['locale'][a79_0x3da0('0x17')](_0x21727d['guild'][a79_0x3da0('0x27')]['language'],'info',a79_0x3da0('0x3'),_0x21727d['author'][a79_0x3da0('0x28')])}})[a79_0x3da0('0x16')](()=>{});if(_0x21727d[a79_0x3da0('0xd')])await _0x21727d[a79_0x3da0('0x10')]({'reason':a79_0x3da0('0x14')})[a79_0x3da0('0x16')](()=>{});}else{return await _0x21727d[a79_0x3da0('0x6')][a79_0x3da0('0xa')]({'embed':{'color':tesseract_1[a79_0x3da0('0x8')][a79_0x3da0('0x23')][a79_0x3da0('0x1')],'description':this['client'][a79_0x3da0('0xe')][a79_0x3da0('0x17')](_0x21727d[a79_0x3da0('0x1f')]['document'][a79_0x3da0('0x4')],'errors',a79_0x3da0('0x7'))}})[a79_0x3da0('0x16')](()=>{});}};}};
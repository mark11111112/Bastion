const a39_0x5913=['INVALID_COMMAND_SYNTAX','author','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','exports','locale','Command','guild','channel','category','tag','premiumVoiceSessions','default','categories','MANAGE_CHANNELS','catch','GREEN','../../models/Guild','send','constructor','channels','getString','create','client','exec','➕\x20New\x20Voice\x20Channel','../../utils/errors','DiscordError','return\x20/\x22\x20+\x20this\x20+\x20\x22/','voiceSessions\x20--create','concat','info','voice','document','voiceSessions','language','user','MANAGE_GUILD','Sessional\x20Channels','@bastion/tesseract','../../utils/omnic','test','errors','BASTION_ERROR_TYPE','name','findByIdAndUpdate'];(function(_0x1eb113,_0x5913a8){const _0x2d3afc=function(_0x12fd62){while(--_0x12fd62){_0x1eb113['push'](_0x1eb113['shift']());}};const _0xd71e40=function(){const _0x5d0118={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x147323,_0x5608ac,_0x203150,_0x46310d){_0x46310d=_0x46310d||{};let _0x1afa9a=_0x5608ac+'='+_0x203150;let _0x2c80f9=0x0;for(let _0x55da4b=0x0,_0x246dac=_0x147323['length'];_0x55da4b<_0x246dac;_0x55da4b++){const _0x3ddeb8=_0x147323[_0x55da4b];_0x1afa9a+=';\x20'+_0x3ddeb8;const _0x16113e=_0x147323[_0x3ddeb8];_0x147323['push'](_0x16113e);_0x246dac=_0x147323['length'];if(_0x16113e!==!![]){_0x1afa9a+='='+_0x16113e;}}_0x46310d['cookie']=_0x1afa9a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x34fb22,_0x132a56){_0x34fb22=_0x34fb22||function(_0x4b63ef){return _0x4b63ef;};const _0x56c4ae=_0x34fb22(new RegExp('(?:^|;\x20)'+_0x132a56['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x11d4a1=function(_0x1a95da,_0x15ac5f){_0x1a95da(++_0x15ac5f);};_0x11d4a1(_0x2d3afc,_0x5913a8);return _0x56c4ae?decodeURIComponent(_0x56c4ae[0x1]):undefined;}};const _0x2d486d=function(){const _0x29fb80=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x29fb80['test'](_0x5d0118['removeCookie']['toString']());};_0x5d0118['updateCookie']=_0x2d486d;let _0x4e05bd='';const _0x363630=_0x5d0118['updateCookie']();if(!_0x363630){_0x5d0118['setCookie'](['*'],'counter',0x1);}else if(_0x363630){_0x4e05bd=_0x5d0118['getCookie'](null,'counter');}else{_0x5d0118['removeCookie']();}};_0xd71e40();}(a39_0x5913,0x6c));const a39_0x2d3a=function(_0x1eb113,_0x5913a8){_0x1eb113=_0x1eb113-0x0;let _0x2d3afc=a39_0x5913[_0x1eb113];return _0x2d3afc;};const a39_0x5d0118=function(){let _0x59c83d=!![];return function(_0x41365e,_0x39fdc5){const _0x948411=_0x59c83d?function(){if(_0x39fdc5){const _0x9faaa2=_0x39fdc5['apply'](_0x41365e,arguments);_0x39fdc5=null;return _0x9faaa2;}}:function(){};_0x59c83d=![];return _0x948411;};}();const a39_0x12fd62=a39_0x5d0118(this,function(){const _0x44a889=function(){const _0xc2061c=_0x44a889[a39_0x2d3a('0x0')](a39_0x2d3a('0x9'))()['compile'](a39_0x2d3a('0x1d'));return!_0xc2061c[a39_0x2d3a('0x16')](a39_0x12fd62);};return _0x44a889();});a39_0x12fd62();'use strict';const tesseract_1=require(a39_0x2d3a('0x14'));const Guild_1=require(a39_0x2d3a('0x2b'));const constants=require('../../utils/constants');const errors=require(a39_0x2d3a('0x7'));const omnic=require(a39_0x2d3a('0x15'));module[a39_0x2d3a('0x1e')]=class VoiceSessionsCommand extends tesseract_1[a39_0x2d3a('0x20')]{constructor(){super(a39_0x2d3a('0xf'),{'description':'It\x20allows\x20you\x20manage\x20Voice\x20Sessions\x20(or\x20Temporary\x20Voice\x20Channels,\x20if\x20you\x20prefer),\x20in\x20the\x20server.','triggers':[],'arguments':{'boolean':[a39_0x2d3a('0x3')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[a39_0x2d3a('0x28')],'userPermissions':[a39_0x2d3a('0x12')],'syntax':[a39_0x2d3a('0xa')]});this[a39_0x2d3a('0x5')]=async(_0x3abefc,_0x37d0f5)=>{if(constants['isPublicBastion'](this[a39_0x2d3a('0x4')][a39_0x2d3a('0x11')])){const _0x3fe989=await omnic['fetchPremiumTier'](_0x3abefc[a39_0x2d3a('0x21')])[a39_0x2d3a('0x29')](()=>{});if(!_0x3fe989)throw new errors[(a39_0x2d3a('0x8'))](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this[a39_0x2d3a('0x4')][a39_0x2d3a('0x1f')][a39_0x2d3a('0x2')](_0x3abefc[a39_0x2d3a('0x21')][a39_0x2d3a('0xe')][a39_0x2d3a('0x10')],a39_0x2d3a('0x17'),a39_0x2d3a('0x25')));}if(_0x37d0f5['create']){const _0x3c7e13=await _0x3abefc[a39_0x2d3a('0x21')][a39_0x2d3a('0x1')]['create'](a39_0x2d3a('0x13'),{'type':a39_0x2d3a('0x23')});await _0x3abefc[a39_0x2d3a('0x21')][a39_0x2d3a('0x1')][a39_0x2d3a('0x3')](a39_0x2d3a('0x6'),{'type':a39_0x2d3a('0xd'),'parent':_0x3c7e13});const _0x45414f=_0x3abefc[a39_0x2d3a('0x21')]['document'][a39_0x2d3a('0xf')]&&_0x3abefc[a39_0x2d3a('0x21')][a39_0x2d3a('0xe')]['voiceSessions'][a39_0x2d3a('0x27')]?_0x3abefc[a39_0x2d3a('0x21')][a39_0x2d3a('0xe')][a39_0x2d3a('0xf')][a39_0x2d3a('0x27')][a39_0x2d3a('0xb')](_0x3c7e13['id']):[_0x3c7e13['id']];await Guild_1[a39_0x2d3a('0x26')][a39_0x2d3a('0x1a')](_0x3abefc[a39_0x2d3a('0x21')]['id'],{'voiceSessions':{'categories':_0x45414f}});return _0x3abefc[a39_0x2d3a('0x22')][a39_0x2d3a('0x2c')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a39_0x2d3a('0x2a')],'description':this[a39_0x2d3a('0x4')]['locale']['getString'](_0x3abefc['guild'][a39_0x2d3a('0xe')][a39_0x2d3a('0x10')],a39_0x2d3a('0xc'),'voiceSessionCreate',_0x3abefc[a39_0x2d3a('0x1c')][a39_0x2d3a('0x24')])}})[a39_0x2d3a('0x29')](()=>{});}throw new errors[(a39_0x2d3a('0x8'))](errors[a39_0x2d3a('0x18')][a39_0x2d3a('0x1b')],this[a39_0x2d3a('0x19')]);};}};
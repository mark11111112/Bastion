const a42_0x4594=['findByIdAndUpdate','SEND_MESSAGES','getString','675524mYpcUc','../../utils/omnic','get','react','default','249898JhzSBY','1sWKEUb','length','name','cache','39513GEIaNT','document','No\x20','ADD_REACTIONS','locale','VIEW_CHANNEL','constructor','GREEN','voiceSessionCreate','Constants','voiceSessions','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','PREMIUM_MEMBERSHIP_REQUIRED','has','send','You\x20can\x20lock,\x20unlock,\x20hide,\x20and\x20unhide\x20your\x20voice\x20session\x20by\x20reacting\x20to\x20the\x20this\x20message.','voice','create','Command','test','DiscordError','filter','categories','concat','isPublicBastion','return\x20/\x22\x20+\x20this\x20+\x20\x22/','118355jqrxME','../../models/Guild','exec','tag','MANAGE_CHANNELS','COLORS','voiceSessions\x20--create','category','[DELETED\x20CHANNEL]','➕\x20New\x20Voice\x20Channel','Voice\x20Session\x20Control','IRIS','text','836773iiUARA','@bastion/tesseract','client','catch','guild','channel','Sessional\x20Channels','CREATE_INSTANT_INVITE','map','language','exports','36031mRPaoD','apply','CONNECT','premiumVoiceSessions','info','419482tZWsGn','channels','../../utils/constants','session-control'];const a42_0x1385=function(_0x14742c,_0x953061){_0x14742c=_0x14742c-0x116;let _0xa8fbbf=a42_0x4594[_0x14742c];return _0xa8fbbf;};const a42_0x2caa01=a42_0x1385;(function(_0x520c31,_0x67929d){const _0x4357d6=a42_0x1385;while(!![]){try{const _0x1d1039=-parseInt(_0x4357d6(0x155))+-parseInt(_0x4357d6(0x150))+parseInt(_0x4357d6(0x144))+parseInt(_0x4357d6(0x15a))*-parseInt(_0x4357d6(0x156))+parseInt(_0x4357d6(0x12c))+parseInt(_0x4357d6(0x149))+parseInt(_0x4357d6(0x139));if(_0x1d1039===_0x67929d)break;else _0x520c31['push'](_0x520c31['shift']());}catch(_0x324fcf){_0x520c31['push'](_0x520c31['shift']());}}}(a42_0x4594,0x6cd0a));const a42_0x5912fe=function(){let _0x12369d=!![];return function(_0x4c7205,_0x1127da){const _0x2dd9dd=_0x12369d?function(){const _0x54cbc6=a42_0x1385;if(_0x1127da){const _0x2e3f73=_0x1127da[_0x54cbc6(0x145)](_0x4c7205,arguments);return _0x1127da=null,_0x2e3f73;}}:function(){};return _0x12369d=![],_0x2dd9dd;};}(),a42_0x239b97=a42_0x5912fe(this,function(){const _0x43b4b0=function(){const _0x5d531b=a42_0x1385,_0x455ee7=_0x43b4b0['constructor'](_0x5d531b(0x12b))()[_0x5d531b(0x118)](_0x5d531b(0x11d));return!_0x455ee7[_0x5d531b(0x125)](a42_0x239b97);};return _0x43b4b0();});a42_0x239b97();'use strict';const tesseract_1=require(a42_0x2caa01(0x13a)),Guild_1=require(a42_0x2caa01(0x12d)),constants=require(a42_0x2caa01(0x14b)),errors=require('../../utils/errors'),omnic=require(a42_0x2caa01(0x151));module[a42_0x2caa01(0x143)]=class VoiceSessionsCommand extends tesseract_1[a42_0x2caa01(0x124)]{constructor(){const _0x1c0501=a42_0x2caa01;super(_0x1c0501(0x11c),{'description':'It\x20allows\x20you\x20manage\x20Voice\x20Sessions\x20(or\x20Temporary\x20Voice\x20Channels,\x20if\x20you\x20prefer),\x20in\x20the\x20server.','triggers':[],'arguments':{'boolean':['create']},'scope':_0x1c0501(0x13d),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x1c0501(0x130)],'userPermissions':['MANAGE_GUILD'],'syntax':[_0x1c0501(0x11c),_0x1c0501(0x132)]}),this[_0x1c0501(0x12e)]=async(_0x477a89,_0x1c0eaa)=>{const _0x5656ac=_0x1c0501;if(constants[_0x5656ac(0x12a)](this[_0x5656ac(0x13b)]['user'])){const _0x2cb125=await omnic['fetchPremiumTier'](_0x477a89[_0x5656ac(0x13d)])['catch'](()=>{});if(!_0x2cb125)throw new errors[(_0x5656ac(0x126))](errors['BASTION_ERROR_TYPE'][_0x5656ac(0x11e)],this[_0x5656ac(0x13b)][_0x5656ac(0x116)][_0x5656ac(0x14f)](_0x477a89[_0x5656ac(0x13d)]['document'][_0x5656ac(0x142)],'errors',_0x5656ac(0x147)));}if(_0x1c0eaa['create']){const _0x1a03f3=await _0x477a89[_0x5656ac(0x13d)][_0x5656ac(0x14a)][_0x5656ac(0x123)](_0x5656ac(0x13f),{'type':_0x5656ac(0x133),'permissionOverwrites':[{'id':_0x477a89['guild']['id'],'allow':['SPEAK',_0x5656ac(0x117)],'deny':[_0x5656ac(0x146),_0x5656ac(0x140)]}]}),_0x14b195=await _0x477a89[_0x5656ac(0x13d)][_0x5656ac(0x14a)][_0x5656ac(0x123)](_0x5656ac(0x14c),{'type':_0x5656ac(0x138),'parent':_0x1a03f3,'permissionOverwrites':[{'id':_0x477a89[_0x5656ac(0x13d)]['id'],'allow':[_0x5656ac(0x15d)],'deny':[_0x5656ac(0x14e)]}]});await _0x477a89[_0x5656ac(0x13d)]['channels']['create'](_0x5656ac(0x135),{'type':_0x5656ac(0x122),'parent':_0x1a03f3,'permissionOverwrites':[{'id':_0x477a89[_0x5656ac(0x13d)]['id'],'allow':['CONNECT'],'deny':['SPEAK']}]});const _0x5dc29f=_0x477a89[_0x5656ac(0x13d)][_0x5656ac(0x15b)][_0x5656ac(0x11c)]&&_0x477a89['guild'][_0x5656ac(0x15b)]['voiceSessions'][_0x5656ac(0x128)]?_0x477a89['guild'][_0x5656ac(0x15b)][_0x5656ac(0x11c)][_0x5656ac(0x128)][_0x5656ac(0x129)](_0x1a03f3['id']):[_0x1a03f3['id']];await Guild_1[_0x5656ac(0x154)][_0x5656ac(0x14d)](_0x477a89[_0x5656ac(0x13d)]['id'],{'voiceSessions':{'categories':_0x5dc29f[_0x5656ac(0x127)](_0x823df2=>_0x477a89[_0x5656ac(0x13d)]['channels'][_0x5656ac(0x159)][_0x5656ac(0x11f)](_0x823df2))}});const _0x5a4448=await _0x14b195[_0x5656ac(0x120)]({'embed':{'color':tesseract_1['Constants'][_0x5656ac(0x131)][_0x5656ac(0x137)],'title':_0x5656ac(0x136),'description':_0x5656ac(0x121)}});return await _0x5a4448[_0x5656ac(0x153)]('🔒')[_0x5656ac(0x13c)](()=>{}),await _0x5a4448[_0x5656ac(0x153)]('🔓')['catch'](()=>{}),await _0x5a4448['react']('🔐')[_0x5656ac(0x13c)](()=>{}),await _0x5a4448[_0x5656ac(0x153)]('👁️')[_0x5656ac(0x13c)](()=>{}),_0x477a89[_0x5656ac(0x13e)]['send']({'embed':{'color':tesseract_1[_0x5656ac(0x11b)][_0x5656ac(0x131)][_0x5656ac(0x119)],'description':this[_0x5656ac(0x13b)]['locale'][_0x5656ac(0x14f)](_0x477a89[_0x5656ac(0x13d)]['document']['language'],_0x5656ac(0x148),_0x5656ac(0x11a),_0x477a89['author'][_0x5656ac(0x12f)])}})['catch'](()=>{});}const _0x24a4a3=_0x477a89[_0x5656ac(0x13d)]['document'][_0x5656ac(0x11c)]?_0x477a89[_0x5656ac(0x13d)][_0x5656ac(0x15b)]['voiceSessions'][_0x5656ac(0x128)]:[];return await _0x477a89[_0x5656ac(0x13e)]['send']({'embed':{'color':tesseract_1['Constants'][_0x5656ac(0x131)][_0x5656ac(0x137)],'title':(_0x24a4a3[_0x5656ac(0x157)]?'':_0x5656ac(0x15c))+'Voice\x20Sessions','description':'Use\x20`voiceSessions\x20--create`\x20to\x20create\x20a\x20new\x20category\x20for\x20Voice\x20Sessions.','fields':_0x24a4a3[_0x5656ac(0x141)](_0x28044f=>({'name':_0x477a89[_0x5656ac(0x13d)][_0x5656ac(0x14a)][_0x5656ac(0x159)][_0x5656ac(0x11f)](_0x28044f)?_0x477a89['guild']['channels'][_0x5656ac(0x159)][_0x5656ac(0x152)](_0x28044f)[_0x5656ac(0x158)]:_0x5656ac(0x134),'value':_0x28044f}))}});};}};
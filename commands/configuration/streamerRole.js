const a37_0x36f4=['getString','BASTION_ERROR_TYPE','tag','name','document','channel','@bastion/tesseract','30514mOfXeI','constructor','return\x20/\x22\x20+\x20this\x20+\x20\x22/','151132KCEIbg','1PaLqUz','188674nEsYfL','DiscordError','streamerRoleSet','1VcDsXm','save','streamerRole','GREEN','3hykMLX','guild','locale','309270LSrjov','info','190309SuKVgq','Command','resolveRole','streamerRole\x20ROLE','streamerRoleId','Constants','length','25301DwFwgs','remove','catch','COLORS','streamerRole\x20--remove','client','258445qDZyRS','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','send','roleNotFound','errors','streamerRoleUnset','RED','5mVxcSp','language','join','It\x20allows\x20to\x20set\x20the\x20Streamer\x20Role\x20for\x20the\x20server.\x20When\x20a\x20member\x20goes\x20live\x20in\x20the\x20server,\x20they\x27re\x20assigned\x20to\x20this\x20role,\x20provided\x20they\x20have\x20at\x20least\x20one\x20role\x20in\x20the\x20server.','author'];const a37_0x3f36=function(_0x3f03e9,_0x3d60af){_0x3f03e9=_0x3f03e9-0x197;let _0x177285=a37_0x36f4[_0x3f03e9];return _0x177285;};const a37_0x98b2c4=a37_0x3f36;(function(_0x1c0021,_0x5cbf62){const _0x36de49=a37_0x3f36;while(!![]){try{const _0x7cfce7=-parseInt(_0x36de49(0x199))*-parseInt(_0x36de49(0x198))+parseInt(_0x36de49(0x19d))*parseInt(_0x36de49(0x19a))+-parseInt(_0x36de49(0x1b3))+parseInt(_0x36de49(0x1c6))*parseInt(_0x36de49(0x1a1))+-parseInt(_0x36de49(0x1a4))+parseInt(_0x36de49(0x1ba))*parseInt(_0x36de49(0x1ad))+parseInt(_0x36de49(0x1a6));if(_0x7cfce7===_0x5cbf62)break;else _0x1c0021['push'](_0x1c0021['shift']());}catch(_0x3c20ec){_0x1c0021['push'](_0x1c0021['shift']());}}}(a37_0x36f4,0x2c0df));const a37_0x2e017f=function(){let _0x16480d=!![];return function(_0x5335bf,_0x28737e){const _0x29e1f9=_0x16480d?function(){if(_0x28737e){const _0xd58de4=_0x28737e['apply'](_0x5335bf,arguments);return _0x28737e=null,_0xd58de4;}}:function(){};return _0x16480d=![],_0x29e1f9;};}(),a37_0x4898d5=a37_0x2e017f(this,function(){const _0x489d1b=function(){const _0x1af0fa=a37_0x3f36,_0x4331e1=_0x489d1b[_0x1af0fa(0x1c7)](_0x1af0fa(0x197))()[_0x1af0fa(0x1c7)](_0x1af0fa(0x1b4));return!_0x4331e1['test'](a37_0x4898d5);};return _0x489d1b();});a37_0x4898d5();'use strict';const tesseract_1=require(a37_0x98b2c4(0x1c5)),errors=require('../../utils/errors');module['exports']=class StreamerRoleCommand extends tesseract_1[a37_0x98b2c4(0x1a7)]{constructor(){const _0x46a1dd=a37_0x98b2c4;super(_0x46a1dd(0x19f),{'description':_0x46a1dd(0x1bd),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':[_0x46a1dd(0x1ae)]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':['MANAGE_GUILD'],'syntax':[_0x46a1dd(0x1a9),_0x46a1dd(0x1b1)]}),this['exec']=async(_0x365374,_0x2360fb)=>{const _0x3ce60b=_0x46a1dd;if(!_0x2360fb['_'][_0x3ce60b(0x1ac)]&&!_0x2360fb[_0x3ce60b(0x1ae)])throw new errors['DiscordError'](errors[_0x3ce60b(0x1c0)]['INVALID_COMMAND_SYNTAX'],this[_0x3ce60b(0x1c2)]);const _0x50d90a=_0x365374['guild'];let _0x3c4dea;if(_0x2360fb[_0x3ce60b(0x1ae)])_0x50d90a[_0x3ce60b(0x1c3)][_0x3ce60b(0x1aa)]=undefined,delete _0x50d90a[_0x3ce60b(0x1c3)][_0x3ce60b(0x1aa)];else{_0x3c4dea=this['client']['resolver'][_0x3ce60b(0x1a8)](_0x365374[_0x3ce60b(0x1a2)],_0x2360fb['_'][_0x3ce60b(0x1bc)]('\x20'));if(!_0x3c4dea)throw new errors[(_0x3ce60b(0x19b))](errors[_0x3ce60b(0x1c0)]['ROLE_NOT_FOUND'],this[_0x3ce60b(0x1b2)][_0x3ce60b(0x1a3)]['getString'](_0x365374['guild'][_0x3ce60b(0x1c3)][_0x3ce60b(0x1bb)],_0x3ce60b(0x1b7),_0x3ce60b(0x1b6)));_0x50d90a[_0x3ce60b(0x1c3)][_0x3ce60b(0x1aa)]=_0x3c4dea['id'];}await _0x50d90a[_0x3ce60b(0x1c3)][_0x3ce60b(0x19e)](),await _0x365374[_0x3ce60b(0x1c4)][_0x3ce60b(0x1b5)]({'embed':{'color':_0x50d90a[_0x3ce60b(0x1c3)][_0x3ce60b(0x1aa)]?tesseract_1[_0x3ce60b(0x1ab)]['COLORS'][_0x3ce60b(0x1a0)]:tesseract_1[_0x3ce60b(0x1ab)][_0x3ce60b(0x1b0)][_0x3ce60b(0x1b9)],'description':this[_0x3ce60b(0x1b2)][_0x3ce60b(0x1a3)][_0x3ce60b(0x1bf)](_0x365374[_0x3ce60b(0x1a2)][_0x3ce60b(0x1c3)][_0x3ce60b(0x1bb)],_0x3ce60b(0x1a5),_0x50d90a[_0x3ce60b(0x1c3)]['streamerRoleId']?_0x3ce60b(0x19c):_0x3ce60b(0x1b8),_0x365374[_0x3ce60b(0x1be)][_0x3ce60b(0x1c1)],_0x3c4dea?_0x3c4dea[_0x3ce60b(0x1c2)]:'')}})[_0x3ce60b(0x1af)](()=>{});};}};
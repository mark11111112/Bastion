const a68_0x396e=['member','getString','send','guild','client','locale','document','RED','roleNotSelfAssignable','exec','COLORS','test','join','iam','../../models/Role','channel','errors','add','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Constants','return\x20/\x22\x20+\x20this\x20+\x20\x22/','not','iam\x20ROLE','selfAddRole','ERROR','tag','ROLE_NOT_FOUND','exports','../../utils/errors','catch','roles','language','roleNotFound','GREEN','Command','apply','info','author','BASTION_ERROR_TYPE','resolver','INVALID_COMMAND_SYNTAX','length','selfAssignable','remove','selfRemoveRole','default','name','DiscordError'];(function(_0x38a8aa,_0x396ef9){const _0x5ba469=function(_0x1aff8e){while(--_0x1aff8e){_0x38a8aa['push'](_0x38a8aa['shift']());}},_0x207a85=function(){const _0x462cd1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5bd07e,_0x44b39d,_0x92044e,_0x2a673a){_0x2a673a=_0x2a673a||{};let _0x83d187=_0x44b39d+'='+_0x92044e,_0x37fe3b=0x0;for(let _0x4287f0=0x0,_0x4c08f4=_0x5bd07e['length'];_0x4287f0<_0x4c08f4;_0x4287f0++){const _0x25a79a=_0x5bd07e[_0x4287f0];_0x83d187+=';\x20'+_0x25a79a;const _0x3591a9=_0x5bd07e[_0x25a79a];_0x5bd07e['push'](_0x3591a9),_0x4c08f4=_0x5bd07e['length'],_0x3591a9!==!![]&&(_0x83d187+='='+_0x3591a9);}_0x2a673a['cookie']=_0x83d187;},'removeCookie':function(){return'dev';},'getCookie':function(_0xb3feb0,_0x50c23f){_0xb3feb0=_0xb3feb0||function(_0x534e84){return _0x534e84;};const _0x8fed24=_0xb3feb0(new RegExp('(?:^|;\x20)'+_0x50c23f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x47b58d=function(_0x2f162d,_0x23952d){_0x2f162d(++_0x23952d);};return _0x47b58d(_0x5ba469,_0x396ef9),_0x8fed24?decodeURIComponent(_0x8fed24[0x1]):undefined;}},_0x162b5e=function(){const _0x37b5f5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x37b5f5['test'](_0x462cd1['removeCookie']['toString']());};_0x462cd1['updateCookie']=_0x162b5e;let _0x1ab9dd='';const _0x3100f9=_0x462cd1['updateCookie']();if(!_0x3100f9)_0x462cd1['setCookie'](['*'],'counter',0x1);else _0x3100f9?_0x1ab9dd=_0x462cd1['getCookie'](null,'counter'):_0x462cd1['removeCookie']();};_0x207a85();}(a68_0x396e,0x12b));const a68_0x5ba4=function(_0x38a8aa,_0x396ef9){_0x38a8aa=_0x38a8aa-0x0;let _0x5ba469=a68_0x396e[_0x38a8aa];return _0x5ba469;};const _0x2b877a=a68_0x5ba4,a68_0x462cd1=function(){let _0x1ab9dd=!![];return function(_0x3100f9,_0x5bd07e){const _0x44b39d=_0x1ab9dd?function(){const _0xf7b59e=a68_0x5ba4;if(_0x5bd07e){const _0x92044e=_0x5bd07e[_0xf7b59e('0x18')](_0x3100f9,arguments);return _0x5bd07e=null,_0x92044e;}}:function(){};return _0x1ab9dd=![],_0x44b39d;};}(),a68_0x1aff8e=a68_0x462cd1(this,function(){const _0x2a673a=function(){const _0x29f21a=a68_0x5ba4,_0x83d187=_0x2a673a['constructor'](_0x29f21a('0x9'))()['constructor'](_0x29f21a('0x7'));return!_0x83d187[_0x29f21a('0x0')](a68_0x1aff8e);};return _0x2a673a();});a68_0x1aff8e();'use strict';const tesseract_1=require('@bastion/tesseract'),Role_1=require(_0x2b877a('0x3')),errors=require(_0x2b877a('0x11'));module[_0x2b877a('0x10')]=class IAmCommand extends tesseract_1[_0x2b877a('0x17')]{constructor(){const _0x320478=_0x2b877a;super(_0x320478('0x2'),{'description':'It\x20allows\x20you\x20add\x20(and\x20remove)\x20yourself\x20to\x20(and\x20from)\x20the\x20Self\x20Roles\x20set\x20in\x20the\x20server.','triggers':[],'arguments':{'alias':{'not':['n']},'boolean':[_0x320478('0xa')]},'scope':_0x320478('0x28'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x320478('0xb'),'iam\x20--not\x20ROLE']}),this[_0x320478('0x2e')]=async(_0x37fe3b,_0x4287f0)=>{const _0x3f80fb=_0x320478;if(!_0x4287f0['_'][_0x3f80fb('0x1e')])throw new errors[(_0x3f80fb('0x24'))](errors[_0x3f80fb('0x1b')][_0x3f80fb('0x1d')],this[_0x3f80fb('0x23')]);const _0x4c08f4=this[_0x3f80fb('0x29')][_0x3f80fb('0x1c')]['resolveRole'](_0x37fe3b['guild'],_0x4287f0['_'][_0x3f80fb('0x1')]('\x20'));if(!_0x4c08f4)throw new errors[(_0x3f80fb('0x24'))](errors['BASTION_ERROR_TYPE'][_0x3f80fb('0xf')],this[_0x3f80fb('0x29')]['locale'][_0x3f80fb('0x26')](_0x37fe3b['guild'][_0x3f80fb('0x2b')][_0x3f80fb('0x14')],_0x3f80fb('0x5'),_0x3f80fb('0x15')));const _0x25a79a=await Role_1[_0x3f80fb('0x22')]['findById'](_0x4c08f4['id']);if(!_0x25a79a||!_0x25a79a[_0x3f80fb('0x1f')])throw new errors[(_0x3f80fb('0x24'))](errors[_0x3f80fb('0x1b')][_0x3f80fb('0xd')],this['client'][_0x3f80fb('0x2a')][_0x3f80fb('0x26')](_0x37fe3b[_0x3f80fb('0x28')][_0x3f80fb('0x2b')][_0x3f80fb('0x14')],_0x3f80fb('0x5'),_0x3f80fb('0x2d'),_0x4c08f4[_0x3f80fb('0x23')]));_0x4287f0[_0x3f80fb('0xa')]?await _0x37fe3b[_0x3f80fb('0x25')][_0x3f80fb('0x13')][_0x3f80fb('0x20')](_0x4c08f4):await _0x37fe3b[_0x3f80fb('0x25')][_0x3f80fb('0x13')][_0x3f80fb('0x6')](_0x4c08f4),await _0x37fe3b[_0x3f80fb('0x4')][_0x3f80fb('0x27')]({'embed':{'color':_0x4287f0[_0x3f80fb('0xa')]?tesseract_1[_0x3f80fb('0x8')][_0x3f80fb('0x2f')][_0x3f80fb('0x2c')]:tesseract_1[_0x3f80fb('0x8')]['COLORS'][_0x3f80fb('0x16')],'description':this['client'][_0x3f80fb('0x2a')][_0x3f80fb('0x26')](_0x37fe3b[_0x3f80fb('0x28')][_0x3f80fb('0x2b')][_0x3f80fb('0x14')],_0x3f80fb('0x19'),_0x4287f0[_0x3f80fb('0xa')]?_0x3f80fb('0x21'):_0x3f80fb('0xc'),_0x37fe3b[_0x3f80fb('0x1a')][_0x3f80fb('0xe')],_0x4c08f4[_0x3f80fb('0x23')])}})[_0x3f80fb('0x12')](()=>{});};}};
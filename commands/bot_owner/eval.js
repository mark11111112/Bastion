const a4_0x2fd8=['inspect','exports','toString','quiet','guild','broadcast','PUPIL','eval\x20--code\x20JAVASCRIPT_CODE','```js\x0a','Evaluator','code','```','client','../../utils/errors','BASTION_ERROR_TYPE','INPUT','name','COLORS','apply','util','@bastion/tesseract','length','then','join','Constants','test','return\x20/\x22\x20+\x20this\x20+\x20\x22/','deletable','eval\x20--code\x20JAVASCRIPT_CODE\x20--delete','eval\x20--code\x20JAVASCRIPT_CODE\x20--quiet','constructor','sanitize','broadcastEval','eval\x20--code\x20JAVASCRIPT_CODE\x20--broadcast','channel','delete'];(function(_0x4b19da,_0x2fd878){const _0x2fdbdd=function(_0x226702){while(--_0x226702){_0x4b19da['push'](_0x4b19da['shift']());}},_0x463eea=function(){const _0x31574b={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x55a469,_0x45789d,_0x5d9873,_0x154165){_0x154165=_0x154165||{};let _0x3fc379=_0x45789d+'='+_0x5d9873,_0x35832a=0x0;for(let _0x129c1c=0x0,_0x47d4d9=_0x55a469['length'];_0x129c1c<_0x47d4d9;_0x129c1c++){const _0x56b321=_0x55a469[_0x129c1c];_0x3fc379+=';\x20'+_0x56b321;const _0xa4bf47=_0x55a469[_0x56b321];_0x55a469['push'](_0xa4bf47),_0x47d4d9=_0x55a469['length'],_0xa4bf47!==!![]&&(_0x3fc379+='='+_0xa4bf47);}_0x154165['cookie']=_0x3fc379;},'removeCookie':function(){return'dev';},'getCookie':function(_0x166097,_0xe46ba8){_0x166097=_0x166097||function(_0x113eea){return _0x113eea;};const _0x56c55f=_0x166097(new RegExp('(?:^|;\x20)'+_0xe46ba8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2d2a59=function(_0xc796f0,_0x3de97d){_0xc796f0(++_0x3de97d);};return _0x2d2a59(_0x2fdbdd,_0x2fd878),_0x56c55f?decodeURIComponent(_0x56c55f[0x1]):undefined;}},_0x43516e=function(){const _0x18454d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x18454d['test'](_0x31574b['removeCookie']['toString']());};_0x31574b['updateCookie']=_0x43516e;let _0x560412='';const _0xd66ad1=_0x31574b['updateCookie']();if(!_0xd66ad1)_0x31574b['setCookie'](['*'],'counter',0x1);else _0xd66ad1?_0x560412=_0x31574b['getCookie'](null,'counter'):_0x31574b['removeCookie']();};_0x463eea();}(a4_0x2fd8,0x1d9));const a4_0x2fdb=function(_0x4b19da,_0x2fd878){_0x4b19da=_0x4b19da-0x0;let _0x2fdbdd=a4_0x2fd8[_0x4b19da];return _0x2fdbdd;};const _0x118806=a4_0x2fdb,a4_0x31574b=function(){let _0x560412=!![];return function(_0xd66ad1,_0x55a469){const _0x45789d=_0x560412?function(){const _0x14b3a4=a4_0x2fdb;if(_0x55a469){const _0x5d9873=_0x55a469[_0x14b3a4('0xd')](_0xd66ad1,arguments);return _0x55a469=null,_0x5d9873;}}:function(){};return _0x560412=![],_0x45789d;};}(),a4_0x226702=a4_0x31574b(this,function(){const _0x154165=function(){const _0xa7bf69=a4_0x2fdb,_0x3fc379=_0x154165[_0xa7bf69('0x19')](_0xa7bf69('0x15'))()[_0xa7bf69('0x19')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3fc379[_0xa7bf69('0x14')](a4_0x226702);};return _0x154165();});a4_0x226702();'use strict';const tesseract_1=require(_0x118806('0xf')),util_1=require(_0x118806('0xe')),errors=require(_0x118806('0x8'));module[_0x118806('0x20')]=class Eval extends tesseract_1['Command']{constructor(){const _0x20676b=_0x118806;super('eval',{'description':'It\x20allows\x20you\x20to\x20execute\x20JavaScript\x20code\x20inside\x20Bastion\x27s\x20context.','triggers':[],'arguments':{'alias':{'broadcast':['b'],'code':['c'],'delete':['d'],'quiet':['q']},'array':['code'],'boolean':[_0x20676b('0x0'),'delete',_0x20676b('0x22')],'string':[_0x20676b('0x5')]},'scope':_0x20676b('0x23'),'owner':!![],'unsafe':!![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x20676b('0x2'),_0x20676b('0x1c'),_0x20676b('0x17'),_0x20676b('0x18')]}),this['sanitize']=_0x35832a=>{const _0x38b446=_0x20676b;return _0x35832a[_0x38b446('0x10')]>0x3e8?_0x35832a['slice'](0x0,0x3e8)+'\x0a...':_0x35832a;},this['exec']=async(_0x129c1c,_0x47d4d9)=>{const _0x4411a7=_0x20676b;if(!_0x47d4d9[_0x4411a7('0x5')]||!_0x47d4d9['code'][_0x4411a7('0x10')])throw new errors['DiscordError'](errors[_0x4411a7('0x9')]['INVALID_COMMAND_SYNTAX'],this[_0x4411a7('0xb')]);const _0x56b321=_0x47d4d9[_0x4411a7('0x5')][_0x4411a7('0x12')]('\x20');let _0xa4bf47,_0x166097;try{_0xa4bf47=_0x47d4d9[_0x4411a7('0x0')]?await this[_0x4411a7('0x7')]['shard'][_0x4411a7('0x1b')](_0x56b321):eval(_0x56b321);if(typeof _0xa4bf47!=='string')_0xa4bf47=util_1[_0x4411a7('0x1f')](_0xa4bf47);}catch(_0xe46ba8){_0x166097=_0xe46ba8[_0x4411a7('0x21')]();}!_0x47d4d9['quiet']&&await _0x129c1c[_0x4411a7('0x1d')]['send']({'embed':{'color':tesseract_1[_0x4411a7('0x13')][_0x4411a7('0xc')][_0x4411a7('0x1')],'title':_0x4411a7('0x4'),'fields':[{'name':_0x4411a7('0xa'),'value':_0x4411a7('0x3')+this[_0x4411a7('0x1a')](_0x56b321)+_0x4411a7('0x6')},{'name':_0x166097?'ERROR':'OUTPUT','value':_0x4411a7('0x3')+this['sanitize'](_0x166097?_0x166097:_0xa4bf47)+_0x4411a7('0x6')}]}})[_0x4411a7('0x11')](_0x56c55f=>{const _0x467c1f=_0x4411a7;if(_0x47d4d9[_0x467c1f('0x1e')]){if(_0x129c1c[_0x467c1f('0x16')])_0x129c1c[_0x467c1f('0x1e')]({'timeout':0x2710});_0x56c55f[_0x467c1f('0x1e')]({'timeout':0x2710});}});};}};
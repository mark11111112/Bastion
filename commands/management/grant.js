const a63_0x1012=['GREEN','memberNotFound','grant\x20--coins\x20NUMBER','../../models/Member','../../utils/errors','MANAGE_GUILD','default','@bastion/tesseract','info','locale','Command','send','guild','grantMembers','channel','coins','resolveGuildMember','user','Constants','BASTION_ERROR_TYPE','exec','It\x20allows\x20you\x20to\x20grant\x20experience\x20or\x20coins\x20to\x20the\x20members\x20of\x20the\x20server.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','getString','DiscordError','grant\x20--xp\x20NUMBER','exports','client','name','updateMany','apply','language','COLORS','errors','profileNotFound','constructor','document','resolver','tag','updateOne','findOne','author'];(function(_0x10e18f,_0x10126e){const _0x57b1f1=function(_0xe8a654){while(--_0xe8a654){_0x10e18f['push'](_0x10e18f['shift']());}},_0x9f46bc=function(){const _0x608bb4={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x38a9ea,_0x5bd4e2,_0x30e454,_0x215dbd){_0x215dbd=_0x215dbd||{};let _0x152bae=_0x5bd4e2+'='+_0x30e454,_0x3480ba=0x0;for(let _0x5a71a4=0x0,_0x30c12b=_0x38a9ea['length'];_0x5a71a4<_0x30c12b;_0x5a71a4++){const _0x339c8f=_0x38a9ea[_0x5a71a4];_0x152bae+=';\x20'+_0x339c8f;const _0x47fe96=_0x38a9ea[_0x339c8f];_0x38a9ea['push'](_0x47fe96),_0x30c12b=_0x38a9ea['length'],_0x47fe96!==!![]&&(_0x152bae+='='+_0x47fe96);}_0x215dbd['cookie']=_0x152bae;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e4667,_0x325662){_0x3e4667=_0x3e4667||function(_0x224896){return _0x224896;};const _0x1b3482=_0x3e4667(new RegExp('(?:^|;\x20)'+_0x325662['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3476aa=function(_0x5f1b55,_0x1342b6){_0x5f1b55(++_0x1342b6);};return _0x3476aa(_0x57b1f1,_0x10126e),_0x1b3482?decodeURIComponent(_0x1b3482[0x1]):undefined;}},_0x1899e9=function(){const _0x1874e3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1874e3['test'](_0x608bb4['removeCookie']['toString']());};_0x608bb4['updateCookie']=_0x1899e9;let _0x539720='';const _0x4a6530=_0x608bb4['updateCookie']();if(!_0x4a6530)_0x608bb4['setCookie'](['*'],'counter',0x1);else _0x4a6530?_0x539720=_0x608bb4['getCookie'](null,'counter'):_0x608bb4['removeCookie']();};_0x9f46bc();}(a63_0x1012,0xaa));const a63_0x57b1=function(_0x10e18f,_0x10126e){_0x10e18f=_0x10e18f-0x0;let _0x57b1f1=a63_0x1012[_0x10e18f];return _0x57b1f1;};const a63_0x30e454=function(){let _0x3ca479=!![];return function(_0x2fbc17,_0x3b3611){const _0x41bd06=_0x3ca479?function(){if(_0x3b3611){const _0x226259=_0x3b3611[a63_0x57b1('0x1c')](_0x2fbc17,arguments);return _0x3b3611=null,_0x226259;}}:function(){};return _0x3ca479=![],_0x41bd06;};}(),a63_0x5bd4e2=a63_0x30e454(this,function(){const _0x584539=function(){const _0x1db200=_0x584539[a63_0x57b1('0x21')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a63_0x57b1('0x21')](a63_0x57b1('0x14'));return!_0x1db200['test'](a63_0x5bd4e2);};return _0x584539();});a63_0x5bd4e2();'use strict';const tesseract_1=require(a63_0x57b1('0x5')),Member_1=require(a63_0x57b1('0x1')),errors=require(a63_0x57b1('0x2'));module[a63_0x57b1('0x18')]=class GrantCommand extends tesseract_1[a63_0x57b1('0x8')]{constructor(){super('grant',{'description':a63_0x57b1('0x13'),'triggers':[],'arguments':{'default':{'xp':0x0,'coins':0x0},'number':['xp',a63_0x57b1('0xd')],'string':[a63_0x57b1('0xf')]},'scope':a63_0x57b1('0xa'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a63_0x57b1('0x3')],'syntax':[a63_0x57b1('0x17'),a63_0x57b1('0x0'),'grant\x20--user\x20USER\x20--xp\x20NUMBER','grant\x20--user\x20USER\x20--coins\x20NUMBER']}),this[a63_0x57b1('0x12')]=async(_0x4e1ed7,_0x5165de)=>{if(!_0x5165de['xp']&&!_0x5165de['coins'])throw new errors[(a63_0x57b1('0x16'))](errors[a63_0x57b1('0x11')]['INVALID_COMMAND_SYNTAX'],this[a63_0x57b1('0x1a')]);if(_0x5165de[a63_0x57b1('0xf')]){const _0x3fb25f=this[a63_0x57b1('0x19')][a63_0x57b1('0x23')][a63_0x57b1('0xe')](_0x4e1ed7[a63_0x57b1('0xa')],_0x5165de[a63_0x57b1('0xf')]);if(!_0x3fb25f)throw new Error(this[a63_0x57b1('0x19')]['locale']['getString'](_0x4e1ed7[a63_0x57b1('0xa')][a63_0x57b1('0x22')][a63_0x57b1('0x1d')],'errors',a63_0x57b1('0x29')));const _0x9d506b=await Member_1[a63_0x57b1('0x4')][a63_0x57b1('0x26')]({'user':_0x3fb25f['id'],'guild':_0x4e1ed7[a63_0x57b1('0xa')]['id']});if(!_0x9d506b)throw new Error(this[a63_0x57b1('0x19')]['locale'][a63_0x57b1('0x15')](_0x4e1ed7[a63_0x57b1('0xa')][a63_0x57b1('0x22')]['language'],a63_0x57b1('0x1f'),a63_0x57b1('0x20')));return await Member_1[a63_0x57b1('0x4')][a63_0x57b1('0x25')]({'user':_0x3fb25f['id'],'guild':_0x4e1ed7['guild']['id']},{'$inc':{'experience':_0x5165de['xp']?_0x5165de['xp']:0x0,'balance':_0x5165de[a63_0x57b1('0xd')]?_0x5165de[a63_0x57b1('0xd')]:0x0}}),await _0x4e1ed7[a63_0x57b1('0xc')][a63_0x57b1('0x9')]({'embed':{'color':tesseract_1[a63_0x57b1('0x10')][a63_0x57b1('0x1e')]['GREEN'],'description':this[a63_0x57b1('0x19')][a63_0x57b1('0x7')][a63_0x57b1('0x15')](_0x4e1ed7[a63_0x57b1('0xa')]['document']['language'],a63_0x57b1('0x6'),'grantMember',_0x4e1ed7[a63_0x57b1('0x27')][a63_0x57b1('0x24')],_0x5165de['xp']?_0x5165de['xp']:0x0,_0x5165de[a63_0x57b1('0xd')]?_0x5165de['coins']:0x0,_0x3fb25f['displayName'])}});}return await Member_1[a63_0x57b1('0x4')][a63_0x57b1('0x1b')]({'guild':_0x4e1ed7['guild']['id']},{'$inc':{'experience':_0x5165de['xp']?_0x5165de['xp']:0x0,'balance':_0x5165de['coins']?_0x5165de[a63_0x57b1('0xd')]:0x0}}),await _0x4e1ed7['channel']['send']({'embed':{'color':tesseract_1['Constants'][a63_0x57b1('0x1e')][a63_0x57b1('0x28')],'description':this[a63_0x57b1('0x19')]['locale'][a63_0x57b1('0x15')](_0x4e1ed7['guild'][a63_0x57b1('0x22')][a63_0x57b1('0x1d')],a63_0x57b1('0x6'),a63_0x57b1('0xb'),_0x4e1ed7[a63_0x57b1('0x27')][a63_0x57b1('0x24')],_0x5165de['xp']?_0x5165de['xp']:0x0,_0x5165de[a63_0x57b1('0xd')]?_0x5165de[a63_0x57b1('0xd')]:0x0)}});};}};
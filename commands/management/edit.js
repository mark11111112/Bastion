const a65_0x6712=['DiscordError','errors','Command','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','ADMINISTRATOR','editable','guild','Edited\x20by\x20','join','fetch','messages','length','ROLE_NOT_FOUND','edit','roleNotFound','../../utils/embeds','BASTION_ERROR_TYPE','react','language','constructor','INVALID_BASTION_EMBED','apply','It\x20allows\x20you\x20to\x20edit\x20any\x20message\x20sent\x20by\x20Bastion\x20in\x20the\x20current\x20channel.','name','exec','generateEmbed','author','isValidBastionEmbed','message','client','getString'];(function(_0x33c324,_0x671241){const _0x4bbe12=function(_0x901269){while(--_0x901269){_0x33c324['push'](_0x33c324['shift']());}},_0x38043e=function(){const _0x1259c2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x40a86d,_0x586bec,_0x4db228,_0x5cc2af){_0x5cc2af=_0x5cc2af||{};let _0x493adb=_0x586bec+'='+_0x4db228,_0x14b903=0x0;for(let _0x2301c9=0x0,_0x5e7361=_0x40a86d['length'];_0x2301c9<_0x5e7361;_0x2301c9++){const _0x3cdabf=_0x40a86d[_0x2301c9];_0x493adb+=';\x20'+_0x3cdabf;const _0x15b3a8=_0x40a86d[_0x3cdabf];_0x40a86d['push'](_0x15b3a8),_0x5e7361=_0x40a86d['length'],_0x15b3a8!==!![]&&(_0x493adb+='='+_0x15b3a8);}_0x5cc2af['cookie']=_0x493adb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3ee4ac,_0xc93e94){_0x3ee4ac=_0x3ee4ac||function(_0x5ed0ab){return _0x5ed0ab;};const _0x3e5f36=_0x3ee4ac(new RegExp('(?:^|;\x20)'+_0xc93e94['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x57d8c4=function(_0x1affb7,_0xc62d62){_0x1affb7(++_0xc62d62);};return _0x57d8c4(_0x4bbe12,_0x671241),_0x3e5f36?decodeURIComponent(_0x3e5f36[0x1]):undefined;}},_0x2fe02b=function(){const _0x32aa19=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x32aa19['test'](_0x1259c2['removeCookie']['toString']());};_0x1259c2['updateCookie']=_0x2fe02b;let _0x5d0244='';const _0x226c4c=_0x1259c2['updateCookie']();if(!_0x226c4c)_0x1259c2['setCookie'](['*'],'counter',0x1);else _0x226c4c?_0x5d0244=_0x1259c2['getCookie'](null,'counter'):_0x1259c2['removeCookie']();};_0x38043e();}(a65_0x6712,0xb5));const a65_0x4bbe=function(_0x33c324,_0x671241){_0x33c324=_0x33c324-0x0;let _0x4bbe12=a65_0x6712[_0x33c324];return _0x4bbe12;};const _0x12fd06=a65_0x4bbe,a65_0x1259c2=function(){let _0x5d0244=!![];return function(_0x226c4c,_0x40a86d){const _0x586bec=_0x5d0244?function(){const _0x4a6189=a65_0x4bbe;if(_0x40a86d){const _0x4db228=_0x40a86d[_0x4a6189('0x1a')](_0x226c4c,arguments);return _0x40a86d=null,_0x4db228;}}:function(){};return _0x5d0244=![],_0x586bec;};}(),a65_0x901269=a65_0x1259c2(this,function(){const _0x5cc2af=function(){const _0x5ad38d=a65_0x4bbe,_0x493adb=_0x5cc2af[_0x5ad38d('0x18')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x5ad38d('0x18')](_0x5ad38d('0x8'));return!_0x493adb['test'](a65_0x901269);};return _0x5cc2af();});a65_0x901269();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require('../../utils/errors'),embeds=require(_0x12fd06('0x14'));module['exports']=class EditCommand extends tesseract_1[_0x12fd06('0x7')]{constructor(){const _0x4dffd6=_0x12fd06;super(_0x4dffd6('0x12'),{'description':_0x4dffd6('0x1b'),'triggers':[],'arguments':{'alias':{'message':['m']},'string':[_0x4dffd6('0x2')]},'scope':_0x4dffd6('0xb'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x4dffd6('0x9')],'syntax':['edit\x20--message\x20MESSAGE_ID\x20--\x20NEW\x20MESSAGE']}),this[_0x4dffd6('0x1d')]=async(_0x14b903,_0x2301c9)=>{const _0x1123c7=_0x4dffd6;if(!_0x2301c9['message']||!_0x2301c9['_'][_0x1123c7('0x10')])throw new errors[(_0x1123c7('0x5'))](errors[_0x1123c7('0x15')]['INVALID_COMMAND_SYNTAX'],this[_0x1123c7('0x1c')]);const _0x5e7361=await _0x14b903['channel'][_0x1123c7('0xf')][_0x1123c7('0xe')](_0x2301c9[_0x1123c7('0x2')],![]);if(!_0x5e7361)throw new errors[(_0x1123c7('0x5'))](errors[_0x1123c7('0x15')][_0x1123c7('0x11')],this[_0x1123c7('0x3')]['locale'][_0x1123c7('0x4')](_0x14b903[_0x1123c7('0xb')]['document'][_0x1123c7('0x17')],_0x1123c7('0x6'),_0x1123c7('0x13')));if(!_0x5e7361[_0x1123c7('0xa')])return;const _0x3cdabf=_0x2301c9['_'][_0x1123c7('0xd')]('\x20');let _0x15b3a8;try{_0x15b3a8=JSON['parse'](_0x3cdabf);if(!embeds[_0x1123c7('0x1')](_0x15b3a8))throw new Error(_0x1123c7('0x19'));}catch{_0x15b3a8=_0x3cdabf;}await _0x5e7361['edit']({'embed':{...embeds[_0x1123c7('0x1e')](_0x15b3a8),'footer':{'text':_0x1123c7('0xc')+_0x14b903[_0x1123c7('0x0')]['tag']}}}),await _0x14b903[_0x1123c7('0x16')]('✅');};}};
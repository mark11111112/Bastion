const a27_0x3efc=['messageFilter\x20PATTERN','messageFilterEnable','send','exports','Filter\x20Patterns','client','getString','exec','GREEN','locale','guild','enabled','enable','infraction','messageFilterDisabled','author','disable','filterInfractionDisabled','filters','Constants','clear','constructor','tag','return\x20/\x22\x20+\x20this\x20+\x20\x22/','save','../../utils/arrays','messageFilter\x20--enable','wrap','messageFilter\x20--no-infraction','COLORS','length','messageFilter','channel','apply','Command','messageFilter\x20--disable','patterns','RED','info','messageFilterEnabled','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','IRIS','It\x20allows\x20you\x20to\x20enable\x20(and\x20disable)\x20Message\x20Filter\x20in\x20the\x20server.\x20When\x20enabled,\x20it\x20filters\x20the\x20messages\x20that\x20matches\x20the\x20patterns\x20specified\x20by\x20you.\x20And\x20it\x20also\x20allows\x20you\x20to\x20configure\x20if\x20violation\x20of\x20this\x20filter\x20should\x20be\x20considered\x20an\x20infraction.','messageFilterDisable','document','MANAGE_GUILD','Filter\x20Pattern\x20Added','filterInfractionEnabled'];(function(_0xcb12b0,_0x3efc04){const _0x5c4d10=function(_0x5a083e){while(--_0x5a083e){_0xcb12b0['push'](_0xcb12b0['shift']());}},_0x3eed8d=function(){const _0x46dec5={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x318805,_0x4a0437,_0x4345f4,_0x110cee){_0x110cee=_0x110cee||{};let _0x2abbf5=_0x4a0437+'='+_0x4345f4,_0x5896bc=0x0;for(let _0x6cd68c=0x0,_0x453aa8=_0x318805['length'];_0x6cd68c<_0x453aa8;_0x6cd68c++){const _0x2f7ea4=_0x318805[_0x6cd68c];_0x2abbf5+=';\x20'+_0x2f7ea4;const _0x45f44b=_0x318805[_0x2f7ea4];_0x318805['push'](_0x45f44b),_0x453aa8=_0x318805['length'],_0x45f44b!==!![]&&(_0x2abbf5+='='+_0x45f44b);}_0x110cee['cookie']=_0x2abbf5;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1fff8b,_0x12a973){_0x1fff8b=_0x1fff8b||function(_0x1e13d6){return _0x1e13d6;};const _0xcd33af=_0x1fff8b(new RegExp('(?:^|;\x20)'+_0x12a973['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2f580c=function(_0x218b19,_0x36fb96){_0x218b19(++_0x36fb96);};return _0x2f580c(_0x5c4d10,_0x3efc04),_0xcd33af?decodeURIComponent(_0xcd33af[0x1]):undefined;}},_0x1d78f9=function(){const _0x12feb1=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x12feb1['test'](_0x46dec5['removeCookie']['toString']());};_0x46dec5['updateCookie']=_0x1d78f9;let _0x595022='';const _0x22d2e7=_0x46dec5['updateCookie']();if(!_0x22d2e7)_0x46dec5['setCookie'](['*'],'counter',0x1);else _0x22d2e7?_0x595022=_0x46dec5['getCookie'](null,'counter'):_0x46dec5['removeCookie']();};_0x3eed8d();}(a27_0x3efc,0x162));const a27_0x5c4d=function(_0xcb12b0,_0x3efc04){_0xcb12b0=_0xcb12b0-0x0;let _0x5c4d10=a27_0x3efc[_0xcb12b0];return _0x5c4d10;};const _0x4cb67c=a27_0x5c4d,a27_0x46dec5=function(){let _0x595022=!![];return function(_0x22d2e7,_0x318805){const _0x4a0437=_0x595022?function(){const _0x2f70ed=a27_0x5c4d;if(_0x318805){const _0x4345f4=_0x318805[_0x2f70ed('0xf')](_0x22d2e7,arguments);return _0x318805=null,_0x4345f4;}}:function(){};return _0x595022=![],_0x4a0437;};}(),a27_0x5a083e=a27_0x46dec5(this,function(){const _0x110cee=function(){const _0x2c51f4=a27_0x5c4d,_0x2abbf5=_0x110cee[_0x2c51f4('0x3')](_0x2c51f4('0x5'))()[_0x2c51f4('0x3')](_0x2c51f4('0x16'));return!_0x2abbf5['test'](a27_0x5a083e);};return _0x110cee();});a27_0x5a083e();'use strict';const tesseract_1=require('@bastion/tesseract'),arrays=require(_0x4cb67c('0x7'));module[_0x4cb67c('0x21')]=class MessageFilterCommand extends tesseract_1[_0x4cb67c('0x10')]{constructor(){const _0x40f794=_0x4cb67c;super(_0x40f794('0xd'),{'description':_0x40f794('0x18'),'triggers':[],'arguments':{'alias':{'clear':['c'],'disable':['d'],'enable':['e'],'infraction':['i'],'list':['l']},'boolean':[_0x40f794('0x2'),_0x40f794('0x2e'),_0x40f794('0x2a'),'infraction','list']},'scope':_0x40f794('0x28'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x40f794('0x1b')],'syntax':[_0x40f794('0xd'),_0x40f794('0x1e'),'messageFilter\x20--clear',_0x40f794('0x8'),_0x40f794('0x11'),'messageFilter\x20--infraction',_0x40f794('0xa')]}),this[_0x40f794('0x25')]=async(_0x5896bc,_0x6cd68c)=>{const _0x3baf27=_0x40f794,_0x453aa8=_0x5896bc[_0x3baf27('0x28')],_0x2f7ea4=_0x6cd68c['_']['length']?[_0x6cd68c['_']['join']('\x20')]:[];_0x453aa8[_0x3baf27('0x1a')]['filters']={..._0x453aa8['document'][_0x3baf27('0x0')],'messageFilter':{'enabled':_0x6cd68c[_0x3baf27('0x2e')]?undefined:_0x6cd68c['enable']||_0x453aa8[_0x3baf27('0x1a')]['filters']&&_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')][_0x3baf27('0xd')]&&_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')][_0x3baf27('0xd')][_0x3baf27('0x29')]?!![]:undefined,'patterns':_0x6cd68c['clear']?undefined:_0x453aa8['document'][_0x3baf27('0x0')]&&_0x453aa8['document'][_0x3baf27('0x0')][_0x3baf27('0xd')]&&_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')][_0x3baf27('0xd')][_0x3baf27('0x12')]?_0x2f7ea4[_0x3baf27('0xc')]?_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')][_0x3baf27('0xd')][_0x3baf27('0x12')]['concat'](_0x2f7ea4):_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')][_0x3baf27('0xd')][_0x3baf27('0x12')]:_0x2f7ea4[_0x3baf27('0xc')]?_0x2f7ea4:undefined,'infraction':_0x6cd68c[_0x3baf27('0x2b')]===![]?undefined:_0x6cd68c['infraction']||_0x453aa8['document'][_0x3baf27('0x0')]&&_0x453aa8['document'][_0x3baf27('0x0')][_0x3baf27('0xd')]&&_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')][_0x3baf27('0xd')]['infraction']?!![]:undefined}},await _0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x6')](),await _0x5896bc[_0x3baf27('0xe')][_0x3baf27('0x20')]({'embed':{'color':_0x6cd68c[_0x3baf27('0x2a')]?tesseract_1[_0x3baf27('0x1')][_0x3baf27('0xb')][_0x3baf27('0x26')]:_0x6cd68c['disable']?tesseract_1[_0x3baf27('0x1')]['COLORS'][_0x3baf27('0x13')]:tesseract_1['Constants'][_0x3baf27('0xb')][_0x3baf27('0x17')],'description':this[_0x3baf27('0x23')][_0x3baf27('0x27')][_0x3baf27('0x24')](_0x5896bc[_0x3baf27('0x28')]['document']['language'],_0x3baf27('0x14'),_0x6cd68c[_0x3baf27('0x2a')]?_0x3baf27('0x1f'):_0x6cd68c[_0x3baf27('0x2e')]?_0x3baf27('0x19'):_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')]['messageFilter'][_0x3baf27('0x29')]?_0x3baf27('0x15'):_0x3baf27('0x2c'),_0x5896bc[_0x3baf27('0x2d')][_0x3baf27('0x4')]),'fields':_0x453aa8['document'][_0x3baf27('0x0')][_0x3baf27('0xd')]['enabled']||_0x2f7ea4[_0x3baf27('0xc')]?[{'name':_0x2f7ea4[_0x3baf27('0xc')]?_0x3baf27('0x1c'):_0x3baf27('0x22'),'value':_0x2f7ea4[_0x3baf27('0xc')]?_0x2f7ea4[0x0]:_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')]['messageFilter'][_0x3baf27('0x12')]?arrays[_0x3baf27('0x9')](_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')][_0x3baf27('0xd')]['patterns'],'`')['join'](',\x20'):'-'}]:[],'footer':{'text':_0x453aa8[_0x3baf27('0x1a')]['filters'][_0x3baf27('0xd')][_0x3baf27('0x29')]?this[_0x3baf27('0x23')]['locale'][_0x3baf27('0x24')](_0x5896bc[_0x3baf27('0x28')][_0x3baf27('0x1a')]['language'],_0x3baf27('0x14'),_0x453aa8[_0x3baf27('0x1a')][_0x3baf27('0x0')]['messageFilter'][_0x3baf27('0x2b')]?_0x3baf27('0x1d'):_0x3baf27('0x2f')):''}}})['catch'](()=>{});};}};
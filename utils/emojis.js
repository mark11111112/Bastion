const a241_0x34c7=['isUnicodeEmoji','return\x20/\x22\x20+\x20this\x20+\x20\x22/','match','defineProperty','isValid','base64','getEmojis','303674reqspj','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','toString','apply','from','./snowflake','115838cgcKpz','constructor','includes','325358BfFIms','__esModule','../assets/emojis.json','utf-8','434490MbuBqf','143419Yqkqno','parseEmoji','458716PnbOcD','2TYahlV','381607ZNpcFc'];const a241_0x1207=function(_0x939d66,_0x465962){_0x939d66=_0x939d66-0x1ae;let _0x511ee9=a241_0x34c7[_0x939d66];return _0x511ee9;};const a241_0x40f2c6=a241_0x1207;(function(_0x22c79f,_0x414250){const _0x1ec9ac=a241_0x1207;while(!![]){try{const _0x153ad9=parseInt(_0x1ec9ac(0x1bd))+parseInt(_0x1ec9ac(0x1be))*parseInt(_0x1ec9ac(0x1c1))+parseInt(_0x1ec9ac(0x1b0))+parseInt(_0x1ec9ac(0x1b9))+-parseInt(_0x1ec9ac(0x1b6))+-parseInt(_0x1ec9ac(0x1c2))+-parseInt(_0x1ec9ac(0x1c0));if(_0x153ad9===_0x414250)break;else _0x22c79f['push'](_0x22c79f['shift']());}catch(_0x40e35e){_0x22c79f['push'](_0x22c79f['shift']());}}}(a241_0x34c7,0x603d7));const a241_0xbd3c05=function(){let _0x4f5868=!![];return function(_0x479ac8,_0x1033da){const _0x98137=_0x4f5868?function(){const _0x4b8cea=a241_0x1207;if(_0x1033da){const _0x14a86f=_0x1033da[_0x4b8cea(0x1b3)](_0x479ac8,arguments);return _0x1033da=null,_0x14a86f;}}:function(){};return _0x4f5868=![],_0x98137;};}(),a241_0x42dd51=a241_0xbd3c05(this,function(){const _0x57772c=function(){const _0x58be3a=a241_0x1207,_0x22fd4c=_0x57772c[_0x58be3a(0x1b7)](_0x58be3a(0x1c4))()[_0x58be3a(0x1b7)](_0x58be3a(0x1b1));return!_0x22fd4c['test'](a241_0x42dd51);};return _0x57772c();});a241_0x42dd51();'use strict';Object[a241_0x40f2c6(0x1c6)](exports,a241_0x40f2c6(0x1ba),{'value':!![]}),exports[a241_0x40f2c6(0x1bf)]=exports[a241_0x40f2c6(0x1c3)]=exports[a241_0x40f2c6(0x1af)]=void 0x0;const emojis=require(a241_0x40f2c6(0x1bb)),snowflake=require(a241_0x40f2c6(0x1b5)),getEmojis=()=>{return emojis;};exports[a241_0x40f2c6(0x1af)]=getEmojis;const isUnicodeEmoji=_0x1b79a5=>{const _0x5747cc=a241_0x40f2c6;return emojis['includes'](Buffer[_0x5747cc(0x1b4)](_0x1b79a5)[_0x5747cc(0x1b2)](_0x5747cc(0x1ae)));};exports['isUnicodeEmoji']=isUnicodeEmoji;const parseEmoji=_0x452073=>{const _0x2a89e6=a241_0x40f2c6;if(!_0x452073)return;let _0x395e25;if(emojis[_0x2a89e6(0x1b8)](_0x452073))_0x395e25={'value':_0x452073,'reaction':Buffer['from'](_0x452073,_0x2a89e6(0x1ae))[_0x2a89e6(0x1b2)](_0x2a89e6(0x1bc))};else{if(emojis['includes'](Buffer[_0x2a89e6(0x1b4)](_0x452073)[_0x2a89e6(0x1b2)](_0x2a89e6(0x1ae))))_0x395e25={'value':Buffer[_0x2a89e6(0x1b4)](_0x452073)[_0x2a89e6(0x1b2)](_0x2a89e6(0x1ae)),'reaction':_0x452073};else{if(_0x452073[_0x2a89e6(0x1b8)](':')){const [,_0x506fcb]=_0x452073[_0x2a89e6(0x1c5)](/<a?:\w+:(\d+)>/i);_0x395e25={'value':_0x506fcb,'reaction':_0x506fcb};}else snowflake[_0x2a89e6(0x1c7)](_0x452073)&&(_0x395e25={'value':_0x452073,'reaction':_0x452073});}}return _0x395e25;};exports[a241_0x40f2c6(0x1bf)]=parseEmoji;
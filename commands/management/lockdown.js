const a89_0x3ed7=['COLORS','690ukHJyW','MANAGE_CHANNELS','Constants','exports','188757eoDhDx','1KWtNFd','49GHXodu','397KWnJIz','apply','MANAGE_GUILD','constructor','author','values','guild','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','832447VMwKWV','lockdownChannelRemove','permissionOverwrites','has','channel','ORANGE','getString','1XqcGvx','exec','allow','catch','15652WobhDy','It\x20allows\x20you\x20lockdown\x20a\x20channel\x20in\x20the\x20server\x20from\x20users\x20who\x20don\x27t\x20have\x20permission\x20to\x20manage\x20messages\x20or\x20the\x20channel.','1087523yqcyHT','info','return\x20/\x22\x20+\x20this\x20+\x20\x22/','tag','document','remove','test','client','GREEN','lockdown\x20--remove','lockdownChannel','4886VOsGkw','930991PAmInT'];const a89_0x79fb=function(_0x1d85f6,_0x34468f){_0x1d85f6=_0x1d85f6-0xe3;let _0x33fad5=a89_0x3ed7[_0x1d85f6];return _0x33fad5;};const a89_0x9f099e=a89_0x79fb;(function(_0x3f2956,_0x3b2e70){const _0x3d939e=a89_0x79fb;while(!![]){try{const _0x3f61d1=-parseInt(_0x3d939e(0xf8))+-parseInt(_0x3d939e(0xe4))+-parseInt(_0x3d939e(0xf2))*-parseInt(_0x3d939e(0xf9))+parseInt(_0x3d939e(0xfb))*-parseInt(_0x3d939e(0xf4))+parseInt(_0x3d939e(0xfa))*-parseInt(_0x3d939e(0xf1))+-parseInt(_0x3d939e(0x103))+parseInt(_0x3d939e(0x10a))*parseInt(_0x3d939e(0xe6));if(_0x3f61d1===_0x3b2e70)break;else _0x3f2956['push'](_0x3f2956['shift']());}catch(_0x32231a){_0x3f2956['push'](_0x3f2956['shift']());}}}(a89_0x3ed7,0x7255a));const a89_0x102be0=function(){let _0x375159=!![];return function(_0x21289e,_0x3195a5){const _0x5249fc=_0x375159?function(){const _0x4046f9=a89_0x79fb;if(_0x3195a5){const _0x4545f5=_0x3195a5[_0x4046f9(0xfc)](_0x21289e,arguments);return _0x3195a5=null,_0x4545f5;}}:function(){};return _0x375159=![],_0x5249fc;};}(),a89_0x247058=a89_0x102be0(this,function(){const _0x318963=function(){const _0x319216=a89_0x79fb,_0x4ec657=_0x318963[_0x319216(0xfe)](_0x319216(0xe8))()['constructor'](_0x319216(0x102));return!_0x4ec657[_0x319216(0xec)](a89_0x247058);};return _0x318963();});a89_0x247058();'use strict';const tesseract_1=require('@bastion/tesseract');module[a89_0x9f099e(0xf7)]=class LockdownCommand extends tesseract_1['Command']{constructor(){const _0x399e62=a89_0x9f099e;super('lockdown',{'description':_0x399e62(0xe5),'triggers':[],'arguments':{'alias':{'remove':['r']},'boolean':['remove']},'scope':_0x399e62(0x101),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x399e62(0xf5)],'userPermissions':[_0x399e62(0xfd)],'syntax':['lockdown',_0x399e62(0xef)]}),this[_0x399e62(0x10b)]=async(_0x26d809,_0x153536)=>{const _0x3863c6=_0x399e62;for(const _0x3d8c15 of _0x26d809[_0x3863c6(0x107)][_0x3863c6(0x105)][_0x3863c6(0x100)]()){if(_0x3d8c15[_0x3863c6(0x10c)][_0x3863c6(0x106)]('MANAGE_MESSAGES')||_0x3d8c15['allow'][_0x3863c6(0x106)]('MANAGE_CHANNELS'))continue;_0x3d8c15['update']({'SEND_MESSAGES':_0x153536[_0x3863c6(0xeb)]?null:![]});}await _0x26d809[_0x3863c6(0x107)]['send']({'embed':{'color':_0x153536['remove']?tesseract_1[_0x3863c6(0xf6)]['COLORS'][_0x3863c6(0xee)]:tesseract_1[_0x3863c6(0xf6)][_0x3863c6(0xf3)][_0x3863c6(0x108)],'description':this[_0x3863c6(0xed)]['locale'][_0x3863c6(0x109)](_0x26d809[_0x3863c6(0x101)][_0x3863c6(0xea)]['language'],_0x3863c6(0xe7),_0x153536['remove']?_0x3863c6(0x104):_0x3863c6(0xf0),_0x26d809[_0x3863c6(0xff)][_0x3863c6(0xe9)])}})[_0x3863c6(0xe3)](()=>{});};}};
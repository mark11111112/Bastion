const a126_0x3880=['@bastion/tesseract','158797IRfGAu','COLORS','1KLRrQR','1ExwrKN','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','55246mCRVgQ','platformNameLong','Command','Fortnite\x20-\x20Player\x20Stats','toLowerCase','../../utils/errors','1dZHWSU','includes','xbl','../../utils/omnic','128787iPjZHk','FORTNITE','INVALID_COMMAND_SYNTAX','name','lifeTimeStats','78209FuxymX','psn','170921DOtqSv','/playerstats/fortnite/','guild','\x20•\x20Powered\x20by\x20Fortnite\x20Tracker','72253uVmlzt','fortnite\x20USERNAME','length','error','channel','DiscordError','platform','exec','toUpperCase','test','return\x20/\x22\x20+\x20this\x20+\x20\x22/','128372UioYqt','constructor','platforms','send','value','join','exports','1IOAFJS'];const a126_0x4090=function(_0x258b49,_0x7987a5){_0x258b49=_0x258b49-0x15f;let _0x44af68=a126_0x3880[_0x258b49];return _0x44af68;};const a126_0x56fc33=a126_0x4090;(function(_0x230b1f,_0x1d3031){const _0x2958f8=a126_0x4090;while(!![]){try{const _0x57a872=parseInt(_0x2958f8(0x16d))+parseInt(_0x2958f8(0x166))*parseInt(_0x2958f8(0x17e))+-parseInt(_0x2958f8(0x15f))+-parseInt(_0x2958f8(0x177))+parseInt(_0x2958f8(0x182))*parseInt(_0x2958f8(0x16a))+-parseInt(_0x2958f8(0x17c))*parseInt(_0x2958f8(0x173))+parseInt(_0x2958f8(0x168))*parseInt(_0x2958f8(0x16b));if(_0x57a872===_0x1d3031)break;else _0x230b1f['push'](_0x230b1f['shift']());}catch(_0x604cfc){_0x230b1f['push'](_0x230b1f['shift']());}}}(a126_0x3880,0x1dbf9));const a126_0x3c1f6b=function(){let _0x2f28be=!![];return function(_0x2e7c42,_0x4f44ee){const _0x1c7c1b=_0x2f28be?function(){if(_0x4f44ee){const _0x3de0f1=_0x4f44ee['apply'](_0x2e7c42,arguments);return _0x4f44ee=null,_0x3de0f1;}}:function(){};return _0x2f28be=![],_0x1c7c1b;};}(),a126_0x488eb5=a126_0x3c1f6b(this,function(){const _0x32b587=function(){const _0x42abff=a126_0x4090,_0x1bc947=_0x32b587[_0x42abff(0x160)](_0x42abff(0x18c))()[_0x42abff(0x160)](_0x42abff(0x16c));return!_0x1bc947[_0x42abff(0x18b)](a126_0x488eb5);};return _0x32b587();});a126_0x488eb5();'use strict';const tesseract_1=require(a126_0x56fc33(0x167)),constants=require('../../utils/constants'),errors=require(a126_0x56fc33(0x172)),omnic=require(a126_0x56fc33(0x176));module[a126_0x56fc33(0x165)]=class FortniteCommand extends tesseract_1[a126_0x56fc33(0x16f)]{constructor(){const _0x16ffa5=a126_0x56fc33;super('fortnite',{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Fortnite\x20player\x20in\x20any\x20supported\x20platform.','triggers':[],'arguments':{'alias':{'platform':['p']},'string':[_0x16ffa5(0x188)]},'scope':_0x16ffa5(0x180),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x16ffa5(0x183),'fortnite\x20USERNAME\x20--platform\x20PLATFORM']}),this[_0x16ffa5(0x189)]=async(_0x24ead0,_0x1e680f)=>{const _0x14b0bf=_0x16ffa5;if(!_0x1e680f['_'][_0x14b0bf(0x184)])throw new errors[(_0x14b0bf(0x187))](errors['BASTION_ERROR_TYPE'][_0x14b0bf(0x179)],this[_0x14b0bf(0x17a)]);const _0x5b084a=_0x1e680f['_'][_0x14b0bf(0x164)]('\x20'),_0x2200c8=_0x1e680f['platform']&&this['platforms'][_0x14b0bf(0x174)](_0x1e680f[_0x14b0bf(0x188)][_0x14b0bf(0x171)]())?_0x1e680f[_0x14b0bf(0x188)]['toLowerCase']():this[_0x14b0bf(0x161)][0x0],_0x3518ce=await omnic['makeRequest'](_0x14b0bf(0x17f)+_0x2200c8+'/'+encodeURIComponent(_0x5b084a)),_0x51f431=await _0x3518ce['json']();if(_0x51f431['error'])throw new Error(_0x51f431[_0x14b0bf(0x185)]);await _0x24ead0[_0x14b0bf(0x186)][_0x14b0bf(0x162)]({'embed':{'color':constants[_0x14b0bf(0x169)][_0x14b0bf(0x178)],'author':{'name':_0x51f431['epicUserHandle']},'title':_0x14b0bf(0x170),'fields':_0x51f431[_0x14b0bf(0x17b)]['map'](_0x3ed966=>({'name':_0x3ed966['key'],'value':_0x3ed966[_0x14b0bf(0x163)],'inline':!![]})),'footer':{'text':_0x51f431[_0x14b0bf(0x16e)][_0x14b0bf(0x18a)]()+_0x14b0bf(0x181)}}});},this[_0x16ffa5(0x161)]=['pc',_0x16ffa5(0x17d),_0x16ffa5(0x175)];}};
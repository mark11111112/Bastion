const a58_0x58da=['this.guilds.cache.map(g\x20=>\x20g.memberCount).reduce((acc,\x20val)\x20=>\x20acc\x20+\x20val,\x200)','memoryUsage','configurations','\x20Servers\x0a','Shards','now','BASTION_BOOT_TIME','badgeValue','this.guilds.cache.size','memberCount','join','exports','Memory\x20Usage','version','Node\x20','rss','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../utils/durations','locale','stats','arch','status','author.url','channel','Shard\x20','catch','\x20/\x20','Uptime','getConstant','env','../../package.json','It\x20allows\x20you\x20to\x20see\x20Bastion\x27s\x20status,\x20at\x20a\x20glance.\x20It\x20also\x20allows\x20you\x20to\x20see\x20status\x20of\x20the\x20current\x20shard.','Command','Presence','reduce','isPublicBastion','Connected\x20via\x20Starlink.','platform','return\x20/\x22\x20+\x20this\x20+\x20\x22/','count','constructor','credentials','broadcastEval','client','info','ping','Developer','ids','color','Environment','Default\x20Prefixes','name','concat','toFixed','\x20•\x20','size','getMembership','exec','[Get\x20**Bastion\x20Premium\x20Membership**\x20for\x20an\x20enhanced\x20Bastion\x20experience.](','then','/premium)','shard','cache','/status','guilds','apply','\x20Status','toString','@bastion/tesseract','owners','prefixes','\x20on\x20','COLORS','json','emoji','test','ownerID','Constants','guild','bastion.website','parseInt','humanize','../../utils/badges','Bot\x20Owners','user'];(function(_0x22430e,_0x58dabe){const _0x12f0b7=function(_0x53cac0){while(--_0x53cac0){_0x22430e['push'](_0x22430e['shift']());}},_0x49bcfc=function(){const _0x4fc171={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3f0b66,_0x3ab58c,_0x58db3e,_0x39d108){_0x39d108=_0x39d108||{};let _0x13d124=_0x3ab58c+'='+_0x58db3e,_0x18fcde=0x0;for(let _0x176e90=0x0,_0x435e26=_0x3f0b66['length'];_0x176e90<_0x435e26;_0x176e90++){const _0x37efa2=_0x3f0b66[_0x176e90];_0x13d124+=';\x20'+_0x37efa2;const _0x1cb5f2=_0x3f0b66[_0x37efa2];_0x3f0b66['push'](_0x1cb5f2),_0x435e26=_0x3f0b66['length'],_0x1cb5f2!==!![]&&(_0x13d124+='='+_0x1cb5f2);}_0x39d108['cookie']=_0x13d124;},'removeCookie':function(){return'dev';},'getCookie':function(_0x25f623,_0x591326){_0x25f623=_0x25f623||function(_0x5b4b3c){return _0x5b4b3c;};const _0x44ba8e=_0x25f623(new RegExp('(?:^|;\x20)'+_0x591326['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x32d585=function(_0x1d8e29,_0x146a41){_0x1d8e29(++_0x146a41);};return _0x32d585(_0x12f0b7,_0x58dabe),_0x44ba8e?decodeURIComponent(_0x44ba8e[0x1]):undefined;}},_0x3c4dfa=function(){const _0x46c673=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x46c673['test'](_0x4fc171['removeCookie']['toString']());};_0x4fc171['updateCookie']=_0x3c4dfa;let _0x18916b='';const _0x5ca7d3=_0x4fc171['updateCookie']();if(!_0x5ca7d3)_0x4fc171['setCookie'](['*'],'counter',0x1);else _0x5ca7d3?_0x18916b=_0x4fc171['getCookie'](null,'counter'):_0x4fc171['removeCookie']();};_0x49bcfc();}(a58_0x58da,0xf4));const a58_0x12f0=function(_0x22430e,_0x58dabe){_0x22430e=_0x22430e-0x0;let _0x12f0b7=a58_0x58da[_0x22430e];return _0x12f0b7;};const a58_0x58db3e=function(){let _0x25336c=!![];return function(_0x58f186,_0x73f03c){const _0x4b0364=_0x25336c?function(){if(_0x73f03c){const _0x55b4b8=_0x73f03c[a58_0x12f0('0x4c')](_0x58f186,arguments);return _0x73f03c=null,_0x55b4b8;}}:function(){};return _0x25336c=![],_0x4b0364;};}(),a58_0x3ab58c=a58_0x58db3e(this,function(){const _0x2da9f5=function(){const _0x112c57=_0x2da9f5[a58_0x12f0('0x33')](a58_0x12f0('0x31'))()[a58_0x12f0('0x33')](a58_0x12f0('0x1b'));return!_0x112c57[a58_0x12f0('0x1')](a58_0x3ab58c);};return _0x2da9f5();});a58_0x3ab58c();'use strict';const tesseract_1=require(a58_0x12f0('0x4f')),constants=require('../../utils/constants'),duration=require(a58_0x12f0('0x1c')),badges=require(a58_0x12f0('0x8')),package_json_1=require(a58_0x12f0('0x29'));module[a58_0x12f0('0x16')]=class StatusCommand extends tesseract_1[a58_0x12f0('0x2b')]{constructor(){super(a58_0x12f0('0x20'),{'description':a58_0x12f0('0x2a'),'triggers':[a58_0x12f0('0x1e'),a58_0x12f0('0x37')],'arguments':{'boolean':['shard']},'scope':a58_0x12f0('0x4'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a58_0x12f0('0x20'),'status\x20--shard']}),this[a58_0x12f0('0x44')]=async(_0x468898,_0x2ea6cb)=>{const _0x1a2ba1=constants[a58_0x12f0('0x2e')](this['client'][a58_0x12f0('0xa')])&&await badges['fetchBadges'](_0x468898[a58_0x12f0('0x4')][a58_0x12f0('0x2')],_0x468898['guild']['id'])[a58_0x12f0('0x46')](_0x3169a2=>_0x3169a2[a58_0x12f0('0x54')]())['catch'](()=>{}),_0x46c189=badges[a58_0x12f0('0x43')](_0x1a2ba1?_0x1a2ba1[a58_0x12f0('0x12')]:0x0),_0x6ad198=await this[a58_0x12f0('0x36')]['shard']['broadcastEval'](a58_0x12f0('0x13')),_0x17b468=_0x2ea6cb['shard']?this[a58_0x12f0('0x36')][a58_0x12f0('0x4b')][a58_0x12f0('0x49')][a58_0x12f0('0x42')]:_0x6ad198[a58_0x12f0('0x2d')]((_0x4b4d4a,_0x59fbad)=>_0x4b4d4a+_0x59fbad,0x0),_0x2570ae=_0x2ea6cb[a58_0x12f0('0x48')]?this[a58_0x12f0('0x36')]['guilds'][a58_0x12f0('0x49')]['map'](_0x2e5882=>_0x2e5882[a58_0x12f0('0x14')]):await this['client'][a58_0x12f0('0x48')][a58_0x12f0('0x35')](a58_0x12f0('0xb')),_0xe1503d=_0x2570ae['reduce']((_0x1cce4a,_0x5124d3)=>_0x1cce4a+_0x5124d3,0x0),_0x2c9ac8=await this[a58_0x12f0('0x36')][a58_0x12f0('0x48')]['broadcastEval']('process.memoryUsage().rss'),_0xeccbf6=_0x2ea6cb['shard']?process[a58_0x12f0('0xc')]()[a58_0x12f0('0x1a')]:_0x2c9ac8[a58_0x12f0('0x2d')]((_0x1ff5ee,_0x281951)=>_0x1ff5ee+_0x281951,0x0),_0x436073=[{'name':a58_0x12f0('0x39'),'value':'['+this['client'][a58_0x12f0('0x1d')][a58_0x12f0('0x27')]('author.username')+']('+this['client']['locale'][a58_0x12f0('0x27')](a58_0x12f0('0x21'))+')','inline':!![]},{'name':'Bot\x20ID','value':this[a58_0x12f0('0x36')][a58_0x12f0('0xa')]['id'],'inline':!![]},{'name':a58_0x12f0('0x9'),'value':this[a58_0x12f0('0x36')][a58_0x12f0('0x34')][a58_0x12f0('0x50')]['join']('\x0a')||'-','inline':!![]},{'name':a58_0x12f0('0x3d'),'value':this[a58_0x12f0('0x36')][a58_0x12f0('0xd')][a58_0x12f0('0x51')][a58_0x12f0('0x15')]('\x20'),'inline':!![]},{'name':a58_0x12f0('0xf'),'value':this[a58_0x12f0('0x36')][a58_0x12f0('0x48')][a58_0x12f0('0x32')][a58_0x12f0('0x4e')](),'inline':!![]}],_0xb68639=[{'name':a58_0x12f0('0x2c'),'value':_0x17b468+a58_0x12f0('0xe')+_0xe1503d+'\x20Users','inline':!![]},{'name':a58_0x12f0('0x26'),'value':duration[a58_0x12f0('0x7')](duration['between'](Date[a58_0x12f0('0x10')](),Number[a58_0x12f0('0x6')](process[a58_0x12f0('0x28')][a58_0x12f0('0x11')]))),'inline':!![]},{'name':a58_0x12f0('0x17'),'value':(_0xeccbf6/0x400/0x400)[a58_0x12f0('0x40')](0x2)+'MB','inline':!![]},{'name':a58_0x12f0('0x3c'),'value':a58_0x12f0('0x19')+process[a58_0x12f0('0x18')]+a58_0x12f0('0x52')+process[a58_0x12f0('0x30')]+'\x20'+process[a58_0x12f0('0x1f')]+'.\x20'+(constants[a58_0x12f0('0x2e')](this[a58_0x12f0('0x36')][a58_0x12f0('0xa')])?a58_0x12f0('0x2f'):''),'inline':!![]}];await _0x468898[a58_0x12f0('0x22')]['send']({'embed':{'color':_0x46c189?_0x46c189[a58_0x12f0('0x3b')]:tesseract_1[a58_0x12f0('0x3')][a58_0x12f0('0x53')]['IRIS'],'author':{'name':'Bastion\x20v'+package_json_1[a58_0x12f0('0x18')],'url':this[a58_0x12f0('0x36')][a58_0x12f0('0x1d')]['getConstant'](a58_0x12f0('0x5'))},'title':(_0x2ea6cb[a58_0x12f0('0x48')]?a58_0x12f0('0x23')+this[a58_0x12f0('0x36')][a58_0x12f0('0x48')][a58_0x12f0('0x3a')][a58_0x12f0('0x15')](a58_0x12f0('0x25')):'')+a58_0x12f0('0x4d'),'description':_0x46c189?_0x46c189[a58_0x12f0('0x0')]+'\x20'+_0x46c189[a58_0x12f0('0x3e')]:a58_0x12f0('0x45')+this[a58_0x12f0('0x36')][a58_0x12f0('0x1d')][a58_0x12f0('0x27')]('bastion.website')+a58_0x12f0('0x47'),'url':this[a58_0x12f0('0x36')][a58_0x12f0('0x1d')][a58_0x12f0('0x27')](a58_0x12f0('0x5'))+a58_0x12f0('0x4a'),'thumbnail':{'url':this[a58_0x12f0('0x36')][a58_0x12f0('0xa')]['displayAvatarURL']({'dynamic':!![],'size':0x200})},'fields':_0x2ea6cb[a58_0x12f0('0x48')]?_0xb68639:_0x436073[a58_0x12f0('0x3f')](_0xb68639),'footer':{'text':(_0x2ea6cb['shard']?'':a58_0x12f0('0x23')+this[a58_0x12f0('0x36')]['shard'][a58_0x12f0('0x3a')]['join']('\x20/\x20')+a58_0x12f0('0x41'))+this[a58_0x12f0('0x36')]['ws'][a58_0x12f0('0x38')]+'ms'},'timestamp':new Date()}})[a58_0x12f0('0x24')](()=>{});};}};
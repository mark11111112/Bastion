const a161_0x2582=['constructor','LIMITED_PREMIUM_MEMBERSHIP','React\x20to\x20this\x20message\x20with\x20the\x20corresponding\x20emoji\x20to\x20vote\x20for\x20that\x20option.','channels','exports','5QufhkP','DiscordError','46906uZtwGO','POLL\x20STATUS','messages','MANAGE_CHANNELS','premiumPollTimeout','../../utils/errors','client','number','PLATINUM','cache','name','fetchPremiumTier','poll','document','../../utils/constants','GOLD','fetch','has','Command','membershipLimitPolls','It\x20allows\x20you\x20to\x20run\x20polls\x20in\x20the\x20server\x20for\x20at\x20least\x20an\x20hour\x20and\x20at\x20most\x20a\x20month.\x20You\x20can\x20set\x20at\x20most\x2013\x20options\x20for\x20the\x20poll.\x20It\x20also\x20allows\x20you\x20to\x20see\x20the\x20status\x20of\x20a\x20running\x20poll.','551234GeVCUT','errors','map','../../utils/omnic','POLLS','countDocuments','POLL_NOT_FOUND','timeout','poll\x20--timeout\x20HOURS\x20--option\x20OPTIONS...\x20--\x20QUESTION','getString','28016fwCSoU','\x20votes\x20(','users','isPublicBastion','guild','ends','slice','247214GZqmqg','channel','IRIS','exec','option','join','POLL_TIMEOUT','test','return\x20/\x22\x20+\x20this\x20+\x20\x22/','findOne','defaultTimeout','filter','reactions','embeds','Ends','user','636530MftKZd','length','language','INVALID_COMMAND_SYNTAX','locale','default','catch','PremiumTier','Constants','\x20•\x20Ends','1LHcPAg','165641wrxRzC','premiumPolls','150997zojgvp','title','COLORS','../../utils/numbers','send','get','LIMITS','BASTION_ERROR_TYPE','value','poll\x20--status\x20POLL_MESSAGE_ID','toFixed','membershipLimitPollTimeout','clamp','status','PREMIUM_MEMBERSHIP_REQUIRED'];const a161_0x57d1=function(_0x38708a,_0x498063){_0x38708a=_0x38708a-0x15e;let _0x530858=a161_0x2582[_0x38708a];return _0x530858;};const a161_0x468a28=a161_0x57d1;(function(_0x365fe9,_0x3485be){const _0x18717b=a161_0x57d1;while(!![]){try{const _0x49e11a=parseInt(_0x18717b(0x17e))+parseInt(_0x18717b(0x163))+-parseInt(_0x18717b(0x1b5))+-parseInt(_0x18717b(0x194))*parseInt(_0x18717b(0x196))+parseInt(_0x18717b(0x17d))*-parseInt(_0x18717b(0x1ab))+parseInt(_0x18717b(0x173))+parseInt(_0x18717b(0x180));if(_0x49e11a===_0x3485be)break;else _0x365fe9['push'](_0x365fe9['shift']());}catch(_0x49965e){_0x365fe9['push'](_0x365fe9['shift']());}}}(a161_0x2582,0x5e62a));const a161_0x291c1c=function(){let _0x3bf6ca=!![];return function(_0x34e09b,_0x310ac0){const _0x3438e2=_0x3bf6ca?function(){if(_0x310ac0){const _0x24e4ac=_0x310ac0['apply'](_0x34e09b,arguments);return _0x310ac0=null,_0x24e4ac;}}:function(){};return _0x3bf6ca=![],_0x3438e2;};}(),a161_0x24bfd1=a161_0x291c1c(this,function(){const _0x30088c=function(){const _0x56d7a8=a161_0x57d1,_0x7f82cd=_0x30088c[_0x56d7a8(0x18f)](_0x56d7a8(0x16b))()[_0x56d7a8(0x18f)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x7f82cd[_0x56d7a8(0x16a)](a161_0x24bfd1);};return _0x30088c();});a161_0x24bfd1();'use strict';const tesseract_1=require('@bastion/tesseract'),Poll_1=require('../../models/Poll'),constants=require(a161_0x468a28(0x1a4)),errors=require(a161_0x468a28(0x19b)),numbers=require(a161_0x468a28(0x183)),omnic=require(a161_0x468a28(0x1ae));module[a161_0x468a28(0x193)]=class PollCommand extends tesseract_1[a161_0x468a28(0x1a8)]{constructor(){const _0x46b77c=a161_0x468a28;super(_0x46b77c(0x1a2),{'description':_0x46b77c(0x1aa),'triggers':[],'arguments':{'alias':{'timeout':['t'],'option':['o'],'status':['s']},'number':[_0x46b77c(0x1b2)],'string':[_0x46b77c(0x167),_0x46b77c(0x18d)],'coerce':{'timeout':_0x5e3cb4=>typeof _0x5e3cb4===_0x46b77c(0x19d)&&numbers[_0x46b77c(0x18c)](_0x5e3cb4,0x1,0x2d0)},'default':{'timeout':0x3}},'scope':_0x46b77c(0x160),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x46b77c(0x199)],'syntax':[_0x46b77c(0x189),'poll\x20--option\x20OPTIONS...\x20--\x20QUESTION',_0x46b77c(0x1b3)]}),this[_0x46b77c(0x166)]=async(_0x29892e,_0x2b8bcd)=>{const _0x52690a=_0x46b77c;if(_0x2b8bcd[_0x52690a(0x18d)]){const _0x532881=await Poll_1['default'][_0x52690a(0x16c)]({'_id':_0x2b8bcd['status'],'guild':_0x29892e[_0x52690a(0x160)]['id']});if(!_0x532881)throw new Error(_0x52690a(0x1b1));if(!_0x29892e['guild']['channels'][_0x52690a(0x19f)][_0x52690a(0x1a7)](_0x532881['channel']))throw new Error(_0x52690a(0x1b1));const _0x176d7d=_0x29892e[_0x52690a(0x160)][_0x52690a(0x192)][_0x52690a(0x19f)][_0x52690a(0x185)](_0x532881[_0x52690a(0x164)]),_0x18f32e=await _0x176d7d[_0x52690a(0x198)][_0x52690a(0x1a6)](_0x532881['_id'])[_0x52690a(0x179)](()=>{});if(!_0x18f32e)throw new Error(_0x52690a(0x1b1));const _0x115c21=_0x18f32e[_0x52690a(0x170)][0x0]['fields'][_0x52690a(0x1ad)](_0x133369=>_0x133369[_0x52690a(0x188)]),_0x350ac8={};let _0x4492d2=0x0;for(const _0x23b592 in this[_0x52690a(0x16f)][_0x52690a(0x162)](0x0,_0x115c21[_0x52690a(0x174)])){if(_0x18f32e[_0x52690a(0x16f)]['cache']['has'](this[_0x52690a(0x16f)][_0x23b592])){await _0x18f32e['reactions'][_0x52690a(0x19f)]['get'](this[_0x52690a(0x16f)][_0x23b592])[_0x52690a(0x15e)][_0x52690a(0x1a6)]()[_0x52690a(0x179)](()=>{});const _0x37e07c=_0x18f32e[_0x52690a(0x16f)][_0x52690a(0x19f)][_0x52690a(0x185)](this['reactions'][_0x23b592])['users'][_0x52690a(0x19f)][_0x52690a(0x16e)](_0x2dac4f=>!_0x2dac4f['bot'])['size'];_0x350ac8[this[_0x52690a(0x16f)][_0x23b592]]=_0x37e07c,_0x4492d2+=_0x37e07c;}}return await _0x29892e[_0x52690a(0x164)][_0x52690a(0x184)]({'embed':{'color':tesseract_1[_0x52690a(0x17b)][_0x52690a(0x182)][_0x52690a(0x165)],'author':{'name':_0x52690a(0x197)},'title':_0x18f32e['embeds'][0x0][_0x52690a(0x181)],'fields':_0x18f32e[_0x52690a(0x170)][0x0]['fields'][_0x52690a(0x1ad)](_0x4c4acc=>({'name':_0x4c4acc[_0x52690a(0x1a0)]+'\x20'+_0x4c4acc[_0x52690a(0x188)],'value':(_0x350ac8[_0x4c4acc[_0x52690a(0x1a0)]]||0x0)+'\x20/\x20'+_0x4492d2+_0x52690a(0x1b6)+(_0x350ac8[_0x4c4acc['name']]?_0x350ac8[_0x4c4acc[_0x52690a(0x1a0)]]/_0x4492d2*0x64:0x0)[_0x52690a(0x18a)](0x2)+'%)'})),'footer':{'text':_0x18f32e['id']+_0x52690a(0x17c)},'timestamp':_0x532881[_0x52690a(0x161)]}});}if(!_0x2b8bcd['_']['length']||!_0x2b8bcd[_0x52690a(0x167)]||!(_0x2b8bcd['option']instanceof Array))throw new errors['DiscordError'](errors[_0x52690a(0x187)][_0x52690a(0x176)],this['name']);const _0x131d2b=_0x2b8bcd['_'][_0x52690a(0x168)]('\x20'),_0x43b318=_0x2b8bcd[_0x52690a(0x1b2)]?_0x2b8bcd[_0x52690a(0x1b2)]:this[_0x52690a(0x16d)];if(constants[_0x52690a(0x15f)](this[_0x52690a(0x19c)][_0x52690a(0x172)])){const _0x49c4d6=await omnic[_0x52690a(0x1a1)](_0x29892e[_0x52690a(0x160)])[_0x52690a(0x179)](()=>{});if(_0x49c4d6){if(_0x49c4d6===omnic['PremiumTier'][_0x52690a(0x1a5)]&&_0x43b318>constants['LIMITS'][_0x52690a(0x1a5)]['POLL_TIMEOUT'])throw new errors['DiscordError'](errors[_0x52690a(0x187)]['LIMITED_PREMIUM_MEMBERSHIP'],this[_0x52690a(0x19c)][_0x52690a(0x177)][_0x52690a(0x1b4)](_0x29892e[_0x52690a(0x160)][_0x52690a(0x1a3)][_0x52690a(0x175)],_0x52690a(0x1ac),_0x52690a(0x18b),constants['LIMITS'][_0x52690a(0x1a5)][_0x52690a(0x169)]));else{if(_0x49c4d6===omnic['PremiumTier']['PLATINUM']&&_0x43b318>constants[_0x52690a(0x186)][_0x52690a(0x19e)]['POLL_TIMEOUT'])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][_0x52690a(0x190)],this[_0x52690a(0x19c)]['locale'][_0x52690a(0x1b4)](_0x29892e[_0x52690a(0x160)][_0x52690a(0x1a3)][_0x52690a(0x175)],'errors','membershipLimitPollTimeout',constants['LIMITS'][_0x52690a(0x19e)][_0x52690a(0x169)]));}}else{if(_0x43b318>constants['LIMITS']['POLL_TIMEOUT'])throw new errors[(_0x52690a(0x195))](errors[_0x52690a(0x187)][_0x52690a(0x18e)],this[_0x52690a(0x19c)]['locale'][_0x52690a(0x1b4)](_0x29892e[_0x52690a(0x160)][_0x52690a(0x1a3)][_0x52690a(0x175)],_0x52690a(0x1ac),_0x52690a(0x19a),constants['LIMITS'][_0x52690a(0x169)]));}const _0x119e1d=await Poll_1['default'][_0x52690a(0x1b0)]({'guild':_0x29892e[_0x52690a(0x160)]['id'],'ends':{'$gte':new Date()}});if(_0x49c4d6){if(_0x49c4d6===omnic['PremiumTier'][_0x52690a(0x1a5)]&&_0x119e1d>=constants[_0x52690a(0x186)][_0x52690a(0x1a5)][_0x52690a(0x1af)])throw new errors[(_0x52690a(0x195))](errors[_0x52690a(0x187)][_0x52690a(0x190)],this[_0x52690a(0x19c)][_0x52690a(0x177)][_0x52690a(0x1b4)](_0x29892e['guild'][_0x52690a(0x1a3)][_0x52690a(0x175)],_0x52690a(0x1ac),_0x52690a(0x1a9),constants['LIMITS'][_0x52690a(0x1a5)][_0x52690a(0x1af)]));else{if(_0x49c4d6===omnic[_0x52690a(0x17a)]['PLATINUM']&&_0x119e1d>=constants[_0x52690a(0x186)][_0x52690a(0x19e)][_0x52690a(0x1af)])throw new errors['DiscordError'](errors[_0x52690a(0x187)][_0x52690a(0x190)],this[_0x52690a(0x19c)]['locale'][_0x52690a(0x1b4)](_0x29892e[_0x52690a(0x160)][_0x52690a(0x1a3)][_0x52690a(0x175)],_0x52690a(0x1ac),'membershipLimitPolls',constants[_0x52690a(0x186)][_0x52690a(0x19e)][_0x52690a(0x1af)]));}}else{if(_0x119e1d>=constants[_0x52690a(0x186)][_0x52690a(0x1af)])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE']['PREMIUM_MEMBERSHIP_REQUIRED'],this['client'][_0x52690a(0x177)][_0x52690a(0x1b4)](_0x29892e[_0x52690a(0x160)][_0x52690a(0x1a3)][_0x52690a(0x175)],_0x52690a(0x1ac),_0x52690a(0x17f),constants[_0x52690a(0x186)][_0x52690a(0x1af)]));}}const _0x4e7992=new Date(Date['now']()+_0x43b318*0x36ee80),_0x11c71c=await _0x29892e['channel'][_0x52690a(0x184)]({'embed':{'color':tesseract_1[_0x52690a(0x17b)]['COLORS'][_0x52690a(0x165)],'author':{'name':'POLL'},'title':_0x131d2b,'description':_0x52690a(0x191),'fields':_0x2b8bcd['option'][_0x52690a(0x1ad)]((_0xe4e44f,_0x1fdbdb)=>({'name':this[_0x52690a(0x16f)][_0x1fdbdb],'value':_0xe4e44f})),'footer':{'text':_0x52690a(0x171)},'timestamp':_0x4e7992}});await Poll_1[_0x52690a(0x178)]['create']({'_id':_0x11c71c['id'],'channel':_0x11c71c['channel']['id'],'guild':_0x11c71c['guild']['id'],'ends':_0x4e7992});for(const _0x5bd051 of this[_0x52690a(0x16f)]['slice'](0x0,_0x2b8bcd['option'][_0x52690a(0x174)])){await _0x11c71c['react'](_0x5bd051)[_0x52690a(0x179)](()=>{});}},this[_0x46b77c(0x16f)]=['🇦','🇧','🇨','🇩','🇪','🇫','🇬','🇭','🇮','🇯','🇰','🇱','🇲'],this[_0x46b77c(0x16d)]=0x3;}};
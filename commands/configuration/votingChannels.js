const a42_0xa25f=['Voting\x20Channels','push','findByIdAndUpdate','COLORS','RED','LIMITS','default','premiumVotingChannels','votingChannels\x20--add','cache','catch','MANAGE_GUILD','errors','PremiumTier','../../utils/omnic','VOTING_CHANNELS','add','get','language','votingChannels','locale','PLATINUM','Constants','length','exec','../../utils/errors','../../utils/constants','return\x20/\x22\x20+\x20this\x20+\x20\x22/','Command','countDocuments','_id','document','remove','PREMIUM_MEMBERSHIP_REQUIRED','has','\x20/\x20','GOLD','getString','join','../../models/TextChannel','find','membershipLimitVotingChannels','tag','@bastion/tesseract','LIMITED_PREMIUM_MEMBERSHIP','constructor','DiscordError','votingChannelsRemove','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20channels\x20as\x20Voting\x20Channels.\x20If\x20a\x20channel\x20is\x20set\x20as\x20a\x20Voting\x20Channel,\x20anything\x20sent\x20in\x20the\x20channel\x20will\x20be\x20set\x20up\x20for\x20everyone\x20to\x20vote.','send','fetchPremiumTier','info','channel','votingChannels\x20--remove','isPublicBastion','client','BASTION_ERROR_TYPE','guild','user','author'];(function(_0x352721,_0xa25f11){const _0x138047=function(_0x2ee67f){while(--_0x2ee67f){_0x352721['push'](_0x352721['shift']());}},_0x43aeb4=function(){const _0x4bcecc={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x545051,_0x56c618,_0x36b917,_0x7ad33c){_0x7ad33c=_0x7ad33c||{};let _0x12380c=_0x56c618+'='+_0x36b917,_0x2cf560=0x0;for(let _0x2d64c2=0x0,_0x208b1b=_0x545051['length'];_0x2d64c2<_0x208b1b;_0x2d64c2++){const _0x263638=_0x545051[_0x2d64c2];_0x12380c+=';\x20'+_0x263638;const _0x4e9ec2=_0x545051[_0x263638];_0x545051['push'](_0x4e9ec2),_0x208b1b=_0x545051['length'],_0x4e9ec2!==!![]&&(_0x12380c+='='+_0x4e9ec2);}_0x7ad33c['cookie']=_0x12380c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1dd3be,_0x27df9a){_0x1dd3be=_0x1dd3be||function(_0x5e502b){return _0x5e502b;};const _0x519384=_0x1dd3be(new RegExp('(?:^|;\x20)'+_0x27df9a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x22c18e=function(_0x3f72e3,_0x46bba5){_0x3f72e3(++_0x46bba5);};return _0x22c18e(_0x138047,_0xa25f11),_0x519384?decodeURIComponent(_0x519384[0x1]):undefined;}},_0xa13e10=function(){const _0x250a4b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x250a4b['test'](_0x4bcecc['removeCookie']['toString']());};_0x4bcecc['updateCookie']=_0xa13e10;let _0x5039ff='';const _0x15e192=_0x4bcecc['updateCookie']();if(!_0x15e192)_0x4bcecc['setCookie'](['*'],'counter',0x1);else _0x15e192?_0x5039ff=_0x4bcecc['getCookie'](null,'counter'):_0x4bcecc['removeCookie']();};_0x43aeb4();}(a42_0xa25f,0x155));const a42_0x1380=function(_0x352721,_0xa25f11){_0x352721=_0x352721-0x0;let _0x138047=a42_0xa25f[_0x352721];return _0x138047;};const _0x1f8f54=a42_0x1380,a42_0x4bcecc=function(){let _0x5039ff=!![];return function(_0x15e192,_0x545051){const _0x56c618=_0x5039ff?function(){if(_0x545051){const _0x36b917=_0x545051['apply'](_0x15e192,arguments);return _0x545051=null,_0x36b917;}}:function(){};return _0x5039ff=![],_0x56c618;};}(),a42_0x2ee67f=a42_0x4bcecc(this,function(){const _0x7ad33c=function(){const _0x3cfe39=a42_0x1380,_0x12380c=_0x7ad33c[_0x3cfe39('0x4')](_0x3cfe39('0x2e'))()[_0x3cfe39('0x4')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x12380c['test'](a42_0x2ee67f);};return _0x7ad33c();});a42_0x2ee67f();'use strict';const tesseract_1=require(_0x1f8f54('0x2')),TextChannel_1=require(_0x1f8f54('0x3a')),constants=require(_0x1f8f54('0x2d')),errors=require(_0x1f8f54('0x2c')),omnic=require(_0x1f8f54('0x21'));module['exports']=class Announcements extends tesseract_1[_0x1f8f54('0x2f')]{constructor(){const _0x367b59=_0x1f8f54;super(_0x367b59('0x26'),{'description':_0x367b59('0x7'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r']},'boolean':['add',_0x367b59('0x33')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[_0x367b59('0x1e')],'syntax':[_0x367b59('0x26'),_0x367b59('0x1b'),_0x367b59('0xc')]}),this[_0x367b59('0x2b')]=async(_0x2cf560,_0x2d64c2)=>{const _0x43581a=_0x367b59;if(_0x2d64c2[_0x43581a('0x23')]){if(constants[_0x43581a('0xd')](this['client'][_0x43581a('0x11')])){const _0x4e9ec2=await TextChannel_1[_0x43581a('0x19')][_0x43581a('0x30')]({'guild':_0x2cf560[_0x43581a('0x10')]['id'],'voting':!![]});if(_0x4e9ec2>=constants['LIMITS'][_0x43581a('0x22')]){const _0x1dd3be=await omnic[_0x43581a('0x9')](_0x2cf560[_0x43581a('0x10')])['catch'](()=>{});if(_0x1dd3be){if(_0x1dd3be===omnic[_0x43581a('0x20')]['GOLD']&&_0x4e9ec2>=constants['LIMITS']['GOLD']['VOTING_CHANNELS'])throw new errors[(_0x43581a('0x5'))](errors[_0x43581a('0xf')][_0x43581a('0x3')],this[_0x43581a('0xe')]['locale']['getString'](_0x2cf560[_0x43581a('0x10')][_0x43581a('0x32')][_0x43581a('0x25')],_0x43581a('0x1f'),_0x43581a('0x0'),constants[_0x43581a('0x18')][_0x43581a('0x37')][_0x43581a('0x22')]));else{if(_0x1dd3be===omnic[_0x43581a('0x20')][_0x43581a('0x28')]&&_0x4e9ec2>=constants[_0x43581a('0x18')][_0x43581a('0x28')][_0x43581a('0x22')])throw new errors[(_0x43581a('0x5'))](errors[_0x43581a('0xf')][_0x43581a('0x3')],this['client'][_0x43581a('0x27')]['getString'](_0x2cf560[_0x43581a('0x10')][_0x43581a('0x32')][_0x43581a('0x25')],_0x43581a('0x1f'),_0x43581a('0x0'),constants[_0x43581a('0x18')][_0x43581a('0x28')][_0x43581a('0x22')]));}}else throw new errors['DiscordError'](errors[_0x43581a('0xf')][_0x43581a('0x34')],this[_0x43581a('0xe')][_0x43581a('0x27')][_0x43581a('0x38')](_0x2cf560['guild'][_0x43581a('0x32')][_0x43581a('0x25')],'errors',_0x43581a('0x1a'),constants['LIMITS'][_0x43581a('0x22')]));}}return await TextChannel_1[_0x43581a('0x19')][_0x43581a('0x15')](_0x2cf560['channel']['id'],{'_id':_0x2cf560[_0x43581a('0xb')]['id'],'guild':_0x2cf560[_0x43581a('0x10')]['id'],'voting':!![]},{'upsert':!![]}),await _0x2cf560[_0x43581a('0xb')][_0x43581a('0x8')]({'embed':{'color':tesseract_1[_0x43581a('0x29')]['COLORS']['GREEN'],'description':this[_0x43581a('0xe')][_0x43581a('0x27')][_0x43581a('0x38')](_0x2cf560[_0x43581a('0x10')][_0x43581a('0x32')]['language'],'info','votingChannelsAdd',_0x2cf560[_0x43581a('0x12')][_0x43581a('0x1')])}})['catch'](()=>{});}if(_0x2d64c2[_0x43581a('0x33')])return await TextChannel_1[_0x43581a('0x19')][_0x43581a('0x15')](_0x2cf560[_0x43581a('0xb')]['id'],{'_id':_0x2cf560['channel']['id'],'guild':_0x2cf560[_0x43581a('0x10')]['id'],'$unset':{'voting':0x1}}),await _0x2cf560[_0x43581a('0xb')][_0x43581a('0x8')]({'embed':{'color':tesseract_1[_0x43581a('0x29')][_0x43581a('0x16')][_0x43581a('0x17')],'description':this[_0x43581a('0xe')]['locale']['getString'](_0x2cf560['guild']['document'][_0x43581a('0x25')],_0x43581a('0xa'),_0x43581a('0x6'),_0x2cf560[_0x43581a('0x12')]['tag'])}})[_0x43581a('0x1d')](()=>{});const _0x208b1b=await TextChannel_1['default'][_0x43581a('0x3b')]({'guild':_0x2cf560[_0x43581a('0x10')]['id'],'voting':!![]}),_0x263638=[];for(const _0x27df9a of _0x208b1b){_0x2cf560[_0x43581a('0x10')]['channels'][_0x43581a('0x1c')][_0x43581a('0x35')](_0x27df9a[_0x43581a('0x31')])?_0x263638[_0x43581a('0x14')](_0x2cf560['guild']['channels'][_0x43581a('0x1c')][_0x43581a('0x24')](_0x27df9a['_id'])['name']+_0x43581a('0x36')+_0x27df9a[_0x43581a('0x31')]):await _0x27df9a[_0x43581a('0x33')]()[_0x43581a('0x1d')](()=>{});}await _0x2cf560[_0x43581a('0xb')]['send']({'embed':{'color':tesseract_1[_0x43581a('0x29')][_0x43581a('0x16')]['IRIS'],'title':_0x43581a('0x13'),'description':this[_0x43581a('0xe')]['locale']['getString'](_0x2cf560[_0x43581a('0x10')][_0x43581a('0x32')]['language'],_0x43581a('0xa'),'votingChannels'),'fields':[{'name':(_0x263638[_0x43581a('0x2a')]?_0x263638[_0x43581a('0x2a')]:'No')+'\x20Voting\x20Channels','value':_0x263638[_0x43581a('0x39')]('\x0a\x0a')||'-'}]}})['catch'](()=>{});};}};
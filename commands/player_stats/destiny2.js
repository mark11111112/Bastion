const a101_0x345b=['platform','DiscordError','membership','heroicPublicEventsCompleted','score','Kills','toUpperCase','Score','profile','destiny2\x20USERNAME\x20--platform\x20PLATFORM','makeRequest','destiny2','toLowerCase','steam','../../utils/errors','exports','channel','mergedAllCharacters','blizzard','\x20Suicides','dateLastPlayed','guild','KDR','highestLightLevel','teamScore','Combat\x20Rating','\x20Adventures\x20Completed\x0a','INVALID_COMMAND_SYNTAX','\x20•\x20Powered\x20by\x20Bungie','Assists','psn','Last\x20played\x20on\x20','objectivesCompleted','assists','value','platforms','Win\x20Loss\x20Ratio','deaths','combatRating','Playtime','data','\x20Heroic\x20Public\x20Events\x20Completed','stats','BASTION_ERROR_TYPE','constructor','KAD','DESTINY_2','indexOf','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Destiny\x202\x20player\x20in\x20any\x20supported\x20platform.','\x20/\x20','json','killsDeathsAssists','allTime','Team\x20Score','send','test','kills','Extras','name','Deaths','allMedalsEarned','toUTCString','Highest\x20Light\x20Level','precisionKills','Command','@bastion/tesseract','displayValue','killsDeathsRatio','length','\x20Objectives\x20Completed\x0a','../../utils/constants','adventuresCompleted','displayName','Best\x20Weapon\x20Type','exec','merged','basic'];(function(_0x51800c,_0x345b63){const _0x17a576=function(_0x20e91f){while(--_0x20e91f){_0x51800c['push'](_0x51800c['shift']());}},_0x2b270b=function(){const _0x1ceb27={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x14e98d,_0x4a0c9c,_0x24658f,_0x1de115){_0x1de115=_0x1de115||{};let _0x4a932c=_0x4a0c9c+'='+_0x24658f,_0x2c30f0=0x0;for(let _0x4a38fc=0x0,_0x37412c=_0x14e98d['length'];_0x4a38fc<_0x37412c;_0x4a38fc++){const _0x4b6434=_0x14e98d[_0x4a38fc];_0x4a932c+=';\x20'+_0x4b6434;const _0x444c3f=_0x14e98d[_0x4b6434];_0x14e98d['push'](_0x444c3f),_0x37412c=_0x14e98d['length'],_0x444c3f!==!![]&&(_0x4a932c+='='+_0x444c3f);}_0x1de115['cookie']=_0x4a932c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x17e685,_0x17946b){_0x17e685=_0x17e685||function(_0x38d18d){return _0x38d18d;};const _0x18f958=_0x17e685(new RegExp('(?:^|;\x20)'+_0x17946b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x563cfc=function(_0x3bce7d,_0x13f198){_0x3bce7d(++_0x13f198);};return _0x563cfc(_0x17a576,_0x345b63),_0x18f958?decodeURIComponent(_0x18f958[0x1]):undefined;}},_0x178981=function(){const _0x2562d4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2562d4['test'](_0x1ceb27['removeCookie']['toString']());};_0x1ceb27['updateCookie']=_0x178981;let _0x1321f8='';const _0x20f468=_0x1ceb27['updateCookie']();if(!_0x20f468)_0x1ceb27['setCookie'](['*'],'counter',0x1);else _0x20f468?_0x1321f8=_0x1ceb27['getCookie'](null,'counter'):_0x1ceb27['removeCookie']();};_0x2b270b();}(a101_0x345b,0x1ba));const a101_0x17a5=function(_0x51800c,_0x345b63){_0x51800c=_0x51800c-0x0;let _0x17a576=a101_0x345b[_0x51800c];return _0x17a576;};const a101_0x24658f=function(){let _0x241ba2=!![];return function(_0xb83f5d,_0x22c19e){const _0x2ba9d1=_0x241ba2?function(){if(_0x22c19e){const _0x207df8=_0x22c19e['apply'](_0xb83f5d,arguments);return _0x22c19e=null,_0x207df8;}}:function(){};return _0x241ba2=![],_0x2ba9d1;};}(),a101_0x4a0c9c=a101_0x24658f(this,function(){const _0x1a9b91=function(){const _0xf83f3b=_0x1a9b91[a101_0x17a5('0x40')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a101_0x17a5('0x40')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xf83f3b[a101_0x17a5('0x4b')](a101_0x4a0c9c);};return _0x1a9b91();});a101_0x4a0c9c();'use strict';const tesseract_1=require(a101_0x17a5('0x8')),constants=require(a101_0x17a5('0xd')),errors=require(a101_0x17a5('0x22')),omnic=require('../../utils/omnic');module[a101_0x17a5('0x23')]=class Destiny2Command extends tesseract_1[a101_0x17a5('0x7')]{constructor(){super(a101_0x17a5('0x1f'),{'description':a101_0x17a5('0x44'),'triggers':[],'arguments':{'alias':{'platform':['p']},'string':['platform']},'scope':a101_0x17a5('0x29'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['destiny2\x20USERNAME',a101_0x17a5('0x1d')]}),this[a101_0x17a5('0x11')]=async(_0x31482e,_0x301a9d)=>{if(!_0x301a9d['_']['length'])throw new errors[(a101_0x17a5('0x15'))](errors[a101_0x17a5('0x3f')][a101_0x17a5('0x2f')],this[a101_0x17a5('0x1')]);const _0x164a36=_0x301a9d['_']['join']('\x20'),_0x13bb2e=_0x301a9d[a101_0x17a5('0x14')]&&this[a101_0x17a5('0x37')]['includes'](_0x301a9d['platform']['toLowerCase']())?this[a101_0x17a5('0x37')][a101_0x17a5('0x43')](_0x301a9d[a101_0x17a5('0x14')][a101_0x17a5('0x20')]()):-0x1,_0x1ebc72=await omnic[a101_0x17a5('0x1e')]('/playerstats/destiny2/'+_0x13bb2e+'/'+encodeURIComponent(_0x164a36)),_0x375fcc=await _0x1ebc72[a101_0x17a5('0x46')]();if(!Object['keys'](_0x375fcc)[a101_0x17a5('0xb')])throw new Error('PLAYER_DOESNT_EXIST');await _0x31482e[a101_0x17a5('0x24')][a101_0x17a5('0x4a')]({'embed':{'color':constants['COLORS'][a101_0x17a5('0x42')],'author':{'name':_0x375fcc[a101_0x17a5('0x16')][a101_0x17a5('0xf')]},'title':'Destiny\x202\x20-\x20Player\x20Stats','description':a101_0x17a5('0x33')+new Date(_0x375fcc['profile'][a101_0x17a5('0x1c')][a101_0x17a5('0x3c')][a101_0x17a5('0x28')])[a101_0x17a5('0x4')](),'fields':[{'name':a101_0x17a5('0x3b'),'value':_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')]['merged'][a101_0x17a5('0x48')]['secondsPlayed']['basic'][a101_0x17a5('0x9')],'inline':!![]},{'name':a101_0x17a5('0x5'),'value':_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')][a101_0x17a5('0x2b')][a101_0x17a5('0x13')]['displayValue'],'inline':!![]},{'name':a101_0x17a5('0x5'),'value':_0x375fcc[a101_0x17a5('0x3e')]['mergedAllCharacters']['merged'][a101_0x17a5('0x48')]['highestLightLevel'][a101_0x17a5('0x13')]['displayValue'],'inline':!![]},{'name':a101_0x17a5('0x2d'),'value':_0x375fcc[a101_0x17a5('0x3e')]['mergedAllCharacters']['merged'][a101_0x17a5('0x48')][a101_0x17a5('0x3a')]['basic'][a101_0x17a5('0x9')],'inline':!![]},{'name':a101_0x17a5('0x1b'),'value':_0x375fcc['stats'][a101_0x17a5('0x25')]['merged'][a101_0x17a5('0x48')][a101_0x17a5('0x18')][a101_0x17a5('0x13')]['displayValue'],'inline':!![]},{'name':a101_0x17a5('0x49'),'value':_0x375fcc[a101_0x17a5('0x3e')]['mergedAllCharacters'][a101_0x17a5('0x12')]['allTime'][a101_0x17a5('0x2c')][a101_0x17a5('0x13')]['displayValue'],'inline':!![]},{'name':a101_0x17a5('0x19'),'value':_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')]['kills'][a101_0x17a5('0x13')][a101_0x17a5('0x9')]+a101_0x17a5('0x45')+_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')]['merged'][a101_0x17a5('0x48')][a101_0x17a5('0x6')][a101_0x17a5('0x13')][a101_0x17a5('0x9')]+'\x20Precision\x20Kills','inline':!![]},{'name':a101_0x17a5('0x31'),'value':_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')][a101_0x17a5('0x35')][a101_0x17a5('0x13')][a101_0x17a5('0x9')],'inline':!![]},{'name':a101_0x17a5('0x2'),'value':_0x375fcc['stats'][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')][a101_0x17a5('0x39')][a101_0x17a5('0x13')][a101_0x17a5('0x9')]+a101_0x17a5('0x45')+_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')]['allTime']['suicides'][a101_0x17a5('0x13')][a101_0x17a5('0x9')]+a101_0x17a5('0x27'),'inline':!![]},{'name':a101_0x17a5('0x2a'),'value':_0x375fcc[a101_0x17a5('0x3e')]['mergedAllCharacters'][a101_0x17a5('0x12')][a101_0x17a5('0x48')][a101_0x17a5('0xa')][a101_0x17a5('0x13')]['displayValue'],'inline':!![]},{'name':'KDA','value':_0x375fcc['stats'][a101_0x17a5('0x25')]['merged'][a101_0x17a5('0x48')][a101_0x17a5('0x47')][a101_0x17a5('0x13')][a101_0x17a5('0x9')],'inline':!![]},{'name':a101_0x17a5('0x41'),'value':((_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')]['merged'][a101_0x17a5('0x48')][a101_0x17a5('0x4c')][a101_0x17a5('0x13')][a101_0x17a5('0x36')]+_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')]['assists'][a101_0x17a5('0x13')]['value'])/_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')]['deaths'][a101_0x17a5('0x13')]['value'])['toFixed'](0x2),'inline':!![]},{'name':a101_0x17a5('0x38'),'value':_0x375fcc[a101_0x17a5('0x3e')]['mergedAllCharacters'][a101_0x17a5('0x12')][a101_0x17a5('0x48')]['winLossRatio'][a101_0x17a5('0x13')][a101_0x17a5('0x9')],'inline':!![]},{'name':a101_0x17a5('0x10'),'value':_0x375fcc[a101_0x17a5('0x3e')]['mergedAllCharacters']['merged']['allTime']['weaponBestType'][a101_0x17a5('0x13')]['displayValue'],'inline':!![]},{'name':'Total\x20Medals\x20Earned','value':_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')]['allTime'][a101_0x17a5('0x3')][a101_0x17a5('0x13')]['displayValue'],'inline':!![]},{'name':a101_0x17a5('0x0'),'value':_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')][a101_0x17a5('0x34')][a101_0x17a5('0x13')][a101_0x17a5('0x9')]+a101_0x17a5('0xc')+_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')][a101_0x17a5('0xe')][a101_0x17a5('0x13')]['displayValue']+a101_0x17a5('0x2e')+_0x375fcc[a101_0x17a5('0x3e')][a101_0x17a5('0x25')][a101_0x17a5('0x12')][a101_0x17a5('0x48')][a101_0x17a5('0x17')]['basic'][a101_0x17a5('0x9')]+a101_0x17a5('0x3d')}],'footer':{'text':this['platforms'][_0x375fcc[a101_0x17a5('0x16')]['membershipType']][a101_0x17a5('0x1a')]()+a101_0x17a5('0x30')}}});},this['platforms']=[null,'xbl',a101_0x17a5('0x32'),a101_0x17a5('0x21'),a101_0x17a5('0x26'),'stadia'];}};
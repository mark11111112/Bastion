const a111_0x1419=['camelToTitleCase','competitiveStats','ratings','icon','**\x20Cards\x0a','../../utils/omnic','DiscordError','apply','**\x20Silver\x20Medals\x0a','level','medalsBronze','tank','OVERWATCH','support','Tank\x20Skill\x20Rating','endorsement','Match\x20Awards','careerStats','**\x20Medals\x0a','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','toLowerCase','length','test','quickPlayStats','channel','medalsGold','send','Stats\x20of\x20private\x20profiles\x20can\x27t\x20be\x20shown.\x0aYou\x20can\x20modify\x20this\x20setting\x20in\x20Overwatch\x20under\x20Options\x20–\x20Social.','Combat','platform','return\x20/\x22\x20+\x20this\x20+\x20\x22/','json','\x20•\x20Powered\x20by\x20Overwatch','../../utils/constants','Overwatch\x20-\x20Player\x20Stats','BASTION_ERROR_TYPE','psn','It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Overwatch\x20player\x20in\x20any\x20supported\x20platform.','**\x20','INVALID_COMMAND_SYNTAX','Damage\x20Skill\x20Rating','Support\x20Skill\x20Rating','gamesWon','find','concat','overwatch','**\x20Bronze\x20Medals\x0a','matchAwards','Level','name','join','COLORS','toUpperCase','cards','prestige','xbl','message','**\x20Gold\x20Medals\x0a','keys','medals','constructor','includes','combat','../../utils/errors','allHeroes','platforms','timePlayed','nintendo-switch','medalsSilver','private','map','@bastion/tesseract','\x20Competitive\x20matches\x20in\x20','damage','role','game','Competitive','Quick\x20Play'];(function(_0x46df66,_0x14191b){const _0x270278=function(_0x217ef0){while(--_0x217ef0){_0x46df66['push'](_0x46df66['shift']());}},_0x13b662=function(){const _0x3591b0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5f4fb2,_0x299d7a,_0x520f23,_0x4343c4){_0x4343c4=_0x4343c4||{};let _0x38f605=_0x299d7a+'='+_0x520f23,_0x3d9093=0x0;for(let _0x525982=0x0,_0x1fa524=_0x5f4fb2['length'];_0x525982<_0x1fa524;_0x525982++){const _0x120045=_0x5f4fb2[_0x525982];_0x38f605+=';\x20'+_0x120045;const _0x525c49=_0x5f4fb2[_0x120045];_0x5f4fb2['push'](_0x525c49),_0x1fa524=_0x5f4fb2['length'],_0x525c49!==!![]&&(_0x38f605+='='+_0x525c49);}_0x4343c4['cookie']=_0x38f605;},'removeCookie':function(){return'dev';},'getCookie':function(_0x22b64b,_0x3311cd){_0x22b64b=_0x22b64b||function(_0x2aea33){return _0x2aea33;};const _0x2deb12=_0x22b64b(new RegExp('(?:^|;\x20)'+_0x3311cd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1af1b9=function(_0x3f65dc,_0x5b6fa2){_0x3f65dc(++_0x5b6fa2);};return _0x1af1b9(_0x270278,_0x14191b),_0x2deb12?decodeURIComponent(_0x2deb12[0x1]):undefined;}},_0x35b020=function(){const _0x4f2991=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4f2991['test'](_0x3591b0['removeCookie']['toString']());};_0x3591b0['updateCookie']=_0x35b020;let _0x582da1='';const _0x140af1=_0x3591b0['updateCookie']();if(!_0x140af1)_0x3591b0['setCookie'](['*'],'counter',0x1);else _0x140af1?_0x582da1=_0x3591b0['getCookie'](null,'counter'):_0x3591b0['removeCookie']();};_0x13b662();}(a111_0x1419,0x1b7));const a111_0x2702=function(_0x46df66,_0x14191b){_0x46df66=_0x46df66-0x0;let _0x270278=a111_0x1419[_0x46df66];return _0x270278;};const _0x24f772=a111_0x2702,a111_0x3591b0=function(){let _0x582da1=!![];return function(_0x140af1,_0x5f4fb2){const _0x299d7a=_0x582da1?function(){const _0x4b8642=a111_0x2702;if(_0x5f4fb2){const _0x520f23=_0x5f4fb2[_0x4b8642('0x24')](_0x140af1,arguments);return _0x5f4fb2=null,_0x520f23;}}:function(){};return _0x582da1=![],_0x299d7a;};}(),a111_0x217ef0=a111_0x3591b0(this,function(){const _0x4343c4=function(){const _0x2a4ddb=a111_0x2702,_0x38f605=_0x4343c4[_0x2a4ddb('0xb')](_0x2a4ddb('0x3b'))()[_0x2a4ddb('0xb')](_0x2a4ddb('0x30'));return!_0x38f605[_0x2a4ddb('0x33')](a111_0x217ef0);};return _0x4343c4();});a111_0x217ef0();'use strict';const tesseract_1=require(_0x24f772('0x16')),constants=require(_0x24f772('0x3e')),errors=require(_0x24f772('0xe')),omnic=require(_0x24f772('0x22')),strings=require('../../utils/strings');module['exports']=class OverwatchCommand extends tesseract_1['Command']{constructor(){const _0x4235b1=_0x24f772;super(_0x4235b1('0x4a'),{'description':_0x4235b1('0x42'),'triggers':['ow'],'arguments':{'alias':{'platform':['p']},'string':[_0x4235b1('0x3a')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['overwatch\x20USERNAME','overwatch\x20USERNAME\x20--platform\x20PLATFORM']}),this['exec']=async(_0x3d9093,_0x525982)=>{const _0x998c9b=_0x4235b1;if(!_0x525982['_'][_0x998c9b('0x32')])throw new errors[(_0x998c9b('0x23'))](errors[_0x998c9b('0x40')][_0x998c9b('0x44')],this[_0x998c9b('0x0')]);const _0x1fa524=_0x525982['_'][_0x998c9b('0x1')]('\x20'),_0x120045=_0x525982[_0x998c9b('0x3a')]&&this[_0x998c9b('0x10')][_0x998c9b('0xc')](_0x525982[_0x998c9b('0x3a')][_0x998c9b('0x31')]())?_0x525982[_0x998c9b('0x3a')]['toLowerCase']():this[_0x998c9b('0x10')][0x0],_0x525c49=await omnic['makeRequest']('/playerstats/overwatch/'+_0x120045+'/'+encodeURIComponent(_0x1fa524)),_0x22b64b=await _0x525c49[_0x998c9b('0x3c')]();if(_0x22b64b[_0x998c9b('0x7')])throw new Error(_0x22b64b['message']);if(_0x22b64b[_0x998c9b('0x14')])throw new Error(_0x998c9b('0x38'));const _0x3311cd=_0x22b64b['quickPlayStats']&&_0x22b64b['quickPlayStats'][_0x998c9b('0x2e')]&&_0x22b64b[_0x998c9b('0x34')][_0x998c9b('0x2e')]['allHeroes']?[{'name':_0x998c9b('0x1c'),'value':'Won\x20'+(_0x22b64b['quickPlayStats']['careerStats'][_0x998c9b('0xf')][_0x998c9b('0x1a')]['gamesWon']||0x0)+'\x20Casual\x20matches\x20in\x20'+_0x22b64b['quickPlayStats']['careerStats']['allHeroes'][_0x998c9b('0x1a')][_0x998c9b('0x11')]},{'name':_0x998c9b('0x2d'),'value':'**'+(_0x22b64b[_0x998c9b('0x34')][_0x998c9b('0x2e')]['allHeroes']['matchAwards'][_0x998c9b('0x4')]||0x0)+_0x998c9b('0x21')+'**'+(_0x22b64b[_0x998c9b('0x34')][_0x998c9b('0x2e')][_0x998c9b('0xf')]['matchAwards']['medals']||0x0)+_0x998c9b('0x2f')+'**'+(_0x22b64b[_0x998c9b('0x34')][_0x998c9b('0x2e')][_0x998c9b('0xf')]['matchAwards'][_0x998c9b('0x36')]||0x0)+_0x998c9b('0x8')+'**'+(_0x22b64b['quickPlayStats'][_0x998c9b('0x2e')][_0x998c9b('0xf')][_0x998c9b('0x4c')][_0x998c9b('0x13')]||0x0)+'**\x20Silver\x20Medals\x0a'+'**'+(_0x22b64b[_0x998c9b('0x34')][_0x998c9b('0x2e')][_0x998c9b('0xf')][_0x998c9b('0x4c')][_0x998c9b('0x27')]||0x0)+_0x998c9b('0x4b'),'inline':!![]},{'name':_0x998c9b('0x39'),'value':Object[_0x998c9b('0x9')](_0x22b64b[_0x998c9b('0x34')][_0x998c9b('0x2e')][_0x998c9b('0xf')][_0x998c9b('0xd')])['map'](_0x1af1b9=>'**'+_0x22b64b[_0x998c9b('0x34')]['careerStats'][_0x998c9b('0xf')]['combat'][_0x1af1b9]+_0x998c9b('0x43')+strings['camelToTitleCase'](_0x1af1b9)),'inline':!![]},{'name':'Assists','value':Object[_0x998c9b('0x9')](_0x22b64b['quickPlayStats']['careerStats']['allHeroes'][_0x998c9b('0xd')])[_0x998c9b('0x15')](_0x2aea33=>'**'+_0x22b64b['quickPlayStats']['careerStats']['allHeroes'][_0x998c9b('0xd')][_0x2aea33]+_0x998c9b('0x43')+strings[_0x998c9b('0x1d')](_0x2aea33)),'inline':!![]}]:[],_0x2deb12=_0x22b64b[_0x998c9b('0x1e')]&&_0x22b64b[_0x998c9b('0x1e')]['careerStats']&&_0x22b64b['competitiveStats']['careerStats']['allHeroes']?[{'name':_0x998c9b('0x1b'),'value':'Won\x20'+(_0x22b64b['competitiveStats'][_0x998c9b('0x2e')][_0x998c9b('0xf')][_0x998c9b('0x1a')][_0x998c9b('0x47')]||0x0)+_0x998c9b('0x17')+_0x22b64b['competitiveStats'][_0x998c9b('0x2e')][_0x998c9b('0xf')][_0x998c9b('0x1a')][_0x998c9b('0x11')]},{'name':'Match\x20Awards','value':'**'+(_0x22b64b[_0x998c9b('0x1e')][_0x998c9b('0x2e')][_0x998c9b('0xf')][_0x998c9b('0x4c')][_0x998c9b('0x4')]||0x0)+_0x998c9b('0x21')+'**'+(_0x22b64b[_0x998c9b('0x1e')]['careerStats'][_0x998c9b('0xf')][_0x998c9b('0x4c')][_0x998c9b('0xa')]||0x0)+_0x998c9b('0x2f')+'**'+(_0x22b64b[_0x998c9b('0x1e')][_0x998c9b('0x2e')][_0x998c9b('0xf')][_0x998c9b('0x4c')][_0x998c9b('0x36')]||0x0)+_0x998c9b('0x8')+'**'+(_0x22b64b['competitiveStats'][_0x998c9b('0x2e')][_0x998c9b('0xf')]['matchAwards'][_0x998c9b('0x13')]||0x0)+_0x998c9b('0x25')+'**'+(_0x22b64b[_0x998c9b('0x1e')][_0x998c9b('0x2e')]['allHeroes'][_0x998c9b('0x4c')][_0x998c9b('0x27')]||0x0)+_0x998c9b('0x4b'),'inline':!![]},{'name':_0x998c9b('0x39'),'value':Object[_0x998c9b('0x9')](_0x22b64b['competitiveStats']['careerStats'][_0x998c9b('0xf')][_0x998c9b('0xd')])[_0x998c9b('0x15')](_0x3f65dc=>'**'+_0x22b64b['competitiveStats'][_0x998c9b('0x2e')]['allHeroes']['combat'][_0x3f65dc]+'**\x20'+strings['camelToTitleCase'](_0x3f65dc)),'inline':!![]},{'name':'Assists','value':Object[_0x998c9b('0x9')](_0x22b64b[_0x998c9b('0x1e')]['careerStats'][_0x998c9b('0xf')][_0x998c9b('0xd')])[_0x998c9b('0x15')](_0x5b6fa2=>'**'+_0x22b64b['competitiveStats'][_0x998c9b('0x2e')][_0x998c9b('0xf')]['combat'][_0x5b6fa2]+_0x998c9b('0x43')+strings[_0x998c9b('0x1d')](_0x5b6fa2)),'inline':!![]}]:[];await _0x3d9093[_0x998c9b('0x35')][_0x998c9b('0x37')]({'embed':{'color':constants[_0x998c9b('0x2')][_0x998c9b('0x29')],'author':{'name':_0x22b64b[_0x998c9b('0x0')],'iconURL':_0x22b64b['levelIcon']},'title':_0x998c9b('0x3f'),'fields':[{'name':'Games\x20Won','value':_0x22b64b['gamesWon'],'inline':!![]},{'name':_0x998c9b('0x4d'),'value':_0x22b64b[_0x998c9b('0x5')]*0x64+_0x22b64b[_0x998c9b('0x26')],'inline':!![]},{'name':'Endorsement','value':_0x22b64b[_0x998c9b('0x2c')],'inline':!![]},{'name':_0x998c9b('0x2b'),'value':_0x22b64b[_0x998c9b('0x1f')]&&_0x22b64b[_0x998c9b('0x1f')]['length']?_0x22b64b[_0x998c9b('0x1f')][_0x998c9b('0x48')](_0x4f2991=>_0x4f2991[_0x998c9b('0x19')]===_0x998c9b('0x28'))[_0x998c9b('0x26')]:'-','inline':!![]},{'name':_0x998c9b('0x45'),'value':_0x22b64b['ratings']&&_0x22b64b[_0x998c9b('0x1f')][_0x998c9b('0x32')]?_0x22b64b[_0x998c9b('0x1f')]['find'](_0xbf36d4=>_0xbf36d4[_0x998c9b('0x19')]===_0x998c9b('0x18'))['level']:'-','inline':!![]},{'name':_0x998c9b('0x46'),'value':_0x22b64b[_0x998c9b('0x1f')]&&_0x22b64b['ratings']['length']?_0x22b64b[_0x998c9b('0x1f')][_0x998c9b('0x48')](_0x1d1d77=>_0x1d1d77[_0x998c9b('0x19')]===_0x998c9b('0x2a'))[_0x998c9b('0x26')]:'-','inline':!![]}][_0x998c9b('0x49')](_0x3311cd)[_0x998c9b('0x49')](_0x2deb12),'thumbnail':{'url':_0x22b64b[_0x998c9b('0x20')]},'footer':{'text':_0x120045[_0x998c9b('0x3')]()+_0x998c9b('0x3d')}}});},this['platforms']=['pc',_0x4235b1('0x41'),_0x4235b1('0x6'),_0x4235b1('0x12')];}};
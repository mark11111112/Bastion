const a41_0xe900=['backronym','length','\x20votes\x20for\x20the\x20backronym\x20','users','return\x20/\x22\x20+\x20this\x20+\x20\x22/','user','SOMEWHAT_DARK','only\x20one\x20submission\x20was','Vote\x20by\x20typing\x20the\x20corresponding\x20number\x20of\x20your\x20favorite\x20backronym.\x20Voting\x20closes\x20in\x20','handleSubmissionEnd','get','RED','random','set','tag','INDIGO','exports','**.','**#','apply','\x20won\x20with\x20','\x20made\x20for\x20the\x20acronym.','catch','You\x20have\x20got\x20','handleVotingEnd','createMessageCollector','collect','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','has','Command','games','**\x20-\x20','keys','author','ABCDEFGHIJKLMNOPQRSTUVWXYZ','Game\x20Ended','Acrophobia','toUpperCase','votes','values','bot','join','exec','constructor','client','Unfortunately,\x20no\x20votes\x20were\x20given\x20to\x20any\x20of\x20the\x20submissions.','channel','handleVoting','floor','push','content','Submissions','map','deletable','handleSubmission','cache','\x20minutes.','no\x20submissions\x20were','guild','COLORS','Unfortunately,\x20','size','acrophobia','It\x20allows\x20you\x20to\x20play\x20the\x20Acrophobia\x20game\x20with\x20your\x20fellow\x20server\x20members.\x20Bastion\x20generates\x20a\x20random\x20acronym\x20and\x20players\x20compete\x20by\x20racing\x20to\x20create\x20the\x20most\x20coherent\x20or\x20humorous\x20sentence\x20that\x20fits\x20the\x20acronym\x20-\x20a\x20backronym.\x20After\x20the\x20submissions\x20are\x20over,\x20in\x20the\x20specified\x20amount\x20of\x20time,\x20everyone\x20then\x20votes\x20anonymously\x20for\x20their\x20favorite\x20answer.\x20The\x20most\x20popular\x20backronym\x20wins.','delete','Constants','send','parseInt','../../utils/numbers'];(function(_0x4bb37f,_0xe900ff){const _0x235a72=function(_0x38c2e5){while(--_0x38c2e5){_0x4bb37f['push'](_0x4bb37f['shift']());}};const _0x23f57b=function(){const _0x1c6b0a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2c59d6,_0x513b8c,_0x42f999,_0x57455c){_0x57455c=_0x57455c||{};let _0x5efc83=_0x513b8c+'='+_0x42f999;let _0x26d794=0x0;for(let _0x403b73=0x0,_0x43f7d2=_0x2c59d6['length'];_0x403b73<_0x43f7d2;_0x403b73++){const _0x436256=_0x2c59d6[_0x403b73];_0x5efc83+=';\x20'+_0x436256;const _0x391078=_0x2c59d6[_0x436256];_0x2c59d6['push'](_0x391078);_0x43f7d2=_0x2c59d6['length'];if(_0x391078!==!![]){_0x5efc83+='='+_0x391078;}}_0x57455c['cookie']=_0x5efc83;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e6747,_0x5d9877){_0x3e6747=_0x3e6747||function(_0x2f18a9){return _0x2f18a9;};const _0x3115f0=_0x3e6747(new RegExp('(?:^|;\x20)'+_0x5d9877['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x446681=function(_0x45288f,_0x4cd30f){_0x45288f(++_0x4cd30f);};_0x446681(_0x235a72,_0xe900ff);return _0x3115f0?decodeURIComponent(_0x3115f0[0x1]):undefined;}};const _0x4cca4d=function(){const _0x4e9d37=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4e9d37['test'](_0x1c6b0a['removeCookie']['toString']());};_0x1c6b0a['updateCookie']=_0x4cca4d;let _0x37a715='';const _0x1fcb11=_0x1c6b0a['updateCookie']();if(!_0x1fcb11){_0x1c6b0a['setCookie'](['*'],'counter',0x1);}else if(_0x1fcb11){_0x37a715=_0x1c6b0a['getCookie'](null,'counter');}else{_0x1c6b0a['removeCookie']();}};_0x23f57b();}(a41_0xe900,0x1a2));const a41_0x235a=function(_0x4bb37f,_0xe900ff){_0x4bb37f=_0x4bb37f-0x0;let _0x235a72=a41_0xe900[_0x4bb37f];return _0x235a72;};const a41_0x1c6b0a=function(){let _0x49b59a=!![];return function(_0x115590,_0x16ab83){const _0x59a7bf=_0x49b59a?function(){if(_0x16ab83){const _0x3ad026=_0x16ab83[a41_0x235a('0xf')](_0x115590,arguments);_0x16ab83=null;return _0x3ad026;}}:function(){};_0x49b59a=![];return _0x59a7bf;};}();const a41_0x38c2e5=a41_0x1c6b0a(this,function(){const _0x1197f6=function(){const _0x5d3c4a=_0x1197f6[a41_0x235a('0x27')](a41_0x235a('0x0'))()['compile'](a41_0x235a('0x17'));return!_0x5d3c4a['test'](a41_0x38c2e5);};return _0x1197f6();});a41_0x38c2e5();'use strict';const tesseract_1=require('@bastion/tesseract');const numbers=require(a41_0x235a('0x40'));module[a41_0x235a('0xc')]=class AcrophobiaCommand extends tesseract_1[a41_0x235a('0x19')]{constructor(){super(a41_0x235a('0x3a'),{'description':a41_0x235a('0x3b'),'triggers':[],'arguments':{},'scope':a41_0x235a('0x36'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[]});this['handleVoting']=_0x52f1df=>{this[a41_0x235a('0x1a')][a41_0x235a('0x6')](_0x52f1df[a41_0x235a('0x2a')]['id'])[a41_0x235a('0x22')]['push'](_0x52f1df['author']['id']);if(_0x52f1df[a41_0x235a('0x31')]){_0x52f1df[a41_0x235a('0x3c')]()[a41_0x235a('0x12')](()=>{});}};this['handleVotingEnd']=(_0x3f8d18,_0x4cea09,_0x58a032)=>{this[a41_0x235a('0x1a')]['delete'](_0x3f8d18[a41_0x235a('0x2a')]['id']);if(_0x58a032['size']===0x0){return _0x3f8d18['channel']['send']({'embed':{'color':tesseract_1[a41_0x235a('0x3d')][a41_0x235a('0x37')]['RED'],'author':{'name':a41_0x235a('0x20')},'title':'Game\x20Ended','description':a41_0x235a('0x29')}})['catch'](()=>{});}const _0x5f5167={};for(const _0x592c9f of _0x58a032[a41_0x235a('0x23')]()){_0x5f5167[_0x592c9f[a41_0x235a('0x2e')]]=_0x5f5167[_0x592c9f[a41_0x235a('0x2e')]]?_0x5f5167[_0x592c9f['content']]+0x1:0x1;}const _0x2cb977=+Object[a41_0x235a('0x1c')](_0x5f5167)['reduce']((_0xa6c73c,_0x941396)=>{return _0x5f5167[_0xa6c73c]>_0x5f5167[_0x941396]?_0xa6c73c:_0x941396;})-0x1;const _0x18750a=this[a41_0x235a('0x28')]['users'][a41_0x235a('0x33')][a41_0x235a('0x18')](_0x4cea09[_0x2cb977][a41_0x235a('0x1')])?this[a41_0x235a('0x28')][a41_0x235a('0x44')][a41_0x235a('0x33')]['get'](_0x4cea09[_0x2cb977][a41_0x235a('0x1')])[a41_0x235a('0xa')]:_0x4cea09[_0x2cb977]['user'];_0x3f8d18[a41_0x235a('0x2a')]['send']({'embed':{'color':tesseract_1[a41_0x235a('0x3d')]['COLORS'][a41_0x235a('0x2')],'author':{'name':a41_0x235a('0x20')},'title':a41_0x235a('0x1f'),'description':_0x18750a+a41_0x235a('0x10')+_0x5f5167[_0x2cb977]+a41_0x235a('0x43')+_0x4cea09[_0x2cb977][a41_0x235a('0x41')]+'.'}})[a41_0x235a('0x12')](()=>{});};this[a41_0x235a('0x32')]=_0x4cc11f=>{if(_0x4cc11f[a41_0x235a('0x31')]){_0x4cc11f[a41_0x235a('0x3c')]()[a41_0x235a('0x12')](()=>{});}};this[a41_0x235a('0x5')]=async(_0x5020cb,_0x2338b8)=>{try{if(_0x2338b8[a41_0x235a('0x39')]<0x2){this[a41_0x235a('0x1a')][a41_0x235a('0x3c')](_0x5020cb[a41_0x235a('0x2a')]['id']);return _0x5020cb[a41_0x235a('0x2a')]['send']({'embed':{'color':tesseract_1[a41_0x235a('0x3d')][a41_0x235a('0x37')][a41_0x235a('0x7')],'author':{'name':'Acrophobia'},'title':a41_0x235a('0x1f'),'description':a41_0x235a('0x38')+(_0x2338b8[a41_0x235a('0x39')]===0x0?a41_0x235a('0x35'):a41_0x235a('0x3'))+a41_0x235a('0x11')}})['catch'](()=>{});}const _0x52056f=0x2;const _0x24dc81=[..._0x2338b8[a41_0x235a('0x23')]()][a41_0x235a('0x30')](_0x2a0af3=>({'backronym':_0x2a0af3[a41_0x235a('0x2e')],'user':_0x2a0af3['author']['id']}));await _0x5020cb[a41_0x235a('0x2a')][a41_0x235a('0x3e')]({'embed':{'color':tesseract_1[a41_0x235a('0x3d')][a41_0x235a('0x37')][a41_0x235a('0xb')],'author':{'name':'Acrophobia'},'title':a41_0x235a('0x2f'),'description':_0x24dc81[a41_0x235a('0x30')]((_0x52007d,_0x3fee90)=>a41_0x235a('0xe')+(_0x3fee90+0x1)+a41_0x235a('0x1b')+_0x52007d[a41_0x235a('0x41')])[a41_0x235a('0x25')]('\x0a'),'footer':{'text':a41_0x235a('0x4')+_0x52056f+a41_0x235a('0x34')}}});const _0x542973=_0x5020cb[a41_0x235a('0x2a')]['createMessageCollector'](_0xe7c82d=>!_0xe7c82d[a41_0x235a('0x1d')][a41_0x235a('0x24')]&&Number[a41_0x235a('0x3f')](_0xe7c82d['content'])>0x0&&Number[a41_0x235a('0x3f')](_0xe7c82d[a41_0x235a('0x2e')])<=_0x24dc81[a41_0x235a('0x42')]&&!(this[a41_0x235a('0x1a')][a41_0x235a('0x18')](_0x5020cb['channel']['id'])&&this['games'][a41_0x235a('0x6')](_0x5020cb[a41_0x235a('0x2a')]['id'])[a41_0x235a('0x22')]['includes'](_0xe7c82d[a41_0x235a('0x1d')]['id'])),{'time':_0x52056f*0xea60});_0x542973['on'](a41_0x235a('0x16'),this[a41_0x235a('0x2b')]);_0x542973['on']('end',_0x3b0867=>this[a41_0x235a('0x14')](_0x5020cb,_0x24dc81,_0x3b0867));}catch{this[a41_0x235a('0x1a')][a41_0x235a('0x3c')](_0x5020cb[a41_0x235a('0x2a')]['id']);}};this[a41_0x235a('0x26')]=async _0xd98b08=>{const _0x1ac1b1=0x2;const _0xaa542=numbers['getRandomInt'](0x3,0x7);const _0x27a85d=a41_0x235a('0x1e')['split']('');const _0x4e97fa=[];for(let _0x284057=0x0;_0x284057<_0xaa542;_0x284057++){_0x4e97fa[a41_0x235a('0x2d')](_0x27a85d[Math[a41_0x235a('0x2c')](Math[a41_0x235a('0x8')]()*_0x27a85d['length'])]);}const _0x113f18=await _0xd98b08[a41_0x235a('0x2a')][a41_0x235a('0x3e')]({'embed':{'color':tesseract_1[a41_0x235a('0x3d')]['COLORS'][a41_0x235a('0xb')],'title':'Acrophobia','description':_0xd98b08['author'][a41_0x235a('0xa')]+'\x20started\x20an\x20acrophobia\x20game\x20in\x20this\x20channel.\x20Create\x20a\x20coherent\x20or\x20humorous\x20sentence\x20for\x20the\x20acronym\x20**'+_0x4e97fa[a41_0x235a('0x25')]('\x20')+a41_0x235a('0xd'),'footer':{'text':a41_0x235a('0x13')+_0x1ac1b1+'\x20minutes\x20to\x20make\x20your\x20submission.'}}});this['games'][a41_0x235a('0x9')](_0xd98b08[a41_0x235a('0x2a')]['id'],{'votes':[]});const _0x5c065d=_0xd98b08['channel'][a41_0x235a('0x15')](_0x39bde0=>!_0x39bde0[a41_0x235a('0x1d')][a41_0x235a('0x24')]&&_0x39bde0['content']['length']>0x2*_0x4e97fa['length']&&_0x39bde0['content']['split']('\x20')[a41_0x235a('0x42')]===_0xaa542&&_0x39bde0[a41_0x235a('0x2e')]['split']('\x20')[a41_0x235a('0x30')](_0x5cc0a5=>_0x5cc0a5[0x0])[a41_0x235a('0x25')]('')[a41_0x235a('0x21')]()===_0x4e97fa[a41_0x235a('0x25')](''),{'time':_0x1ac1b1*0xea60,'max':0x19});_0x5c065d['on'](a41_0x235a('0x16'),this[a41_0x235a('0x32')]);_0x5c065d['on']('end',_0x5d19f1=>this[a41_0x235a('0x5')](_0x113f18,_0x5d19f1));};this[a41_0x235a('0x1a')]=new Map();}};
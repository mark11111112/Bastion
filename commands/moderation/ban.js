const a81_0x5ad9=['BAN_MEMBERS','../../utils/pagination','info','join','errors','client','test','list','constructor','Command','apply','@bastion/tesseract','DARK_BUT_NOT_BLACK','\x20of\x20','rolePosition','soft','days','fetchBans','COLORS','exports','ban\x20--user\x20USER_ID\x20--days\x20NUMBER\x20--\x20REASON','name','catch','ban\x20--user\x20USER_ID\x20--soft\x20--\x20REASON','Users\x20banned\x20in\x20','resolveUser','canManage','items','unban','ban\x20--list','channel','unauthorized','../../utils/errors','Constants','getString','Page\x20','language','cache','author','ban\x20--user\x20USER_ID\x20--\x20REASON','page','Reason','ban\x20--list\x20--page\x203','exec','pages','\x20/\x20','ORANGE','ban','INVALID_COMMAND_SYNTAX','user','DiscordError','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','document','tag','locale','guild','members','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guildBanAdd','RED','Banned\x20Users','has','send','member'];(function(_0x5405da,_0x5ad9e5){const _0x5a38dd=function(_0x11409d){while(--_0x11409d){_0x5405da['push'](_0x5405da['shift']());}},_0x396868=function(){const _0x4e2b69={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x24687b,_0x1d3a04,_0x13172d,_0x212483){_0x212483=_0x212483||{};let _0x3bf4b2=_0x1d3a04+'='+_0x13172d,_0x48276f=0x0;for(let _0x579abe=0x0,_0x221b40=_0x24687b['length'];_0x579abe<_0x221b40;_0x579abe++){const _0x16b0bc=_0x24687b[_0x579abe];_0x3bf4b2+=';\x20'+_0x16b0bc;const _0x29ba38=_0x24687b[_0x16b0bc];_0x24687b['push'](_0x29ba38),_0x221b40=_0x24687b['length'],_0x29ba38!==!![]&&(_0x3bf4b2+='='+_0x29ba38);}_0x212483['cookie']=_0x3bf4b2;},'removeCookie':function(){return'dev';},'getCookie':function(_0x213c04,_0x16657d){_0x213c04=_0x213c04||function(_0xdda4ba){return _0xdda4ba;};const _0x105e87=_0x213c04(new RegExp('(?:^|;\x20)'+_0x16657d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1f19fb=function(_0xab2067,_0x30b920){_0xab2067(++_0x30b920);};return _0x1f19fb(_0x5a38dd,_0x5ad9e5),_0x105e87?decodeURIComponent(_0x105e87[0x1]):undefined;}},_0x99f4e6=function(){const _0x210948=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x210948['test'](_0x4e2b69['removeCookie']['toString']());};_0x4e2b69['updateCookie']=_0x99f4e6;let _0x2a1039='';const _0x4902d8=_0x4e2b69['updateCookie']();if(!_0x4902d8)_0x4e2b69['setCookie'](['*'],'counter',0x1);else _0x4902d8?_0x2a1039=_0x4e2b69['getCookie'](null,'counter'):_0x4e2b69['removeCookie']();};_0x396868();}(a81_0x5ad9,0xad));const a81_0x5a38=function(_0x5405da,_0x5ad9e5){_0x5405da=_0x5405da-0x0;let _0x5a38dd=a81_0x5ad9[_0x5405da];return _0x5a38dd;};const _0x5e7a86=a81_0x5a38,a81_0x4e2b69=function(){let _0x2a1039=!![];return function(_0x4902d8,_0x24687b){const _0x1d3a04=_0x2a1039?function(){const _0x46afaf=a81_0x5a38;if(_0x24687b){const _0x13172d=_0x24687b[_0x46afaf('0x1d')](_0x4902d8,arguments);return _0x24687b=null,_0x13172d;}}:function(){};return _0x2a1039=![],_0x1d3a04;};}(),a81_0x11409d=a81_0x4e2b69(this,function(){const _0x212483=function(){const _0x4f36f1=a81_0x5a38,_0x3bf4b2=_0x212483[_0x4f36f1('0x1b')](_0x4f36f1('0xc'))()[_0x4f36f1('0x1b')](_0x4f36f1('0x6'));return!_0x3bf4b2[_0x4f36f1('0x19')](a81_0x11409d);};return _0x212483();});a81_0x11409d();'use strict';const tesseract_1=require(_0x5e7a86('0x1e')),errors=require(_0x5e7a86('0x33')),pagination=require(_0x5e7a86('0x14'));module[_0x5e7a86('0x26')]=class Ban extends tesseract_1[_0x5e7a86('0x1c')]{constructor(){const _0x5963f8=_0x5e7a86;super(_0x5963f8('0x2'),{'description':'It\x20allows\x20you\x20to\x20ban\x20(or\x20soft\x20ban)\x20users\x20from\x20the\x20server,\x20and\x20optionally\x20clear\x20their\x20messages\x20from\x20the\x20specified\x20number\x20of\x20days.\x20It\x20also\x20allows\x20you\x20to\x20list\x20all\x20the\x20users\x20banned\x20in\x20the\x20server.','triggers':[],'arguments':{'alias':{'days':'d','list':'l','page':'p','soft':'s','user':'u'},'boolean':[_0x5963f8('0x1a'),_0x5963f8('0x22')],'default':{'days':0x0,'page':0x1},'number':[_0x5963f8('0x23'),_0x5963f8('0x3b')],'string':[_0x5963f8('0x4')]},'scope':_0x5963f8('0xa'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[_0x5963f8('0x13')],'userPermissions':[_0x5963f8('0x13')],'syntax':[_0x5963f8('0x30'),_0x5963f8('0x3d'),_0x5963f8('0x3a'),_0x5963f8('0x2a'),_0x5963f8('0x27')]}),this[_0x5963f8('0x3e')]=async(_0x48276f,_0x579abe)=>{const _0x345a21=_0x5963f8;if(_0x579abe[_0x345a21('0x1a')]){const _0x29ba38=await _0x48276f[_0x345a21('0xa')][_0x345a21('0x24')](),_0x213c04=pagination['paginate']([..._0x29ba38['values']()],_0x579abe[_0x345a21('0x3b')]);return await _0x48276f[_0x345a21('0x31')][_0x345a21('0x11')]({'embed':{'color':tesseract_1['Constants'][_0x345a21('0x25')][_0x345a21('0x1')],'title':_0x345a21('0xf'),'description':_0x345a21('0x2b')+_0x48276f['guild'][_0x345a21('0x28')],'fields':_0x213c04[_0x345a21('0x2e')]['map'](_0x16657d=>({'name':_0x16657d[_0x345a21('0x4')]['tag']+_0x345a21('0x0')+_0x16657d[_0x345a21('0x4')]['id'],'value':_0x16657d['reason']||'-'})),'footer':{'text':_0x345a21('0x36')+_0x213c04[_0x345a21('0x3b')]+_0x345a21('0x20')+_0x213c04[_0x345a21('0x3f')]}}});}const _0x221b40=this[_0x345a21('0x18')]['resolver'][_0x345a21('0x2c')](_0x579abe[_0x345a21('0x4')]);if(!_0x221b40)throw new errors[(_0x345a21('0x5'))](errors['BASTION_ERROR_TYPE'][_0x345a21('0x3')],this[_0x345a21('0x28')]);if(_0x48276f[_0x345a21('0x39')]['id']!==_0x48276f[_0x345a21('0xa')]['ownerID']&&_0x48276f['guild'][_0x345a21('0xb')]['cache'][_0x345a21('0x10')](_0x221b40['id'])&&!_0x48276f[_0x345a21('0x12')][_0x345a21('0x2d')](_0x48276f[_0x345a21('0xa')][_0x345a21('0xb')][_0x345a21('0x38')]['get'](_0x221b40['id'])))return await _0x48276f[_0x345a21('0x31')][_0x345a21('0x11')]({'embed':{'color':tesseract_1['Constants'][_0x345a21('0x25')][_0x345a21('0xe')],'title':this[_0x345a21('0x18')][_0x345a21('0x9')][_0x345a21('0x35')](_0x48276f['guild'][_0x345a21('0x7')][_0x345a21('0x37')],_0x345a21('0x17'),_0x345a21('0x32')),'description':this['client'][_0x345a21('0x9')][_0x345a21('0x35')](_0x48276f[_0x345a21('0xa')][_0x345a21('0x7')][_0x345a21('0x37')],_0x345a21('0x17'),_0x345a21('0x21'),_0x48276f[_0x345a21('0x39')][_0x345a21('0x8')],_0x221b40[_0x345a21('0x8')])}})[_0x345a21('0x29')](()=>{});const _0x16b0bc=_0x579abe['_'][_0x345a21('0x16')]('\x20')||'-';await _0x48276f[_0x345a21('0xa')][_0x345a21('0xb')][_0x345a21('0x2')](_0x221b40,{'days':_0x579abe[_0x345a21('0x23')],'reason':_0x16b0bc}),_0x579abe[_0x345a21('0x22')]&&await _0x48276f[_0x345a21('0xa')][_0x345a21('0xb')][_0x345a21('0x2f')](_0x221b40,_0x16b0bc),await _0x48276f[_0x345a21('0x31')][_0x345a21('0x11')]({'embed':{'color':tesseract_1[_0x345a21('0x34')][_0x345a21('0x25')][_0x345a21('0x1f')],'description':_0x579abe['soft']?this[_0x345a21('0x18')][_0x345a21('0x9')][_0x345a21('0x35')](_0x48276f[_0x345a21('0xa')]['document'][_0x345a21('0x37')],_0x345a21('0x15'),'memberSoftBan',_0x48276f[_0x345a21('0x39')][_0x345a21('0x8')],_0x221b40[_0x345a21('0x8')]):this[_0x345a21('0x18')][_0x345a21('0x9')][_0x345a21('0x35')](_0x48276f[_0x345a21('0xa')][_0x345a21('0x7')][_0x345a21('0x37')],_0x345a21('0x15'),_0x345a21('0xd'),_0x48276f[_0x345a21('0x39')][_0x345a21('0x8')],_0x221b40[_0x345a21('0x8')]),'fields':[{'name':_0x345a21('0x3c'),'value':_0x16b0bc}],'footer':{'text':_0x221b40['id']}}})[_0x345a21('0x29')](()=>{});};}};
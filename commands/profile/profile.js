const a135_0x4158=['updateLocation','Experience','../../utils/progress','errors','390047lvOyCx','COLORS','catch','author','round','exec','displayAvatarURL','then','language','karma','channel','apply','profile\x20--bio\x20TEXT','340839pdZPXv','exports','getConstant','If\x20you\x20know\x20','multiplier','experience','profile\x20--location\x20TEXT','join','profileNotFound','computeExperience','bio','getString','Rank','document','73ElNDNq','6ElQiyo','send','length','default','member','find','\x20/\x20','It\x20allows\x20you\x20to\x20see\x20your\x20(or\x20any\x20of\x20the\x20server\x20member\x27s)\x20Bastion\x20Profile.\x20It\x20also\x20allows\x20you\x20to\x20edit\x20your\x20profile.','\x20-\x20','../../utils/badges','findByIdAndUpdate','Bastion\x20Profile','Location','profile','constructor','@bastion/tesseract','tag','430501wcBaXF','gamification','Karma','IRIS',',\x20send\x20them\x20a\x20message.','client','emoji','author.discord.id','user','../../models/Member','json','badgeValue','color','guild','Progress\x20-\x20','nextLevel','currentLevel','19653VyIVoi','countDocuments','locale','findOne','test','balance','slice','resolveBadges','fetchBadges','location','level','DEFAUL_LEVELUP_MULTIPLIER','813168ywVHhe','1522981JtjUhJ','3886lzYltn','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','284nUQCFq','updateInfo','info','Constants','../../models/User'];const a135_0x3bd0=function(_0x381824,_0x3b2ea9){_0x381824=_0x381824-0xdc;let _0x21b875=a135_0x4158[_0x381824];return _0x21b875;};const a135_0x1f179e=a135_0x3bd0;(function(_0x5d2152,_0x2a98bb){const _0x31382b=a135_0x3bd0;while(!![]){try{const _0x1474e8=-parseInt(_0x31382b(0xec))+-parseInt(_0x31382b(0x106))+parseInt(_0x31382b(0xf9))+-parseInt(_0x31382b(0xe0))*parseInt(_0x31382b(0x114))+-parseInt(_0x31382b(0xf0))*parseInt(_0x31382b(0xee))+parseInt(_0x31382b(0xed))+-parseInt(_0x31382b(0x126))*-parseInt(_0x31382b(0x115));if(_0x1474e8===_0x2a98bb)break;else _0x5d2152['push'](_0x5d2152['shift']());}catch(_0x315717){_0x5d2152['push'](_0x5d2152['shift']());}}}(a135_0x4158,0xc4396));const a135_0x1cb5f7=function(){let _0x47fea5=!![];return function(_0x39e5b1,_0x44f932){const _0x3b8f7c=_0x47fea5?function(){const _0x3052ff=a135_0x3bd0;if(_0x44f932){const _0x40abfc=_0x44f932[_0x3052ff(0x104)](_0x39e5b1,arguments);return _0x44f932=null,_0x40abfc;}}:function(){};return _0x47fea5=![],_0x3b8f7c;};}(),a135_0x41d717=a135_0x1cb5f7(this,function(){const _0x31602b=function(){const _0x5738b4=a135_0x3bd0,_0x3dd0f2=_0x31602b[_0x5738b4(0x123)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](_0x5738b4(0xef));return!_0x3dd0f2[_0x5738b4(0xe4)](a135_0x41d717);};return _0x31602b();});a135_0x41d717();'use strict';const tesseract_1=require(a135_0x1f179e(0x124)),Member_1=require(a135_0x1f179e(0x12f)),User_1=require(a135_0x1f179e(0xf4)),badges=require(a135_0x1f179e(0x11e)),constants=require('../../utils/constants'),gamification=require('../../utils/gamification'),progress_1=require(a135_0x1f179e(0xf7));module[a135_0x1f179e(0x107)]=class ProfileCommand extends tesseract_1['Command']{constructor(){const _0x4478b1=a135_0x1f179e;super(_0x4478b1(0x122),{'description':_0x4478b1(0x11c),'triggers':[],'arguments':{'alias':{'info':['about',_0x4478b1(0x110)]},'array':[_0x4478b1(0xf2),_0x4478b1(0xe9)],'string':[_0x4478b1(0xf2),'location']},'scope':_0x4478b1(0xdc),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[_0x4478b1(0x122),'profile\x20USER',_0x4478b1(0x105),_0x4478b1(0x10c)]}),this[_0x4478b1(0xfe)]=async(_0x260654,_0x45d23a)=>{const _0xbca176=_0x4478b1;if(_0x45d23a[_0xbca176(0xf2)]&&_0x45d23a[_0xbca176(0xf2)][_0xbca176(0x117)])return await User_1[_0xbca176(0x118)][_0xbca176(0x11f)](_0x260654[_0xbca176(0xfc)]['id'],{'info':_0x45d23a['info']['join']('\x20')[_0xbca176(0xe6)](0x0,0x100)}),await _0x260654['channel'][_0xbca176(0x116)]({'embed':{'color':tesseract_1[_0xbca176(0xf3)][_0xbca176(0xfa)][_0xbca176(0x129)],'description':this[_0xbca176(0x12b)][_0xbca176(0xe2)][_0xbca176(0x111)](_0x260654[_0xbca176(0xdc)][_0xbca176(0x113)][_0xbca176(0x101)],_0xbca176(0xf2),_0xbca176(0xf1),_0x260654[_0xbca176(0xfc)]['tag'])}});if(_0x45d23a[_0xbca176(0xe9)]&&_0x45d23a[_0xbca176(0xe9)][_0xbca176(0x117)])return await User_1[_0xbca176(0x118)][_0xbca176(0x11f)](_0x260654[_0xbca176(0xfc)]['id'],{'location':_0x45d23a[_0xbca176(0xe9)][_0xbca176(0x10d)]('\x20')['slice'](0x0,0x10)}),await _0x260654['channel'][_0xbca176(0x116)]({'embed':{'color':tesseract_1['Constants']['COLORS'][_0xbca176(0x129)],'description':this[_0xbca176(0x12b)][_0xbca176(0xe2)][_0xbca176(0x111)](_0x260654[_0xbca176(0xdc)][_0xbca176(0x113)][_0xbca176(0x101)],'info',_0xbca176(0xf5),_0x260654[_0xbca176(0xfc)][_0xbca176(0x125)])}});const _0x2799ac=_0x45d23a['_'][_0xbca176(0x117)]?_0x45d23a['_'][0x0]:_0x260654[_0xbca176(0xfc)]['id'],_0x192d70=_0x2799ac===_0x260654['author']['id']?_0x260654[_0xbca176(0x119)]:this[_0xbca176(0x12b)]['resolver']['resolveGuildMember'](_0x260654['guild'],_0x2799ac);if(!_0x192d70)throw new Error(this[_0xbca176(0x12b)][_0xbca176(0xe2)][_0xbca176(0x111)](_0x260654[_0xbca176(0xdc)][_0xbca176(0x113)][_0xbca176(0x101)],_0xbca176(0xf8),'memberNotFound'));const _0x12a4ab=_0x2799ac===_0x260654[_0xbca176(0xfc)]['id']?_0x260654[_0xbca176(0xfc)][_0xbca176(0x113)]:await User_1[_0xbca176(0x118)]['findById'](_0x2799ac),_0x15ded4=_0x2799ac===_0x260654[_0xbca176(0xfc)]['id']?_0x192d70[_0xbca176(0x113)]:await Member_1[_0xbca176(0x118)][_0xbca176(0xe3)]({'user':_0x2799ac,'guild':_0x260654[_0xbca176(0xdc)]['id']});if(!_0x12a4ab||!_0x15ded4)throw new Error(this[_0xbca176(0x12b)][_0xbca176(0xe2)][_0xbca176(0x111)](_0x260654['guild'][_0xbca176(0x113)]['language'],'errors',_0xbca176(0x10e),_0x192d70[_0xbca176(0x12e)][_0xbca176(0x125)]));const _0x3de4b2=await Member_1[_0xbca176(0x118)][_0xbca176(0x11a)]({'guild':_0x260654[_0xbca176(0xdc)]['id']},null,{'sort':{'level':-0x1,'experience':-0x1,'karma':-0x1,'balance':-0x1}})[_0xbca176(0xe1)]({'$or':[{'level':{'$gt':_0x15ded4['level']}},{'level':_0x15ded4[_0xbca176(0xea)],'experience':{'$gt':_0x15ded4['experience']}},{'level':_0x15ded4[_0xbca176(0xea)],'experience':_0x15ded4[_0xbca176(0x10b)],'karma':{'$gt':_0x15ded4[_0xbca176(0x102)]}},{'level':_0x15ded4[_0xbca176(0xea)],'experience':_0x15ded4[_0xbca176(0x10b)],'karma':_0x15ded4[_0xbca176(0x102)],'balance':{'$gt':_0x15ded4[_0xbca176(0xe5)]}}]}),_0x4b745f={'currentLevel':gamification[_0xbca176(0x10f)](_0x15ded4[_0xbca176(0xea)],_0x260654['guild'][_0xbca176(0x113)][_0xbca176(0x127)]?_0x260654[_0xbca176(0xdc)][_0xbca176(0x113)][_0xbca176(0x127)]['multiplier']:gamification[_0xbca176(0xeb)]),'nextLevel':gamification[_0xbca176(0x10f)](_0x15ded4[_0xbca176(0xea)]+0x1,_0x260654['guild'][_0xbca176(0x113)][_0xbca176(0x127)]?_0x260654['guild']['document'][_0xbca176(0x127)][_0xbca176(0x10a)]:gamification['DEFAUL_LEVELUP_MULTIPLIER'])},_0xf3224d={'currentLevel':_0x15ded4['experience']-_0x4b745f[_0xbca176(0xdf)],'nextLevel':_0x4b745f['nextLevel']-_0x4b745f['currentLevel']},_0xe83b24=_0xf3224d[_0xbca176(0xdf)]/_0xf3224d[_0xbca176(0xde)]*0x64,_0x5d737d=constants['isPublicBastion'](this['client']['user'])&&await badges[_0xbca176(0xe8)](_0x192d70['id'])[_0xbca176(0x100)](_0x3e86e7=>_0x3e86e7[_0xbca176(0x130)]())[_0xbca176(0xfb)](()=>{});_0x260654[_0xbca176(0x103)]['send']({'embed':{'color':_0x12a4ab[_0xbca176(0x132)]||tesseract_1[_0xbca176(0xf3)][_0xbca176(0xfa)]['IRIS'],'author':{'name':_0x192d70['user'][_0xbca176(0x125)]},'title':_0xbca176(0x120),'description':(_0x5d737d&&_0xbca176(0x131)in _0x5d737d?badges[_0xbca176(0xe7)](_0x5d737d[_0xbca176(0x131)]):[])['map'](_0x4a75ad=>_0x4a75ad[_0xbca176(0x12c)])[_0xbca176(0x10d)]('\x20')+'\x0a\x0a'+(_0x12a4ab[_0xbca176(0xf2)]?_0x12a4ab[_0xbca176(0xf2)]:''),'fields':[{'name':_0xbca176(0x112),'value':_0x3de4b2+0x1,'inline':!![]},{'name':'Level','value':_0x15ded4['level'],'inline':!![]},{'name':_0xbca176(0xf6),'value':_0x15ded4[_0xbca176(0x10b)],'inline':!![]},{'name':_0xbca176(0x128),'value':_0x15ded4[_0xbca176(0x102)],'inline':!![]},{'name':'Bastion\x20Coins','value':_0x15ded4[_0xbca176(0xe5)],'inline':!![]},{'name':_0xbca176(0x121),'value':_0x12a4ab['location']||'-','inline':!![]},{'name':_0xbca176(0xdd)+_0xf3224d['currentLevel']+_0xbca176(0x11b)+_0xf3224d[_0xbca176(0xde)]+_0xbca176(0x11d)+Math[_0xbca176(0xfd)](_0xe83b24)+'%','value':'`'+progress_1[_0xbca176(0x118)](_0xe83b24,0x23)+'`'}],'thumbnail':{'url':_0x192d70[_0xbca176(0x12e)][_0xbca176(0xff)]({'dynamic':!![],'size':0x200})},'image':{'url':_0x12a4ab['backdrop']},'footer':{'text':_0x192d70['id']===this['client'][_0xbca176(0xe2)][_0xbca176(0x108)](_0xbca176(0x12d))?'':_0xbca176(0x109)+_0x192d70['displayName']+_0xbca176(0x12a)}}})['catch'](()=>{});};}};
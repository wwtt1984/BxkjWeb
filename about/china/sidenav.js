var sidenav = '';
var state = '';
var arrow = '';
var id = '';
var substate = '';
var subid = '';

// Language specific titles & links - expand as required
if (lang == 'sc' || lang == '') {
  var t1 = "概览";
  var l1 = "index.html";
  var t2 = "中国CEO致辞";
  var l2 = "message.html";
  var t3 = "中国发展历程";
  var l3 = "affiliates.html";
  var st1 = "中国国际金融公司";
  var sl1 = "cicc.html";
  var st2 = "摩根士丹利国际银行";
  var sl2 = "msbi.html";
  var st3 = "摩根士丹利华鑫基金";
  var sl3 = "mshuaxin.html";
  var st4 = "杭州工商信托";
  var sl4 = "msict.html";
  var st5 = '摩根士丹利华鑫证券';
  var sl5 = "http://www.morganstanleyhuaxin.com/";
  var st6 = '摩根士丹利（中国）股权投资管理有限公司';
  var sl6 = "http://www.morganstanleypechina.com/";
} else if (lang == 'tc') {
  var t1 = "概覽";
  var l1 = "index_tc.html";
  var t2 = "中國CEO致辭";
  var l2 = "message_tc.html";
  var t3 = "中國發展歷程";
  var l3 = "affiliates_tc.html";
  var st1 = "中國國際金融公司";
  var sl1 = "cicc_tc.html";
  var st2 = "摩根士丹利國際銀行";
  var sl2 = "msbi_tc.html";
  var st3 = "摩根士丹利華鑫基金";
  var sl3 = "mshuaxin_tc.html";
  var st4 = "杭州工商信托";
  var sl4 = "msict_tc.html";
  var st5 = '摩根士丹利華鑫証券';
  var sl5 = "http://www.morganstanleyhuaxin.com/";
  var st6 = '摩根士丹利（中國）股權投資管理有限公司';
  var sl6 = "http://www.morganstanleypechina.com/";
}

sidenav += '        <DIV ID="sideNav">'

if (s1 == 'overview') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l1+'">' + t1 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'message') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l2+'">' + t2 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'affiliates') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l3+'">' + t3 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';

// example submenu - change parent to 'expand' state
if (s1 == 'affiliates') {
  if (s2 == 'cicc') { substate = 'on'; } else { substate = 'off'; }
  sidenav += '<DIV CLASS="sub'+substate+'"><A HREF="'+pfx+sl1+'">' + st1 + '</A></DIV>';
  if (s2 == 'msbi') { substate = 'on'; } else { substate = 'off'; }
  sidenav += '<DIV CLASS="sub'+substate+'"><A HREF="'+pfx+sl2+'">' + st2 + '</A></DIV>';
  if (s2 == 'mshuaxin') { substate = 'on'; } else { substate = 'off'; }
  sidenav += '<DIV CLASS="sub'+substate+'"><A HREF="'+pfx+sl3+'">' + st3 + '</A></DIV>';
  if (s2 == 'msict') { substate = 'on'; } else { substate = 'off'; }
  sidenav += '<DIV CLASS="sub'+substate+'"><A HREF="'+pfx+sl4+'">' + st4 + '</A></DIV>';
  sidenav += '<DIV CLASS="suboff"><A HREF="'+pfx+sl5+'" target="_blank">' + st5 + '</A></DIV>';
  sidenav += '<DIV CLASS="suboff"><A HREF="'+pfx+sl6+'">' + st6 + '</A></DIV>';
  sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
}
sidenav += '        </DIV>';
document.write(sidenav);
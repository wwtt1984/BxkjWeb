var sidenav = '';
var state = '';
var arrow = '';
var id = '';
var substate = '';
var subid = '';

// Language specific titles & links - expand as required
if (lang == 'sc' || lang == '') {
  var t1 = "证券业务";
  var l1 = "securities.html";
  var t2 = "投资管理业务 ";
  var l2 = "msim.html";
  var t3 = "研究部";
  var l3 = "research.html";
} else if (lang == 'tc') {
  var t1 = "證券業務";
  var l1 = "securities_tc.html";
  var t2 = "投資管理業務";
  var l2 = "msim_tc.html";
  var t3 = "研究部";
  var l3 = "research_tc.html";
}

sidenav += '        <DIV ID="sideNav">'

if (s1 == 'securities') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l1+'">' + t1 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'msim') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l2+'">' + t2 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'research') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l3+'">' + t3 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
sidenav += '        </DIV>';
document.write(sidenav);
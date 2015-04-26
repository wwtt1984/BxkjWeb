var sidenav = '';
var state = '';
var arrow = '';
var id = '';
var substate = '';
var subid = '';

// Language specific titles & links - expand as required
if (lang == 'sc' || lang == '') {
  var t1 = "慈善活动";
  var l1 = "philanthropy.html";
  var t2 = "艺术 文化活动";
  var l2 = "culture.html";
  var t3 = "环保活动";
  var l3 = "environment.html";
  var t4 = "教育活动";
  var l4 = "education.html";
  var t5 = "服务社区 年终报告";
  var l5 = "annualreport.html";
} else if (lang == 'tc') {
  var t1 = "慈善活動";
  var l1 = "philanthropy_tc.html";
  var t2 = "藝術 文化活動";
  var l2 = "culture_tc.html";
  var t3 = "環保活動";
  var l3 = "environment_tc.html";
  var t4 = "教育活動";
  var l4 = "education_tc.html";
  var t5 = "服務社區 年終報告";
  var l5 = "annualreport_tc.html";
}

sidenav += '        <DIV ID="sideNav">'

if (s1 == 'philanthropy') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l1+'">' + t1 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'culture') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l2+'">' + t2 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'environment') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l3+'">' + t3 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'education') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l4+'">' + t4 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'annualreport') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l5+'">' + t5 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
sidenav += '        </DIV>';
document.write(sidenav);
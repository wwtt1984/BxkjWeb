var sidenav = '';
var state = '';
var arrow = '';
var id = '';
var substate = '';
var subid = '';

// Language specific titles & links - expand as required
if (lang == 'sc' || lang == '') {
  var t1 = "校园活动";
  var l1 = "campus.html";
  var t2 = "2015暑期活动";
  var l2 = "campus_summer2015.html";
  var t3 = "2015校园活动";
  var l3 = "campus_2015.html";
  var t4 = "2014暑期活动";
  var l4 = "campus_summer2014.html";
  var t5= "2014校园活动";
  var l5 = "campus_2014.html";
  var t6 = "2013暑期活动";
  var l6 = "campus_summer2013.html";
  var t7 = "2013校园活动";
  var l7 = "campus_2013.html";
  var t8 = "2012暑期活动";
  var l8 = "campus_summer2012.html";
  var t9 = "2012校园活动";
  var l9 = "campus_2012.html";
  var t10 = "2011校园活动";
  var l10 = "campus_2011.html";
} else if (lang == 'tc') {
  var t1 = "校園活動";
  var l1 = "campus_tc.html";
  var t2 = "2015暑期活動";
  var l2 = "campus_summer2015.html";  
  var t3 = "2015校園活動";
  var l3 = "campus_2015.html";
  var t4 = "2014暑期活動";
  var l4 = "campus_summer2014.html";  
  var t5 = "2014校園活動";
  var l5 = "campus_2014.html";
  var t6 = "2013暑期活動";
  var l6 = "campus_summer2013.html";
  var t7 = "2013校園活動";
  var l7 = "campus_2013.html";
  var t8 = "2012暑期活動";
  var l8 = "campus_summer2012.html";
  var t9 = "2012校園活動";
  var l9 = "campus_2012.html";
  var t10 = "2011校園活動";
  var l10 = "campus_2011.html";
}

sidenav += '        <DIV ID="sideNav">'

if (s1 == 'campus') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l1+'">' + t1 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 's2015') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l2+'">' + t2 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == '2015') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l3+'">' + t3 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 's2014') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l4+'">' + t4 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == '2014') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l5+'">' + t5 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 's2013') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l6+'">' + t6 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == '2013') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l7+'">' + t7 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 's2012') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l8+'">' + t8 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == '2012') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l9+'">' + t9 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == '2011') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l10+'">' + t10 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
sidenav += '        </DIV>';
document.write(sidenav);
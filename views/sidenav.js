var sidenav = '';
var state = '';
var arrow = '';
var id = '';
var substate = '';
var subid = '';

// Language specific titles & links - expand as required
if (lang == 'sc' || lang == '') {
  var t1 = "我们的观点";
  var l1 = "index.html";
  var t2 = "2015年";
  var l2 = "2015.html";
  var t3 = "2014年";
  var l3 = "2014.html";
  var t4 = "2013年";
  var l4 = "2013.html";
  var t5 = "2012年";
  var l5 = "2012.html";
  var t6 = "2011年";
  var l6 = "2011.html";
  var t7 = "2010年";
  var l7 = "2010.html";
  var t8 = "2009年";
  var l8 = "2009.html";
  var t9 = "2008年";
  var l9 = "2008.html";
  var t10 = "2007年";
  var l10 = "2007.html";
  var t11 = "2006年";
  var l11 = "2006.html";
  var t12 = "2005年";
  var l12 = "2005.html";
  var t13 = "2004年";
  var l13 = "2004.html";  
  var t14 = "2003年";
  var l14 = "2003.html"; 
} else if (lang == 'tc') {
  var t1 = "我們的觀點";
  var l1 = "index_tc.html";
  var t2 = "2015年";
  var l2 = "2015_tc.html";
  var t3 = "2014年";
  var l3 = "2014_tc.html";
  var t4 = "2013年";
  var l4 = "2013_tc.html";
  var t5 = "2012年";
  var l5 = "2012_tc.html";
  var t6 = "2011年";
  var l6 = "2011_tc.html";
  var t7 = "2010年";
  var l7 = "2010_tc.html";
  var t8 = "2009年";
  var l8 = "2009_tc.html";
  var t9 = "2008年";
  var l9 = "2008_tc.html";
  var t10 = "2007年";
  var l10 = "2007_tc.html";
  var t11 = "2006年";
  var l11 = "2006_tc.html";
  var t12 = "2005年";
  var l12 = "2005_tc.html";
}


sidenav += '        <DIV ID="sideNav">'

if (s1 == 'latest') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l1+'">' + t1 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2015') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l2+'">' + t2 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2014') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l3+'">' + t3 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if(lang != 'tc'){
if (s1 == 'r2013') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l4+'">' + t4 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2012') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l5+'">' + t5 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2011') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l6+'">' + t6 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2010') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l7+'">' + t7 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2009') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l8+'">' + t8 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2008') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l9+'">' + t9 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2007') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l10+'">' + t10 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2006') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l11+'">' + t11 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2005') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l12+'">' + t12 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2004') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l13+'">' + t13 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
if (s1 == 'r2003') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l14+'">' + t14 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="img/clear.gif" width="1" height="1" border="0"></DIV>';
}
sidenav += '        </DIV>';

document.write(sidenav);
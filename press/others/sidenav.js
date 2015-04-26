var sidenav = '';
var state = '';
var arrow = '';
var id = '';
var substate = '';
var subid = '';

// Language specific titles & links - expand as required
if (lang == 'sc' || lang == '') {
  var t0 = "2015年";
  var l0 = "index.html";
  var t1 = "2014年";
  var l1 = "2014.html";
  var t2 = "2013年";
  var l2 = "2013.html";
  var t3 = "2012年";
  var l3 = "2012.html";
  var t4 = "2011年";
  var l4 = "2011.html";
  var t5 = "2010年";
  var l5 = "2010.html";
  var t6 = "2009年";
  var l6 = "2009.html";
  var t7 = "2008年";
  var l7 = "2008.html";
  var t8 = "2007年";
  var l8 = "2007.html";
  var t9 = "2006年";
  var l9 = "2006.html";
  var t10 = "2005年";
  var l10 = "2005.html";
  var t11 = "2004年";
  var l11 = "2004.html";
  var t12 = "2003年";
  var l12 = "2003.html";
  var t13 = "2002年";
  var l13 = "2002.html";
  } else {
  var t0 = "2015年";
  var l0 = "index_tc.html";
  var t1 = "2014年";
  var l1 = "2014_tc.html";
  var t2 = "2013年";
  var l2 = "2013_tc.html";
  var t3 = "2012年";
  var l3 = "2012_tc.html";
  var t4 = "2011年";
  var l4 = "2011_tc.html";
  var t5 = "2010年";
  var l5 = "2010_tc.html";
  var t6 = "2009年";
  var l6 = "2009_tc.html";
  var t7 = "2008年";
  var l7 = "2008_tc.html";
  var t8 = "2007年";
  var l8 = "2007_tc.html";
  var t9 = "2006年";
  var l9 = "2006_tc.html";
  var t10 = "2005年";
  var l10 = "2005_tc.html";
  var t11 = "2004年";
  var l11 = "2004_tc.html";
  var t12 = "2003年";
  var l12 = "2003_tc.html";
  var t13 = "2002年";
  var l13 = "2002_tc.html";
  }

sidenav += '        <DIV ID="sideNav">'
if (s1 == '2015') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l0+'">' + t0 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2014') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l1+'">' + t1 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2013') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l2+'">' + t2 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2012') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l3+'">' + t3 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2011') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l4+'">' + t4 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2010') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l5+'">' + t5 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2009') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l6+'">' + t6 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2008') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l7+'">' + t7 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2007') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l8+'">' + t8 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2006') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l9+'">' + t9 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2005') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l10+'">' + t10 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2004') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l11+'">' + t11 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2003') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l12+'">' + t12 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

if (s1 == '2002') { state = 'on'; } else { state = 'off'; }
sidenav += '<DIV CLASS="'+state+'"><A HREF="'+pfx+l13+'">' + t13 + '</A></DIV>';
sidenav += '<DIV CLASS="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></DIV>';

sidenav += '        </DIV>';
document.write(sidenav);
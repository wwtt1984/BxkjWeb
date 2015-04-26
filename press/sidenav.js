var sidenav = '';
var state = '';
var arrow = '';
var id = '';
var substate = '';
var subid = '';

// Language specific titles & links - expand as required
if (lang == 'sc' || lang == '') {
  var t1 = "2015年";
  var l1 = "index.html";
  var t2 = "2014年";
  var l2 = "2014.html";
  var t3 = "2013年";
  var l3 = "2013.html";
  var t4 = "2012年";
  var l4 = "2012.html";
  var t5 = "2011年";
  var l5 = "2011.html";
  var t6 = "2010年";
  var l6 = "2010.html";
  var t7 = "2009年";
  var l7 = "2009.html";
  var t8 = "2008年";
  var l8 = "2008.html";
  var t9 = "2007年";
  var l9 = "2007.html";
  var t10 = "2006年";
  var l10 = "2006.html";
  var t11 = "2005年";
  var l11 = "2005.html";
  var t12 = "2005年";
  var l12 = "2004.html";
  var t13 = "2003年";
  var l13 = "2003.html";
  var t14 = "2002年";
  var l14 = "2002.html";
  var t15 = "2001年";
  var l15 = "2001.html";
} else {
  var t1 = "2015年";
  var l1 = "index_tc.html";
  var t2 = "2014年";
  var l2 = "2014_tc.html";
  var t3 = "2013年";
  var l3 = "2013_tc.html";
  var t4 = "2012年";
  var l4 = "2012_tc.html";
  var t5 = "2011年";
  var l5 = "2011_tc.html";
  var t6 = "2010年";
  var l6 = "2010_tc.html";
  var t7 = "2009年";
  var l7 = "2009_tc.html";
  var t8 = "2008年";
  var l8 = "2008_tc.html";
  var t9 = "2007年";
  var l9 = "2007_tc.html";
  var t10 = "2006年";
  var l10 = "2006_tc.html";
  var t11 = "2005年";
  var l11 = "2005_tc.html";
  var t12 = "2004年";
  var l12 = "2004_tc.html";
  var t13 = "2003年";
  var l13 = "2003_tc.html";
  var t14 = "2002年";
  var l14 = "2002_tc.html";  
  var t15 = "2001年";
  var l15 = "2001_tc.html";}

sidenav += '        <div id="sideNav">'

if (s1 == '2015') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l1+'">' + t1 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2014') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l2+'">' + t2 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2013') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l3+'">' + t3 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2012') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l4+'">' + t4 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2011') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l5+'">' + t5 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2010') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l6+'">' + t6 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2009') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l7+'">' + t7 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2008') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l8+'">' + t8 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2007') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l9+'">' + t9 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2006') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l10+'">' + t10 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2005') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l11+'">' + t11 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2004') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l12+'">' + t12 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2003') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l13+'">' + t13 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2002') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l14+'">' + t14 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

if (s1 == '2001') { state = 'on'; } else { state = 'off'; }
sidenav += '<div class="'+state+'"><a href="'+pfx+l15+'">' + t15 + '</a></div>';
sidenav += '<div class="rule"><img src="/img/clear.gif" width="1" height="1" border="0"></div>';

sidenav += '        </div>';
document.write(sidenav);
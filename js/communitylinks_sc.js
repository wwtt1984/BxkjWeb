function ebook() {
	var gset = 'toolbar=no,location=0,directories=no,status=yes,menubar=0,scrollbars=no,resizable=no,width=925,height=700';
	g_window = window.open('/community/littlegreenebook/us/index.html', 'greenwin', gset);
}

var grp = '';
grp += '<div id="colRrule"><img src="/img/clear.gif" width="1" height="2"></div>';
grp += '<h2 class="colRttl">Related Links </h2>';
grp += '<div class="linkList"><a href="javascript:ebook();">Little Green Book</a></div>';
grp += '<br />';
document.write(grp);

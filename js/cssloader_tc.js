str = navigator.userAgent.toUpperCase();
if (str.indexOf("WIN") >= 0){
	if(navigator.userAgent.indexOf("Gecko")!=-1) {
		document.write("<link rel='stylesheet' href='/css/mstext_tc_win.css' type='text/css'>");
	} else if(navigator.userAgent.indexOf("MSIE")!=-1) {
		document.write("<link rel='stylesheet' href='/css/mstext_tc_win.css' type='text/css'>");
	} else {
		document.write("<link rel='stylesheet' href='/css/mstext_tc_win.css' type='text/css'>");
	}
} else if (str.indexOf("MAC") >= 0){
	if(navigator.userAgent.indexOf("Gecko")!=-1) {
		document.write("<link rel='stylesheet' href='/css/mstext_tc_mac.css' type='text/css'>");
	} else if(navigator.userAgent.indexOf("MSIE")!=-1) {
		document.write("<link rel='stylesheet' href='/css/mstext_tc_mac.css' type='text/css'>");
	} else {
		document.write("<link rel='stylesheet' href='/css/mstext_tc_mac.css' type='text/css'>");
	}
} else {
	document.write("<link rel='stylesheet' href='/css/mstext_tc_win.css' type='text/css'>");
}

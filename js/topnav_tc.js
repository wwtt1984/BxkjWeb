//Contents for utility menu
var util1=new Array()

//util1[0]=' <DIV STYLE="position:absolute;">'
util1[0]='<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="0" ID="globalOfficesDD" ONMOUSEOVER="globaloffdropdownH1();" ONMOUSEOUT="globaloffdropdownS1();">'
util1[0]+='	<TR>'
util1[0]+='		<TD VALIGN="top">'
util1[0]+='			<A HREF="http://www.morganstanley.co.jp">Japan Site</a>'
util1[0]+='			<A HREF="http://www.morganstanley.com">Global Site</a>'
util1[0]+='		</TD>'
util1[0]+='	</TR>'
util1[0]+='</TABLE>'
//util1[0]=' </DIV>

//Contents for menu 1
var menu1=new Array()
menu1[0]='<a href="'+imgpref+'about/china/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-china_tc-off.gif" border="0" alt=""></a>'
menu1[1]='<a href="'+imgpref+'about/business/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-business_tc-off.gif" border="0" alt=""></a>'
menu1[2]='<a href="'+imgpref+'about/client/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-client_tc-off.gif" border="0" alt=""></a>'
menu1[3]='<a href="'+imgpref+'about/company/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-company_tc-off.gif" border="0" alt=""></a>'
menu1[4]='<a href="'+imgpref+'about/awards/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-awards_tc-off.gif" border="0" alt=""></a>'
menu1[5]='<a href="'+imgpref+'about/global/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-global_tc-off.gif" border="0" alt=""></a>'
menu1[6]='<a href="'+imgpref+'about/careers/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-career_tc-off.gif" border="0" alt=""></a>'

//Contents for menu 2
var menu2=new Array()

//Contents for menu 3
var menu3=new Array()
menu3[0]='<a href="'+imgpref+'press/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-press_tc-off.gif" border="0" alt=""></a>'
menu3[1]='<a href="'+imgpref+'press/others/index_tc.html" onclick="" onmouseover="mouseOverDD(this);globaloffdropdownH();" onmouseout="mouseOutDD(this);globaloffdropdownS();"><img src="'+imgpref+'img/shared/dropdown-othernews_tc-off.gif" border="0" alt=""></a>'

//Contents for menu 4
var menu4=new Array()

var menuN='';

//Contents for submenu 1
var submenu1=new Array()

//Contents for submenu 2
var submenu2=new Array()

//Contents for submenu 3
var submenu3=new Array()

//Contents for submenu 4
var submenu4=new Array()

		
var menuwidth='178px' //default menu width
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

var activeMenu = ""

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="position:absolute;" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, mc){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
//if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
//dropmenuobj.widthobj.width=menuwidth
//}
if (mc.length > 0){
	if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
	obj.visibility=visible
	else if (e.type=="click")
	obj.visibility=hidden
}
else{
	obj.visibility=hidden
}

}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-17
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}

function populatemenu(what, mname, ln, tar){
if (ie4||ns6)
var pmenu = ''
for ( var j=0, wlen=what.length; j<wlen; ++j ){
	pmenu += what[j]
}
pmenu += ''

dropmenuobj.innerHTML=pmenu
}



//Global Offices Dropdown
function dropdownmenu(obj, e, menucontents, mtext, lnk, targ){
	if (activeNavNode != '') hideNavButton()
	
	if (window.event) event.cancelBubble=true
	else if (e.stopPropagation) e.stopPropagation()
		clearhidemenu()
		dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
		populatemenu(menucontents, mtext, lnk, targ)
		
	if (ie4||ns6){
	showhide(dropmenuobj.style, e, "visible", "hidden", menucontents)
	if (mtext == 'offices')
	dropmenuobj.x=getposOffset(obj, "left") +2; // was +12
	
	else
	dropmenuobj.x=getposOffset(obj, "left") -1
	dropmenuobj.y=getposOffset(obj, "top")
	dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
	dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
	}
	return clickreturnvalue()
	}

//Global Offices Dropdown ends

function clickreturnvalue(){
if (ie4||ns6) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6){
		dropmenuobj.style.visibility="hidden"
		if (activeNavNode != '') hideNavButton()
	}
}
//alert(e);
//	document.getElementById("utilityLoginto").style.display = 'block';
	
}

function hideNavButton(){
	imgObj = getImageNode(activeNavNode);
	imgObj.setAttribute("src", activeTopNav);
	document.body.style.cursor='default';
	
	td = activeNavNode;
	td.className = "";
	td.leftRule = getAdjacentElement(td, td.nodeType, "previous");
	td.rightRule = getAdjacentElement(td, td.nodeType, "next");
	if (td.leftRule && (activeTNleft != 'dividerOn'))
	{
		td.leftRule.className = "divider";
	}
	if (td.rightRule && (activeTNright != 'dividerOn'))
	{
		td.rightRule.className = "divider";
	}
	
	activeImgName = '';
	activeNavNode = '';
}



function showGloff() {
		document.getElementById("gbmenuinn").style.display = "block";
//		document.getElementById("utilityLoginto").style.display = "none";
		//document.getElementById("comboboxHS").style.visibility = "hidden";
		}

function hideGloff() {
		document.getElementById("gbmenuinn").style.display = "none";
//		document.getElementById("utilityLoginto").style.display = "block";
		//document.getElementById("comboboxHS").style.visibility = "visible";
		
		}



function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu

function globaloffdropdownH(){
	
	if (document.getElementById('comboboxHS') != null) {
	    document.getElementById("comboboxHS").style.visibility = "hidden";
	  } 
	  else {
	     return false;
	  }

	}
	
	
function globaloffdropdownS(){
	if (document.getElementById('comboboxHS') != null) {
	    document.getElementById("comboboxHS").style.visibility = "visible";
	  } 
	  else {
	     return false;
	  }
	}
	
	
function globaloffdropdownH1(){
	
	if (document.getElementById('comboboxHS1') != null) {
	    document.getElementById("comboboxHS1").style.visibility = "hidden";
	  } 
	  else {
	     return false;
	  }

	}
	
	
function globaloffdropdownS1(){
	if (document.getElementById('comboboxHS1') != null) {
	    document.getElementById("comboboxHS1").style.visibility = "visible";
	  } 
	  else {
	     return false;
	  }
	}

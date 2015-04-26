function ManageTabPanelDisplay() {
var idlist = new Array('tab1focus','tab2focus','tab1ready','tab2ready','content1','content2');

if(arguments.length < 1) { return; }
for(var i = 0; i < idlist.length; i++) {
   var block = false;
   for(var ii = 0; ii < arguments.length; ii++) {
      if(idlist[i] == arguments[ii]) {
         block = true;
         break;
         }
      }
   if(block) { document.getElementById(idlist[i]).style.display = "block"; }
   else { document.getElementById(idlist[i]).style.display = "none"; }
   }
}

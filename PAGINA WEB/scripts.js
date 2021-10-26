jQuery('document').ready(function($){
 
var menubtn =$('.menu-icon'),
menu =$('.navigation ul');

menubtn.click(function(){
    if(menu.hasclass('show')) {

      menu.removeclass('show');
    } else {
    menu.addclass('show')
    }
});


});
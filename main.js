$(document).ready(function(){

  // punto le variabili che devo utilizzare
  
  var ham_menu = $('.header-right a') // Menu Hamburger
  var cross_menu = $('.hamburger-menu .close'); // Croce, chiusura menu
  var complete_menu = $('.hamburger-menu'); // Menu Nascosto
  var show_menu = false; // Do valore booleano al 



  ham_menu.click(function(){
    complete_menu.fadeIn(1000);
    console.log("Ho cliccato")
  })

  cross_menu.click(function(){
    complete_menu.fadeOut(1000);
    console.log("Sono uscito")
  })
  


})
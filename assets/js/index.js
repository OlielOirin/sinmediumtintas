function f_toogle_menu(){resultado=document.getElementsByClassName("menu").length-document.getElementsByClassName("slide-out-left").length-document.getElementsByClassName("slide-in-left").length,resultado2=document.getElementsByClassName("menu").length-document.getElementsByClassName("slide-in-left").length,1==resultado?menu.classList.add("slide-in-left"):0==resultado2?menu.classList.replace("slide-in-left","slide-out-left"):menu.classList.replace("slide-out-left","slide-in-left")}function f_rotate_button(){resultado=document.getElementsByClassName("boton-menu").length-document.getElementsByClassName("button-animation").length-document.getElementsByClassName("button-animation-no").length,resultado2=document.getElementsByClassName("boton-menu").length-document.getElementsByClassName("button-animation-no").length,1==resultado?btn_menu.classList.add("button-animation"):0==resultado2?btn_menu.classList.replace("button-animation-no","button-animation"):btn_menu.classList.replace("button-animation","button-animation-no")}var menu=document.getElementById("menu"),btn_menu=document.getElementById("btn-menu");
"use strict";var nav=document.getElementById("appNavigation"),navList=document.getElementById("appNavList"),navSearchForm=document.getElementById("appNavSearch"),navMenu=document.getElementById("appNavMenuButton"),navMenuClose=document.getElementById("appNavMenuCloseButton"),showLinksI=0,navListLinks=navList.querySelectorAll("li"),navSearch=document.getElementById("appNavSearchButton"),navSearchClose=document.getElementById("appNavSearchCloseButton");navMenu.addEventListener("click",function(n){return showNavList.call()}),navMenuClose.addEventListener("click",function(n){return hideNavList.call()});var showNavList=function(){document.getElementsByTagName("body")[0].classList.add("lock-scroll"),nav.classList.add("navigation--expanded"),navList.classList.add("navlist--expanded"),navMenu.classList.remove("navigation__link--visible"),navSearch.classList.remove("navigation__link--visible"),navMenuClose.classList.add("navigation__link--visible"),setTimeout(showLinks(),500)};function showLinks(){setTimeout(function(){navListLinks[showLinksI].classList.add("navlist__item--visible"),++showLinksI<navListLinks.length&&showLinks()},100)}var hideNavList=function(){nav.classList.remove("navigation--expanded"),navList.classList.remove("navlist--expanded"),navMenuClose.classList.remove("navigation__link--visible"),navMenu.classList.add("navigation__link--visible"),navSearch.classList.add("navigation__link--visible");for(var n=0;n<navListLinks.length;n++){navListLinks[n].classList.remove("navlist__item--visible")}document.getElementsByTagName("body")[0].classList.remove("lock-scroll"),showLinksI=0};navSearch.addEventListener("click",function(n){return showSearch.call()}),navSearchClose.addEventListener("click",function(n){return hideSearch.call()});var showSearch=function(){document.getElementsByTagName("body")[0].classList.add("lock-scroll"),nav.classList.add("navigation--expanded"),navSearch.classList.remove("navigation__link--visible"),navMenu.classList.remove("navigation__link--visible"),navSearchClose.classList.add("navigation__link--visible"),setTimeout(function(){navSearchForm.classList.add("navsearch--expanded")},500)},hideSearch=function(){document.getElementsByTagName("body")[0].classList.remove("lock-scroll"),navSearchForm.classList.remove("navsearch--expanded"),nav.classList.remove("navigation--expanded"),navSearch.classList.add("navigation__link--visible"),navMenu.classList.add("navigation__link--visible"),navSearchClose.classList.remove("navigation__link--visible")};!function(){if(document.getElementsByTagName("body")[0].classList.contains("index")){window.addEventListener("scroll",function(n){e.call()});var e=function(){document.getElementById("appLandingPageBackgroundImage").offsetHeight<=window.scrollY?nav.classList.add("navigation--bg-visible"):nav.classList.remove("navigation--bg-visible")}}else nav.classList.add("navigation--bg-visible")}(),document.addEventListener("scroll",function(n){for(var e=(window.pageYOffset||document.documentElement.scrollTop)+window.innerHeight,a=document.getElementsByClassName("fadein__content"),i=0;i<a.length;i++){var s=a[i];s.offsetTop+30<e&&(s.classList.remove("fadein__content--inactive"),s.classList.add("fadein__content--active"))}});
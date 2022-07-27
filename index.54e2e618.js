$("a").bind("click",(function(t){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-70+"px"},750),t.preventDefault(),$(".active").removeClass("active"),$(this).addClass("active")}));
//# sourceMappingURL=index.54e2e618.js.map

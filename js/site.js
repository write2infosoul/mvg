//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

$( window ).load(sizeContent);



function sizeContent() {


var ww = $(window).width();
var wh = $(window).height();
var bh = $("body").height();

if($(window).width() > 600) {
$(".intro").css({"max-height":wh});
} else {
$(".intro").css({"max-height":1000});
}


var ih = $(".intro").height();

//console.log(ih,wh);

if(ih < wh) {
  $("#continue").css({"top":ih});
} else {
  $("#continue").css({"top":wh});
}

if($(window).width() > 768) {
var ch = wh - 120;
var ch1 =   $(".txt").height() + 50;
var ch2 =   $(".intro").height();
if(ch1 > 50 && ch1 < ch) ch = ch1;
if(ch2 > ch) ch = ch2 - 120;
//console.log();

$(".content").css({"min-height":ch});
} else {
$(".content").css({"min-height":0});
}

var h = $(".products1").height() - 20;
$(".products2").css({"min-height":h});




if($(window).width() > 600) {
$('.halfs').each(function(i, obj) {
if ( $(this).find(".half1").length ) {
    var h1 = $(this).find(".half1").height();
    var h2 = $(this).find(".half2").height() + 60;

    if(h2 >= h1) {
                $(this).find(".half1").css ({"min-height":h2});
                $(this).find(".half1").find("img").css ({"min-height":h2});
    } else {
                $(this).find(".half1").css ({"min-height":10});
                $(this).find(".half1").find("img").css ({"min-height":10});
    }
}
if ( $(this).find(".half3").length ) {
    var h3 = $(this).find(".half3").height();
    var h4 = $(this).find(".half4").height() + 60;

    if(h4 >= h3) {
                $(this).find(".half3").css ({"min-height":h4});
                $(this).find(".half3").find("img").css ({"min-height":h4});
    } else {
                $(this).find(".half3").css ({"min-height":10});
                $(this).find(".half3").find("img").css ({"min-height":10});
    }
}

});
} else {
  $(".half1").css ({"min-height":10});
  $(".half3").css ({"min-height":10});
  $(".half1").find("img").css ({"min-height":10});
  $(".half3").find("img").css ({"min-height":10});
}



};










$(document).ready(function() {


$( ".menubutt" ).click(function(event) {
if($('#menu').css('display') == 'none') {
  $("#menu").slideDown("fast");
  //$(".header0").addClass("header0black");
} else {
  $("#menu").slideUp("fast");
  //$(".header0").removeClass("header0black");
}
event.preventDefault();
});


$( ".karieracall " ).click(function(event) {
var id = $(this).attr("href");
if($(id).css('display') == 'none') {
  $(id).slideDown("fast");
  $(id+"-close").show();
} else {
  $(id).slideUp("fast");
  $(id+"-close").hide();
}
event.preventDefault();
});



  $('.intro').flexslider({
    animation: "slide", 
    directionNav: false,
    slideshowSpeed: 5000,
    controlNav: true,
    start: sizeContent,// Fires when the slider loads the first slide
    before: sizeContent,// Fires asynchronously with each slider animation
    after: sizeContent,// Fires after each slider animation completes
  });
  


$( ".showhide" ).click(function(event) {
var id = $(this).attr("href");
if($(id).css('display') == 'none') {
  $( id ).slideDown("fast");
} else {
  $( id ).slideUp("fast");
}
event.preventDefault();
});



$( ".pdetailclose" ).click(function(event) {
  $(".pdetail").slideUp("slow");
event.preventDefault();
});




var nextdetail = 0;
$( ".pbutt" ).click(function(event) {
var i = parseInt($(this).attr("data-i"));
var next = Math.ceil(i/3) * 3;
if($(window).width() <= 768) var next =  Math.ceil(i/2) * 2;
if($(window).width() <= 480) var next =  i;
var max = parseInt($(".pcontent").attr("data-max"));
if(next > max) next = max;

nextdetail++;
//console.log(i+" "+next);

$(".pdetail").slideUp("fast");

var link = $(this).attr("data-link");
//console.log(link);
$(".pcontent").load(link, function() {

var content = $(".pcontent").html();
//console.log(content);
$("#pbutt"+next).delay(150).after("<section class='pdetail' id='pdetail"+nextdetail+"'>"+content+"</section>");
$("#pdetail"+nextdetail).delay(300).slideDown("slow", function() {
    var h = $(".products1").height() - 20;
    $(".products2").css({"min-height":h});
    
  var h0 = $("#pdetail"+nextdetail).find(".pdetail1").find("img").height();  
  var h1 = $("#pdetail"+nextdetail).find(".pdetail1").height();
  var h2 = $("#pdetail"+nextdetail).find(".pdetail2").height();
  $("#pdetail"+nextdetail).find(".pdetail1").css({"min-height":h0});
  if(h2 > h1) {
  $("#pdetail"+nextdetail).find(".pdetail1").height(h2);
  }
  $("#pdetail"+nextdetail).find(".pdetail1").find("img").fadeIn("fast");
  //console.log(h1+" "+h2);
});

});



 
event.preventDefault();
});




$( ".triggerclick " ).click(function(event) {
event.preventDefault();
var id = $(this).attr('data-id');
//console.log(id);
        $("#"+id).trigger("click");
});








$( ".slideto" ).click(function(event) {
event.preventDefault();

var xbonus = 0;
if($("body").width() <= 1020) {
$( "#menu" ).slideUp("fast");
}


var id = $(this).attr('href');
if(id == "#dorties")  $(id).slideDown("fast");

if(id == "#uvod" || id == "#top") {
var x = 0;
} else { 


history.pushState({}, "", id);
document.title = id+" | "+$(".header").attr('data-title');



var position = $(id).position();
var x = position.top - xbonus - $('.header').height();
}

$('html, body').animate({scrollTop: x}, 500);
});








$( ".mailform" ).submit(function( event ) {
  event.preventDefault();
  $( "#mailformresult" ).html("loading...");
  $(this).slideUp("fast");
 
  // Get some values from elements on the page:
  var $form = $( this ),
    note = $form.find( "textarea[name='note']" ).val(),
    mail = $form.find( "input[name='mail']" ).val(),
    name = $form.find( "input[name='name']" ).val(),
    type = $form.find( "input[name='type']" ).val(),
    url = $form.attr( "action" );
 
  // Send the data using post
  var posting = $.post( url, { note: note, mail: mail, name: name, type: type } );
 
  // Put the results in a div
  posting.done(function( data ) {
    //var content = $( data ).find( "#content" );
    $( "#mailformresult" ).empty().append( data );
  });
});




$(window).scroll(function () { 
var scrolltop = parseInt($(window).scrollTop());

var h1 = $(".products").position();
var h2 = $(".products21").height();//$(".products22").position();
var limit = h1.top + h2 + 0;//.top
console.log(limit);
//var limit = $(".intro").height() + $(".products21").height() + 0;

if(scrolltop > limit) {
var w = $(".products2").width();
var position0 = 0;//$(".products").position();
var position1 =$(".products2").position();
var x = position0.left + position1.left;
//console.log(position1.left);

$(".products22").css({"position":"fixed","top":100,"width":w,"left":x,"z-index":1000});
} else {
$(".products22").css({"position":"relative","top":"auto","width":"auto","left":"auto"});
}

});



});

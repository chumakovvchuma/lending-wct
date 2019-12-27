// @ts-nocheck
//text animation
$(window).load(function () {
function logoImageIn() {
  $('#animation_container').animate({
    opacity: 1,
    easing: "easein",
  }, 500, function() {
    // Animation complete.
  });
}

function handler() {

  
  $('.instrument').animate({
    opacity: 1,
    easing: "easein",
    height: "toggle"
  }, 500, function() {
    // Animation complete.
    logoOut();
    logoImageIn();
  });
  $('#txt-anim').css( "height", "100");

}
function logoOut() {
  $('.tlt').animate({
    opacity: 0.0,
    easing: "easeout",
    height: "toggle"
  }, 500, function() {
    // Animation complete.
  });
}




$('.tlt').textillate({ 
  in: { effect: 'splat' },
  out: { effect: 'foldUnfold', sync: true },
  loop: false,
  callback: function () {

  }
});


//text animation trigger
$('.tlt').on('inAnimationEnd.tlt', function () {
  $('.tlt').animate({bottom: '+=100'}, 200);
  $('.supp').textillate({ 
    in: { effect: 'splat' },
    out: { effect: 'foldUnfold', sync: true },
    loop: false,
    callback: function () {
    handler();
    }
  });
});

$('.tlt').on('inAnimationStart.tlt', function () {
  $('.tlt').css( "visibility", "visible");
});
$('.supp').on('inAnimationStart.tlt', function () {
  $('.supp').css( "visibility", "visible");
});




//object slide active
$('.btn-slide').click(function(){
  $('#panel').slideToggle('slow');
  $(this).toggleClass('active');
});


//hide object
$(".pane .delete").click(function () {
  $(this).parents(".pane").animate({opacity: 'hide'}, "slow");
});


//image animation
$(".run").click(function () {

  $("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
    .animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
    .animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
    .animate({top: "0"}, "fast")
    .slideUp()
    .slideDown("slow");
  return false;
});


$('.carousel-item.active').data('title')

$('.carousel-item').on('', function () {
  var dataItem = $('.carousel-item.active').data('title');
  $('#project-title').text(dataItem);
});

$('#aboutOne').on('mouseenter', function () {
  $('#aboutOne').css( "background", "green");
  $('#contentAboutOne').css( "visibility", "visible");
});

$('#aboutTwo').on('mouseenter', function () {
  $('#aboutTwo').css( "background", "green");
  $('#contentAboutTwo').css( "visibility", "visible");
});

$('#aboutThree').on('mouseenter', function () {
  $('#aboutThree').css( "background", "green");
  $('#contentAboutThree').css( "visibility", "visible");
});

$('#aboutOne').on('mouseleave', function () {
  $('#aboutOne').css( "background", "none");
  $('#contentAboutOne').css( "visibility", "hidden");
});

$('#aboutTwo').on('mouseleave', function () {
  $('#aboutTwo').css( "background", "none");
  $('#contentAboutTwo').css( "visibility", "hidden");
});

$('#aboutThree').on('mouseleave', function () {
  $('#aboutThree').css( "background", "none");
  $('#contentAboutThree').css( "visibility", "hidden");
});



// $('body').on('wheel', function (event) {
//   event.preventDefault()
//   var wheel = this.wheel;
//   this.wheel = ((event.deltaY * event.deltaFactor) * -1);  
						
//   // (event.preventDefault ? event.preventDefault() : (event.returnValue = false));
//   if($('#link-one').hasClass('mPS2id-highlight-first')
//   ){var hClass = this.hClass;
//     this.hClass = (event.hasClass);
//     scrollHandlerTwo()
    
//     }else{
//       scrollHandlerOne()
     
//     }
// }, {
//   passive: false
// }).trigger( "wheel", "hClass" );

// 0500771748




// function preventSelfcallCallback (event) {
//   event.preventDefault();
// }

// function ActiveScreen (firstScreen, twoScreen) {
//   // Set some attributes, so we can see something happen

//   this.firstScreen=Boolean;
//   this.twoScreen=Boolean;
//   // Now bind our recursivity preventer
//   //  since our methods will be named like the events
//   $(this).bind('firstScreenActive firstScreenFalse',preventSelfcallCallback);
//   // Note that a unbind or a namespaced trigger could
//   //  pretty much throw us into infinite loop! 
//   //  maybe it's better to use some kind of slot object
//   //  for event binding. 
// }


// ActiveScreen.prototype.firstScreenActive=function() {
//   if($('#link-one').hasClass('mPS2id-highlight')
//   ) {
//     this.firstScreen=true;
//   } else {
//     this.firstScreen=false;
//   }
  
//   $(this).trigger('firstScreenActive');
// }

// ActiveScreen.prototype.firstScreenFalse=function() {
//   if($('#link-two').hasClass('mPS2id-highlight')
//   ) {
//     this.twoScreen=true;
//   } else {
//     this.twoScreen=false;
//   }
  
//   $(this).trigger('firstScreenFalse');
// }
// //instans
// var trueInstance=new ActiveScreen('my first instance');
// var falseInstance=new ActiveScreen('my second instance');

// // First bin a increase handler to the first instance
// $(trueInstance).bind('firstScreenActive',function(){
//   console.log(this.firstScreen);
  
// })
// // Another increase handler, this time namespaced
// $(falseInstance).bind('firstScreenFalse',function(){
//   console.log(this.twoScreen);
  
// })

// trueInstance.firstScreenActive()
// falseInstance.firstScreenFalse()
// // And a namespaced decrease handler




// var dispatcher=$({});
// dispatcher.bind('.screen-instance','.screen-instance-false',function(){
//   console.log('Still a hack, but better');
// })
// dispatcher.trigger('.screen-instance', '.screen-instance-false');


// $('body').on('wheel', function (firstScreen) {
  



// if (firstScreen === true) {
//   $.mPageScroll2id("scrollTo","#link-two",{
//     clicked:$(this)
//   });
// } else {
//   $.mPageScroll2id("scrollTo","#link-one",{
//     clicked:$(this)
//   });
// }

// });
// }





// function Foobar(){}


// Foobar.prototype.aCall=function(){
//   console.log('call method!');
// }

// Foobar.prototype.aWheel=function(){
//   console.log('aWheel');
// }


// var foobar=new Foobar();

// $(foobar).bind('aWheel', function () {
//   console.log('aWheel handler');
// })

// $(foobar).bind('aCall',function(){
//   console.log('call handler');
// });

// $(foobar).trigger('aCall');
// $(foobar).trigger('aWheel');


// console.log(JSON.stringify( $(foobar).data('events') ));



// var canceled = !cb.dispatchEvent(evt);
//   if(canceled) {
//     // A handler called preventDefault
//     alert("canceled");
//   } else {
//     // None of the handlers called preventDefault
//     alert("not canceled");
//   }

// _mPS2id-h mPS2id-highlight mPS2id-highlight-first mPS2id-highlight-last
// _mPS2id-h mPS2id-highlight mPS2id-highlight-first mPS2id-highlight-last

// function onWheel(e) {
//   e = e || window.event;
//   // wheelDelta не даёт возможность узнать количество пикселей
//   var delta = e.deltaY || e.detail || e.wheelDelta;
//   var info = document.getElementById('delta');
//   info.innerHTML = +info.innerHTML + delta;
//   e.preventDefault ? e.preventDefault() : (e.returnValue = false);
// }
// var elem = document.getElementById('containerr');
// elem.addEventListener("wheel", onWheel);
})
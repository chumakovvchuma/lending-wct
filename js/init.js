(function($){
  $(function(){
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
      pageEndSmoothScroll:true
    });
    $('.sidenav').sidenav();
    $('.carousel').carousel({
      indicators: true,
      numVisible: 7,
      padding:100
    });
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  $('.items-wrapper').isotope({
  itemSelector: '.item',
  filter: "*"
});
 
$('.menu li').click(function(){
  var selector = $(this).attr('data-filter');
  
  $('.items-wrapper').isotope({
    filter: selector,
  })
  //changing active class with click event
  $('.menu li.active').removeClass('active');
  $(this).addClass('active');
});
 
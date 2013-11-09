$(function(){

//menu button handling for touch screens
$('header ul').on('click', function(){
	$(this).toggleClass('.vis');
});

//slow jump event
$('a.slow-jump').on('click', function(e){
	e.preventDefault();
	goToByScroll($(this).attr('href'));
	return false;
});


//jumplink handler
function goToByScroll(id){
$('html,body').animate({scrollTop: $(id).offset().top}, 3000, 'easeOutQuint');
};


});
			
$(document).ready(function() {
	$('.afisha').each(function(){
		$(this).children('li:odd').addClass('odd');
	}),
	$('.line-gallery').jcarousel({
    	wrap: 'circular'
    }),
	$('.opinion-type-tabs span').click(function(){
		i = $(this).parent().index();
		$('.opinion-type-tabs span').removeClass('current');
		$(this).addClass('current');
		$('.opinion-type-content li').removeClass('current');
		$('.opinion-type-content li:eq('+i+')').addClass('current');
	}),
	$('.add-photo').click(function(){
		$(this).next(':file').click();
	}),
	$('.social-tabs li').click(function(){
		i = $(this).index();
		$('.social-tabs li').removeClass('current');
		$(this).addClass('current');
		$('.social-tabs-content li').removeClass('current');
		$('.social-tabs-content li:eq('+i+')').addClass('current');
	});
});

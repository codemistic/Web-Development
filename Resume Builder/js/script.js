$(document).ready(function(){
	$('#toTop').hide();
	var currentPage='#information';
	$(currentPage).show().animate({marginTop:0},500);
	
	$('.nav li a').click(function(e){
		var newPage=$(this).attr('href');
		$(this).parents('ul').find('a').removeClass('active');
		if(newPage!='#information')
			$(this).addClass('active');
		$(currentPage).hide().animate({marginTop:50},500);
		$(newPage).show().animate({marginTop:0},500);
		if(newPage=='#profile')
		{
			$('#profile').accordion({
				header:'.collapse',
				heightStyle: "content",
				collapsible: true,				
			});
		}
		else if(newPage=='#portfolio')
		{
			$('.portfolio-details').isotope({
				itemSelector: '.portfolio-post',
				layoutMode: 'fitRows'
			});
			
			$('#portfolio-filters li a').click(function(e){
				var myFilter = $(this).attr('href');
				$('.portfolio-details').isotope({ filter: myFilter });
				$(this).parents('ul').find('a').removeClass('current');
				$(this).addClass('current');
				e.preventDefault();
			});
		}
		
		currentPage=newPage;
		e.preventDefault();
	});
	
	$(window).scroll(function(){
		
		if($(window).scrollTop()>=100)
			$('#toTop').show();
		else
			$('#toTop').hide();
		
	});
	$('#toTop').click(function(e){
		$('body').animate({scrollTop:0},1000);
		e.preventDefault();
	});
	
});
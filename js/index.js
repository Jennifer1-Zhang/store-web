$(function(){
	$('.side_nav ul>li').hover(function(){
		$(this).find('#show').css('display','block')
	},function(){
		$(this).find('#show').css('display','none')
	})
})
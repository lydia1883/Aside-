/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 15:56:30
 * @version $Id$
 */

require.config({
	paths:{
		jquery:'jquery-2.1.4'
	}
});

requirejs(['jquery','backTop'],function ($,backTop){



	 /*new backTop.BackTop($("#backtop"),{
	 	mode:'go',	
	 	speed:1000//速度
	 });*/
	
	$("#backtop").backtop({
		mode:'move'
	});
   





	/*var scroll=new scrollTo.ScrollTo({
		dest:0,
		speed:800
	});

	$("#backtop").on( "click",$.proxy(scroll.move,scroll) );
	
	/*$(window).on("scroll",function(){

		checkPos( $(window).height() );
	});
	checkPos($(window).height());

	function move(){
		$('html,body').animate({
			scrollTop:0//返回顶部
		},800);
	}
	function go(){
		$('html,body').scrollTop(0);
	}

	function checkPos(pos){   //检查位置

		if( $(window).scrollTop() > pos ){
			$('#backtop').fadeIn();
		}else{

			$('#backtop').fadeOut();
		}
	}
	*/


});
  

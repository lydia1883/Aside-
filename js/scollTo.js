/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 16:10:29
 * @version $Id$
 */

define(['jquery'],function ($){

	function ScrollTo(opt){
	  this.opts=$.extend( {} ,ScrollTo.settings,opt || {} );
	  this.$el=$('html,body');
	 
	}
	ScrollTo.settings={//配置参数
		dest:0,
		speed:200,
	};
	ScrollTo.prototype.move=function(){

		 var opts=this.opts;

		 if( $(window).scrollTop() !=opts.dest ){
		 	if(!this.$el.is(":animated")){
		 		 this.$el.animate({
					scrollTop:opts.dest
				},opts.speed);
		 	}
		 }
		
	};
	ScrollTo.prototype.go=function(){

		if( $(window).scrollTop() !=this.opts.dest ){
		 this.$el.scrollTop(this.opts.dest);
		}
	};

	return {
		ScrollTo:ScrollTo
	}

});
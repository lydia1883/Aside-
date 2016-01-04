/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 16:43:37
 * @version $Id$
 */


define(['jquery','scollTo'],function($,scollTo){

	function BackTop(ele,opts){

		this.opts=$.extend({},BackTop.settings,opts||{});
		this.$el=$(ele);
		this.scollTo=new scollTo.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});

		if(this.opts.mode=='move'){
		 this.$el.on( "click",$.proxy( this._move , this ) );
		}else{
		 this.$el.on( "click",$.proxy( this._go , this ) );	
		}	
		$(window).on("scroll",$.proxy( this._checkPos , this ) );
		
		$.proxy( this._checkPos , this )();
	
	}

	BackTop.settings={

		mode:'move',
		pos:$(window).height(),
		speed:800
	};

	BackTop.prototype._move=function(){

		this.scollTo.move();
	};
	BackTop.prototype._go=function(){

		this.scollTo.go();
	};
	BackTop.prototype._checkPos=function(){

		var $el=this.$el;

		if( $(window).scrollTop() > this.opts.pos ){
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	};

	$.fn.extend({

		backtop:function(opts){	

		 this.each(function(){
		 	new BackTop(this,opts);
		 });	

		 return this;	
		}


	})

	return {
		BackTop:BackTop
	}

})
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-03 16:43:21
 * @version $Id$
 */

  requirejs.config({
  	  paths:{
  	  	jquery:'jquery-1.11.3'//配置别名
  	  }

  });

  requirejs(['jquery', 'vak'],function ($, hi){  //依赖jquery

  	  $("body").css("background","#000");
  	 // console.log(hi.isEqual(1,2));

  	console.log(hi.isEqual(1, 1));
  	  

  });

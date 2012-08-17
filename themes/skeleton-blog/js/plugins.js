<!-- /////////////////////////// Credits & License
/*
	* XOOPS Cube Legacy 2.2.x
	* XCL Theme Skeleton Blog
	* by Nuno Luciano
	* http://nunoluciano.info
	* https://github.com/gigamaster
	* License : Creative Commons
	* Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)
	* http://creativecommons.org/licenses/by-sa/3.0/
	* 27/07/2012
	*/
	 s--> 

	/////////////////////////// Twitter Account
	
	$(document).ready(function() {
		$(".tweet").tweet({
			username: "nunoluciano",
			count: 3,
			loading_text: "loading tweets..."
		});
	});
	
	
	/////////////////////////// Flickr Account Feed
	// Check your Flickr id here :
	// http://idgettr.com/

	$(document).ready(function() {
		$('div.flickr').flickrush({
			limit:6,
			id:'46756575@N00',
			random:true
		}); 
	});

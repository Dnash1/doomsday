
$(window).load(function() {
	console.log("main.js linked");

	if ($(window).width < 480) {
		// console.log("boop");
		// $("#gallery").unitegallery({
		// 	tile_width: 80,
		// 	tile_height: 50,
		// 	gallery_theme: "tilesgrid",
		// 	grid_padding:0,
		// 	grid_space_between_cols: 0,
		// 	grid_space_between_rows: 0,
		// 	gallery_min_width: 10,
		// 	tile_enable_border: false,		
		// 	tile_enable_shadow: false,
		// 	tile_space_between_icons: 0,
		// 	theme_navigation_type: "none",
		// 	grid_num_rows: 5,
		// 	tile_enable_overlay: false,
		// 	tile_enable_icons: false,
		// 	tile_enable_image_effect: true,
		// 	tile_image_effect_type: "bw",
		// 	tile_enable_textpanel: true,
		// 	lightbox_show_numbers: false,
		// 	lightbox_textpanel_enable_description: true
		// });
		// $('.parallax-window').parallax({imageSrc: './img/cover2.jpg'});
		// $('.parallax-window2').parallax({imageSrc: './img/2.jpg'});
		// $('.parallax-window3').parallax({imageSrc: './img/5.jpg'});
		// $('.parallax-window4').parallax({imageSrc: './img/1.jpg'});
		// $('#whisper').parallax({imageSrc: './img/3a.jpg', speed: 0.4});
		// $('#arm').parallax({imageSrc: './img/6.jpg', speed: 0.4});
	} else {
		$("#gallery").unitegallery({
			gallery_theme: "tilesgrid",
			grid_padding:0,
			grid_space_between_cols: 0,
			grid_space_between_rows: 0,
			gallery_min_width: 10,
			tile_enable_border: false,		
			tile_enable_shadow: false,
			tile_space_between_icons: 0,
			theme_navigation_type: "none",
			grid_num_rows: 5,
			tile_enable_overlay: false,
			tile_enable_icons: false,
			tile_enable_image_effect: true,
			tile_image_effect_type: "bw",
			tile_enable_textpanel: true,
			lightbox_show_numbers: false,
			lightbox_textpanel_enable_description: true
		});
		$('.parallax-window').parallax({imageSrc: './img/cover.jpg'});
		$('.parallax-window2').parallax({imageSrc: './img/2.jpg'});
		$('.parallax-window3').parallax({imageSrc: './img/5.jpg'});
		$('.parallax-window4').parallax({imageSrc: './img/1.jpg'});
		$('#whisper').parallax({imageSrc: './img/3.jpg', speed: 0.4});
		$('#arm').parallax({imageSrc: './img/6.jpg', speed: 0.4});
	}


})
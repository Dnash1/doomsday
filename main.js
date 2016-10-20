$(window).load(function() {
	console.log("main.js linked")
	$("#gallery").unitegallery({
		gallery_theme: "tilesgrid",
		grid_padding:0,
		grid_space_between_cols: 0,
		grid_space_between_rows: 0,
		tile_enable_border: false,		
		tile_enable_shadow: false,
		tile_space_between_icons: 0,
		theme_navigation_type: "none",
		grid_num_rows: 4,
		tile_enable_overlay: false,
		tile_enable_icons: false,
		tile_enable_image_effect: true,
		tile_image_effect_type: "bw"
	});
	$('.parallax-window').parallax({imageSrc: './img/cover.jpg'});
	$('.parallax-window2').parallax({imageSrc: './img/2.jpg'});
	$('.parallax-window3').parallax({imageSrc: './img/5.jpg'});
	$('.parallax-window4').parallax({imageSrc: './img/1.jpg'});
	$('#whisper').parallax({imageSrc: './img/3.jpg', speed: 0.4});
	$('#arm').parallax({imageSrc: './img/6.jpg', speed: 0.4});
})
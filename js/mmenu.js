$(function() {
//	create a menu
$('#menu').mmenu({
	extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right']
});
//	fire the plugin
$('.mh-head.first').mhead({
	scroll: false
});
$('.mh-head.second').mhead({
	scroll: {
		hide: 200
	}
});
});
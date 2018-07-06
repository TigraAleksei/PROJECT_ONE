$(function() {
//	create a menu
$('#menu').mmenu({
	extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
	navbar: {
		title: '<img src="../img/airplane-shape.svg" alt="Самолет">'
	}
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
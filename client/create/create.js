Template.accessControl.events({
	"click .btn" : function () {
		var dropdown = $('#login-dropdown-list');

		if ( dropdown.hasClass('open') ) {
			dropdown.addClass('glow');
		} else {
			dropdown.addClass('open');
		}
	}
});
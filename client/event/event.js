Template.event.events({
	"click .link" : function () {
		Meteor.call('attendEvent', this._id);
		$('.link').html("Event added!");
		$('.link').removeClass('link');
	}	
});
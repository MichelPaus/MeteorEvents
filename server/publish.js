Meteor.publish('Events', function () {
	return Events.find();
});

Meteor.publish('myEvents', function() {
	return myEvents.find();
});
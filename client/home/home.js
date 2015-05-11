Template.home.helpers({
	events: function () {
		var events = Events.find({}, {sort: {createdAt: -1}});

		return events;
	},
	myevents: function () {
		var myevents = myEvents.find({user: Meteor.userId()});
		return myevents;
	},
	countEvents: function () {
		return Events.find().count();
	}
});

Template.list.helpers({
	isOwner: function() {
		console.log(this.owner);
		return this.owner === Meteor.userId();
	}
});

Template.list.events({
	"click .delete" : function () {
		Meteor.call('removeEvent', this._id);
	},
	"click .attend" : function () {
		Meteor.call('attendEvent', this._id);
	}
});

Template.short.events({
	"click .remove" : function () {
		Meteor.call('unattendEvent', this.eventId);
	}
})
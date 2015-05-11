Meteor.methods({
	createEvent: function (doc) {
		
		var title = doc.title,
			content = doc.content,
			date = doc.date,
			private = doc.private;

		if (! this.userId) {
			throw new Meteor.Error("not-authorized");
		}

		Events.insert({
			title: title,
			content: content,
			date: date,
			owner: this.userId,
			createdAt: new Date()
		});
	},
	removeEvent: function (eventId) {
		var event = Events.findOne(eventId);

		if ( event.owner !== Meteor.userId() ) {
			throw new Meteor.Error('not-authorized');
		} else {
			Events.remove(eventId);
		}
	},
	attendEvent: function(eventId) {
		var event = myEvents.findOne({
			user: Meteor.userId(),
			eventId: eventId
		});

		if ( event ) {
			throw new Meteor.Error('already-attending');
		} else {
			myEvents.insert({
				eventId: eventId,
				user: Meteor.userId()
			});			
		}
	},
	unattendEvent: function (eventId) {
		var event = myEvents.findOne({
			user: Meteor.userId(),
			eventId: eventId
		});

		myEvents.remove(event._id);
	}
})
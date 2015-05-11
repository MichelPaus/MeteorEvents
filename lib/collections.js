Events = new Mongo.Collection('events');

var Schemas = {};

Schemas.Event = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	content: {
		type: String,
		label: "Content"
	},
	date: {
		type: Date,
		label: "Event's date",
		autoform: {
			type: "bootstrap-datepicker"
		}
	}
});

Events.attachSchema(Schemas.Event);


myEvents = new Mongo.Collection('myevents');
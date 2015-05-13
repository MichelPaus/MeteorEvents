
var DateFormats = {
	short: "DD MMMM - YYYY",
	long: "dddd DD.MM.YYY HH:mm"
};

UI.registerHelper("formatDate", function(datetime, format) {
	if (moment) {
		format = DateFormats[format] || format;
		return moment(datetime).fromNow();
	} else {
		return datetime;
	}
});

UI.registerHelper("eventTitle", function(eventId) {
	var event = Events.findOne(eventId);
	return event.title;
})
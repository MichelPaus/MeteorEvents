Template.navigation.helpers({

	curIsCreate: function (url) {
		var curUrl = Iron.Location.get().path;
		return curUrl == '/create';
	}
});
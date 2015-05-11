Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',

	waitOn: function() {
	    return [
	      Meteor.subscribe('Events'),
	      Meteor.subscribe('myEvents')
	    ];
	}
});

if (Meteor.isClient) {
	Router.onBeforeAction('loading');
}
Router.map( function () {
	this.route('home', {
		path: '/'
	});
	this.route('create', {
		path: '/create',
		onBeforeAction: function () {
			if ( ! Meteor.userId() ) {
				this.render('accessControl');
			} else {
				this.next();
			}
		}
	});
	this.route('event',{
		path: '/event/:_id',
		data: function () {
			return Events.findOne({_id: this.params._id})
		}
	});
	this.route('accessControl', {
		path: '/no-access'
	});
});
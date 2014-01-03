window.App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("services");
  this.route("galleries");
  this.route("articles");
  this.route("contact");
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();
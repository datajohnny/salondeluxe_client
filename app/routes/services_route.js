App.ServicesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('service');
  }
});
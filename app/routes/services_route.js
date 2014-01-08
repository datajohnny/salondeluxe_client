App.ServicesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('service');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('services').set('filtered_categories', model);
  }
});
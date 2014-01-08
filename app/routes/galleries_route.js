App.GalleriesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('gallery');
  }
});
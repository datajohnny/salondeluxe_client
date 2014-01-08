App.ServicesController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  filtered_categories: [],

  actions: {
    showAll: function() {
      this.set('filtered_categories', this.get('content'));
    },

    hideOthers: function(category) {
      this.set('filtered_categories', this.get('content').filterBy('category', category));
    }
  }
});
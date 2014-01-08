App.ServicesController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  filtered_categories: [],
  self: this,

  actions: {
    showAll: function() {
      this.set('filtered_categories', this.get('content'));
      // view manipulation
      self.$('dd.active').removeClass('active');
      self.$('#all-services').addClass('active');
    },

    hideOthers: function(category) {
      var all_categories = this.get('content');
      var filtered_categories = this.get('content').filterBy('category', category);
      this.set('filtered_categories', filtered_categories);
      // view manipulation
      var category_filter_id = "#" + category + "-filter";
      self.$('dd.active').removeClass('active');
      self.$(category_filter_id).addClass('active');
    }
  }
});
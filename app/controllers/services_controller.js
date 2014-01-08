App.ServicesController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  filtered_categories: [],

  actions: {
    showAll: function() {
      this.set('filtered_categories', this.get('content'));
      this.$('dd.active').removeClass('active');
      this.$('#all-services').addClass('active');
    },

    hideOthers: function(category) {
      var all_categories = this.get('content');
      var filtered_categories = this.get('content').filterBy('category', category);
      this.set('filtered_categories', filtered_categories);
      var category_filter_id = "#" + category + "-filter";
      this.$('dd.active').removeClass('active');
      this.$(category_filter_id).addClass('active');
    }
  }
});
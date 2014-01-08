App.ServicesListView = Ember.View.extend({
  templateName: 'services/list',

  didInsertElement: function() {
    this.$().fadeIn("slow");
  },

  willDestroyElement: function() {
    this.$().fadeOut("slow");
  }
});
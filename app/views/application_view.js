App.ApplicationView = Ember.View.extend({
  classNames: ['container'],
  didInsertElement: function() {
    this.$().foundation();
  }
});
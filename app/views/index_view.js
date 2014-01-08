App.IndexView = Ember.View.extend({
  classNames: ['index', 'row'],

  didInsertElement: function() {
    this.$().foundation('orbit');
    this.$('.orbit-timer').hide();
    Ember.run.next(this, function() {
      this.$('.orbit-container').resize();
    });
  }
});
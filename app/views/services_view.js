App.ServicesView = Ember.CollectionView.extend({
  classNames: ['services', 'row'],
  itemViewClass: Ember.View.extend({
    didInsertElement: function() {
      console.log("inserted");
    },
    willDestroyElement: function() {
      console.log("deleted");
    }
  })
});
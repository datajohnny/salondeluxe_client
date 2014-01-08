App.ServicesView = Ember.CollectionView.extend({
  classNames: ['services', 'row'],
  contentBinding: 'controller',

  itemViewClass: Ember.View.extend({
    templateName: 'services/item',

    didInsertElement: function() {
      console.log("inserted");
    },
    willDestroyElement: function() {
      console.log("deleted");
    }
  })
});
App.ServicesView = Ember.View.extend({
  classNames: ['services', 'row'],

/*
  actions: {
    showAll: function() {
      this.$('dd.active').removeClass('active');
      this.$('#all-services').addClass('active');
      this.$('li.service').fadeIn("slow");
    },

    hideOthers: function(category) {
      this.$('dd.active').removeClass('active');
      if (category == "cabello") {
        this.$('#cabello-filter').addClass('active');
        this.$('li.manos-pies').fadeOut("slow");
        this.$('li.estetica').fadeOut("slow");
        this.$('li.cabello').fadeIn("slow");
      }
      else if(category == "manos-pies") {
        this.$('#manos-pies-filter').addClass('active');
        this.$('li.cabello').fadeOut("slow");
        this.$('li.estetica').fadeOut("slow");
        this.$('li.manos-pies').fadeIn("slow");
      }
      else if(category == "estetica") {
        this.$('#estetica-filter').addClass('active');
        this.$('li.estetica').fadeOut("slow");
        this.$('li.manos-pies').fadeOut("slow");
        this.$('li.estetica').fadeIn("slow");
      }
    }
  }
*/
});
App.Service = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  time: DS.attr('number'),
  category: DS.attr('string')
});
App.Gallery = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  photos: DS.hasMany('photo')
});

App.Gallery.FIXTURES = [
  {id: 1, name: "Gallery 1", image: "images/1.jpg", photos: ["1", "2"]},
  {id: 2, name: "Gallery 2", image: "images/2.jpg", photos: ["3", "4"]}
];
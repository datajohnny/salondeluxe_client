App.Photo = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  gallery: DS.belongsTo('gallery')
});

App.Photo.FIXTURES = [
  { id: 1, name: "Photo 1", description: "Description 1", image: "images/photos/photo-1.jpg", gallery: "1"},
  { id: 2, name: "Photo 2", description: "Description 2", image: "images/photos/photo-2.jpg", gallery: "1"},
  { id: 3, name: "Photo 3", description: "Description 3", image: "images/photos/photo-3.jpg", gallery: "2"},
  { id: 4, name: "Photo 4", description: "Description 4", image: "images/photos/photo-4.jpg", gallery: "2"}
];
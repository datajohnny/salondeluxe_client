test("Application", function() {
  visit("/").then(function() {
    ok(exists(".container"), "Application was rendered.");
  });
});
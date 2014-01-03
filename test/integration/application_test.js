test("Application", function() {
  visit("/").then(function() {
    ok(exists(".container"), "Application was rendered.");
  });
});

test("Navigation", function() {
  visit("/").then(function() {
    ok(exists(".navigation"), "Navigation component was rendered.");
  });
});

test("Index", function() {
  visit("/").click("#nav-index").then(function() {
    ok(exists(".index"), "Index was rendered.");
  });
});

test("About", function() {
  visit("/").click("#nav-about").then(function() {
    ok(exists(".about"), "About was rendered.");
  });
});

test("Services", function() {
  visit("/").click("#nav-services").then(function() {
    ok(exists(".services"), "Services was rendered.");
  });
});

test("Galleries", function() {
  visit("/").click("#nav-galleries").then(function() {
    ok(exists(".galleries"), "Galleries was rendered.");
  });
});

test("Articulos", function() {
  visit("/").click("#nav-articles").then(function() {
    ok(exists(".articles"), "Articles was rendered.");
  });
});

test("Contact", function() {
  visit("/").click("#nav-contact").then(function() {
    ok(exists(".contact"), "Contact was rendered.");
  });
});
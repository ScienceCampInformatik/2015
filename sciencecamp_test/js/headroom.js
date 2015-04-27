var elem = document.getElementById("sticker");
// construct an instance of Headroom, passing the element

var headroom = new Headroom(elem, {
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
// initialise
headroom.init();
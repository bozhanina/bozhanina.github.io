$( ".image1" ).click(function() {
  $(".backbutton").css("visibility", "hidden");
});
$( ".close" ).click(function() {
  $(".backbutton").css("visibility", "visible");
});

function switchStyle() {
  
  if (document.getElementById('styleSwitch').checked) {
    document.getElementById('gallery').classList.add("custom");
    document.getElementById('exampleModal').classList.add("custom");
  } else {
    document.getElementById('gallery').classList.remove("custom");
    document.getElementById('exampleModal').classList.remove("custom");
  }
}

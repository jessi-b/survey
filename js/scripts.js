$(document).ready(function() {
  $("#survey").submit(function() {
    const name = $("#nameInput").val();
    const food = $("#food").val();
    const genre = $("input:radio[name=genre]:checked").val();
    const faveDay = $("#faveDay").val();
    const favoriteColor = $("#color").val();
  });
});
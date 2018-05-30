// Check Off Todos By Clicking
$("ul").on("click", "li", function () {
 $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function (event) {
 $(this).parent().fadeOut(500, function () {
  $(this).remove();
 });
 event.stopPropagation();
})

// Creating New Todos
$("input[type='text']").keypress(function (event) {
 if (event.which === 13) {
  var todoText = $(this).val(); /*grabbing new todo text from input*/
  $(this).val(""); /*clearing the input*/
  $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"); /*create a new li and add to the ul*/
 }
});

// the plus button

$("#toggle-form").click(function () {
 $("input[type = 'text']").fadeToggle();
});
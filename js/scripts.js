function Item(task, notes) {
  this.task = task;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#toDoList").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task").val();
    var inputtedNotes = $("input#notes").val();

    var newItem = new Item(inputtedTask, inputtedNotes);

    $("ul#items").append("<li><span class='item'>" + newItem.task + "</span></li>");

    $(".item").last().click(function() {
      $("#show-item").show();
      $("#show-item h2").text(newItem.task);
      $(".task").text(newItem.task);
      $(".notes").text(newItem.notes);
    });
    $("input#task").val("");
    $("input#notes").val("");
  });
});

$(document).ready(function() {
  function addRemoveClass(theRows) {
    theRows.removeClass("odd even");
    theRows.filter(":odd").addClass("odd");
    theRows.filter(":even").addClass("even");
  }

  var rows = $("table#listTable tr:not(:first-child)");

  addRemoveClass(rows);

  $("#selection").on("change", function() {
    var selected = this.value;
    console.log(selected);

    if (selected != "All") {
      rows.filter("[category=" + selected + "]").show();
      rows.not("[category=" + selected + "]").hide();
      var visibleRows = rows.filter("[category=" + selected + "]");
      addRemoveClass(visibleRows);
    } else {
      rows.show();
      addRemoveClass(rows);
    }
  });
});

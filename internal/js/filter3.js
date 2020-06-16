$(document).ready(function() {
  function addRemoveClass(theRows) {
    theRows.removeClass("odd even");
    theRows.filter(":odd").addClass("odd");
    theRows.filter(":even").addClass("even");
  }

  addRemoveClass(rows);

  $("#selection").on("change", filter);

  $("#selection2").on("change", filter);
});

function filter() {
  var rows = $("table#listTable tr:not(:first-child)");
  var selected = $("#selection").value;
  var selected2 = $("#selection2").value;
  console.log(selected);
  console.log(selected2);

  if (selected != "All") {
    rows.filter("[category=" + selected + "]").show();
    rows.filter("[level=" + selected2 + "]").show();
    rows.not("[category=" + selected + "]").hide();
    rows.not("[level=" + selected2 + "]").hide();
    var visibleRows = rows.filter("[category=" + selected + "]");
    var visibleRows = rows.filter("[level=" + selected2 + "]");
    addRemoveClass(visibleRows);
  } else {
    if (selected2 != "All") {
      rows.filter("[category=" + selected2 + "]").show();
      rows.not("[level=" + selected2 + "]").hide();
      var visibleRows = rows.filter("[level=" + selected2 + "]");
      addRemoveClass(visibleRows);
    } else {
      rows.show();
      addRemoveClass(rows);
    }
  }
}

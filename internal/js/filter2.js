$(document).ready(function() {
  function addRemoveClass(theRows) {
    theRows.removeClass("odd even");
    theRows.filter(":odd").addClass("odd");
    theRows.filter(":even").addClass("even");
  }

  var rows = $("table#listTable tr:not(:first-child)");

  addRemoveClass(rows);

  $("#selection").on("change", function() {
    var category = this.value;
    var level = document.getElementById("selection2").value;
    console.log(category);
    console.log(level);

    if (category != "All") {
      rows.filter("[category=" + category + "]").show();
      rows.not("[category=" + category + "]").hide();
      var visibleRows = rows.filter("[category=" + category + "]");
      addRemoveClass(visibleRows);
      rows.filter("[level=" + level + "]").show();
      rows.not("[level=" + level + "]").hide();
      var visibleRows2 = rows.filter("[level=" + level + "]");
      addRemoveClass(visibleRows2);
    } else {
      if (level != "All") {
        rows.show();
        rows.filter("[level=" + level + "]").show();
        rows.not("[level=" + level + "]").hide();
        var visibleRows = rows.filter("[level=" + level + "]");
        addRemoveClass(visibleRows);
      } else {
        rows.show();
        addRemoveClass(rows);
      }
    }
  });

  $("#selection2").on("change", function() {
    var level = this.value;
    var category = document.getElementById("selection").value;
    console.log(level);
    console.log(category);

    if (level != "All") {
      rows.filter("[level=" + level + "]").show();
      rows.not("[level=" + level + "]").hide();
      var visibleRows = rows.filter("[level=" + level + "]");
      rows.filter("[category=" + category + "]").show();
      rows.not("[category=" + category + "]").hide();
      var visibleRows2 = rows.filter("[category=" + category + "]");
      addRemoveClass(visibleRows2);
    } else {
      if (category != "All") {
        rows.show();
        rows.filter("[category=" + category + "]").show();
        rows.not("[category=" + category + "]").hide();
        var visibleRows = rows.filter("[category=" + category + "]");
        addRemoveClass(visibleRows);
      } else {
        rows.show();
        addRemoveClass(rows);
      }
    }
  });
});

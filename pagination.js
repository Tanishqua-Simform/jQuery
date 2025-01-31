$(document).ready(function () {
  let currentPage = 1;
  const perPage = 15;
  const apiUrl = "https://jsonplaceholder.typicode.com/comments";
  let totalData = [];

  function loadTable(page) {
    let start = (page - 1) * perPage;
    let end = start + perPage;
    let paginatedData = totalData.slice(start, end);

    $(".comments").empty();

    let headingRow = "<tr class='heading'></tr>";
    $(".comments").append(headingRow);

    Object.keys(totalData[0]).forEach(function (head) {
      $(".heading").append("<th>" + head + "</th>");
    });

    paginatedData.forEach(function (row, index) {
      let rowClass = "row" + index;
      $(".comments").append('<tr class="' + rowClass + '"></tr>');

      Object.keys(row).forEach(function (col) {
        $("." + rowClass).append("<td>" + row[col] + "</td>");
      });
    });
  }

  $.getJSON(apiUrl, function (data, status) {
    if (status === "success") {
      totalData = data;
      loadTable(currentPage);
    } else {
      alert("Something went wrong");
    }
  });

  $("body").append(
    '<button id="prev">Previous</button> <button id="next">Next</button>'
  );

  $("#prev").click(function () {
    if (currentPage > 1) {
      currentPage--;
      loadTable(currentPage);
    }
  });

  $("#next").click(function () {
    if (currentPage * perPage < totalData.length) {
      currentPage++;
      loadTable(currentPage);
    }
  });
});

$(document).ready(function () {
  //   $(".data").mouseover(function () {
  //     $(this).css("background-color", "blue");
  //   });
  //   $(".data").mouseleave(function () {
  //     $(this).css("background-color", "white");
  //   });

  $.getJSON(
    "https://jsonplaceholder.typicode.com/comments",
    function (data, status) {
      if (status === "success") {
        console.log(status);
        Object.keys(data[0]).forEach(function (head) {
          $(".heading").append("<th>" + head + "</th>");
        });
        let index = 0;
        data.forEach(function (row) {
          $(".comments").append('<tr class="row' + index + '"></tr>');
          const rowid = `.row${index}`;
          Object.keys(row).forEach(function (col) {
            $(rowid).append("<td>" + row[col] + "</td>");
          });
          index++;
        });
      } else {
        console.log(status);
        alert("Something went wrong");
      }
    }
  );
});

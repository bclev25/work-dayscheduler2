$(document).ready(function() {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  function updateHourlyStatus() {
    var currentHour = dayjs().hour();

    $(".row").each(function() {
      var rowHour = parseInt($(this).find(".saveBtn").data("hour"));

      if (rowHour < currentHour) {
        $(this).find("description").addClass("past");
      } else if (rowHour === currentHour) {
        $(this).find(".description").addClass("present");
      } else {
        $(this).find(".description").addClass("future");
      }
    });
  }

  updateHourlyStatus();

  $(".saveBtn").on("click", function() {
    var hour = $(this).data("hour");
    var text = $("#text-" + hour).val();

    localStorage.setItem("event-" + hour, text);
  });

  $(".description textarea").each(function() {
    var hour = $(this).attr("id").split("-")[1];
    var savedEvent = localStorage.getItem("event-" + hour);

    if (savedEvent) {
      $(this).val(savedEvent);
    }
  });
});


























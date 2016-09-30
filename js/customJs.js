
      $(document).ready(function () {
         
          $("#btnApply").click(function () {
              $($("#inputTarget").val()).css($("#inputProperty").val(), $("#inputValue").val());
          });

          $("#listTargets li a").click(function () {
              $("#inputTarget").val($(this).text());
          });
          $("#listProperties li a").click(function () {
              $("#inputProperty").val($(this).text());
          });

          $("#change-bg").click(function () {
              $("#inputTarget").val("#c"), $("#inputProperty").val("background-color"), $("#inputValue").val("green");
              $("#btnApply").click();
          })
          $("#change-border").click(function () {
              $("#inputTarget").val(".box"), $("#inputProperty").val("border"), $("#inputValue").val("5px dashed black");
              $("#btnApply").click();
          })
          $("#change-height").click(function () {
              $("#inputTarget").val("#a"), $("#inputProperty").val("height"), $("#inputValue").val("100px");
              $("#btnApply").click();
          })
          $("#change-pos").click(function () {
              $("#inputTarget").val(".box"), $("#inputProperty").val("left"), $("#inputValue").val("10px");
              $("#btnApply").click();
          })
          $("#advancedMode").click(function () {
              $("#inputTarget").prop("readonly", false);
              $(".beginner").hide();
              $(".advanced").show();
          })
          $("#checkScore").click(function () {
         
              $("#markSidebar p").text("Mark: False");
              $("#markSidebar a").css("background-color", "rgba(230, 30, 30, 0.4)");

              if ($("#question1 input:checked").val() == "correct") {
                  $("#markSidebar #q1 p").text("Mark: Correct");
                  $("#markSidebar #q1").css("background-color","rgba(10, 138, 1, 0.40)");
              };
              if ($("#question2 input:checked").val() == "correct") {
                  $("#markSidebar #q2 p").text("Mark: Correct");
                  $("#markSidebar #q2").css("background-color", "rgba(10, 138, 1, 0.40)");
              };
              if ($("#question3 input:checked").val() == "correct") {
                  $("#markSidebar #q3 p").text("Mark: Correct");
                  $("#markSidebar #q3").css("background-color", "rgba(10, 138, 1, 0.40)");
              };
              if ($("#question4 input:checked").val() == "correct") {
                  $("#markSidebar #q4 p").text("Mark: Correct");
                  $("#markSidebar #q4").css("background-color", "rgba(10, 138, 1, 0.40)");
              };
              if ($("#question5 input:checked").val() == "correct") {
                  $("#markSidebar #q5 p").text("Mark: Correct");
                  $("#markSidebar #q5").css("background-color", "rgba(10, 138, 1, 0.40)");
              };
              if ($("#question6 input:checked").val() == "correct") {
                  $("#markSidebar #q6 p").text("Mark: Correct");
                  $("#markSidebar #q6").css("background-color", "rgba(10, 138, 1, 0.40)");
              };
              if ($("#question7 input:checked").val() == "correct") {
                  $("#markSidebar #q7 p").text("Mark: Correct");
                  $("#markSidebar #q7").css("background-color", "rgba(10, 138, 1, 0.40)");
              };
              if ($("#question8 input:checked").val() == "correct") {
                  $("#markSidebar #q8 p").text("Mark: Correct");
                  $("#markSidebar #q8").css("background-color", "rgba(10, 138, 1, 0.40)");
              };
          })
      });

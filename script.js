$(document).ready(function(){
    var defaultHeading = document.getElementById('heading1').innerHTML;
    var changedHeading = document.getElementById('heading1');
    var docDefaultStyle = document.body.style;
    var currentColor = $("textarea");
    var myRE = /blue/;


    $("#titleContent").keyup(function(){
        changeContent();
    });

    $("textarea").keyup(function(){
        changeColor();
    });

    $("#regInputBox").keyup(function(){
        regexExample();
    });

    function changeH1(param) {
      changedHeading.innerHTML = param;
    }

    function changeContent() {
        $("#titleContent").on("input", function() {
            if ($(this).val().length > 0) {
                changeH1($(this).val());
            } else {
                changedHeading.innerHTML = defaultHeading;
            }
        })
    }

    function changeColor() {
      if ($("textarea").val()) {
        docDefaultStyle.backgroundColor = `#${$("textarea").val()}`;
      } else {
        docDefaultStyle.backgroundColor = "white";
      }
    }

    function regexExample() {
        $("#regInputBox").on("input", function() {
            if (myRE.test($(this).val())) {
              docDefaultStyle.backgroundColor = "RGBA(0, 160, 217, 1.00)";
            } else {
              docDefaultStyle.backgroundColor = "white";
            }
        })
    }
});

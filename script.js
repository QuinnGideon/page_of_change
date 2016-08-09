$(document).ready(function(){

    var defaultHeading = document.getElementById('heading1').innerHTML;
    var changedHeading = document.getElementById('heading1');
    var docDefaultStyle = document.body.style;
    var currentColor = $("textarea");
    var myRE = /blue/;

    // Listener function for #titleContent
    $("#titleContent").keyup(function(){
        changeContent();
    });
    // Listener function for textarea
    $("textarea").keyup(function(){
        changeColor();
    });
    // Listener function for #regInputBox
    $("#regInputBox").keyup(function(){
        regexExample();
    });
    // Function to change h1 with argument
    function changeH1(param) {
      changedHeading.innerHTML = param;
    }
    // This function handles retrieving the input from #titleContent and changing the DOM
    function changeContent() {
        $("#titleContent").on("input", function() {
            if ($(this).val().length > 0) {
                changeH1($(this).val().toUpperCase());
            } else {
                changedHeading.innerHTML = defaultHeading;
            }
        })
    }
    // This function handles retrieving the input from #box2 and changing the DOM
    function changeColor() {
      if ($("textarea").val()) {
        docDefaultStyle.backgroundColor = `#${$("textarea").val()}`;
      } else {
        docDefaultStyle.backgroundColor = "white";
      }
    }
    // This function listens for the input, and if it matches the REGEX definition, changes color accordingly
    function regexExample() {
        $("#regInputBox").on("input", function() {
            if (myRE.test($(this).val().toLowerCase())) {
              docDefaultStyle.backgroundColor = "RGBA(0, 160, 217, 1.00)";
            } else {
              docDefaultStyle.backgroundColor = "white";
            }
        })
    }
    // This function listens for red button click and changes page color accordingly
    $("#colorRed").click(function(){
        docDefaultStyle.backgroundColor = "#DD1B1B";
    });

    // This function listens for green button click and changes page color accordingly
    $("#colorGreen").click(function(){
        docDefaultStyle.backgroundColor = "#68B25B";
    });

});

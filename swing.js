
/*翻訳*/
// WORK IN PROGRESS BELOW

$('document').ready(function () {


        // RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function () {

        // Change font family and color
        //$("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
         $("iframe").contents().find(".goog-te-menu2-item div,  .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")    
            .css({
                'color': '#544F4B',
                'font-family': 'Roboto',
                                'width':'60%'
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');

                // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');

        // Change the padding of the languages
        //$("iframe").contents().find('.goog-te-menu2-item div').css('padding', '10px');

        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '60%');
        //$("iframe").contents().find('td').css('width', '60%');

        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        }, function () {
            //$(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');

        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '100%',
            'width': '60%',
            'top': '0px'
        });
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '60%'
        });
    });
});

/*font variable*/
$(function() {
    $(document).on('input', '#name', function(e) {
        $('#output1').text($('#name').val());
    });
});
$("#setFontSize").on("input",function () {
          $('#output1').css("font-size", $(this).val() + "px");
  });
$("#setFontWeight").on("input",function () {
          $('#output1').css("font-weight", $(this).val() + "");
  });

$("#setLetterSpacing").on("input",function () {
          $('#output1').css("letter-spacing", $(this).val() + "px");
  });

$(function() {
    $(document).on('input', '#name', function(e) {
        $('#output2').text($('#name').val());
    });
});
$("#setFontSize").on("input",function () {
          $('#output2').css("font-size", $(this).val() + "px");
  });
$("#setFontWeight").on("input",function () {
          $('#output2').css("font-weight", $(this).val() + "");
  });

$("#setLetterSpacing").on("input",function () {
          $('#output2').css("letter-spacing", $(this).val() + "px");
  });

  /*カラースライダーjs*/
  const labelRed = document.querySelector(".redText");
const labelGreen = document.querySelector(".greenText");
const labelBlue = document.querySelector(".blueText");
const heading3 = document.querySelector("h3");

const inputRed = document.querySelector("#red");
const inputGreen = document.querySelector("#green");
const inputBlue = document.querySelector("#blue");
const bodyBg = document.querySelector('#output2');

inputRed.addEventListener("input", changeBg);
inputGreen.addEventListener("input", changeBg);
inputBlue.addEventListener("input", changeBg);


function changeBg() {
    let redColor = parseInt(inputRed.value);
    let greenColor = parseInt(inputGreen.value);
    let blueColor = parseInt(inputBlue.value);
    let rgbColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    let bC = bodyBg.style.color = rgbColor;
    // console.log(bC);
    heading3.textContent = bC;

    let regex = /\d+/g;
    let testColor = bC.match(regex);
    let sum = testColor.reduce((acc, num) => {
        return acc + Number(num);
    }, 0);

    if (sum < 382) {
        labelRed.style.color = "rgba(255, 255, 255, .75)";
        labelGreen.style.color = "rgba(255, 255, 255, .75)";
        labelBlue.style.color = "rgba(255, 255, 255, .75)";
        heading3.style.color = "rgba(255, 255, 255, .75)";

    } else if (sum >= 382) {
        labelRed.style.color = "rgb(0, 0, 0)";
        labelGreen.style.color = "rgb(0, 0, 0)";
        labelBlue.style.color = "rgb(0, 0, 0)";
        heading3.style.color = "rgb(0, 0, 0)";
    }
}
// changeBg();

heading3.addEventListener("input", givenRgb, false);

function givenRgb() {
    let givenColor = heading3.textContent;

    let rgbColor = givenColor;
    let bC = bodyBg.style.color = rgbColor;
    heading3.textContent = bC;


    let regex = /\d+/g;
    let testColor = bC.match(regex);
    let sum = testColor.reduce((acc, num) => {
        return acc + Number(num);
    }, 0);

    if (sum < 382) {
        labelRed.style.color = "rgba(255, 255, 255, .75)";
        labelGreen.style.color = "rgba(255, 255, 255, .75)";
        labelBlue.style.color = "rgba(255, 255, 255, .75)";
        heading3.style.color = "rgba(255, 255, 255, .75)";

    } else if (sum >= 382) {
        labelRed.style.color = "rgb(0, 0, 0)";
        labelGreen.style.color = "rgb(0, 0, 0)";
        labelBlue.style.color = "rgb(0, 0, 0)";
        heading3.style.color = "rgb(0, 0, 0)";
    }
}
// givenRgb();

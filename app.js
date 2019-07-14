let quotes = [{
        text: "Talk is Cheap, Show me the Code",
        author: "Linus Torvalds",
    },
    {
        text: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
        author: "Bill Gates",
    },
    {
        text: "Try not to become a man of success, but rather try to become a man of value",
        author: "Albert Einstein",
    },
    {
        text: "A Computer is like air condition - it becomes useless when you open Windows.",
        author: "Linus Torvalds",
    },
    {
        text: "Your Time is Limited. Don't Waste it Living Someone Else's Life.",
        author: "Steve Jobs",
    },
    {
        text: "When something is important enough, you do it even if the odds are not in your favor.",
        author: "Elon Musk",
    },
    {
        text: "Some people dreams of success... while others wake up and work hard at it.",
        author: "Linus Torvalds",
    },
    {
        text: "Success Consist of Going from many Failure to Failure without Loss of Enthusian.",
        author: "Winston Churchill",
    },
    {
        text: "If all my bridge coach ever told me was that I was ‘satisfactory,’ I would have no hope of ever getting better. How would I know who was the best? How would I know what I was doing differently?",
        author: "Bill Gates"
    }
]

let colors = ["#EA7773", "#E74292", "#1287A5", "#BB2CD9", "#8B78E6", "#2B2B52", "#6A89CC", "#30336B"];


// Variables

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quote_index;
let color_index;

// Run Event on Page Load -- 01
window.addEventListener('load', function () {

    // Randomize the Quotes from the quotes Object
    let random_quote_index = Math.floor(Math.random() * quotes.length);

    // Change the value of quotes and author according to the value of random quote variable
    quote.innerHTML = quotes[random_quote_index].text;
    author.innerHTML = "- " + quotes[random_quote_index].author;

    // Assign the value of random_quote variable to the quote_index variable
    quote_index = random_quote_index;

    // Randomize the colors array
    let random_color_index = Math.floor(Math.random() * colors.length);

    // Chnage the main-color variable initialize in style.css accroding to the random_color varable value
    document.documentElement.style.setProperty('--main-color', colors[random_color_index]);

    // Assign the value of random_color variable to the color_index variable
    color_index = random_color_index;

    Animation();

});

let changeBtnClick = true;

// When New Quote Button clicked then this Function will run -- 02
function Change() {

    if (changeBtnClick) {
        // Increment the Quotes and color index
        quote_index++;
        color_index++;

        // If quote index is greater than the length of quotes object
        if (quote_index >= quotes.length)
            quote_index = 0;

        // If color index is greater than the length of colors array
        if (color_index >= colors.length)
            color_index = 0;

        // Update the Quotes and author accroding to quote index variable value
        quote.innerHTML = quotes[quote_index].text;
        author.innerHTML = "- " + quotes[quote_index].author;

        // Update the main color according to the color index variable value
        document.documentElement.style.setProperty('--main-color', colors[color_index]);

        Animation();
    }
}

// Add Animation to the element have class anim --- 03
function Animation() {
    changeBtnClick = false;
    $('.anim').fadeOut(1);
    $('.anim').removeClass('hidden');
    $('.anim').fadeIn(1000);
    setTimeout(function () {
        changeBtnClick = true;
    }, 1000);
}
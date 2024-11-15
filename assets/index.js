console.log("Wanna Add Stories Or Speeches? Contact Me On Telegram; @ppzh0");

// Check if the user agent contains "Mozilla" and is not a WebView or other browsers
const isMozilla = navigator.userAgent.includes("Mozilla/") && !navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Safari");
if (isMozilla) {
    document.getElementById("mozOpen").setAttribute("open", "open");
}

// Change font if the checkbox is checked
const toggleFontBtn = document.getElementById("toggleFontBtn");
let isSerif = true;  // Track current font

toggleFontBtn.addEventListener("click", function () {
    if (isSerif) {
        document.body.style.fontFamily = "'Alsina', sans-serif";
        document.body.style.fontSize = "2.6rem";
        document.body.style.lineHeight = "1.3";
    } else {
        document.body.style.fontFamily = "serif";
        document.body.style.fontSize = "130%";
    }
    // Toggle the font state
    isSerif = !isSerif;
});
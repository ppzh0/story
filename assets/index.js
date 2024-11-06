console.log("Wanna Add Stories Or Speeches? Contact Me On Telegram; @ppzh0");

// Check if the user agent contains 'Mozilla' and is not a WebView or other browsers
const isMozilla = navigator.userAgent.includes('Mozilla/') && !navigator.userAgent.includes('Chrome') && !navigator.userAgent.includes('Safari');
if (isMozilla) {
    document.getElementById('mozOpen').setAttribute('open', 'open');
}
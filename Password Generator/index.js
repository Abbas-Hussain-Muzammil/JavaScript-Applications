const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let randomPassword1 = document.getElementById("pass-1");

function generatePassword() {



    let password = "";

    let passLength = 15;

    while (passLength >= 1) {

        let randomIndex = generateRandomIndex();
        password += characters[randomIndex];

        passLength--;
    }
    document.getElementById("pass-1").value = password;

    randomPassword1.textContent = password;
}



function generateRandomIndex() {

    let index1 = Math.floor(Math.random(characters) * characters.length);

    return index1;
}


let copyText = document.querySelector(".copy-password")

copyText.addEventListener('click', () => {
    let pwdEl = document.querySelector('.passwordText');
    navigator.clipboard.writeText(pwdEl.textContent);
})


function togglePassword() {
    var x = document.getElementById("pass-1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


/*
Code not working

let copyText = document.querySelector(".copy-text");

copyText.querySelector("button").addEventListener("click", function() {
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function()){
        copyText.classList.remove("active");

    },2500);
})


*/




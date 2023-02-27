const lengthSlider =document.querySelector(".pass-length input")
const option = document.querySelectorAll(".option input")
const copyIcon = document.querySelector(".input-box span")
const passwordInput = document.querySelector(".inout-obx input")
const generateBtn = document.querySelector(".generate-btn")

const characters ={
    lowercase: "qwertyuiopasdfghjklzxcvbnm",
    uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    number: "0123456789",
    Symbol: "!@#$%^&*()_+/*-."
}

const generatePassword = () =>{
    let staticPassword = "",
    randonPassword = "",
    excludeDuplicate = false,
    passLength=lengthSlider.value;

    option.forEach(option =>{
        if(option.id !== "exc-duplicate" && option.id !== "spaces")
        {
            staticPassword += characters[option.id];
        }
        else if(option.id === "spaces"){
            staticPassword += `${staticPassword}`;
            
        }
    })
}

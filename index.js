
let recaptchaverifier = undefined;
let codeResult = undefined;

window.onload = function(){
    recaptchaverifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaverifier.render();
}
function phoneAuth(){
    console.log('kjkajs')
    const number = document.getElementById('number').value;

    firebase.auth().signInWithPhoneNumber(number,recaptchaverifier)
    .then(function(confirmationResult){
        codeResult = confirmationResult;
        console.log('confirmationResult',codeResult)
    }).catch(function(error){
        console.log('error',error)
    })
}
function codeverify () {
    const code = document.getElementById('verificationCode').value;

    codeResult.confirm(code)
        .then(result => {
            console.log("SUCECS")
            console.log(result);
        })
        .catch(error => {
            console.log("FAIL")    ;
            console.log(error)
        })
}
/*=============================================
  FileName: /public/scripts/app.js
  ProjectName: COMP229-005, Assignment #1
  CompanyName: Centennial Collge, Fall 2021
  Author: Jiwoong Hong, 301153138
  Date: 2021-10-02
  ============================================*/

(function () {
    function start() {
        console.log("App Started: COMP229 Assignment 1");
    }
    window.addEventListener("load", start);
}());

/* Functions: Button Click */

function clickFindUs()
{
    location.href="/about";
};

function clickResume()
{
    location.href="https://drive.google.com/file/d/10izPiXONVnWdXBkxz5WZxR35vqeWac1P/view?usp=sharing";
};

function clickContactSubmit()
{
    let formFirstName = document.getElementById("contactFormFirstName");
    let formLastName = document.getElementById("contactFormLastName");
    let formEmail = document.getElementById("contactFormEmail");
    let formMessage = document.getElementById("contactFormMessage");

    alert("Thank you for submitting an inquery!");
    alert("Your Name: " + formFirstName.value + " " + formLastName.value);
    alert("Your Email: " + formEmail.value);

    location.href="/home";
};





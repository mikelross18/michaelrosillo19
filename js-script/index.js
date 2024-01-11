const menuBtn = document.querySelector('.nav__menu');
const navbar = document.querySelector('.navbar');


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("active");
})





// -----------------------------------------------ABOUT---JS----------------------------------
// -----------------------------------------------ABOUT---JS----------------------------------
// -----------------------------------------------ABOUT---JS----------------------------------
// -----------------------------------------------ABOUT---JS----------------------------------


var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab");
        }



            


const scriptURL = 'https://script.google.com/macros/s/AKfycbzQ-_j3RL02mTCzvjLX4yYiHbbMxM-2-kxIVsWw-JhTpjLyxGqKwgpnEIBxPOLERXKgyg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
msg.innerHTML = "Your Message Sent Successfully"
setTimeout(function(){
    msg.innerHTML = ""
},5000)
form.reset()
})
.catch(error => console.error('Error!', error.message))
})   

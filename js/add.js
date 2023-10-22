console.log("connected")
const btn = document.querySelector(".uil-moon")
console.log(btn)

let isblack = true
const bodyElement = document.body;
btn.addEventListener("click", () => {
    if (isblack) {
        // black
        btn.classList.remove("uil-moon")
        btn.classList.add("uil-sun")
        document.documentElement.style.setProperty('--body-color', '#303841');
        document.documentElement.style.setProperty('--text-color-light', '#fafafa');
        document.documentElement.style.setProperty('--text-color', '#f9f9f9');

        isblack = false;
    }
    else {
        btn.classList.remove("uil-sun")
        btn.classList.add("uil-moon")
        document.documentElement.style.setProperty('--body-color', '#fafafa');
        document.documentElement.style.setProperty('--text-color-light', '#000');
        document.documentElement.style.setProperty('--text-color', '#222831');
        isblack = true;
    }
})

// skills toggle 
const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')
function toggleSkills() {
    let ic = this.parentNode.className
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (ic === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el)=>{
el.addEventListener('click',toggleSkills)
})
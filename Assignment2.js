const nameel = document.getElementById("name");
const genderel = document.getElementById("gender");
const emailel = document.getElementById("email");
const mobileel = document.getElementById("mobile");
const dNameel = document.getElementById("dName");
const dGenderel = document.getElementById("dGender");
const dEmailel = document.getElementById("dEmail");
const dMobileel = document.getElementById("dMobile");

function showName() {
    // Show filled name inside h1
    const fname = nameel.value;
    dNameel.textContent = fname;
}

function showGender() {
    // Show the selected gender inside h2
    const fgender = genderel.value;
    dGenderel.textContent = fgender
}

function showEmail() {
    // Show the filled email inside h3
    const femail = emailel.value;
    dEmailel.textContent = femail;
}

function showMobile() {
    // Show the filled mobile inside h4
    const fmobile = mobileel.value;
    dMobileel.textContent = fmobile
}

function resetForm() {
    // Reset all the form elements to default values (blank "")
    nameel.value = '';
    genderel.value = '';
    emailel.value = '';
    mobileel.value = '';
}

function resetDisplay() {
    // Reset all the headings (h1, h2, h3, h4) to blank values
    dNameel.textContent = '';
    dGenderel.textContent = '';
    dEmailel.textContent = '';
    dMobileel.textContent = '';
}
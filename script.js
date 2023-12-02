let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");
updateStrength(0);
pass.addEventListener('input', () => {
    if (pass.value.length === 0) {
        updateStrength(0);
        return;
    }
    msg.style.display = "block";



    let strength = 0;

    // Check for length
    if (pass.value.length >= 8) strength += 1;

    // Check for uppercase letters
    if (/[A-Z]/.test(pass.value)) strength += 1;

    // Check for lowercase letters
    if (/[a-z]/.test(pass.value)) strength += 1;

    // Check for numbers
    if (/\d/.test(pass.value)) strength += 1;

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass.value)) strength += 1;

    updateStrength(strength);
});

function updateStrength(strength) {
    if (strength < 3) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (strength < 5) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else {
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }
}

let togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener('change', function() {
    let pass = document.getElementById("password");
    pass.type = this.checked ? "text" : "password";
});




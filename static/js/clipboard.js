function copyPhoneNumber() {
    const phoneNumber = "+12049158387";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert("Phone number copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy phone number: " + err);
    });
}


function copyEmail() {
    const email = "kfirkho@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy Email: " + err);
    });
}

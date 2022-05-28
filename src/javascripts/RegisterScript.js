function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--error", "form__message--success");
    if (type === "error") {
        messageElement.classList.add("form__message--error");
    } else if (type === "success") {
        messageElement.classList.add("form__message--success");
    }
}

const form = document.getElementById('reg-form')
        form.addEventListener("submit",registerUser)

       async function registerUser(event){
            event.preventDefault();
            const username= document.getElementById('username').value
            const password= document.getElementById('password').value
            const confirmpassword= document.getElementById('confirmpassword').value

            if(confirmpassword != password){
                document.getElementById("alert").innerHTML = 'Wrong password';
                return;
            }
            
        const result = await fetch('/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }).then((res) => res.json())
            if(result.status === 'ok'){
                setFormMessage(form, "success", "Account created successfully!");
                //everything when fine
                //alert('Success')
            } else{
                setFormMessage(form, "error", "Account failed to be created.");
                // alert(result.error)
            }
        }
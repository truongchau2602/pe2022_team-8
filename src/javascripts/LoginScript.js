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

const form = document.getElementById('Login')
        form.addEventListener("submit", login)

        async function login(event){
            event.preventDefault();
            const username= document.getElementById('username').value
            const password= document.getElementById('password').value

        const result = await fetch('/login',{
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
                //everything when fine
                console.log('Got the token: ',result.data)
                localStorage.setItem('token', result.data)
                login.preventDefault();
                setFormMessage(form, "success", "You're logged in!");
                // alert('Success')
            } else{
                login.preventDefault();
                setFormMessage(form, "error", "Wrong username or password!");
                // alert(result.error)
            }
        }
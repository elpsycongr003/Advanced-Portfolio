// template_8wem99i
// service_rooke27
// 8-Rnubess4qCcjjdy

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    emailjs
    .sendForm(
        'service_rooke27',
        'template_8wem99i',
        event.target,
        '8-Rnubess4qCcjjdy'
    ).then(() => {
        throw new Error("error");
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at garciadss100@gmail.com"
        );
    })

    loading.classList += " modal__overlay--visible" 
    setTimeout(() => {

        console.log('it worked2')
    }, 1000);
}
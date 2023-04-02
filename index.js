// template_8wem99i
// service_rooke27
// 8-Rnubess4qCcjjdy

function contact(event) {
    event.preventDefault();
    emailjs
    .sendForm(
        'service_rooke27',
        'template_8wem99i',
        event.target,
        '8-Rnubess4qCcjjdy'
    ).then(() => {
        console.log('this worked')
    })
    
}
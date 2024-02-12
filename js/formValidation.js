console.log('Form Validation Log')

// USED ONLY IN THE CONTACT FORM PAGE
function checkContentOnForm() {
    let theForm = document.forms.customerContactForm;
    if(theForm.firstname.value == ''){
        alert('Seu Primeiro Nome é Obrigatório!')
        return false;
    }
    if(theForm.lastname.value == ''){
        alert('Seu SobreNome é Obrigatório!')
        return false;
    }
    if(theForm.country.value == ''){
        alert('Selecione o Nome de um País!')
        return false;
    }
    if(theForm.subject.value == ''){
        alert('Msn Ausente ou Muito Curta!')
        return false;
    }
}
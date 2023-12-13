//Validação de e-mail

// Sempre tem que ter @
// Sempre tem que ter pelo menos um .
// Nunca pode começar com .
// Nunca pode terminar com .

const email = "aluno@cubos.academy";

const validarEmail = (email) => {
    if (email.includes("@") && email.includes(".") && !email.startsWith(".") && !email.endsWith(".")) {
        return `O e-mail ${email} é válido!`
    } else {
        return `O e-mail ${email} é inválido!`;
    }
}

console.log(validarEmail(email));
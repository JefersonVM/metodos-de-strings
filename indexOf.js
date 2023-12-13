const email = 'jeferson.vm1981@gmail.com'

const indexOfArroba = email.indexOf('@')

const indexOfPonto = email.indexOf('.', indexOfArroba)

if (indexOfArroba > 0 && indexOfPonto > 0) {
  console.log('Email válido')
} else {
    console.log('Email inválido')
}




import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyCBqnuxq-a3AxPk9V6tw5obAm8Hu7ppoXU',
  authDomain: 'fireblog-selman.firebaseapp.com',
  projectId: 'fireblog-selman',
  storageBucket: 'fireblog-selman.appspot.com',
  messagingSenderId: '120589703288',
  appId: '1:120589703288:web:cd264dce8f22e4198c758d',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    navigate('/')
    console.log(userCredential)
  } catch (error) {
    console.log(error.message)
  }
}

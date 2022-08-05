import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { toastErrorNotify, toastSuccessNotify } from './toastNotify'
import { getFirestore } from '@firebase/firestore'

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
export const db = getFirestore(app)

function randomuser() {
  const id = Math.floor(Math.random() * 20) + 1
  const url = `https://avatars.dicebear.com/v2/avataaars/${id}.svg`
  return url
}
export const createUser = async (email, password, navigate, name) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    const imageurl = auth.currentUser.photoURL
      ? auth.currentUser.photoURL
      : randomuser()
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageurl,
    })
    toastSuccessNotify('Registered successfully!')

    navigate('/')
  } catch (error) {
    toastErrorNotify(error.message)
  }
}
export const updaterProfile = async (dName, uEmail, eImg, navigate) => {
  await updateProfile(auth.currentUser, {
    displayName: dName,
    email: uEmail,
    photoUrl: eImg,
  })
  toastSuccessNotify('Profile update  successfully!')
  navigate('/')
  console.log(auth)
}
export const loginUser = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/')
    toastSuccessNotify('Logged in successfully!')
  } catch (error) {
    toastErrorNotify(error.message)
  }
}

export const userObserver = setCurrentUser => {
  onAuthStateChanged(auth, user => {
    if (user) {
      setCurrentUser(user)
    } else {
      setCurrentUser(false)
    }
  })
}

export const logout = () => {
  signOut(auth)
  toastSuccessNotify('Logout successfully!')
}

export const signupProvider = navigate => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then(result => {
      navigate('/')
      toastSuccessNotify('Logged in successfully!')
      console.log(auth)
    })
    .catch(error => {
      toastErrorNotify(error.message)
    })
}

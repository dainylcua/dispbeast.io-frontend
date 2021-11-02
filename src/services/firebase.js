import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA_1o0HDs83hdDmnSPubVG-cN4zsg0Rqi0",
    authDomain: "dispbeast.firebaseapp.com",
    projectId: "dispbeast",
    storageBucket: "dispbeast.appspot.com",
    messagingSenderId: "689166282357",
    appId: "1:689166282357:web:0ac4733a091d875b8cd23c",
    measurementId: "G-SYDZSP1ZMJ"
}

const USER_URL = 'http://localhost:3001/api/users'
const NEWITEM_URL = 'http://localhost:3001/api/items/newrandom'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

function signIn() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user
        const userData = {
            firebaseId: user.uid,
            email: user.email,
        }
        user.getIdToken().then((result) => {
            fetch(USER_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/JSON',
                    'Authorization': 'Bearer ' + result
                },
                body: JSON.stringify(userData)
            })
            .then((userResponse) => {
                return userResponse.json()
            })
            .then((userData) => {
                fetch(NEWITEM_URL, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'Application/JSON',
                        'Authorization': 'Bearer ' + result
                    },
                    body: JSON.stringify(userData)
                })
            })
        })
    })
    .catch((error) => {
        const errorCode = error.errorCode
        const errorMessage = error.message
        const email = error.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        // Not sure how to test these - unaware of ways to force errors
    }) 

}

function logOut() {
    signOut(auth).then(() => {
        alert('Sign-out Succesful')
    }).catch((error) => {
        alert('error occured', error)
    })
}

export {
    auth, 
    signIn, 
    logOut
}
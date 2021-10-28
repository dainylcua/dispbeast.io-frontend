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

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

function signIn() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        console.log('credential:', credential)
        // Contains accessToken, idToken (read below), providerId, and signInMethod (how user signed in)

        // ID Token = proves user is authenticated
        // JWT that ONLY proves the user has been authenticated
        // e.g. contains name, email, etc
        // !!! DO NOT SEND TO APIs !!!

        // Access token = allows client app to access a specific resource to perform specific actions on behalf of the user
        // AKA delegated authorization scenario
        // i.e. contains scope of action (specificity)
        // OK to send to APIs
        // !!! DO NOT INSPECT IN APP !!!

        // More notes:
        // https://auth0.com/blog/id-token-access-token-what-is-the-difference/

        console.log('token:', token)
        // Contains accessToken ONLY - use this for API calls maybe?

        console.log('user:', user)
        // User information, same as in lecture

    }).catch((error) => {
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
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

async function creatNewUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    alert(`${email} Welcome to the new user`);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Create New User Error", errorCode, errorMessage);
    alert(`${email}\n${errorMessage}\n${errorCode}`);
  }
}

async function logIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("🚀 ~ logIn ~ user:", user);
    alert(`${email} is connect\nwelcome`);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Connect User Error", errorCode, errorMessage);
    alert(`${email}\n${errorMessage}\n${errorCode}`);
  }
}

function uesrConnectedInfo() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const emailConnect = user.email;
      const lastSignInTime = user.metadata.lastSignInTime;
      alert(
        `User Email Connect: ${emailConnect}\nLast SignIn Time: ${lastSignInTime}`
      );
    } else {
      alert("User is signed out");
    }
  });
}

async function logOut() {
  try {
    await signOut(auth);
  } catch (e) {
    console.log("🚀 ~ logOut ~ e:", e);
  }
}
export { creatNewUser, logIn, uesrConnectedInfo, logOut };

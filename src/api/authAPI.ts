import firebase from "firebase/app";
import "firebase/auth";

export const authAPI = {
  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  },
};

import firebase from "firebase/app";
import "firebase/database";

export const routineAPI = {
  fetchRoutine() {
    const db = firebase.database();

    return db
      .ref("routine")
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  },
};

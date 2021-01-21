import firebase from "firebase/app";
import "firebase/database";

export const exersizesAPI = {
  fetchExersizes() {
    const db = firebase.database();

    return db
      .ref("exersizes")
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  },
};

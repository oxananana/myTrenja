import firebase from "firebase/app";
import "firebase/database";

export const workoutsAPI = {
  fetchWorkouts() {
    const db = firebase.database();

    return db
      .ref("workouts")
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      });
  },
};

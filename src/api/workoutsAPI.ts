import firebase from "firebase/app";
import "firebase/database";
import { Workout } from "../entities/workout";

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
  fetchNewKey() {
    const db = firebase.database();
    let key = db.ref().child("workouts/catalog").push().key;

    return key ? key : "";
  },
  createWorkout(workout: Workout, id: string) {
    const db = firebase.database();

    db.ref("workouts/catalog/" + id).set(workout);
  },
  updateWorkout(workout: Workout, id: string) {
    const db = firebase.database();

    db.ref().update({ ["workouts/catalog/" + id]: workout });
  },
};

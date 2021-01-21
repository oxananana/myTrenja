import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setIsFetching } from "../app/authSlice";
import { RootState } from "../app/rootReducer";
import firebase from "firebase/app";
import "firebase/auth";

export const useAuthState = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(true));
    return firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        dispatch(setUser({ email: user.email }));
      } else {
        dispatch(setUser(null));
      }
      dispatch(setIsFetching(false));
    });
  }, [dispatch]);

  return auth;
};

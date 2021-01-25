import { useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setIsFetching } from "../app/authSlice";
import { RootState } from "../app/rootReducer";
import firebase from "firebase/app";
import "firebase/auth";

export const useAuthState = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    dispatch(setIsFetching(true));
    return firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        dispatch(setUser({ email: user.email }));
        if (prevPathRef.current === "/login") {
          history.push("/routine");
        } else {
          history.push(prevPathRef.current);
        }
      } else {
        dispatch(setUser(null));
        history.push("/login");
      }
      dispatch(setIsFetching(false));
    });
  }, [dispatch, history]);

  return auth;
};

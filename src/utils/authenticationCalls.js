import { removeLocalStorage, setLocalStorage } from "./localStorageCalls";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

export const userLogin = async (
  event,
  dispatch,
  email,
  password,
  navigate,
  gotoPath
) => {
  event.preventDefault();
  setPersistence(auth, browserLocalPersistence);

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    const user = {
      displayName: res.user.displayName,
      email: res.user.email,
      otherDetails: res.user.metadata,
    };

    dispatch({
      type: "LOGIN",
      payload: { foundUser: user, encodedToken: res.user.uid },
    });

    setLocalStorage("token", res.user.uid);
    setLocalStorage(
      "user",
      {
        displayName: res.user.displayName,
        email: res.user.email,
        otherDetails: res.user.metadata,
      },
      true
    );

    navigate(gotoPath);
  } catch (err) {
    throw new Error("Error in logging in! " + err);
  }
};

export const userLogout = async (dispatchAuth, dispatchTasks, navigate) => {
  setPersistence(auth, browserLocalPersistence);
  try {
    await signOut(auth);

    removeLocalStorage("token");
    removeLocalStorage("user");

    dispatchAuth({ type: "LOGOUT" });
    dispatchTasks({ type: "RESET" });
  } catch {
    throw new Error("Logout failed");
  }
};

export const userSignup = async (
  event,
  { firstName, lastName, email, password },
  dispatch,
  navigate
) => {
  event.preventDefault();
  setPersistence(auth, browserLocalPersistence);

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const res2 = await updateProfile(auth.currentUser, {
      displayName: `${firstName} ${lastName}`,
    });

    const user = {
      displayName: res.user.displayName,
      email: res.user.email,
      otherDetails: res.user.metadata,
    };

    dispatch({
      type: "LOGIN",
      payload: { foundUser: user, encodedToken: res.user.uid },
    });

    setLocalStorage("token", res.user.uid);
    setLocalStorage(
      "user",
      {
        displayName: res.user.displayName,
        email: res.user.email,
        otherDetails: res.user.metadata,
      },
      true
    );

    navigate("/");
  } catch (err) {
    console.error(err);
  }
};

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { renderErrorMessage, setActiveScreen } from "../view/index";
export let createNewUse = (firstName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      renderErrorMessage(
        "server-error-message",
        Swal.fire({
          position: "centent",
          icon: "success",
          title: "Đăng ký thành công",
          showConfirmButton: false,
          timer: 1500,
        })
      );
      setActiveScreen("loginPage");
    })
    .catch((err) => {
      const errorCode = err.errorCode;
      const errorMessage = err.message;
      renderErrorMessage(
        "server-error-message",
        Swal.fire({
          position: "centent",
          icon: "warning",
          title: "Email đã tồn tại ",
          showConfirmButton: false,
          timer: 1500,
        })
      );
    });
};

export let eNewUse = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      // ...

      Swal.fire({
        position: "centent",
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 1500,
      });
      setActiveScreen("chatPage");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Swal.fire({
        position: "centent",
        icon: "warning",
        title: "Đăng nhập thất bại ",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

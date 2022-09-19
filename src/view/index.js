import { loginPage } from "../pages/loginPage/login";
import { logupPage } from "../pages/logupPage/registerPages";
import { resetPass } from "../pages/resetPass/resetPass";
import { chatPage } from "../pages/chatPage/chatPages";
import {
  validateLoginInfo,
  validateLogupInfo,
  validateResetInfo,
} from "../controller/index";
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginFrom = document.getElementById("lognin_box");
      if (loginFrom) {
        console.log(loginFrom);
        loginFrom.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginFrom.email.value;
          const password = loginFrom.password.value;
          // console.log(email);
          // console.log(password);

          // if (email == "" || password == "") {
          //   Swal.fire({
          //     position: "centent",
          //     icon: "warning",
          //     title: "Email hoặc Password không được bỏ trống",
          //     showConfirmButton: false,
          //     timer: 1500,
          //   });
          // } else {
          //   Swal.fire({
          //     position: "centent",
          //     icon: "success",
          //     title: "Đăng nhập thành công",
          //     showConfirmButton: false,
          //     timer: 1500,
          //   });
          // }

          validateLoginInfo(email, password);
        });
      }
      const letInCreat = document.getElementById("set-trang");
      if (letInCreat) {
        letInCreat.onclick = () => {
          setActiveScreen("logupPage");
        };
      }
      const letInCreat1 = document.getElementById("set-trang2");
      if (letInCreat1) {
        letInCreat1.onclick = () => {
          setActiveScreen("resetPass");
        };
      }
      break;
    case "logupPage":
      if (app) {
        app.innerHTML = logupPage;
      }

      const logupFrom = document.getElementById("lognup_box");
      if (logupFrom) {
        console.log(logupFrom);
        logupFrom.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = logupFrom.email.value;
          const password = logupFrom.password.value;
          const firstName = logupFrom.firstName.value;
          const lastName = logupFrom.lastName.value;
          const cofirmpassword = logupFrom.cofirmpassword.value;

          validateLogupInfo(
            email,
            password,
            firstName,
            lastName,
            cofirmpassword
          );
        });
      }
      break;
    case "resetPass":
      if (app) {
        app.innerHTML = resetPass;
      }

      const resetFrom = document.getElementById("lognin_box");
      if (resetFrom) {
        console.log(resetFrom);
        resetFrom.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = resetFrom.email.value;

          validateResetInfo(email);
        });
      }
      const letInLogIn = document.getElementById("set-login");
      if (letInLogIn) {
        letInLogIn.onclick = () => {
          setActiveScreen("loginPage");
        };
      }

      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;

    default:
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};







/**
 * Git satus (kiểm tra trạng thái của file)
 * (Unstage và Staging)
 * 
 * Git stage . (đẩy file vừa được chỉnh sửa vào trạng thái staging)
 * 
 * Git commit -m "Message"
 * Đẩy file vào trạng thái commit trước khi được push lên remote repo
 * 
 * Git push origin [Tên nhánh](master)
 * Đẩy file lên remote repo tại nhánh master
 */
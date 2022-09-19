// Controller làm nhiệm vụ validate thông tin
// Tạo hàm validateLoginInfo nhận vào email và password trong controller
// Export hàm validateLoginInfo
// Import hàm validateLoginInfo trong view
// Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
// từ form
// Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
// có phải email hợp lệ không, có bỏ trống trường nào không
// Tạo một hàm setMessage ở view và export sang controller để in ra lỗi

// import { validate } from "schema-utils";

// từ những trường hợp validate đó
// import { renderErrorMessage } from "../view/index";
import { createNewUse, eNewUse } from "../model/index";

export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email == "" || password == "") {
    Swal.fire({
      position: "centent",
      icon: "warning",
      title: "Email hoặc Password không được bỏ trống",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  if (email && password) {
    eNewUse(email, password);
  }
};

export let validateLogupInfo = (
  email,
  password,
  firstName,
  lastName,
  cofirmpassword
) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (
    email == "" ||
    password == "" ||
    firstName == "" ||
    lastName == "" ||
    cofirmpassword == ""
  ) {
    Swal.fire({
      position: "centent",
      icon: "warning",
      title: "Không được bỏ trống ô nào ",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  //  else {
  // Swal.fire({
  //   position: "centent",
  //   icon: "success",
  //   title: "Đăng ký thành công",
  //   showConfirmButton: false,
  //   timer: 1500,
  // });
  // }
  if (
    firstName &&
    lastName &&
    email &&
    password &&
    cofirmpassword &&
    cofirmpassword == password
  ) {
    createNewUse(firstName, lastName, email, password);
  }
};
export let validateResetInfo = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email == "") {
    Swal.fire({
      position: "centent",
      icon: "warning",
      title: "Email không được bỏ trống ",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "centent",
      icon: "success",
      title: "Chính xác",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

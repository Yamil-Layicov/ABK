import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  fullName: yup.string().required("ad və soyad qeyd olunmalıdır"),
  email: yup
    .string()
    .email("etibarlı e-poçt ünvanını daxil edin")
    .required("e-poçt qeyd olunmalıdır"),
    company: yup
    .string(" ")
    .required("qurum adı qeyd olunmalıdır"),
    password: yup
    .string()
    .min(5, "şifrə ən azı 5 simvoldan ibarət olmalıdır")
    .required("şifrə qeyd olunmalıdır"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "şifrələr üst-üstə düşməlidir")
    .required(""),
});

// export const advancedSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("Required"),
//   jobType: yup
//     .string()
//     .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
//     .required("Required"),
//   acceptedTos: yup
//     .boolean()
//     .oneOf([true], "Please accept the terms of service"),
// });

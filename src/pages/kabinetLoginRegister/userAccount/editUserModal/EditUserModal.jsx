import { useRef, useState } from "react";
import "./editModal.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";


const basicSchema = yup.object().shape({
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
    .required(" "),
});

const initialValues = {
  fullName: "",
  email: "",
  company: "",
  password: "",
  confirmPassword: "",
};

const EditUserModal = ({showModal, closeModal}) => {
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const form = useRef();

  const handleButtonClick = () => {
    setChecked(!isChecked);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (values, actions) => {
    try {
      // const response = await api.post("contacts", values);
      console.log(values);
      toast.success("Uğurlu qeydiyyat");
      actions.resetForm({ values: initialValues });
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: basicSchema,
    onSubmit,
  });

  const {
    handleSubmit,
    errors,
    handleChange,
    isSubmitting,
    touched,
    handleBlur,
    values,
  } = formik;


  return (
    <div className={`edidUserModal ${showModal ? 'show' : ''}`} onClick={closeModal}>
      <div className="register"  >
        <div className="intoRegister" onClick={(e) => e.stopPropagation()}>
          <h3>Profili redaktə et</h3>
          <form noValidate ref={form} onSubmit={handleSubmit} >
            <div className="inputBox">
              <input
                type="text"
                id="fullName"
                placeholder="Ad və soyad"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.fullName && touched.fullName ? "inputError" : ""
                }
              />
              {errors.fullName && touched.fullName && (
                  <small>{errors.fullName}</small>
                )}
            </div>
            <div className="inputBox">
              <input
                type="text"
                id="company"
                placeholder="Qurum adı"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.company && touched.company ? "inputError" : ""
                }
              />
              {errors.company && touched.company && (
                  <small>{errors.company}</small>
                )}
            </div>
            <div className="inputBox">
              <input
                type="email"
                id="email"
                placeholder="E-mail ünvan"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? "inputError" : ""
                }
              />
              {errors.email && touched.email && (
                  <small>{errors.email}</small>
                )}
            </div>
            <div className="inputBox" >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "inputError" : ""
                }
                />
                {errors.password && touched.password && (
                  <small>{errors.password}</small>
                )}
              <div
              className="inputEyes"
                onClick={handleTogglePassword} >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div className="inputBox" >
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Şifrəni təkrar daxil edin"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword ? "inputError" : ""
                }
                />
               {errors.confirmPassword && touched.confirmPassword && (
                  <small>{errors.confirmPassword}</small>
                )}
              <div
              className="inputEyes"
                onClick={handleTogglePassword} >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <button type="submit">Dəyişikliyi yadda saxla</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;

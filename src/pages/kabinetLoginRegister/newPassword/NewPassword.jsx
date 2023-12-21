import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import { toast } from "react-toastify";


const basicSchema = yup.object().shape({
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
  password: "",
  confirmPassword: "",
};


const NewPassword = () => {
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
      toast.success("Şifrə dəyişdirildi");
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
    <div className="mainRegister">
      <div className="headerBox"></div>
      <div className="register">
        <div className="intoRegister">
          <h3>Yeni şifrə təyin et</h3>
          <p style={{ color: "#C2C2C2", fontSize: "16px" }}>
            Yeni şifrənizi təyin edin
          </p>
          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
            >
              Yenilə
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;

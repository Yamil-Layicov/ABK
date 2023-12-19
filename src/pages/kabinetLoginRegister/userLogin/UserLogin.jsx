import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup 
    .string()
    .required()
    .min(8, "Password must be at least 8 characters"),
});

const FormValues = {
  email: "",
  password: "",
};


const UserLogin = () => {

  const navigate = useNavigate();

  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: FormValues,
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);


  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mainRegister">
      <div className="headerBox"></div>
      <div className="register">
        <div className="intoRegister">
          <h3>Daxil ol</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="E-mail ünvan"
              {...register("email")}
              style={{ border: `1px solid ${errors.email ? "red" : "#9A9696"}` }}
            />

            <div style={{ position: "relative", width: "100%" }}>
              <input
               type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                {...register("password")}
                style={{ border: `1px solid ${errors.password ? "red" : "#9A9696"}` , width: "100%" }}
              />
              <div
              onClick={handleTogglePassword}
                style={{
                  position: "absolute",
                  top: "12px",
                  right  :"20px",
                  color:"gray",
                  fontSize:"22px",
                  cursor:"pointer"
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            <button type="submit">Daxil ol</button>
          </form>
          <DevTool control={control} />
          <p className="accaountText">
            Hesabınız yoxdur? <span onClick={() => navigate("/account/register")}>Qeydiyyatdan keç</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

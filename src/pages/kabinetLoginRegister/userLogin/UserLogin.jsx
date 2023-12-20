import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
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
  const [isChecked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked(!isChecked);
  };

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
          <h3>Şəxsi kabinetə giriş</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="E-mail ünvan"
              {...register("email")}
              style={{
                border: `1px solid ${errors.email ? "red" : "#9A9696"}`,
              }}
            />
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                {...register("password")}
                style={{
                  border: `1px solid ${errors.password ? "red" : "#9A9696"}`,
                  width: "100%",
                }}
              />
              <div
                onClick={handleTogglePassword}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "20px",
                  color: "#9A9696",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            <div className="forgotBox">
              <div className="saveBox" onClick={() => handleButtonClick()}>
                <span className="checkMark" >
                  {isChecked ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.7364 0.663597C18.0878 1.01507 18.0878 1.58492 17.7364 1.93639L6.6364 13.0364C6.46761 13.2052 6.2387 13.3 6 13.3C5.76131 13.3 5.53239 13.2052 5.3636 13.0364L0.263604 7.93639C-0.0878682 7.58492 -0.0878678 7.01507 0.263604 6.6636C0.615076 6.31213 1.18492 6.31213 1.5364 6.6636L6 11.1272L16.4636 0.663598C16.8151 0.312126 17.3849 0.312126 17.7364 0.663597Z"
                      fill="#9A9696"
                    />
                  </svg> : ""}
                </span>
                <span className="textSave">Yadda saxla</span>
              </div>
              <span className="text" onClick={() => navigate("/account/updatePassword")}>Şifrəni unutdun?</span>
            </div>

            <button type="submit">Daxil ol</button>
          </form>
          <DevTool control={control} />
          <p className="accaountText">
            Hesabınız yoxdur?{" "}
            <span onClick={() => navigate("/account/register")}>
              Qeydiyyatdan keç
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

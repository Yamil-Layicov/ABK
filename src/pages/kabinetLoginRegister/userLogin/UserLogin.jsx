import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import {  useState } from "react";

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
              style={{ border: `1px solid ${errors.email ? "red" : ""}` }}
            />

            <div style={{ position: "relative", width: "100%" }}>
              <input
               type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                {...register("password")}
                style={{ border: `1px solid ${errors.password ? "red" : ""}` , width: "100%" }}
              />
              <div
              onClick={handleTogglePassword}
                style={{
                  position: "absolute",
                  top: "15px",
                  right  :"10px",
                  width: "30px",
                  height: "30px",
                }}
              >
                <img
                  src="/hide_outline_24.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <button type="submit">Daxil ol</button>
          </form>
          <DevTool control={control} />
          <p className="accaountText">
            Hesabınız yoxdur? <span>Qeydiyyatdan keç</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

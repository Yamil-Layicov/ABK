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

const UpdatePassword = () => {
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
          <h3>Şifrəni yenilə</h3>
          <p style={{color:"#C2C2C2", fontSize:"16px"}}> E-mail adresi qeyd edin,təsdiqləmə kodu göndəriləcək</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputBox">
            <input
              type="email"
              placeholder="E-mail ünvan"
              {...register("email")}
              style={{
                border: `1px solid ${errors.email ? "red" : "#9A9696"}`,
              }}
            />
            </div>

            <button type="submit" onClick={() => navigate("/account/verificationCode")}>Dəvam et</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;

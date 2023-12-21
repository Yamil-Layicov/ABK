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

const VerificationCode = () => {
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
          <h3>Təsdiqləmə kodu</h3>
          <p style={{ color: "#C2C2C2", fontSize: "16px" }}>
            Zəhmət olmasa e-mail adresinizi yoxlayın,təsdiqləmə kodunu qeyd edin
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="verificBtns">
              <input type="text" className="box"></input>
              <input type="text" className="box"></input>
              <input type="text" className="box"></input>
              <input type="text" className="box"></input>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <span className="time">1:22</span>
              <p style={{color:"#356FC6", fontWeight:"500", cursor:"pointer"}}>Kodu yenidən göndər</p>
            </div>

            <button type="submit" onClick={() => navigate("/account/newPassword")}>Göndər</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;

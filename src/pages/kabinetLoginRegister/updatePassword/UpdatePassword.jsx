import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";




const UpdatePassword = () => {
  const [isChecked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked(!isChecked);
  };

  const navigate = useNavigate();

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
          <p className="updatedText"> E-mail adresi qeyd edin,təsdiqləmə kodu göndəriləcək</p>
          <form onSubmit={onSubmit}>
            <div className="inputBox">
            <input
              type="email"
              placeholder="E-mail ünvan"
            />
            </div>
            <button className="otherBtns" type="submit" onClick={() => navigate("/account/verificationCode")}>Dəvam et</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;

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

const NewPassword = () => {
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
          <h3>Yeni şifrə təyin et</h3>
          <p style={{ color: "#C2C2C2", fontSize: "16px" }}>
            Yeni şifrənizi təyin edin
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Yeni şifrə"
              {...register("email")}
              style={{
                border: `1px solid ${errors.email ? "red" : "#9A9696"}`,
              }}
            />

            <input
              type="email"
              placeholder="Şifrəni təkrarlayın"
              {...register("email")}
              style={{
                border: `1px solid ${errors.email ? "red" : "#9A9696"}`,
              }}
            />

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

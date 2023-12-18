import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

const FormValues = {
  username: "",
  email: "",
  company: "",
  password: "",
  confirmPassword: "",
};

const UserRegister = () => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: FormValues,
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mainRegister">
      <div className="headerBox"></div>
      <div className="register">
        <div className="intoRegister">
          <h3>Qeydiyyat</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ border: `1px solid ${errors.username ? "red" : ""}` }}
              type="text"
              placeholder="Ad və soyad"
              {...register("username", { required: "bos qoyma" })}
            />
            {/* <p>{errors.username?.message}</p> */}
            <input
              type="email"
              placeholder="E-mail ünvan"
              {...register("email")}
              style={{ border: `1px solid ${errors.email ? "red" : ""}` }}
            />
            <input
              type="text"
              placeholder="Qurum adı"
              {...register("company")}
              style={{ border: `1px solid ${errors.company ? "red" : ""}` }}
            />
            <input
              type="password"
              placeholder="Şifrə"
              {...register("password")}
              style={{ border: `1px solid ${errors.password ? "red" : ""}` }}
            />
            <input
              type="password"
              placeholder="Şifrəni təkrar daxil edin"
              {...register("confirmPassword")}
              style={{ border: `1px solid ${errors.confirmPassword ? "red" : ""}` }}
            />
            <button type="submit">Qeydiyyatdan keç</button>
          </form>
          <DevTool control={control} />
          <p className="accaountText">
            Hesabınız var? <span>Daxil ol</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

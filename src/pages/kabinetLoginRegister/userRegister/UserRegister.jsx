import "./style.scss";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

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
  phNumbers: [{ numer: "" }],
};

const UserRegister = () => {

  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    setValue,
    disabled,
  } = useForm({
    defaultValues: FormValues,
    resolver: yupResolver(schema),
  });

  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful } =
    formState;

  // const {fields, append, remove} = useFieldArray({
  //   name:"phNumbers",
  //   control
  // })

  console.log(touchedFields, dirtyFields, isDirty);

  const watchUsername = watch("username");

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
              style={{
                border: `1px solid ${errors.username ? "red" : "#9A9696"}`,
              }}
              type="text"
              placeholder="Ad və soyad"
              {...register("username", { required: "bos qoyma" })}
            />
            {/* <span>{errors.username?.message}</span> */}
            <input
              type="email"
              placeholder="E-mail ünvan"
              {...register("email")}
              style={{
                border: `1px solid ${errors.email ? "red" : "#9A9696"}`,
              }}
            />
            <input
              type="text"
              placeholder="Qurum adı"
              {...register("company")}
              style={{
                border: `1px solid ${errors.company ? "red" : "#9A9696"}`,
              }}
            />
            <input
              type="password"
              placeholder="Şifrə"
              {...register("password")}
              style={{
                border: `1px solid ${errors.password ? "red" : "#9A9696"}`,
              }}
            />
            <input
              type="password"
              placeholder="Şifrəni təkrar daxil edin"
              {...register("confirmPassword")}
              style={{
                border: `1px solid ${
                  errors.confirmPassword ? "red" : "#9A9696"
                }`,
              }}
            />

            {/* <div>
              {fields.map((field, index) => 
                <>
                 <input
                key={field.id}
                placeholder="numbers"
                {...register(`phNumbers.${index}.number`)}
                
              />
              <button type="button" onClick={() => remove(index)}>Remove phone number</button>
                </>
             )}
            
             <button type="button" onClick={() => append({number: ""})}>Add phone number</button>
            </div> */}

            <button  type="submit">
              Qeydiyyatdan keç
            </button>
          </form>
          <DevTool control={control} />
          <p className="accaountText">
            Hesabınız var? <span onClick={() => navigate("/account")}>Daxil ol</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

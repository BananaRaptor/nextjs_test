import { useForm } from "react-hook-form";
import { Api } from "../api/Api";

export default function LoginExample() {
  const { register, handleSubmit, setError, errors } = useForm();

  const onSubmit = async (data) => {
    const api = new Api();
    const result = await api
      .auth({ email: data.username, password: data.password })
      .catch((e) => {
        return e;
      });
    if (result.message) {
      setError("username", { type: "manual", message: result.message });
    } else {
      window.location = "http://localhost:3000";
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {errors.username && <p>{errors.username.message}</p>}
        <label> Username</label>
        <input ref={register} name="username" type="text" />
        <label> password</label>
        <input ref={register} name="password" type="password" />
        <button type="submit"> allo </button>
      </div>
    </form>
  );
}

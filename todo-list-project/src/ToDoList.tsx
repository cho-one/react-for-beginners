import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: any) => {
    console.log(data);
  };
  //   console.log(formState.errors);
  //   console.log(watch());

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        ></input>
        <span>{errors?.email?.message}</span>

        <input
          {...register("firstName", { required: "write here" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: "write here" })}
          placeholder="lastName"
        ></input>
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", { required: "write here", minLength: 10 })}
          placeholder="userName"
        ></input>
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", { required: "write here" })}
          placeholder="password"
        ></input>
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", { required: "Password is required" })}
          placeholder="password1"
        ></input>
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

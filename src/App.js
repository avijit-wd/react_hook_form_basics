import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

import "./index.css";

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 6,
              message: "Password must be of 6 charecters",
            },
            validate: (value) => value === "123456",

            // maxLength

            // min

            // max

            // pattern
          }}
          render={({ field: { ref, ...field } }) => (
            <TextField
              {...field}
              inputRef={ref}
              id="firstName"
              autoComplete="fname"
              variant="outlined"
              error={!!errors.firstName}
              label="First Name"
              helperText={
                errors.firstName?.message ||
                (errors.firstName?.type === "validate" &&
                  "Password don't match")
              }
            />
          )}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;

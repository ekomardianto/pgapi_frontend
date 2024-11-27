import { FormEvent, useEffect } from "react";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import AuthLayout from "@/components/layout/AuthLayout";
import { InputAdornment, TextField, Typography } from "@mui/material";

const LoginView = ({ setToaster }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  //handle button submit

  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: form.username.value,
        password: form.password.value,
        callbackUrl,
      });
      // console.log(res)
      if (!res?.error && res?.ok && res?.status === 200) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
        setToaster({
          variant: "success",
          message: "Login sukses!",
        });
      } else {
        setIsLoading(false);
        setToaster({
          variant: "danger",
          message: "Username / Password salah!",
        });
      }
    } catch (error) {
      setIsLoading(false);
      setError("Something went wrong");
    }
  };

  return (
    <AuthLayout
      title="Login"
      link="/auth/register"
      linkText="Anda belum memiliki akun? Silahkan register"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          className="w-full mt-6"
          label="Username"
          name="username"
          placeholder="username"
          required={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="caption">
                  <i className="bx bx-user-circle text-3xl"></i>
                </Typography>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "20px",
              textAlign: "center", // Placeholder dan teks input dipusatkan
            },
          }}
          inputProps={{
            style: {
              textAlign: "center", // Placeholder berada di tengah
            },
          }}
        />

        <TextField
          className="w-full mt-6"
          label="Password"
          name="password"
          type="password"
          placeholder="password"
          required={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography variant="caption">
                  <i className="bx bx-key text-3xl"></i>
                </Typography>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "20px",
              textAlign: "center", // Placeholder dan teks input dipusatkan
            },
          }}
          inputProps={{
            style: {
              textAlign: "center", // Placeholder berada di tengah
            },
          }}
        />

        <Button
          type="submit"
          variant="primary"
          className={styles.login__button}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="box-loader">
              <div className="loader" />
              <p>Loading...</p>
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </form>

      <div className={styles.login__devider}>
        <Button
          disabled
          type="button"
          onClick={() => signIn("google", { callbackUrl, redirect: false })}
          className={styles.login__devider__button}
        >
          <GoogleIcon style={{ color: "#496feb" }} />
          <p>Login with Google</p>
        </Button>
      </div>
    </AuthLayout>
  );
};

export default LoginView;

import { FormEvent, useState } from "react";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import authService from "@/services/auth";
import AuthLayout from "@/components/layout/AuthLayout";

const RegisterView = ({ setToaster }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  //handle button submit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      nama: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      username: form.username.value,
      password: form.password.value,
    };
    const result = await authService.registerAccount(data);
    // console.log(data)
    // console.log(result)
    if (result.status === 200) {
      form.reset();
      push("/auth/login");
      setToaster({
        variant: "success",
        message: "Register user berhasil!",
      });
    } else {
      setToaster({
        variant: "danger",
        message: "Register user failed!",
      });
    }
  };
  const handleSubmitBackup = async (event: FormEvent<HTMLFormElement>) => {
    setToaster({
      variant: "danger",
      message: "Sori! Self Registration belum bisa ea.",
    });
  };
  return (
    <AuthLayout
      title="Register"
      link="/auth/login"
      linkText="anda telah memiliki akun? Silahkan login"
    >
      <form onSubmit={handleSubmitBackup}>
        <Input
          label="Nama Lengkap"
          type="text"
          name="fullname"
          required={true}
        />
        <Input label="Email" type="email" name="email" required={true} />
        <Input label="Username" type="text" name="username" required={true} />
        <Input label="No HP/WA" type="number" name="phone" required={true} />
        <Input
          label="Password"
          type="password"
          name="password"
          required={true}
        />
        <Button
          type="submit"
          className={styles.register__button}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="box-loader">
              <div className="loader" />
              <p>Loading...</p>
            </div>
          ) : (
            "Register"
          )}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default RegisterView;

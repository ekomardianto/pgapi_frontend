import MemberLayout from "@/components/layout/MemberLayout";
import styles from "./Profile.module.scss";
import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import userService from "@/services/user";

type Proptypes = {
  profile: any;
  setProfile: Dispatch<SetStateAction<{}>>;
  session: any;
  setToaster: Dispatch<SetStateAction<{}>>;
};
const MemberProfileView = (props: Proptypes) => {
  const { profile, setProfile, session, setToaster } = props;
  const [changeImage, setChangeImage] = useState<any>({});
  const [isLoading, setIsLoading] = useState("");
  const handleChangeProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading("bio");
    const form = e.target as HTMLFormElement;
    const data = {
      fullname: form.fullname.value,
      phone: form.phone.value,
    };
    const result = await userService.updateProfile(
      data,
      session.data?.accessToken
    );
    if (result.status === 200) {
      setIsLoading("");
      setProfile({
        ...profile,
        fullname: data.fullname,
        phone: data.phone,
      });
      form.reset();
      setToaster({
        variant: "success",
        message: "Update Profile Berhasil!",
      });
    } else {
      setIsLoading("");
    }
  };
  const handleChangeProfilePicture = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading("pic");
    const form = e.target as HTMLFormElement;
    const file = form.avatar.files[0];
    const newName = "profile_" + file.name.split(".")[0];
    if (file) {
      console.log(newName);
    }
  };

  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading("pass");

    const form = e.target as HTMLFormElement;
    const data = {
      oldPassword: form.oldpassword.value,
      password: form.newpassword.value,
      confirmPassword: form.confirmpassword.value,
      currentPassword: profile.password,
    };
    if (data.password !== data.confirmPassword) {
      setToaster({
        variant: "danger",
        message: "Password Konfirmasi tidak Sama!",
      });
      setIsLoading("");
      return data;
    } else {
      try {
        const result = await userService.updateProfile(
          data,
          session.data?.accessToken
        );

        if (result.status === 200) {
          setIsLoading("");
          form.reset();
          setToaster({
            variant: "success",
            message: "Update Profile Berhasil!",
          });
        }
      } catch (error) {
        setIsLoading("");
        setToaster({
          variant: "danger",
          message: "Password lama salah!",
        });
      }
    }
  };

  return (
    <MemberLayout>
      <h2 className={styles.profile__title}>Profile view</h2>
      <div>
        <div className={styles.profile__main}>
          <div className={styles.profile__main__avatar}>
            {profile.image ? (
              <Image
                className={styles.profile__main__avatar__image}
                src={profile.image}
                alt="profile picture"
                width={100}
                height={100}
              />
            ) : (
              <div className={styles.profile__main__avatar__imageNo}>
                {profile?.fullname?.charAt(0)}
              </div>
            )}
            <form onSubmit={handleChangeProfilePicture}>
              <label
                htmlFor="avatar"
                className={styles.profile__main__avatar__uploadbox}
              >
                {changeImage.name ? (
                  <>
                    <p>{changeImage.name}</p>
                  </>
                ) : (
                  <>
                    <p>
                      Upload gambar maksimal <b>size 1MB</b>. Klik di area ini
                      untuk memilih gambar!
                    </p>
                  </>
                )}
              </label>
              <input
                onChange={(e: any) => {
                  e.preventDefault();
                  setChangeImage(e.currentTarget.files[0]);
                }}
                className={styles.profile__main__avatar__uploadbox__input}
                type="file"
                name="avatar"
                id="avatar"
                required
              />
              <Button
                type="submit"
                variant="primary"
                className={styles.profile__main__avatar__button}
                disabled={isLoading === "pic"}
              >
                {isLoading === "pic" ? (
                  <div className="box-loader">
                    <div className="loader" />
                    <p>Uploading...</p>
                  </div>
                ) : (
                  "Upload"
                )}
              </Button>
            </form>
          </div>
          <div className={styles.profile__main__boxpassword}>
            <h3>Change Password</h3>
            <form onSubmit={handleChangePassword}>
              <Input
                type="password"
                name="oldpassword"
                label="Old Password"
                placeholder="Enter your old password"
              />
              <Input
                type="password"
                name="newpassword"
                label="New Password"
                placeholder="Enter your new password"
              />
              <Input
                type="password"
                name="confirmpassword"
                label="Confirm Password"
                placeholder="Enter your confirm password"
              />
              <Button
                type="submit"
                variant="primary"
                className={styles.profile__main__boxpassword__button}
                disabled={isLoading === "pass" || profile.type === "google"}
              >
                {isLoading === "pass" ? (
                  <div className="box-loader">
                    <div className="loader" />
                    <p>Updating...</p>
                  </div>
                ) : (
                  "Update"
                )}
              </Button>
            </form>
            {profile.type === "google" && (
              <p className={styles.profile__main__boxpassword__google}>
                You cant change your password with google account login
              </p>
            )}
          </div>
          <div className={styles.profile__main__detail}>
            <form onSubmit={handleChangeProfile}>
              <Input
                type="email"
                name="email"
                defaultValue={profile.email}
                disabled={true}
                readonly={true}
                label="email"
              />
              <Input
                type="text"
                name="fullname"
                defaultValue={profile.nama}
                label="Nama Lengkap"
              />
              <Input
                type="number"
                name="phone"
                defaultValue={profile.phone}
                label="HP / WA"
              />
              <Input
                type="text"
                name="role"
                defaultValue={profile.role_id}
                disabled={true}
                readonly={true}
                label="Role"
              />
              <Button
                type="submit"
                variant="primary"
                className={styles.profile__main__detail__button}
                disabled={isLoading === "bio"}
              >
                {isLoading === "bio" ? (
                  <div className="box-loader">
                    <div className="loader" />
                    <p>Updating...</p>
                  </div>
                ) : (
                  "Update"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MemberLayout>
  );
};

export default MemberProfileView;

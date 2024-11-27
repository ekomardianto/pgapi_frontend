import MemberProfileView from "@/components/view/member/Profile";
import userService from "@/services/user";
import { get } from "http";
import { useSession } from "next-auth/react";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

type Proptypes = {
  setToaster: Dispatch<SetStateAction<{}>>;
};
const MemberProfilePage = ({ setToaster }: Proptypes) => {
  const [profile, setProfile] = useState({});
  const session: any = useSession();

  const getProfileUsers = useCallback(async () => {
    try {
      const req = await userService.getProfile(
        session.data?.user.username,
        session.data?.accessToken
      );
      if (req.status === 200 && req.data.status_code === 200) {
        console.log(req.data.data);
        setProfile(req.data.data);
      }
    } catch (error) {
      setToaster({ variant: "danger", message: "Error get Profile" });
    }
  }, [
    session.data?.accessToken,
    setToaster,
    setProfile,
    session.data?.user.username,
  ]);

  useEffect(() => {
    if (session.status === "authenticated") {
      getProfileUsers();
    }
  }, [session.status, getProfileUsers]);
  return (
    <>
      <MemberProfileView
        profile={profile}
        setProfile={setProfile}
        session={session}
        setToaster={setToaster}
      />
    </>
  );
};

export default MemberProfilePage;

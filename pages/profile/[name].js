import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { name } = router.query;
  return <div>hello ! {name}</div>;
};

export default Profile;

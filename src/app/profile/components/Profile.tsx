import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { Box } from "@/components/Box";
import classnames from "classnames/bind";
import styles from "./Profile.module.scss";

const cn = classnames.bind(styles);

const Profile = ({ userId }: { userId?: string }) => {
  return (
    <Box className={cn("account")}>
      <ProfileHeader userId={userId} />
      <ProfileContent userId={userId} />
    </Box>
  );
};

export default Profile;

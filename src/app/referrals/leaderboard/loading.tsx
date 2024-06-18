import classnames from "classnames/bind";
import styles from "../loading.module.scss";
import GlobalLoader from "@/packages/mini-app/components/global-locker/GlobalLoader";
const cn = classnames.bind(styles);

const loading = () => {
  return <GlobalLoader />;
};

export default loading;

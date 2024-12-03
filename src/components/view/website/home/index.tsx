import Button from "@/components/ui/button";
import styles from "./Websitehome.module.scss";
import Image from "next/image";
import MySlider from "@/components/ui/sliderhome";
// import ypoSvg from '@/assets/ypo.svg'
const HomeView = () => {
  return (
    <div className={styles.home}>
      <MySlider />
    </div>
  );
};

export default HomeView;

import styles from "@/styles/Home.module.css";
import { useSession } from "next-auth/react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const router = useRouter();
  const { status, data } = useSession();
  console.log("data", data);
  console.log("status", status);
  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <h1>welcome newbie</h1>
      </div>
    );
  } else {
    router.push("/login");
    return (
      <div className={styles.container}>
        <h1>welcome newbie</h1>
      </div>
    );
  }
};

export default Home;

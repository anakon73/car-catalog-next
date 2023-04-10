import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Image from "next/image";

const NotFound: NextPage = () => {
  return (
    <Layout title="Not Found">
      <div style={{ textAlign: "center" }}>
        <Image src="/404.webp" alt="404" width={450} height={433} priority />
      </div>
    </Layout>
  );
};

export default NotFound;

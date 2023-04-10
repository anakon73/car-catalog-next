import { FC } from "react";
import styles from "./Home.module.scss";
import Layout from "@/components/layout/Layout";
import { ICarData } from "@/interfaces/car.interface";
import CarItem from "@/components/ui/car/CarItem";

const Home: FC<ICarData> = ({ cars }) => {
  return (
    <Layout
      title="Home"
      description="We love our customer, we like to sale cars"
    >
      <h1>What's up homie</h1>

      {cars.length ? (
        cars.map((car) => <CarItem key={car.id} car={car} />)
      ) : (
        <div>Cars not found</div>
      )}
    </Layout>
  );
};

export default Home;

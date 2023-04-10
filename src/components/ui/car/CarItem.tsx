import { FC } from "react";
import { ICarDataSingle } from "@/interfaces/car.interface";
import Image from "next/image";
import Link from "next/link";
import styles from "./CarItem.module.scss";

const CarItem: FC<ICarDataSingle> = ({ car }) => {
  return (
    <div className={styles.item}>
      <Image src={car.image} alt={car.name} width={400} height={300} />
      <h2>{car.name}</h2>
      <small>{car.price}</small>

      <Link href={`/car/${car.id}`}>Read more</Link>
    </div>
  );
};

export default CarItem;

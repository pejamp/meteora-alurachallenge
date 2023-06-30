import React from "react";
import styles from "./Facilities.module.scss";
import { Facility } from "../Facility";
import diamondIcon from "src/assets/Desktop/icones/x-diamond.png";
import arrowRepeatIcon from "src/assets/Desktop/icones/arrow-repeat.png";
import flowerIcon from "src/assets/Desktop/icones/flower1.png";

export function Facilities() {
  return (
    <section className={styles.container}>
      <h4 className={styles.section__title}>
        Conheça todas as nossas facilidades
      </h4>
      <ul className={styles.section__list}>
        <Facility
          icon={diamondIcon}
          title={"PAGUE PELO PIX"}
          text={"Ganhe 5% OFF em pagamentos via PIX"}
        />
        <Facility
          icon={arrowRepeatIcon}
          title={"TROCA GRÁTIS"}
          text={"Fique livre para trocar em até 30 dias."}
        />
        <Facility
          icon={flowerIcon}
          title={"SUSTENTABILIDADE"}
          text={"Moda responsável, que respeita o meio ambiente."}
        />
      </ul>
    </section>
  );
}

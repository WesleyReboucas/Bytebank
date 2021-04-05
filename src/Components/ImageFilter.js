import React from "react";

import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";

import { IconTheme } from "./UI/index";

export default (type) => {
  const Images = {
    Restaurante: <IconTheme src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconTheme src={utilidades} alt="Utilidades" />,
    Transporte: <IconTheme src={transporte} alt="Transporte" />,
    Saude: <IconTheme src={saude} alt="Saúde" />,
    default: <IconTheme src={outros} alt="Outros" />,
  };

  return Images[type] || Images.default;
};

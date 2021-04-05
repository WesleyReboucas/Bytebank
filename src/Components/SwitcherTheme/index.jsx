import React from "react";
import sytled from "styled-components";

import { Icon } from "../UI";

import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";

const light = <Icon src={ThemeOff} alt="Tema Claro" />;
const dark = <Icon src={ThemeOn} alt="Tema Escuro" />;

export default ({ theme }) => (theme ? dark : light);

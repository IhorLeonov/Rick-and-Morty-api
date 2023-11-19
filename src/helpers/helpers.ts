import { FormInputValues, HistoryData } from "../constants/types";

export const checkStatus = (status: string): string | undefined => {
  if (status === "Alive") return "#5C4";
  if (status === "Dead") return "#D63D2E";
};

export const getFilteredHistory = (values: FormInputValues): HistoryData => {
  const chaInputs = ["charName", "charType", "status", "species", "gender"];
  const locInputs = ["locName", "locType", "dimension"];
  const epiInputs = ["epiName", "epiCode"];

  const cha: string[] = [];
  const loc: string[] = [];
  const epi: string[] = [];

  for (const key in values) {
    if (chaInputs.includes(key)) cha.push(values[key]);
    if (locInputs.includes(key)) loc.push(values[key]);
    if (epiInputs.includes(key)) epi.push(values[key]);
  }

  return {
    characters: cha.filter((c) => c),
    locations: loc.filter((l) => l),
    episodes: epi.filter((e) => e),
  };
};

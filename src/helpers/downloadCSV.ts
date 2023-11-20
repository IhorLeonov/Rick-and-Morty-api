import { Parser } from "@json2csv/plainjs";
import { Character, Location, Episode } from "../constants/types";

export const downloadCSV = (data: Character[] | Location[] | Episode[] | undefined) => {
  try {
    const parser = new Parser();
    if (data) {
      const csvData = parser.parse(data);
      const element = document.createElement("a");
      element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
      element.setAttribute("download", "rick-and-morty.csv");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  } catch (err) {
    console.error(err);
  }
};

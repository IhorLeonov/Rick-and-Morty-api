import { Box } from "@mui/material";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import { CiCircleAlert } from "react-icons/ci";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { LuMoreVertical } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleDrawer } from "../../redux/historySlice";
import { downloadCSV } from "../../helpers/downloadCSV";
import { FabProps } from "../../constants/types";
import {
  selectCharactersData,
  selectEpisodesData,
  selectFilteredCharData,
  selectLocationsData,
} from "../../redux/selectors";

export const FAB = ({ styles, disabled, listViewing }: FabProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const charactersData = useAppSelector(selectCharactersData);
  const filterCharData = useAppSelector(selectFilteredCharData);
  const locationsData = useAppSelector(selectLocationsData);
  const episodesData = useAppSelector(selectEpisodesData);

  const chooseDataList = () => {
    if (listViewing === "all") return charactersData;
    if (listViewing === "char") return filterCharData;
    if (listViewing === "loc") return locationsData;
    if (listViewing === "epi") return episodesData;
  };

  const handleOpen = () => {
    dispatch(toggleDrawer(true));
  };

  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
        bottom: 56,
        right: 78,
        "button: disabled": {
          backgroundColor: "#ccc",
          opacity: 0.4,
          color: "#000",
          boxShadow: "none",
        },
        ...styles,
      }}
    >
      {isOpen && (
        <Fab size="small" aria-label="history" onClick={handleOpen}>
          <CiCircleAlert size={24} />
        </Fab>
      )}
      {isOpen && (
        <Fab
          disabled={disabled}
          size="small"
          aria-label="download"
          onClick={() => downloadCSV(chooseDataList())}
        >
          <PiDownloadSimpleLight size={24} />
        </Fab>
      )}
      <Fab aria-label="open" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <LuMoreVertical size={24} /> : <IoMdClose size={24} />}
      </Fab>
    </Box>
  );
};

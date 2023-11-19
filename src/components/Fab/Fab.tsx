import { Box } from "@mui/material";
import { FC, useState } from "react";
import Fab from "@mui/material/Fab";
import { CiCircleAlert } from "react-icons/ci";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { LuMoreVertical } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../../redux/store";
import { toggleDrawer } from "../../redux/mainSlice";

interface FabProps {
  styles?: object;
  disabled?: boolean;
}

export const FAB: FC<FabProps> = ({ styles, disabled }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(toggleDrawer(true));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 56,
        gap: "24px",
        position: "absolute",
        bottom: 37,
        right: -28,
        "button: disabled": {
          backgroundColor: "#cccccc",
          opacity: 0.4,
          color: "#000000",
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
        <Fab disabled={disabled} size="small" aria-label="download">
          <PiDownloadSimpleLight size={24} />
        </Fab>
      )}
      <Fab aria-label="open" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <LuMoreVertical size={24} /> : <IoMdClose size={24} />}
      </Fab>
    </Box>
  );
};

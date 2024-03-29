import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleDrawer } from "../../redux/historySlice";
import { selectIsDrawerOpen, selectHistoryData } from "../../redux/selectors";
import { Category, Title, Values } from "./Drawer.styled";
import { Divider } from "@mui/material";

export default function TemporaryDrawer() {
  const dispatch = useAppDispatch();
  const isDrawerOpen = useAppSelector(selectIsDrawerOpen);
  const historyData = useAppSelector(selectHistoryData);

  const handleOpenDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    dispatch(toggleDrawer(open));
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleOpenDrawer(false)}
        sx={{
          ".MuiDrawer-paper": {
            height: 571,
            borderRadius: "9px 0px 0px 9px",
            top: "calc((100vh - 571px)/2)",
            pb: 1,
          },
        }}
      >
        <Box
          sx={{
            width: 419,
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
          onKeyDown={handleOpenDrawer(false)}
        >
          <Box
            sx={{
              height: 511,
              padding: 2,
              fontSize: 14,
              lineheight: 1.5,
              letterspacing: 0.1,
              overflow: "scroll",
              "& :nth-of-type(n)": {
                mb: 2,
              },
              "& :last-child": {
                mb: 0,
              },
            }}
          >
            <Title>History</Title>
            <Divider />
            <Category>Character:</Category>
            <Values>{historyData?.characters.join(", ")}</Values>
            <Category>Location:</Category>
            <Values>{historyData?.locations.join(", ")}</Values>
            <Category>Episode:</Category>
            <Values>{historyData?.episodes.join(", ")}</Values>

            {historyData.actions.length > 0 && (
              <>
                <Divider />
                <Values>
                  Передивився інформацію що до:{" "}
                  <span style={{ fontWeight: 500, fontStyle: "italic" }}>
                    {historyData.actions.join(", ")}
                  </span>
                </Values>
              </>
            )}
          </Box>
          <Box sx={{ p: 1 }}>
            <Button variant="text" sx={{ ml: 1, width: 80 }} onClick={handleOpenDrawer(false)}>
              Close
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

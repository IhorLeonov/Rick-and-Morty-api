import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { toggleDrawer } from "../../redux/mainSlice";
import { selectIsDrawerOpen } from "../../redux/selectors";
import { Title } from "./Drawer.styled";

export default function TemporaryDrawer() {
  const dispatch = useAppDispatch();
  const isDrawerOpen = useAppSelector(selectIsDrawerOpen);

  const handleOpen = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
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
      <>
        <Button onClick={handleOpen(true)}>Open</Button>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={handleOpen(false)}
          sx={{
            ".css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
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
              //   justifyContent: "space-between",
            }}
            role="presentation"
            // onClick={handleOpen(false)}
            onKeyDown={handleOpen(false)}
          >
            {/* <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
            {/* <Divider /> */}
            {/* <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
            <Box sx={{ height: 511 }}>
              <Title>History</Title>
            </Box>
            <Box sx={{ p: 1 }}>
              <Button variant="text" sx={{ ml: 1, width: 80 }}>
                Close
              </Button>
            </Box>
          </Box>
        </Drawer>
      </>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

//Contexts
import { useSnackContext } from "./context/SnackContext";

import Snacks from "./common/Snacks";

import { Box } from "@mui/material";

import { useWidgetContext } from "./context/WidgetContext";
import WidgetButton from "./components/WidgetButton";

function App() {
  const { snackInfo, closeSnack } = useSnackContext();
  const { isWidgetOpen } = useWidgetContext();
  const cookies = new Cookies(null, { path: "/" });

  cookies.set(
    "widget_session",
    "eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJakV5TVRJeE1pSXNJbVZ0WVdsc0lqb2labkpoYm1OcGMyTnZRRzF2ZG1sbmIyOHVZMjl0SWl3aWRYTmxjbDlwWkNJNklqRXlNVEl4TWpFaUxDSnBZWFFpT2pFMk9Ua3dNak15TlROOS5pd1Y0aU9lRkhodFFYSHY5V3JKdDVpZDAtSkFObERyQkM5UE5TNjg0QjZZIiwiYWxnIjoiSFMyNTYifQ"
  );

  return (
    <Box>
      <WidgetButton />
      <Snacks
        message={snackInfo.message}
        severity={snackInfo.severity}
        open={snackInfo.isOpen}
        closeSnack={closeSnack}
      />

      <Box
        sx={{
          maxWidth: "400px",
          height: "80vh",
          borderRadius: "8px",
          overflow: "hidden",
          background: "#fefeff",
          position: "absolute",
          bottom: "84px",
          right: "10px",
          display: !isWidgetOpen && "none",
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.75)",
        }}
      >
        {<Outlet />}
      </Box>
    </Box>
  );
}

export default App;

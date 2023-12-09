import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Main from "./Main";


export default function DashboardLayout() {
  return (
    <>
        <div>DashboardLayout</div>
        <Box
          sx={{
            display: { lg: 'flex' },
            minHeight: { lg: 1 },
          }}
        >
          <Main>
            <Outlet />
          </Main>
        </Box>
    </>

  )
}

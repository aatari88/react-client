import { Box, Link, Stack, Tooltip, Typography } from "@mui/material";
import LoginLayout from "../../layouts/login";
import AuthLoginForm from "./AuthLoginForm";

export default function Login() {
  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Sign in to Minimal</Typography>
        
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2" >New user?</Typography>

          <Link variant="subtitle2">Create an account</Link>
        </Stack>

        <Tooltip>
          <Box
            component="img"
            alt={""}
            src={`/assets/icons/auth/ic_jwt.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip>
      </Stack>

      <AuthLoginForm>

      </AuthLoginForm>

    </LoginLayout>
  )
}

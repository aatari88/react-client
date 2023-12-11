import PropTypes from 'prop-types';

import { Box } from "@mui/material";
// config
import useResponsive from '../../hooks/useResponsive';

import { HEADER, NAV } from '../../config-global';

// ----------------------------------------------------------------------

const SPACING = 8;

Main.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
};

export default function Main({ children, sx, ...other }) {
  // const isNavMini = themeLayout === 'mini';
  const isNavMini = true;
  const isDesktop = useResponsive('up', 'lg');
  return (
    <Box
      sx={{
        flexGrow: 1,
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(isDesktop && {
          px: 2,
          py: `${HEADER.H_DASHBOARD_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.W_DASHBOARD}px)`,
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_DASHBOARD_MINI}px)`,
          }),
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  )
}

import { Navigate, Outlet, useRoutes } from "react-router-dom";

// config
import { PATH_AFTER_LOGIN } from '../config-global';
import { LoginPage } from "./elements";

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'login',
          element: (
            // <GuestGuard>
              <LoginPage />
            // </GuestGuard>
          ),
        },
      ],
    },
    {
      path: '/app',
      element: (
        <>
          <h1>App</h1>
          <Outlet />
        </>
        // <AuthGuard>
          // <DashboardLayout />
        // </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'dashboard',
          element: (
            <h1>Dashboard</h1>
            // <AuthGuard>
              // <DashboardLayout />
            // </AuthGuard>
          ),
          // children: [
          //   { path: '/', element: <Navigate to={PATH_AFTER_LOGIN} replace /> },
          //   { path: 'one', element: <PageOne /> },
          //   { path: 'two', element: <PageTwo /> },

        },
        {
          path: 'two',
          element: (
            <h1>Two</h1>
            // <AuthGuard>
              // <DashboardLayout />
            // </AuthGuard>
          ),
          // children: [
          //   { path: '/', element: <Navigate to={PATH_AFTER_LOGIN} replace /> },
          //   { path: 'one', element: <PageOne /> },
          //   { path: 'two', element: <PageTwo /> },

        }
      ]
    }
  ]);
}


// routes
import { PATH_APP } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v4.2.0',
    items: [
      { title: 'Dashboard', path: PATH_APP.dashboard, icon: ICONS.dashboard, roles: ['admin'] },
      { title: 'Two', path: PATH_APP.two, icon: ICONS.ecommerce },
      { title: 'Three', path: PATH_APP.three, icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     {
  //       title: 'user',
  //       path: PATH_APP.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: PATH_APP.user.four },
  //         { title: 'Five', path: PATH_APP.user.five },
  //         { title: 'Six', path: PATH_APP.user.six },
  //       ],
  //     },
  //   ],
  // },
];

export default navConfig;

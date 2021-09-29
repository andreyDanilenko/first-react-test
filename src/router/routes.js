import BrandPage from "../components/brandPage/BrandPage";
import About from "../pages/About";
import AirTickets from "../pages/AirTickets";
import Charity from "../pages/Charity";
import Coupons from "../pages/Coupons";
import Hotels from "../pages/Hotels";
import Impressions from "../pages/Impressions";
import Lottery from "../pages/Lottery";
import MobileApp from "../pages/MobileApp";
import Partners from "../pages/Partners";
import RailwayTickets from "../pages/RailwayTickets";

export const routes = [
  { path: '/about', component: About, exact: true },
  { path: '/air-tickets', component: AirTickets, exact: true },
  { path: '/charity', component: Charity, exact: true },
  { path: '/coupons', component: Coupons, exact: true },
  { path: '/hotels', component: Hotels, exact: true },
  { path: '/impressions', component: Impressions, exact: true },
  { path: '/lottery', component: Lottery, exact: true },
  { path: '/mobile-app', component: MobileApp, exact: true },
  { path: '/partners', component: Partners, exact: true },
  { path: '/', component: Partners, exact: true },
  { path: '/railway-tickets', component: RailwayTickets, exact: true },
  { path: '/partners/:id', component: BrandPage },
  { path: '/:id', component: BrandPage },
];


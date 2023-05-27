import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../components/Container.vue"),
    children: [
      {
        path: "/",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/selectIcon",
        component: () => import("../views/SelectIcon.vue"),
      },
      {
        path: "/selectAddress",
        component: () => import("../views/SelectAddress.vue"),
      },
      {
        path: "/tendency",
        component: () => import("../views/Trend.vue"),
      },
      {
        path: "/notify",
        component: () => import("../views/Notify.vue"),
      },
    ],
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;

import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", redirect: "/Home" },
    { path: "/Home", component: "Home", name: "仪表盘" },
    { path: "/Login", component: "Login", layout: false },
    {
      path: "/Exception",
      component: "Exception",
      name: "异常页",
      routes: [
        {
          path: "/Exception/Exception403",
          component: "Exception/Exception403",
          name: "403",
        },
        {
          path: "/Exception/Exception404",
          component: "Exception/Exception404",
          name: "404",
        },
        {
          path: "/Exception/Exception500",
          component: "Exception/Exception500",
          name: "500",
        },
      ],
    },
    { path: "/User", component: "User", name: "个人中心" },
  ],
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});

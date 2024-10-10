import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", redirect: "/Home" },
    { path: "/Home", component: "Home" },
    {
      path: "/List",
      component: "List",
      routes: [
        {
          path: "/List/List1",
          component: "List/List1.jsx",
        },
        {
          path: "/List/List2",
          component: "./List/List2",
        },
      ],
    },
    { path: "/User", component: "User" },
  ],
  proxy: {
    "/api": {
      target: "http://www.example.com/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  alias: {
    "@": "/src",
  },
  npmClient: "yarn",
});

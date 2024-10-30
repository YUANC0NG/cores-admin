import { defineConfig } from "umi";

export default defineConfig({
	routes: [
		{ path: "/", redirect: "/Home" },
		// { path: "/docs", component: "docs", name: '文档' },
		{ path: "/Home", component: "Home", name: '仪表盘' },
		{
			path: "/Exception",
			component: "Exception",
			name: '异常页',
			routes: [
				{
					path: "/Exception/Exception403",
					component: "Exception/Exception403",
					name: '403',
				},
				{
					path: "/Exception/Exception404",
					component: "Exception/Exception404",
					name: '404',
				},
				{
					path: "/Exception/Exception500",
					component: "Exception/Exception500",
					name: '500',
				},
			],
		},
		{ path: "/User", component: "User", name: '个人中心' },
	],
	npmClient: 'yarn',
});

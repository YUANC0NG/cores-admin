import React, { useState } from "react";
import { ProLayout, SettingDrawer } from "@ant-design/pro-components";
import { Link, Outlet, useAppData, useLocation, history } from "umi";
import { ConfigProvider, Dropdown, Input, theme } from "antd";
import {
  HomeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
  UserOutlined,
  LogoutOutlined,
  BellOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";

export default function Layout() {
  const { clientRoutes } = useAppData();
  const location = useLocation();
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    // 顶栏布局
    // fixSiderbar: true,
    // layout: "mix",
    // splitMenus: true,
    // 侧栏布局
    layout : "mix",
    siderMenuType: "sub",
  });
  console.log('settings :', settings);
  const route = clientRoutes?.find?.(i=>i.isLayout)
  console.log('route :', route);
  console.log("clientRoutes", clientRoutes);
  console.log("location", location);
  return (
    <ProLayout
      route={route}
      location={location}
      title="cores admin"
      avatarProps={{
        src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
        size: "small",
        title: "小果核",
        render: (props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "UserInfo",
                    icon: <UserOutlined />,
                    label: "个人中心",
                  },
                  {
                    key: "logout",
                    icon: <LogoutOutlined />,
                    label: "退出登录",
                    onClick: () => {
                      history.push("/Login");
                    },
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      contentStyle={{
        padding: 0,
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link to={menuItemProps.path} target={menuItemProps.target}>
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
      {...settings}
    >
      <Outlet />
      {/* 自定义布局 */}
      <SettingDrawer
        pathname={location.pathname}
        enableDarkTheme
        getContainer={(e: any) => {
          if (typeof window === "undefined") return e;
          return document.getElementById("test-pro-layout");
        }}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </ProLayout>
  );
}

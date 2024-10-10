import React, { useState } from "react";
import { Outlet, history } from "umi";
import { LogoutOutlined, BellOutlined, MoonOutlined } from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";
import { ConfigProvider, Dropdown, Input, theme } from "antd";
import {
  HomeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
  UserOutlined,
} from "@ant-design/icons";
import {
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from "@ant-design/pro-components";

const defaultProps = {
  route: {
    path: "/",
    routes: [
      {
        path: "/Home",
        name: "欢迎",
        icon: <HomeFilled />,
        component: "./Home",
      },
      {
        name: "列表页",
        icon: <TabletFilled />,
        path: "/List",
        routes: [
          {
            path: "/list/list1",
            name: "列表页面",
            icon: <CrownFilled />,
          },
          {
            path: "/list/list2",
            name: "二级列表页面",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
        ],
      },
      {
        path: "/User",
        name: "个人中心",
        icon: <SmileFilled />,
        component: "./User",
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
  });
  const { token } = theme.useToken();
  const [pathname, setPathname] = useState("/Home");
  if (typeof document === "undefined") {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById("test-pro-layout") || document.body;
          }}
        >
          <ProLayout
            prefixCls="my-prefix"
            bgLayoutImgList={[
              {
                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
                left: 85,
                bottom: 100,
                height: "303px",
              },
              {
                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
                bottom: -68,
                right: -45,
                height: "303px",
              },
              {
                src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
                bottom: 0,
                left: 0,
                width: "331px",
              },
            ]}
            {...defaultProps}
            location={{ pathname }}
            token={{ header: { colorBgMenuItemSelected: "rgba(0,0,0,0.04)" } }}
            siderMenuType="group"
            menu={{ collapsedShowGroupTitle: true }}
            avatarProps={{
              src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
              size: "small",
              title: "七妮妮",
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
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            actionsRender={(props) => {
              if (props.isMobile) return [];
              if (typeof window === "undefined") return [];
              return [
                props.layout !== "side" && document.body.clientWidth > 1400 ? (
                  <Input
                    style={{
                      borderRadius: 4,
                      marginInlineEnd: 12,
                      backgroundColor: token.colorBgTextHover,
                    }}
                    placeholder="搜索方案"
                    variant="borderless"
                  />
                ) : undefined,
                <MoonOutlined key="GithubFilled" />,
                <BellOutlined key="GithubFilled" />,
              ];
            }}
            headerTitleRender={(logo, title, _) => {
              const defaultDom = (
                <a>
                  {logo}
                  {title}
                </a>
              );
              if (typeof window === "undefined") return defaultDom;
              if (document.body.clientWidth < 1400) {
                return defaultDom;
              }
              if (_.isMobile) return defaultDom;
              return <>{defaultDom}</>;
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: "center",
                    paddingBlockStart: 12,
                  }}
                >
                  <div>© 2021 Made with love</div>
                  <div>by 果核开源实验室</div>
                </div>
              );
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  history.push(item.path || "/Home");
                  setPathname(item.path || "/Home");
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                background: "skyblue",
              }}
            >
              <Outlet />
            </div>
            <SettingDrawer
              pathname={pathname}
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
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

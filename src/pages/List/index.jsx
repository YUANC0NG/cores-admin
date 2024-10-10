import React, { useEffect } from "react";
import { Outlet, history } from "umi";

export default function List() {
  useEffect(() => {
    history.push("/List/List1");
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

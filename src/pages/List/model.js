export default {
  namespace: "List",
  state: {},
  effects: {
    *getList({ params }, { put, call, select }) {
      // const res = yield api.getList(params);
      // const list = res?.data?.records || [];
      // const total = res?.data?.total;
      // const resData = { total, list };
      return [];
    },
  },
  reducers: {
    setListState(state, { params }) {
      return { ...state, ...params };
    },
  },
};

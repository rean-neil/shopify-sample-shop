export const getAccessToken = (code: string) => {
  return fetch(
    process.env.REACT_APP_API_BASE_URL + "/getAccessToken?code=" + code,
    {
      method: "GET",
    }
  );
};

export const getUserData = () => {
  return fetch(process.env.REACT_APP_API_BASE_URL + "/getUserData", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
};

export const getCustomerOrders = () => {
  return fetch(process.env.REACT_APP_API_BASE_URL + "/getOrders", {
    method: "GET",
  });
};

export const getOrderFulfillment = (order_id: string) => {
  return fetch(
    process.env.REACT_APP_API_BASE_URL +
      "/getOrderFulfillment?" +
      new URLSearchParams({ order_id }),
    {
      method: "GET",
    }
  );
};

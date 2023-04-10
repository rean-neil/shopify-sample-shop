import { LATEST_API_VERSION, shopifyApi } from "@shopify/shopify-api";
import { mock_fulfillment, mock_orders } from "../mock-data";

import { default as fetch } from "node-fetch";

const CLIENT_ID = "9f1546926fb42fbb46c5";
const CLIENT_SECRET = "23cd6b5e6cc0c68c56c8fdd1236629e356107bbd";
// TEST API
// const shopify = shopifyApi({
//   apiKey: "APIKeyFromPartnersDashboard",
//   apiSecretKey: "APISecretFromPartnersDashboard",
//   scopes: ["read_products"],
//   hostName: "ngrok-tunnel-address",
//   apiVersion: LATEST_API_VERSION,
//   isEmbeddedApp: false,
// });
// const storefrontClient = new shopify.clients.Storefront({
//   domain: "shop",
//   storefrontAccessToken: "storefrontAccessToken",
// });

export const getAccessToken = async ({ req, res, next }: any) => {
  const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`;
  await fetch("https://github.com/login/oauth/access_token" + params, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response: any) => {
      return response.json();
    })
    .then((data: any) => {
      res.json(data);
    });
  return;
};

export const getUserData = async ({ req, res, next }: any) => {
  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: req.get("Authorization"),
    },
  })
    .then((response: any) => {
      return response.json();
    })
    .then((data: any) => {
      res.json(data);
    });
};

export const getOrders = async ({ req, res, next }: any) => {
  // const orders = await storefrontClient.query({
  //   data: `
  //   {
  //     customer(id: "CUSTOMER_ID") {
  //       orders(first: 10) {
  //         edges {
  //           node {
  //             id
  //             orderNumber
  //             createdAt
  //             totalPrice {
  //               amount
  //               currencyCode
  //             }
  //             lineItems(first: 5) {
  //               edges {
  //                 node {
  //                   title
  //                   quantity
  //                   variant {
  //                     title
  //                     price {
  //                       amount
  //                       currencyCode
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `,
  // });
  res.json({ data: mock_orders.data });
};

export const getOrderFulfillment = async ({ req, res, next }: any) => {
  // const fulfillment = await storefrontClient.query({
  //   data: `
  //   {
  //     order(id: "gid://shopify/Order/123456789") {
  //       id
  //       name
  //       fulfillments(first: 1) {
  //         edges {
  //           node {
  //             id
  //             status
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `,
  // });
  res.json({ data: mock_fulfillment.data.order });
};

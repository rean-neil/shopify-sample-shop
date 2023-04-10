const mock_orders = {
  data: {
    customer: {
      orders: {
        edges: [
          {
            node: {
              id: "gid://shopify/Order/123456789",
              orderNumber: "1001",
              createdAt: "2022-03-15T10:30:00Z",
              totalPrice: {
                amount: "50.00",
                currencyCode: "USD",
              },
              lineItems: {
                edges: [
                  {
                    node: {
                      title: "Product A",
                      quantity: 2,
                      variant: {
                        title: "Product A - Size M",
                        price: {
                          amount: "25.00",
                          currencyCode: "USD",
                        },
                      },
                    },
                  },
                  {
                    node: {
                      title: "Product B",
                      quantity: 1,
                      variant: {
                        title: "Product B - Color Red",
                        price: {
                          amount: "0.99",
                          currencyCode: "USD",
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
          {
            node: {
              id: "gid://shopify/Order/987654321",
              orderNumber: "1002",
              createdAt: "2022-04-01T15:45:00Z",
              totalPrice: {
                amount: "100.00",
                currencyCode: "USD",
              },
              lineItems: {
                edges: [
                  {
                    node: {
                      title: "Product C",
                      quantity: 1,
                      variant: {
                        title: "Product C - Size L",
                        price: {
                          amount: "100.00",
                          currencyCode: "USD",
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  },
};

const mock_fulfillment = {
  data: {
    order: {
      id: "gid://shopify/Order/123456789",
      name: "#1001",
      fulfillments: {
        edges: [
          {
            node: {
              id: "gid://shopify/Fulfillment/987654321",
              status: "FULFILLED",
            },
          },
        ],
      },
    },
  },
};

export { mock_orders, mock_fulfillment };

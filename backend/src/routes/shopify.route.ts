import {
  getAccessToken,
  getOrderFulfillment,
  getOrders,
  getUserData,
} from "../controllers/shopify.controller";

import { Router } from "express";

export const router = Router();

router.get("/getAccessToken", async (req, res, next) => {
  getAccessToken({ req, res, next });
});

router.get("/getUserData", async (req, res, next) => {
  getUserData({ req, res, next });
});

router.get("/getOrders", async (req, res, next) => {
  getOrders({ req, res, next });
});

router.get("/getOrderFulfillment", async (req, res, next) => {
  getOrderFulfillment({ req, res, next });
});

export default router;

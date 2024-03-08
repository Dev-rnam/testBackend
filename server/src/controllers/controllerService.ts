import express from "express";
import Service from "../models/services";

export async function CreateService(
  req: express.Request,
  res: express.Response
) {
  const { title, size, author } = req.body;
  try {
    const newService = new Service({ title, size, author });
    const createService = await newService.save();
    res.json(createService);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteService(
  req: express.Request,
  res: express.Response
) {
  const serviceId = req.params.serviceId;
  const service = await Service.findByIdAndDelete(serviceId);
  res.json(service);
}

export async function getServiceControllerById(
  req: express.Request,
  res: express.Response
) {
  const { serviceId } = req.params;
  const service = await Service.findById(serviceId);
  res.json(service);
}

export async function getServiceController(
  req: express.Request,
  res: express.Response
) {
  const service = await Service.find();
  res.json(service);
}

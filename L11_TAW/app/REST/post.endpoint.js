import { request } from "express";
import business from "../business/business.container";
const postEndpoint = (router) => {
  router.get("/api/posts", async (request, response, next) => {
    try {
      let result = await business.getPostManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/api/post/:id", async (request, response, next) => {
    try {
      const id = request.params.id;
      const result = await business.getPostManager().get(id);
      response.staus(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/api/post", async (request, response, next) => {
    try {
      const data = request.body;
      const result = await business.getPostManager().createNewOrUpdate(data);
      response.status(201).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};
export default postEndpoint;

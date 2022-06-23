import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

// import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
// import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
// const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };

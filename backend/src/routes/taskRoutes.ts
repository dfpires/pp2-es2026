import { Router } from "express";
import * as taskController
  from "../controllers/taskController";

  const router = Router()

router.get("/", taskController.list);
router.get("/:id", taskController.getById);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.remove);

export default router;

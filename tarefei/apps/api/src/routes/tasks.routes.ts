import { Router } from "express";
import { taskController } from "../controllers/TaskController";

const tasksRouter = Router()

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Nova tarefa"
 *               due_date:
 *                 type: string
 *                 format: date
 *                 example: "2035-04-01"
 *               status:
 *                 type: string
 *                 example: "LOW"
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       400:
 *         description: Erro ao criar a nova tarefa
 */
tasksRouter.post('/', taskController.createTask)

export { tasksRouter };


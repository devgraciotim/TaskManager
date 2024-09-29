import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateTaskSevice } from "../services/UpdateTaskSevice";

class UpdateTaskController{
    async handle(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const { id } = request.params
        const { title, description, status } = request.body as { title: string, description: string, status: boolean }

        const updateTaskService = new UpdateTaskSevice()
        const task = await updateTaskService.execute(id, { title, description, status })

        reply.send(task)
    }
}

export { UpdateTaskController }
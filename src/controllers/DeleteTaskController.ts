import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteTaskService } from "../services/DeleteTaskService";

class DeleteTaskController{
    async handle(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const { id } = request.params

        const deleteTaskService = new DeleteTaskService()
        deleteTaskService.execute(id)

        reply.send("task deletada")
    }
}

export { DeleteTaskController }
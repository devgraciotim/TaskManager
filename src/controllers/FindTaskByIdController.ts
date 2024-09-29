import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { FindTaskByIdService } from "../services/FindTaskByIdService";

class FindTaskByIdController{
    async handle(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        const { id } = request.params

        const findTaskByIdService = new FindTaskByIdService
        const task = await findTaskByIdService.execute(id)

        reply.send(task)
    }
}

export { FindTaskByIdController }
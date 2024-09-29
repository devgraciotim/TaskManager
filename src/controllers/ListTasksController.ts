import { FastifyRequest, FastifyReply } from "fastify";
import { ListTasksService } from "../services/ListTasksService";

class ListTasksController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const listTasksService = new ListTasksService()
        const tasks = await listTasksService.execute()

        reply.send(tasks)
    }
}

export { ListTasksController }
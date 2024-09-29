import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../services/CreateTaskService";

class CreateTaskController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {title, description} = request.body as { title: string, description: string }

        const taskService = new CreateTaskService()
        const task = await taskService.execute({ title, description })

        reply.send(task)
    }
}

export { CreateTaskController }
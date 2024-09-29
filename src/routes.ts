import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateTaskController } from "./controllers/CreateTaskController"
import { ListTasksController } from "./controllers/ListTasksController"
import { FindTaskByIdController } from "./controllers/FindTaskByIdController"
import { UpdateTaskController } from "./controllers/UpdateTaskController"
import { DeleteTaskController } from "./controllers/DeleteTaskController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/test", async(request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    fastify.post("/task", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateTaskController().handle(request, reply)
    })
    fastify.get("/task", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListTasksController().handle(request, reply)
    })
    fastify.get("/task/:id", async(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
        return new FindTaskByIdController().handle(request, reply)
    })
    fastify.patch("/task/:id", async(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
        return new UpdateTaskController().handle(request, reply)
    })
    fastify.delete("/task/:id", async(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
        return new DeleteTaskController().handle(request, reply)
    })

}
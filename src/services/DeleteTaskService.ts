import prismaClient from "../prisma";

class DeleteTaskService{
    async execute(id: string) {
        try {

            prismaClient.tasks.delete({
                where: {id}
            })

        } catch (error) {

            console.error(error)

        }
    }
}

export { DeleteTaskService }
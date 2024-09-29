import prismaClient from "../prisma";

class ListTasksService{
    async execute() {

        try {
            
            const tasks = await prismaClient.tasks.findMany()
            return tasks

        } catch (error) {

            console.error(error)

        }

    }
}

export { ListTasksService }
import prismaClient from "../prisma";

class FindTaskByIdService{
    async execute(id: string) {
        try {
            
            const task = await prismaClient.tasks.findUnique({
                where: {id}
            })
            return task 

        } catch (error) {
            console.error(error)
        }
    }
}

export { FindTaskByIdService }
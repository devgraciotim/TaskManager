import prismaClient from "../prisma"

interface CreateTaskProps{
    title: string;
    description: string;
}

class CreateTaskService{
    async execute({ title, description }: CreateTaskProps){
        
        if(!title || !description) {
            throw new Error("Preencha todos os campos")
        }

        try {

            const task = await prismaClient.tasks.create({
                data: {
                    title,
                    description,
                    status: true
                }
            })
            return task

        } catch (error) {
            
            console.error("Erro ao criar task:", error);

        }
        
    }
}

export { CreateTaskService }
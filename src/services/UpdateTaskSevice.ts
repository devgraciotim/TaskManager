import prismaClient from "../prisma";

interface UpdateTaskProps{
    title: string;
    description: string;
    status: boolean;
}

class UpdateTaskSevice{
    async execute(id: string, { title, description, status }: UpdateTaskProps){
        
        if(!title || !description || !status) {
            throw new Error("Preencha todos os campos!")
        }

        try {   
            
            const task = await prismaClient.tasks.update({
                where: {id},
                data: {
                    title,
                    description,
                    status
                }
            })
            return task

        } catch (error) {

            console.error(error)

        }

    }
}

export { UpdateTaskSevice }
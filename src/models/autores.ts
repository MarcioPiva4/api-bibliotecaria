import prisma from "../../prisma/client";


export async function getAutores(){
    return await prisma.autores.findMany();
}

export async function createAutores(data: any) {
    const autor = await prisma.autores.create({
        data
    });
    return autor;
}
  
export async function deleteAutores(id: number){
    return await prisma.autores.delete({where: { id: id}});
}
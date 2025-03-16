import prisma from "../../prisma/client";


export async function getLivros(){
    return await prisma.livros.findMany();
}

export async function createLivros(data: any) {
    const livro = await prisma.livros.create({
        data
    });
    return livro;
}
  
export async function deleteLivros(id: number){
    return await prisma.livros.delete({where: { id: id}});
}
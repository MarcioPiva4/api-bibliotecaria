import prisma from "../../prisma/client";


export async function getCategorias(){
    return await prisma.categorias.findMany();
}

export async function createCategorias(data: any) {
    const categoria = await prisma.categorias.create({
        data
    });
    return categoria;
}
  
export async function deleteCategorias(id: number){
    return await prisma.categorias.delete({where: { id: id}});
}
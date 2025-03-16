-- CreateTable
CREATE TABLE "Livros" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_publicacao" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Livros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobre" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Autores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro_Categoria" (
    "id_livro" INTEGER NOT NULL,
    "id_categoria" INTEGER NOT NULL,

    CONSTRAINT "Livro_Categoria_pkey" PRIMARY KEY ("id_livro","id_categoria")
);

-- CreateTable
CREATE TABLE "Livro_Autor" (
    "id_livro" INTEGER NOT NULL,
    "id_autor" INTEGER NOT NULL,

    CONSTRAINT "Livro_Autor_pkey" PRIMARY KEY ("id_livro","id_autor")
);

-- CreateTable
CREATE TABLE "_Livro_Autor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Livro_Autor_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Livro_Categoria" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Livro_Categoria_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_Livro_Autor_B_index" ON "_Livro_Autor"("B");

-- CreateIndex
CREATE INDEX "_Livro_Categoria_B_index" ON "_Livro_Categoria"("B");

-- AddForeignKey
ALTER TABLE "Livro_Categoria" ADD CONSTRAINT "Livro_Categoria_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "Livros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Livro_Categoria" ADD CONSTRAINT "Livro_Categoria_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Livro_Autor" ADD CONSTRAINT "Livro_Autor_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "Livros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Livro_Autor" ADD CONSTRAINT "Livro_Autor_id_autor_fkey" FOREIGN KEY ("id_autor") REFERENCES "Autores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Livro_Autor" ADD CONSTRAINT "_Livro_Autor_A_fkey" FOREIGN KEY ("A") REFERENCES "Autores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Livro_Autor" ADD CONSTRAINT "_Livro_Autor_B_fkey" FOREIGN KEY ("B") REFERENCES "Livros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Livro_Categoria" ADD CONSTRAINT "_Livro_Categoria_A_fkey" FOREIGN KEY ("A") REFERENCES "Categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Livro_Categoria" ADD CONSTRAINT "_Livro_Categoria_B_fkey" FOREIGN KEY ("B") REFERENCES "Livros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

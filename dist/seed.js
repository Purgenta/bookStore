import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const genres = [
        {
            _id: {
                $oid: "667c7876b871a4a223ee3998",
            },
            name: "Autobiography",
        },
        {
            _id: {
                $oid: "667c7876b871a4a223ee3999",
            },
            name: "Historical",
        },
        {
            _id: {
                $oid: "667c7876b871a4a223ee399a",
            },
            name: "Romance",
        },
        {
            _id: {
                $oid: "668315b0d1098ffc185d4db2",
            },
            name: "Fantasy",
        },
        {
            _id: {
                $oid: "668315b0d1098ffc185d4db3",
            },
            name: "Science Fiction",
        },
        {
            _id: {
                $oid: "668569b88092c8df61e5f5d4",
            },
            name: "Classic Literature",
        },
        {
            _id: {
                $oid: "668569b88092c8df61e5f5d6",
            },
            name: "Mystery",
        },
        {
            _id: {
                $oid: "668569b88092c8df61e5f5d7",
            },
            name: "Romance",
        },
    ];
    const productTypeId = "668315b2d1098ffc185d4db6";
    const authors = [
        {
            _id: {
                $oid: "667c7779b871a4a223ee398f",
            },
            name: "Laura",
            last_name: "Dave",
        },
        {
            _id: {
                $oid: "667c7779b871a4a223ee3990",
            },
            name: "Freida",
            last_name: "McFadden",
        },
        {
            _id: {
                $oid: "667c7779b871a4a223ee3995",
            },
            name: "Colleen ",
            last_name: "Hoover",
        },
        {
            _id: {
                $oid: "668569b68092c8df61e5f5cf",
            },
            name: "Jane",
            last_name: "Austen",
        },
    ];
    const publisherId = "667c7982b871a4a223ee399f";
    const books = [
        {
            title: "Book 1",
            genreId: "667c7876b871a4a223ee3998",
            productTypeId,
            authorId: "667c7779b871a4a223ee398f",
            publisherId,
        },
        {
            title: "Book 2",
            genreId: "667c7876b871a4a223ee3999",
            productTypeId,
            authorId: "667c7779b871a4a223ee3990",
            publisherId,
        },
        {
            title: "Book 3",
            genreId: "667c7876b871a4a223ee399a",
            productTypeId,
            authorId: "667c7779b871a4a223ee3995",
            publisherId,
        },
        {
            title: "Book 4",
            genreId: "668315b0d1098ffc185d4db2",
            productTypeId,
            authorId: "668569b68092c8df61e5f5cf",
            publisherId,
        },
        {
            title: "Book 5",
            genreId: "668315b0d1098ffc185d4db3",
            productTypeId,
            authorId: "668569b68092c8df61e5f5cf",
            publisherId,
        },
        {
            title: "Book 6",
            genreId: "668569b88092c8df61e5f5d4",
            productTypeId,
            authorId: "668569b68092c8df61e5f5cf",
            publisherId,
        },
        {
            title: "Book 7",
            genreId: "668569b88092c8df61e5f5d6",
            productTypeId,
            authorId: "668569b68092c8df61e5f5cf",
            publisherId,
        },
        {
            title: "Book 8",
            genreId: "668569b88092c8df61e5f5d7",
            productTypeId,
            authorId: "667c7779b871a4a223ee398f",
            publisherId,
        },
        {
            title: "Book 9",
            genreId: "667c7876b871a4a223ee3998",
            productTypeId,
            authorId: "667c7779b871a4a223ee3990",
            publisherId,
        },
        {
            title: "Book 10",
            genreId: "667c7876b871a4a223ee3999",
            productTypeId,
            authorId: "667c7779b871a4a223ee3995",
            publisherId,
        },
    ];
    books.forEach(async (book) => {
        const genreExists = await prisma.genre.findUnique({
            where: {
                id: book.genreId,
            },
        });
        console.log(genreExists);
        await prisma.product.create({
            data: {
                author_id: book.authorId,
                publisher_id: book.publisherId,
                title: book.title,
                is_selling: true,
                description: "Description",
                price: 120,
                quantity: 200,
                publishing_date: new Date(),
                page_number: 150,
                typeId: productTypeId,
                productImages: {
                    create: {
                        image_url: "https://m.media-amazon.com/images/I/81PDk822yzL.jpg",
                    },
                },
                genre: {
                    createMany: {
                        data: {
                            genre_id: book.genreId,
                        },
                    },
                },
            },
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
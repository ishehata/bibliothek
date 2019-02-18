export class Book {
    id: number;
    title: string;
    cover: string;
    author_id: number;
    tags: string[];
    pages: number;
    pagesRead: number = 0;
}
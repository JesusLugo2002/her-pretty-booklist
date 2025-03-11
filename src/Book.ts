export default interface Book {
    id: string;
    title: string;
    author: string;
    editorial: string;
    cover_type: string;
    cover_url: string;
    language: string;
    bought: boolean;
    saga?: string;
    notes?: string;
}
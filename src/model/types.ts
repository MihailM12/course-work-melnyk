export type CarouselItem = {
    id: number;
    image: string;
    description: string;
}

export type News = {
    id: number;
    date:Date;
    title:string;
    images: string[];
    content: string;
}
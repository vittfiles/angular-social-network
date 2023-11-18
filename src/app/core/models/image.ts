export interface Image{
    id: string;
    user_id: string;
    user_name: string;
    title: string;
    description: string;
    filename: string;
    comments: number;
    views: number;
    likes: number;
    type: number;
    timestamp: string|Date;
    __v: number;
    local: boolean;
}
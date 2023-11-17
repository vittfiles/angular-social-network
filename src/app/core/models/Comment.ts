export interface Comment{
    user_id: string;
    image_id: string;
    image_user_id: string;
    content: string;
    user: string;
    filename: string;
    fileext: string;
    timestamp: string | Date;
    __v: number;
    local: boolean;
}
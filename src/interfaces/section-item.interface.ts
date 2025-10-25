import type { Link } from "./link.interface";

export enum InputType {
    TEXT = 'TEXT',
    EMAIL = 'EMAIL',
    TEXTAREA = 'TEXTAREA'
}
export interface SectionItem {
    id_section_item: number;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    image: string | null;
    background_image: string | null;
    icon: string | null;
    text_button: string | null;
    link_id: number | null;
    order_num: number;
    section_id: number;
    category_id: number | null;
    input_type: InputType | null;
    link: Link | null;
}

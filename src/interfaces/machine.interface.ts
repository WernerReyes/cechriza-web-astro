import type { Category } from "./category.entity";
import type { Link } from "./link.interface";
import type { Section } from "./section.interface";

export type TecnicalSpecifications = {
    id: string;
    title: string;
    description: string;
};

export type MachineImages = {
    url: string;
    isMain: boolean;
}

export interface Machine {
    id_machine: number;
    name: string;
    description: string | null;
    long_description: string | null;
    images: MachineImages[] | null;
    manual: string | null;
    technical_specifications: TecnicalSpecifications[] | null;
    category_id: number;
    link_id: number | null;
    text_button: string | null;
    link: Link | null;
    category: Category | null;
    sections: Section[] | null;
    created_at: Date;
    updated_at: Date;
}


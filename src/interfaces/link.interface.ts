import type { Page } from "./page.interface";

export enum LinkType {
    PAGE = 'PAGE',
    EXTERNAL = 'EXTERNAL',
    FILE = 'FILE'
}

export interface Link {
    readonly id_link: number;
    readonly title: string;
    readonly type: LinkType;
    readonly url: string | null;
    readonly page_id: number | null;
    readonly created_at: string;
    readonly updated_at: string;
    readonly new_tab: number; // 1 or 0
    readonly page?: Page | null;
    readonly file_url?: string | null;
}
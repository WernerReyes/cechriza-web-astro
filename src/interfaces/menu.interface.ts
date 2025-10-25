import type { Link } from "./link.interface";

export interface Menu {
    readonly id_menu: number;
    readonly title: string;
    readonly order_num: number;
    readonly active: number; // 1 or 0
    readonly parent_id: number | null;
    readonly link_id: number | null;
    readonly children?: Menu[] | null;
    readonly link: Link | null;
    readonly parent?: Menu | null;
}
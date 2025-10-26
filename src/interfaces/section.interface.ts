import type { Link } from "./link.interface";
import type { Menu } from "./menu.interface";
import type { SectionItem } from "./section-item.interface";



export enum SectionType {
    HERO = 'HERO',
    WHY_US = 'WHY_US',
    CASH_PROCESSING_EQUIPMENT = 'CASH_PROCESSING_EQUIPMENT',
    VALUE_PROPOSITION = 'VALUE_PROPOSITION',
    OUR_COMPANY = 'OUR_COMPANY',
    MACHINE = 'MACHINE',
    CONTACT_TOP_BAR = 'CONTACT_TOP_BAR',
    CLIENT = 'CLIENT',
    MAIN_NAVIGATION_MENU = 'MAIN_NAVIGATION_MENU',
    CTA_BANNER = 'CTA_BANNER',
    SOLUTIONS_OVERVIEW = 'SOLUTIONS_OVERVIEW',
    MISSION_VISION = 'MISSION_VISION',
    CONTACT_US = 'CONTACT_US',
    FOOTER = 'FOOTER',
    ADVANTAGES = 'ADVANTAGES',
    SUPPORT_MAINTENANCE = 'SUPPORT_MAINTENANCE',
    PRODUCT_DETAILS = 'PRODUCT_DETAILS'
}

export enum SectionMode {
    CUSTOM = 'CUSTOM',
    LAYOUT = 'LAYOUT'
}

type PivotPages = {
    id_page: number;
    id_section: number;
    order_num: number;
    active: boolean;
    type: SectionMode;
};

export interface Section {
    id_section: number;
    type: SectionType;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    text_button: string | null;
    link_id: number | null;
    active: boolean;
    image: string | null;
    section_items: SectionItem[];
    link: Link | null;
    menus: Menu[] | null;
    pivot_pages?: PivotPages | null;
    // pages?: (PageE & { pivot: PivotPages[] })[] | null;

}
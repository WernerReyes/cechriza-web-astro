import type { Link } from "./link.interface";
import type { Machine } from "./machine.interface";
import type { Menu } from "./menu.interface";
import type { Page } from "./page.interface";
import type { Icon, IconType, SectionItem } from "./section-item.interface";



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
    OPERATIONAL_BENEFITS = 'OPERATIONAL_BENEFITS',
    MACHINE_DETAILS = 'MACHINE_DETAILS',
    MACHINES_CATALOG = 'MACHINES_CATALOG',
    FULL_MAINTENANCE_PLAN = 'FULL_MAINTENANCE_PLAN',
    PREVENTIVE_CORRECTIVE_MAINTENANCE = 'PREVENTIVE_CORRECTIVE_MAINTENANCE',
    SUPPORT_WIDGET = 'SUPPORT_WIDGET'
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

export interface AdditionalInfo {
    label: string;
    id: string;
}


export interface Section {
    id_section: number;
    type: SectionType;
    title: string | null;
    subtitle: string | null;
    description: string | null;
    text_button: string | null;
    extra_text_button: string | null;
    link_id: number | null;
    extra_link_id: number | null;
    active: boolean;
    image: string | null;
    section_items: SectionItem[];
    link: Link | null;
    extra_link: Link | null;
    menus: Menu[] | null;
    pivot_pages?: PivotPages[] | null;
    pages?: (Page & { pivot: PivotPages})[] | null;
    machines?: Machine[] | null;
    icon_url?: string | null;
    icon_type?: IconType | null;
    icon?: Icon | null;
    additional_info_list: AdditionalInfo[] | null;
    video: string | null;
    // pages?: (PageE & { pivot: PivotPages[] })[] | null;

}
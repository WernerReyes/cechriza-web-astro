export interface Page{
    readonly id_page: number;
    readonly title: string;
    readonly slug: string;
    readonly description: string | null;
    readonly link_id: number | null;
    readonly created_at: string;
    readonly updated_at: string;
    // readonly sections?: SectionEntity[] | null;
}
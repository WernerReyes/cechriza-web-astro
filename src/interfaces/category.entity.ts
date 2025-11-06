import type { Machine } from './machine.interface';

export enum CategoryType {
    COIN = 'COIN',
    BILL = 'BILL'
}
export interface Category {
    readonly id_category: number;
    readonly title: string;
    readonly type: CategoryType;
    readonly created_at: string;
    readonly updated_at: string;
    readonly machines: Machine[];
}


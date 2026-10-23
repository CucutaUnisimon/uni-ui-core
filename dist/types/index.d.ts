export interface ApiMenuOption {
    id: number;
    titulo: string;
    rutaOAccion: string;
    url?: string;
    icono?: string;
}
export interface ApiMenu {
    id: number;
    titulo: string;
    icono?: string;
    iconoUrl?: string;
    opciones: ApiMenuOption[];
}
export interface MenuItem {
    icon: any;
    label: string;
    path: string;
    children?: MenuItem[];
}

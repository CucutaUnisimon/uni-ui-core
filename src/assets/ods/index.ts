import ods1 from './1.png';
import ods2 from './2.png';
import ods3 from './3.png';
import ods4 from './4.png';
import ods5 from './5.png';
import ods6 from './6.png';
import ods7 from './7.png';
import ods8 from './8.png';
import ods9 from './9.png';
import ods10 from './10.png';
import ods11 from './11.png';
import ods12 from './12.png';
import ods13 from './13.png';
import ods14 from './14.png';
import ods15 from './15.png';
import ods16 from './16.png';
import ods17 from './17.png';

export const ODS_ICONS: Record<number, string> = {
    1: ods1,
    2: ods2,
    3: ods3,
    4: ods4,
    5: ods5,
    6: ods6,
    7: ods7,
    8: ods8,
    9: ods9,
    10: ods10,
    11: ods11,
    12: ods12,
    13: ods13,
    14: ods14,
    15: ods15,
    16: ods16,
    17: ods17,
};

export const getOdsIcon = (id: number | string): string | undefined => {
    const num = typeof id === 'string' ? parseInt(id, 10) : id;
    return ODS_ICONS[num];
};

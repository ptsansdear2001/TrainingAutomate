export interface ProlicenseData {
    personCode: string;
    licenseType: string;
    number: string;
    place: string;
    note: string;
    date: string;
    expired: string;
}

export const singleProlicenseData: ProlicenseData = {
    personCode: '66006700010',
    licenseType: 'Engineering professional certificate',
    number: 'DL-1234567890',
    place: 'กรมการขนส่งทางบก',
    note: 'This is a test professional license entry.',
    date: '2023-01-15',
    expired: '2028-01-14',
};

export const outdateProlicenseData: ProlicenseData = {
    personCode: '66006700010',
    licenseType: ' วิ่ง 4*100 เมตร',
    number: 'hello',
    place: '',
    note: '',
    date: '2023-01-15',
    expired: '2020-01-14',
};

export const specialProlicenseData: ProlicenseData = {
    personCode: '66006700010',
    licenseType: '5',
    number: '!@#',
    place: '',
    note: '',
    date: '2023-01-15',
    expired: '2020-01-14',
};
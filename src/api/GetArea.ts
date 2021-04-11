export const getAreas = async (): Promise<{ area_name: string, area_id: number }[]> => {
    const res = await fetch('http://localhost:3000/api/house/getAreas', {
        method: 'get',
    }).then(res => res.json());
    return res;
};
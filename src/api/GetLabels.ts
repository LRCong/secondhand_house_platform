export const getLabels = async (): Promise<{ label_id: number, label_name: string }[]> => {
    const res = await fetch('http://localhost:3000/api/house/getLabels', {
        method: 'get',
    }).then(res => res.json());
    return res;
};
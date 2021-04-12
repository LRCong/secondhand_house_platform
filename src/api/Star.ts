import { HouseInfoLite } from './FilterHouse';

export const addStar = async (consumer_id: number, house_id: number): Promise<HouseInfoLite[]> => {
    const res = await fetch('http://localhost:3000/api/house/addStar', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            consumer_id,
            house_id
        }),
    }).then(res => res.json())
    return res;
};

export const addOrder = async (consumer_id: number, house_id: number): Promise<HouseInfoLite[]> => {
    const res = await fetch('http://localhost:3000/api/house/addOrder', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            consumer_id,
            house_id
        }),
    }).then(res => res.json())
    return res;
};

export const getStar = async (consumer_id: number): Promise<HouseInfoLite[]> => {
    const res = await fetch('http://localhost:3000/api/house/getStar', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            consumer_id,
        }),
    }).then(res => res.json())
    return res;
};

export const getOrder = async (consumer_id: number): Promise<HouseInfoLite[]> => {
    const res = await fetch('http://localhost:3000/api/house/getOrder', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            consumer_id,
        }),
    }).then(res => res.json())
    return res;
};
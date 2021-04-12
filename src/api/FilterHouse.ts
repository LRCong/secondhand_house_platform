export interface FilterHouseDto {
    readonly maxAge: number;
    readonly minAge: number;
    readonly maxPrice: number;
    readonly minPrice: number;
    readonly maxCover: number;
    readonly minCover: number;
    readonly label: Array<number>;
    readonly Area: Array<number>;
}

export interface HouseInfoLite {
    ifStar: boolean;
    ifOrder: boolean;
    readonly house_name: string;
    readonly manager_name: string;
    readonly house_id: number;
}

export const getFIlterHouse = async (option: FilterHouseDto): Promise<HouseInfoLite[]> => {
    const res = await fetch('http://localhost:3000/api/house/getFilter', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(option),
    }).then(res => res.json())
    return res;
};
export interface Message {
    message_id: number;
    consumer_id: number;
    manager_id: number;
    message_content: string;
    message_date: Date;
}

export const getManager = async (consumer_id: number): Promise<{ manager_name: string; manager_id: number }[]> => {
    const res = await fetch('http://localhost:3000/api/house/getManager', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            consumer_id
        }),
    }).then(res => res.json())
    return res;
};

export const getMessage = async (consumer_id: number, manager_id: number): Promise<Message[]> => {
    const res = await fetch('http://localhost:3000/api/house/getMessage', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            consumer_id,
            manager_id
        }),
    }).then(res => res.json())
    return res;
};

export const sendMessage = async (message: Message): Promise<any> => {
    const res = await fetch('http://localhost:3000/api/house/sendMessage', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    }).then(res => res.json())
    return res;
};

export const hello = async (consumer_id: number, manager_id: number): Promise<any> => {
    const res = await fetch('http://localhost:3000/api/house/hello', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            consumer_id,
            manager_id
        }),
    }).then(res => res.json())
    return res;
};
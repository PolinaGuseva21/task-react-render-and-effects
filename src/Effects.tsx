import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setlastMessage] = useState(-1);
    const setMessage = (message: number) => {
        setlastMessage(message);
    };
    useEffect(() => {
        subscribe(props.sourceId, setMessage);
        return () => {
            setlastMessage(-1);
            unsubscribe(props.sourceId, setMessage);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}

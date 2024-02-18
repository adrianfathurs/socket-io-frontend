// SocketComponent.js
import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios'

const ENDPOINT = 'http://localhost:3001'; // URL of your Socket.IO server

const SocketComponent = () => {
    const hitEndpoint = async() => {
        try {
            let response = await axios.get(`${ENDPOINT}/`)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        // Handle events from server
        socket.on('serverMessage', (data) => {
            console.log('Received message from server:', data);
            // Process the message as needed
        });
        return () => {
            socket.disconnect();
        };
    }, []);

    return <div>Socket Component</div>;
};

export default SocketComponent;

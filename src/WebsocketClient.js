import React, { useState, useEffect } from 'react';

const WebSocketClient = () => {
	// State to store WebSocket instance and received messages
	const [webSocket, setWebSocket] = useState(null);
	const [receivedMessages, setReceivedMessages] = useState([]);

	useEffect(() => {
		// Create a new WebSocket instance when the component mounts
		const ws = new WebSocket('ws://localhost:3000'); // Replace with your WebSocket server URL

		// Event listener for when the connection is open
		ws.addEventListener('open', () => {
			console.log('WebSocket connection opened');
		});

		// Event listener for incoming messages
		ws.addEventListener('message', (event) => {
			// Add the received message to the state
			setReceivedMessages((prevMessages) => [...prevMessages, event.data]);
		});

		// Event listener for when the connection is closed
		ws.addEventListener('close', () => {
			console.log('WebSocket connection closed');
		});

		// Set the WebSocket instance in the state
		setWebSocket(ws);

		// Clean up the WebSocket connection when the component unmounts
		return () => {
			ws.close();
		};
	}, []); // Empty dependency array ensures that this effect runs only once

	// Function to send a message to the WebSocket server
	const sendMessage = () => {
		if (webSocket)
		{
			const message = 'Hello, WebSocket server!';
			webSocket.send(message);
		}
	};

	// <button onClick={sendMessage}>Send Message</button>

	return (
		<div>
			<h1>WebSocket Client</h1>
			<div>
				<h2>Received Messages:</h2>
				<ul>
					{receivedMessages.map((message, index) => (
						<li key={index}>{message}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default WebSocketClient;

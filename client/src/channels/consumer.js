import { createConsumer } from "@rails/actioncable";

// // Specify a different URL to connect to
// createConsumer('https://ws.example.com/cable')
//
// // Use a function to dynamically generate the URL
// createConsumer(getWebSocketURL)
//
// function getWebSocketURL {
//     const token = localStorage.get('auth-token')
//     return `https://ws.example.com/cable?token=${token}`
// }

export default createConsumer();

export const CorsConfig = {
  origin: 'http://your-react-app-container:port', // Replace with your React app origin
  credentials: true, // Allow cookies
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
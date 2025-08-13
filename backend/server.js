import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
	res.json({ status: 'ok', service: 'backend', timestamp: new Date().toISOString() });
});

app.get('/api/greeting', (req, res) => {
	res.json({ message: 'Hello from Express backend!' });
});

app.listen(port, () => {
	console.log(`Backend listening on http://localhost:${port}`);
}); 
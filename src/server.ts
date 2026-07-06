import express, { Request, Response } from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.get('/api/data', async (req: Request, res: Response): Promise<void> => {
  const apiKey = process.env.MY_SECRET_API_KEY;

  if (!apiKey) {
    res.status(500).json({ error: 'Missing MY_SECRET_API_KEY' });
    return;
  }

  try {
    const apiResponse = await fetch('https://api.example.com/data', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!apiResponse.ok) {
      res.status(apiResponse.status).json({ error: 'Upstream request failed' });
      return;
    }

    const data = await apiResponse.json();
    res.json(data);
  } catch (error) {
    console.error('Failed to proxy request to secure endpoint', error);
    res.status(500).json({ error: 'Failed to proxy request to secure endpoint' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});

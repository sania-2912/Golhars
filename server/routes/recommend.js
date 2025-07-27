const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

router.get('/', (req, res) => {
  const tags = req.query.tags || "";
  const python = spawn('python3', ['python/recommend.py', tags]);

  let data = '';
  python.stdout.on('data', (chunk) => {
    data += chunk.toString();
  });

  python.stderr.on('data', (err) => {
    console.error('Python error:', err.toString());
  });

  python.on('close', () => {
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (e) {
      res.status(500).json({ error: 'Failed to parse Python output' });
    }
  });
});

module.exports = router;

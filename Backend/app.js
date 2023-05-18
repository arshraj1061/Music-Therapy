const express = require('express');
const { spawn } = require('child_process');

const app = express();

app.get('/detect-emotion', (req, res) => {
  const pythonProcess = spawn('python', ['D:/Major Pro/binaural/Backend/ML/capture.py']);

  pythonProcess.stdout.on('data', (data) => {
    const emotion = data.toString().trim();
    res.send(emotion);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
    res.status(500).send('Error detecting emotion');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

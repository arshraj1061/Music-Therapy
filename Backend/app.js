const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

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

app.listen(5000, () => {
  console.log(`Server listening on port ${PORT}`);
});

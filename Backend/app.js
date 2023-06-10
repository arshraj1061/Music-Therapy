const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

app.get('/detect-emotion', (req, res) => {
  const pythonProcess = spawn('python', ['D:/Major Pro/binaural/Backend/ML/capture.py']);

  let emotion ;
  let output = '';
  pythonProcess.stdout.on('data', (data) => {
    output += data.toString().trim();

    var text = output.slice(-2);

    if(text === 'ry')
      emotion = 'angry';
    else if(text === 'st')
      emotion = 'disgust';
    else if(text === 'ar')
      emotion = 'fear';
    else if(text === 'py')
      emotion = 'happy'
    else if(text === 'ad')
      emotion = 'sad';
    else if(text === 'se')
      emotion = 'surprise';
    else if(text === 'al')
      emotion = 'neutral';

  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python error: ${data}`);
    // res.status(500).send('Error detecting emotion');
  });

  pythonProcess.on('close', (code) => {
    console.log('Detected emotion:', emotion); // Print the detected emotion on the terminal/console
    // res.send(emotion); // Send the emotion as the response to the client
    res.json({ emotion: emotion });
  });
});


app.listen(5000, () => {
  console.log(`Server listening on port ${PORT}`);
});

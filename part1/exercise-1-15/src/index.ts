import express from 'express';

const app = express();

const router = express();

router.get('/ping', (_req, res) => {
  console.log('pinged!')
  return res.send('pong');
});

app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

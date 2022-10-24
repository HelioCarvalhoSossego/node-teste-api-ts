/** source/routes/discord.ts */
import express from 'express';
import controller from '../controllers/webhooks';
const router = express.Router();

router.get('/webhook', controller.getwebhook);
router.get('/webhook/:id', controller.getPost);
router.put('/webhook/:id', controller.updatePost);
router.delete('/webhook/:id', controller.deletePost);
router.post('/webhook', controller.addPost);

export = router;
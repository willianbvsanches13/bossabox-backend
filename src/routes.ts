import { Router } from 'express';

import Controllers from './app/controllers';

const router = Router();

/**
 * Tools
 */
router.get('/tools', Controllers.ToolsController.index);
router.get('/tools/:id', Controllers.ToolsController.show);
router.post('/tools', Controllers.ToolsController.store);
router.put('/tools/:id', Controllers.ToolsController.update);
router.delete('/tools/:id', Controllers.ToolsController.delete);

export default router;

import { Request, Response } from 'express';
import Tools from '../models/Tools';

class ToolsController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const { tag } = req.query;
      const tools = tag ? await Tools.find({ tags: tag }) : await Tools.find();

      return res.json(tools);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.query;
      const tool = await Tools.findById(id);

      return res.json(tool);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const tool = await Tools.create(req.body);

      return res.json(tool);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const tool = await Tools.findByIdAndUpdate(id, req.body, { new: true });

      return res.json(tool);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await Tools.findByIdAndRemove(id);

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default new ToolsController();

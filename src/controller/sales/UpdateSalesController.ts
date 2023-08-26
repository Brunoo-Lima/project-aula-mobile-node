import { Request, Response } from 'express';

class UpdateSalesController {
  async handle(req: Request, res: Response) {
    const id = req.query.id;
    const { product_id, user_id, total, description, observation } = req.body;

    const sales = {
      product_id,
      user_id,
      total,
      description,
      observation,
    };

    return res.json(sales);
  }
}

export { UpdateSalesController };
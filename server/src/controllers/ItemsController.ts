import { Request, Response } from 'express';
import knex from '../database/connection'

class ItemsController {
    async index (request: Request, response: Response) {
        const itens = await knex('itens').select('*');

        const serializedItens = itens.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.138:3333/uploads/${item.image}`,
            };
        });

        return response.json(serializedItens);
    };
};

export default ItemsController;
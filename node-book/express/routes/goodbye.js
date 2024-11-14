import { Router } from 'express';
import { bye } from '../lib/locale.js';
import { capitalize } from '../lib/string.js';

export const byeRouter = Router();

// say goodbye in english
byeRouter.get('/:name', (req, res, next) => {
    res.render(
        'message',
        { title: `${ bye.en } ${capitalize( req.params.name )}!` }
    );
});

// say goodbye in a specific language
byeRouter.get('/:lang/:name', (req, res, next) => {
    res.render(
        'message',
        { title: `${ bye[req.params.lang]} ${capitalize(req.params.name)}!` }
    );
});
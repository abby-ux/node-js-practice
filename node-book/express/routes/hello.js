// /hello/ route
import { Router } from 'express';
import { hello } from '../lib/locale.js';
import { capitalize } from '../lib/string.js';

export const helloRouter = Router();

// say hello in english
helloRouter.get('/:name', (req, res, next) => {
    res.render(
        'message',
        { title: `${ hello.en } ${capitalize( req.params.name )}!` }
    );
});

// say hello in a speific language
helloRouter.get('/:lang/:name', (req, res, next) => {
    res.render(
        'message',
        { title: `${ hello[req.params.lang]} ${capitalize(req.params.name)}!` }
    );
});
/**   descrption of above: ^^^^
 * -- say hello in english: --
 * defines an Express Router Object called helloRouter.
 *      routers are mini applications that can perform routing and middleware functions
 * note: only specify '/:name', not '/hello/:name', because then this router would 
 * become the handler for all '/hello' paths which we do not want.
 * -- say hello in a specific language: --
 * renders the message template with a title, 
 * usused local version of hello defined in lib/locale.js
 */
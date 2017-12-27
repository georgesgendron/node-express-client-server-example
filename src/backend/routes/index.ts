'use strict';

import * as express from 'express';
import * as model from '../../common/models';
import * as fs from 'fs';
import * as path from 'path';

const router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.render('index', {title: 'Sample App'});
});

// AJAX method - returns the message to display
router.get('/message', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // featuring gratuitous use of async and await because in a real app, it is very useful
        let message = await new Promise<string>((resolve, reject) => {
            fs.readFile('message.txt', 'utf8', (err, message) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(message);
                }
            });
        });
        let response: model.MessageResponse = {
            successful: true,
            message: message
        };
        res.json(response);
    } catch (err) {
        console.error("Oops", err);
        let response: model.MessageResponse = {
            successful: false,
            errorMessage: err.message
        };
        res.json(response);
    }
});

export default router;
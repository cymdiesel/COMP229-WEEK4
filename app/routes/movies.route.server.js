import {Router} from 'express';

import { DisplayMoviesAddPage, DisplayMoviesEditPage, DisplayMoviesList, ProcessMoviesAddPage, ProcessMoviesDelete, ProcessMoviesEditPage } from '../controllers/movies.controller.server.js';

const router = Router();

router.get('/movie-list', DisplayMoviesList);
router.get('/movie-add', DisplayMoviesAddPage);
router.post('/movie-add', ProcessMoviesAddPage);
router.post('/movie-edit/:id', ProcessMoviesEditPage);
router.get('/movie-edit/:id', DisplayMoviesEditPage);
router.get('/movie-delete/:id', ProcessMoviesDelete);

export default router;
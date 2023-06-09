import express from 'express';
import { body } from 'express-validator';
import { handleValidationErrors, checkAuth } from '../utils/index.js';
import { UserController } from '../controllers/index.js';
import User from '../models/User.js';

const router = express.Router();

router.post(
	'/login',
	body('email').isEmail(),
	body('password')
		.isLength({ min: 5 })
		.withMessage('Пароль должен быть минимум 5 символов'),
	handleValidationErrors,
	UserController.login
);

router.post(
	'/register',
	body('email')
		.isEmail()
		.withMessage('Неверный формат почты')
		.custom(async value => {
			const user = await User.findOne({ email: value });
			if (user)
				return Promise.reject('email с таким именем уже сущестует');
		}),
	body('password')
		.isLength({ min: 5 })
		.withMessage('Пароль должен быть минимум 5 символов'),
	body('fullName')
		.isLength({ min: 3 })
		.withMessage('Укажите имя минимум 3 символов'),
	handleValidationErrors,
	UserController.register
);

router.get('/me', checkAuth, UserController.getMe);

export default router;

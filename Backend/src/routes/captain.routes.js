import express from "express";
import { body } from "express-validator";
import { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } from "../controllers/captain.controllers.js";
import { authCaptain } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Message.'),
    body('fullname.firstname').isLength({min: 3}).withMessage('first name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isLength({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invailed vehical type'),
], registerCaptain)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Message.'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], loginCaptain)

router.get('/profile', authCaptain, getCaptainProfile);
router.get('/logout',authCaptain, logoutCaptain);

export default router;
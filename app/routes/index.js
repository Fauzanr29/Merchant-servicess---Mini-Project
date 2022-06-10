const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware.js');
const loginRoute = require('../controller/login.controller');
const productRoute = require('../controller/product.controller');
const signup = require('../controller/auth.controller.js');
const { validateUSer } = require('../middlewares/validation.middleware.js');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({message: 'Hello'});
});

router.post('/signup', validateUSer,signup.signup)
router.post('/login', loginRoute.login);

// Product
router.post('/product', authMiddleware.isAuthenticate, productRoute.insertProduct);
router.get('/product/:id', authMiddleware.isAuthenticate, productRoute.detailProduct);
router.get('/product', authMiddleware.isAuthenticate, productRoute.listProduct);
router.put('/product/:id', authMiddleware.isAuthenticate, productRoute.updateProduct);
router.delete('/product/:id', authMiddleware.isAuthenticate, productRoute.deleteProduct);


module.exports = router;


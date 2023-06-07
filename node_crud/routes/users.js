const router = require('express').Router();
const userController = require('../controllers/userController')


// router.get('/user/:id', userController.getUser);

// router.patch('/patchUser/:id', userController.patchUser);

// router.delete('/user/:id', userController.deleteUser);

router.route('/user/:id?')
    .get(userController.getUser)
    .patch(userController.patchUser)
    .delete(userController.deleteUser)

router.post('/register', userController.postRegister);

router.post('/login', userController.postLogin);

module.exports = router;

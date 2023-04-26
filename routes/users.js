import express from 'express';


import {getUsers,createUsers,findUsers, deleteUser, updateUsers} from '../controllers/users.js' 

const router = express.Router(); 

router.get('/users', getUsers);

router.post('/users', createUsers);

router.get('/users/:id', findUsers);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id', updateUsers);

export default router;
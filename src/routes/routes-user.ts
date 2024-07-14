import { Router } from 'express';
import {
  createUserController,
  getAllUsersController,
  getUserByEmailController,
  getUserByIdController,
  updateUserController,
  deleteUserController
} from '../controllers/controllers-user';

const userRouter = Router();

userRouter.post('/createUser', createUserController);
userRouter.get('/allUsers', getAllUsersController);
userRouter.get('/byEmail', getUserByEmailController);
userRouter.get('/byID/:id', getUserByIdController);
userRouter.put('/updateUser/:id', updateUserController);
userRouter.delete('/deleteUser/:id', deleteUserController);

export default userRouter;

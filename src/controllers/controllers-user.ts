import { Request, Response } from 'express';
import {
  createUserService,
  getAllUsersService,
  getUserByEmailService,
  getUserByIdService,
  updateUserService,
  deleteUserService
} from '../services/services-user';

async function createUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user = await createUserService(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAllUsersController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getUserByEmailController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user = await getUserByEmailService(req.query);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getUserByIdController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user = await getUserByIdService(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user = await deleteUserService(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {
  createUserController,
  getAllUsersController,
  getUserByEmailController,
  getUserByIdController,
  updateUserController,
  deleteUserController
};

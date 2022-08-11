import auth from "@config/auth";
import { AppError } from "@errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/implementations/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/implementations/UsersTokensRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  // const usersTokensRepository = new UsersTokensRepository();
  const usersRepository = new UsersRepository();

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    // const user = await usersTokensRepository.findByUserIdAndRefreshToken(
    //   user_id,
    //   token
    // );

    // if (!user) {
    //   throw new AppError("User does not exist.", 401);
    // }
    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid token.", 401);
  }
}

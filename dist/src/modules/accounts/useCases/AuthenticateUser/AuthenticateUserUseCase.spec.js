"use strict";
// import { AppError } from "@errors/AppError";
// import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
// import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
// import { AuthenticateUserUseCase } from "@modules/accounts/useCases/AuthenticateUser/AuthenticateUserUseCase";
// import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";
// let authenticateUserUseCase: AuthenticateUserUseCase;
// let usersRepositoryInMemory: UsersRepositoryInMemory;
// let createUserUseCase: CreateUserUseCase;
// describe("Authenticate User", () => {
//   beforeEach(() => {
//     usersRepositoryInMemory = new UsersRepositoryInMemory();
//     authenticateUserUseCase = new AuthenticateUserUseCase(
//       usersRepositoryInMemory
//     );
//     createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
//   });
//   it("should be able to authenticate a user successfully", async () => {
//     const user: ICreateUserDTO = {
//       driver_license: "000123",
//       email: "user@test.com",
//       password: "1234",
//       name: "User test",
//     };
//     await createUserUseCase.execute(user);
//     const result = await authenticateUserUseCase.execute({
//       email: user.email,
//       password: user.password,
//     });
//     expect(result).toHaveProperty("token");
//     expect(result).toHaveProperty("user");
//   });
//   it("should not be able to authenticate a non-existing user", () => {
//     expect(async () => {
//       const user: ICreateUserDTO = {
//         driver_license: "000123",
//         email: "user@test.com",
//         password: "1234",
//         name: "User test",
//       };
//       await authenticateUserUseCase.execute({
//         email: user.email,
//         password: user.password,
//       });
//     }).rejects.toBeInstanceOf(AppError);
//   });
//   it("should not be able to authenticate with wrong password", () => {
//     expect(async () => {
//       const user: ICreateUserDTO = {
//         driver_license: "000123",
//         email: "user@test.com",
//         password: "1234",
//         name: "User test",
//       };
//       await createUserUseCase.execute(user);
//       await authenticateUserUseCase.execute({
//         email: user.email,
//         password: "potato",
//       });
//     }).rejects.toBeInstanceOf(AppError);
//   });
// });

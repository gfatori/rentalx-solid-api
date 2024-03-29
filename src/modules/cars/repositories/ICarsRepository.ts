import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car | undefined>;
  findAllAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[] | undefined>;
  findById(id: string): Promise<Car | undefined>;
}

export { ICarsRepository };

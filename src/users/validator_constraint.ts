import { BadRequestException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { typeOrmDataSource } from "../typeorm-datasource.config";
import { User } from "../users/entity/user.entity";

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'createDate', async: true })
@Injectable()
export class CustomUserValidation implements ValidatorConstraintInterface {
  constructor() {}

  async validate(username: string): Promise<boolean> {
    const checker = await typeOrmDataSource.getRepository(User).findOne({
        where: {
          username: username
        },
      });
    console.log('checker', checker)

    if(checker) {
        throw new BadRequestException('Username is already taken')
    }
    return checker ? false : true;
  }
}
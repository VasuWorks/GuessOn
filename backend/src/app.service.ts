import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { prepareResponse } from './utils/utils.helper';
import { IResponse } from './utils/utils.types';

@Injectable()
export class AppService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) { }

  /********************** General**********************/
  checkHealth(): string {
    return 'Api Working';
  }

  /********************** User ***********************/
  async signup(
    username: string,
    password: string
  ): Promise<IResponse> {
    try {
      const existingUser = await this.userModel.findOne({
        username,
        password
      });
      if(existingUser) {
        return prepareResponse(
          HttpStatus.CONFLICT,
          `User already exists`
        );
      }
      const user = {
        username,
        password
      };
      const newUser = new this.userModel(user);
      const savedUser = await newUser.save();
      return prepareResponse(
        HttpStatus.CREATED,
        `User created`,
        savedUser._id
      );
    } catch (err) {
      console.log(err);
      return prepareResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        `Server Error`,
        err
      );
    }
  }

  async signin(
    username: string,
    password: string
  ): Promise<IResponse> {
    try {
      const user = await this.userModel.findOne({
        username,
        password
      });
      if(user) {
        return prepareResponse(
          HttpStatus.FOUND,
          `User Logged in`,
          user._id
        );
      }
    } catch (err) {
      console.log(err);
      return prepareResponse(
        HttpStatus.INTERNAL_SERVER_ERROR,
        `Server Error`,
        err
      );
    }
  }
  
  /***************************************************/
}

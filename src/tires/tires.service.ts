import { Injectable } from '@nestjs/common';
import { CreateTireDto } from './dto/create-tire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tire } from './entities/tire.entity';
import axios from 'axios';

const BASE_URL = `https://dev.mycar.cardoc.co.kr/v1/`;

@Injectable()
export class TiresService {
  constructor(
    @InjectRepository(Tire)
    private tiresRepository: Repository<Tire>,
  ) {}

  async create(createTireDto: CreateTireDto) {
    //const newItem = createTireDto.data.map((item) => ({
    //  user_id: item.id,
    //  trim_id: item.trimId,
    //}));
    // 인가 구현하기
    const result = [];
    for (const item of createTireDto.data) {
      const res = await axios.get(`${BASE_URL}trim/${item.trimId}`);
      //console.log(res);
      const { frontTire, rearTire } = res?.data?.spec?.driving;
      const [frontWidth, frontRest] = frontTire?.value.split('/');
      const [frontAspectRatio, frontWheelSize] = frontRest?.split('R');
      const [rearWidth, rearRest] = rearTire?.value.split('/');
      const [rearAspectRatio, rearWheelSize] = rearRest?.split('R');
      const newItem = {
        user_id: item.id,
        trim_id: item.trimId,
        front_width: frontWidth,
        front_aspect_ratio: frontAspectRatio,
        front_wheel_size: frontWheelSize,
        rear_width: rearWidth,
        rear_aspect_ratio: rearAspectRatio,
        rear_wheel_size: rearWheelSize,
      };
      result.push(newItem);
      // cashing해서 다 안보내기
    }
    await this.tiresRepository.save(result);
    return 'haha';
  }

  findAll() {
    return `This action returns all tires`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tire`;
  }
}

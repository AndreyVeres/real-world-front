import { UserDto } from '../application/dto/user.dto';
import { UserEntity } from '../domain/model/user.entity';

export class UserMapper {
  public static toEntity(dto: UserDto): UserEntity {
    return UserEntity.reconstitute(
      dto.id,
      dto.email,
      dto.bio,
      dto.image,
      dto.token,
      dto.username
    );
  }
}

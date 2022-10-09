import {UserEntity} from "../../models/user/User.entity";
import {createMap, forMember, mapFrom} from "@automapper/core";
import {mapper} from "../mapper";
import {UserDto} from "../../models/user/User.dto";
import {RepositoryEntity} from "../../models/repository/Repository.entity";
import {RepositoryDto} from "../../models/repository/Repository.dto";

export const userMapper = (userEntity: UserEntity) => {
    createMap(
        mapper,
        UserEntity,
        UserDto,
        forMember(
            (destination) => destination.avatarUrl,
            mapFrom(source => source.avatar_url)),
        forMember(
            (destination) => destination.reposUrl,
            mapFrom(source => source.repos_url)),
        forMember(
            (destination) => destination.username,
            mapFrom(source => source.login))
    );
    return mapper.map(userEntity, UserEntity, UserDto);
}

export const repositoryMapper = (repositoryEntity: RepositoryEntity) => {
    createMap(
        mapper,
        RepositoryEntity,
        RepositoryDto
    );
    return mapper.map(repositoryEntity, RepositoryEntity, RepositoryDto);
}

export const uniqueKeyGenerator = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}
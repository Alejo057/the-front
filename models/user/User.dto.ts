import {AutoMap} from "@automapper/classes";

export class UserDto {
    @AutoMap()
    avatarUrl!: string;

    @AutoMap()
    email!: string;

    @AutoMap()
    followers!: number;

    @AutoMap()
    following!: number;

    @AutoMap()
    username!: string;

    @AutoMap()
    name!: string;

    @AutoMap()
    reposUrl!: string;
}
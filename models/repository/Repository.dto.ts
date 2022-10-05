import {AutoMap} from "@automapper/classes";

export class RepositoryDto {
    @AutoMap()
    name!: string;

    @AutoMap()
    visibility!: string;

    languages!: string[];
}
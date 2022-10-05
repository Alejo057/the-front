import {AutoMap} from "@automapper/classes";

export class UserEntity {
    @AutoMap()
    avatar_url!: string;

    @AutoMap()
    bio!: string;

    @AutoMap()
    blog!: string;

    @AutoMap()
    company!: string;

    @AutoMap()
    created_at!: string;

    @AutoMap()
    email!: string;

    @AutoMap()
    events_url!: string;

    @AutoMap()
    followers!: number;

    @AutoMap()
    followers_url!: string;

    @AutoMap()
    following!: number;

    @AutoMap()
    following_url!: string;

    @AutoMap()
    gists_url!: string;

    @AutoMap()
    gravatar_id!: string;

    @AutoMap()
    hireable!: boolean;

    @AutoMap()
    html_url!: string;

    @AutoMap()
    id!: number;

    @AutoMap()
    location!: string;

    @AutoMap()
    login!: string;

    @AutoMap()
    name!: string;

    @AutoMap()
    node_id!: string;

    @AutoMap()
    organizations_url!: string;

    @AutoMap()
    public_gists!: number;

    @AutoMap()
    public_repos!: number;

    @AutoMap()
    received_events_url!: string;

    @AutoMap()
    repos_url!: string;

    @AutoMap()
    site_admin!: boolean;

    @AutoMap()
    starred_url!: string;

    @AutoMap()
    subscriptions_url!: string;

    @AutoMap()
    twitter_username!: string;

    @AutoMap()
    type!: string;

    @AutoMap()
    updated_at!: string;

    @AutoMap()
    url!: string;
}
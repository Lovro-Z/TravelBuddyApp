create table if not exists travel (
    id identity,
    travel_name varchar(100) not null unique,
    short_description varchar(200) not null,
    description text not null,
    price number not null,
    space_left number not null,
    transportation varchar (200) not null,
    image_url varchar (255) not null
);

create table if not exists `user` (
    id identity,
    username varchar(100) not null,
    password varchar(250) not null,
    first_name varchar(250) not null,
    last_name varchar(250) not null
);

create table if not exists authority (
    id identity,
    `name` varchar(100) not null
);

create table if not exists user_authority (
    user_id bigint not null,
    authority_id bigint not null,
    constraint fk_user foreign key (user_id) references user(id),
    constraint fk_authority foreign key (authority_id) references authority(id)
);


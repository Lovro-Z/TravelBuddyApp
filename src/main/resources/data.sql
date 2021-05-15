delete from travel;

insert into travel(id, travel_name, short_description, price, space_left)
    values (1, 'Travel to Spain', 'Travel to one of the most famous and sunniest countries in Europe, the magnificent Spain!', 1200, 75);

insert into travel(id, travel_name, short_description, price, space_left)
    values (2, 'Travel to Germany', 'Travel to one of the most famous countries in Europe, the glorious Germany!', 1000, 80);

insert into travel(id, travel_name, short_description, price, space_left)
    values (3, 'Travel to England', 'Travel to one of the most famous and oldest countries in Europe, the noble England!', 1600, 50);

insert into travel(id, travel_name, short_description, price, space_left)
    values (4, 'Travel to France', 'Travel to one of the most famous and romantic countries in Europe, la France!', 1300, 70);

insert into user (id, username, password, first_name, last_name)
values (1, 'admin', '$2y$12$AM/KtV8okcnktxMv/enj.u5GwAHAST1xTtEXwZEfx9k/UrbfMMo2u', 'admin', 'admin');
insert into user (id, username, password, first_name, last_name)
values (2, 'user', '$2y$12$r18Tw1bZ8M6Jk0.fl811DOwxeymmq0OKhKpJSpGSgSwpdWW.hsL7K', 'user', 'user');
insert into user (id, username, password, first_name, last_name)
values (3, 'updater', '$2y$12$K02IMU2RYpATgieuq/JINevJ55J74XOWuMN0pfT/CD3n4KBb133ZO', 'updater', 'updater');
insert into authority (id, name)
values (1, 'ROLE_ADMIN');
insert into authority (id, name)
values (2, 'ROLE_USER');
insert into authority (id, name)
values (3, 'ROLE_UPDATER');
insert into user_authority (user_id, authority_id)
values (1, 1);
insert into user_authority (user_id, authority_id)
values (2, 2);
insert into user_authority (user_id, authority_id)
values (3, 3);
delete from travel;

insert into travel(id, travel_name, short_description, description, price, space_left, transportation, image_url)
    values (100, 'Travel to Spain', 'Travel to one of the most famous and sunniest countries in Europe, the magnificent Spain!', 'Arrival in Madrid is scheduled
for 15.15 local time. Continuation of the flight to Barcelona at 16.30 on the line (IB01630) with arrival in Barcelona at 17.50. After completing the customs formalities,
transfer to the hotel and accommodation follows. After a short break, take the subway to the city center. Exit to Placa de Catalunya, where we will take a tour of the
Gothic Quarter, a maze of small, narrow intersected streets with amazing architecture accompanied by guides: Catedral de la Santa Creu and Santa Eulàlia in front of which you
can often see the locals dancing the traditional dance of Catalonia. Evening walk along Barcelona’s most famous street, La Rambla, a picturesque promenade almost 2 km long teeming
with numerous musicians, entertainers, shops, restaurants and tapas bars, all the way to Columbus Colonnade, a 60 meter high monument erected at the place where Columbus landed on his
return from America. Nearby we will see the old customs building, and the famous port of Barcelona Port Veil. In the port itself there is one of the largest European aquariums that
we recommend to visit in your free time. Free time for your own content. Departure to the hotel from the agreed place at the agreed time.', 1200, 75, 'TRAIN',
            'https://assets.wego.com/image/upload/v1611848131/country-pages/es.jpg');

insert into travel(id, travel_name, short_description, description, price, space_left, transportation, image_url)
    values (101, 'Travel to Germany', 'Travel to one of the most famous countries in Europe, the glorious Germany!', 'test', 1000, 80, 'BUS', 'https://www.travelsafe-abroad.com/wp-content/uploads/1500-ss-large-rothenburg-121494922.jpg');

insert into travel(id, travel_name, short_description, description, price, space_left, transportation, image_url)
    values (102, 'Travel to England', 'Travel to one of the most famous and oldest countries in Europe, the noble England!', 'test', 1600, 50, 'PLANE', 'https://media.nomadicmatt.com/englandguide.jpg');

insert into travel(id, travel_name, short_description, description, price, space_left, transportation, image_url)
    values (103, 'Travel to France', 'Travel to one of the most famous and romantic countries in Europe, la France!', 'Departure from Zagreb at 05:00 from the Bus Station,
platforms 502-506. This is followed by a drive through Slovenia, Austria and Germany with short stops along the way. Upon arrival in Strasbourg, the capital of the French
region of Alsace, we will pass by the European Parliament. City tour: Notre Dame Cathedral, Guthenberg Square, Church of St. Tome, bridges over the ILL River, Little France
district. We suggest dinner in the most picturesque part of old Strasbourg with colorful wooden buildings dating back to the 16th century. Accommodation in a hotel near the
German-French border. Overnight stay.
Breakfast. Drive to Paris. Upon arrival in Paris, a panoramic tour of the city and a ride along the famous Avenue Champs-Elysees and hotel accommodation. After a short break
departure with the tour guide by public transport to one of the most beautiful streets in the world, the Champs-Elysees. Stroll along the beautifully lit famous avenue with
sumptuous shop windows and picturesque Parisian bistros and restaurants to the Arc de Triomphe. Free time. Possibility to go to the Eiffel Tower, which has been the title
of the most famous symbol of Paris for 125 years. In agreement with the tour guide, the possibility of climbing the elevator to the top or on foot to the 2nd floor
(further by elevator) and enjoying the view of the city from a height of 324 m (purchase tickets individually, on the spot or earlier online). Return to the hotel.
Overnight stay.', 1300, 70, 'BUS', 'https://static.independent.co.uk/2021/03/11/13/iStock-1185953092.jpg?width=982&height=726&auto=webp&quality=75');

insert into travel(id, travel_name, short_description, description, price, space_left, transportation, image_url)
values (104, 'Travel to Japan', 'Travel to one of the oldest, modern and famous countries in the world, Japan!', 'test', 2700, 65, 'PLANE', 'https://theasiacollective.com/wp-content/uploads/2018/06/Feature-Photo-1-e1530688449976.png');

insert into travel(id, travel_name, short_description, description, price, space_left, transportation, image_url)
values (105, 'Travel to Croatia', 'Travel to one of the most beautiful, historic and magnificent countries in Europe, Croatia!', 'test', 1100, 80, 'TRAIN', 'https://assets.wego.com/image/upload/v1611848131/country-pages/hr.jpg');

insert into user (id, username, password, first_name, last_name)
values (100, 'admin', '$2y$12$AM/KtV8okcnktxMv/enj.u5GwAHAST1xTtEXwZEfx9k/UrbfMMo2u', 'admin', 'admin');
insert into user (id, username, password, first_name, last_name)
values (101, 'user', '$2y$12$r18Tw1bZ8M6Jk0.fl811DOwxeymmq0OKhKpJSpGSgSwpdWW.hsL7K', 'user', 'user');
insert into user (id, username, password, first_name, last_name)
values (102, 'updater', '$2y$12$K02IMU2RYpATgieuq/JINevJ55J74XOWuMN0pfT/CD3n4KBb133ZO', 'updater', 'updater');
insert into authority (id, name)
values (1, 'ROLE_ADMIN');
insert into authority (id, name)
values (2, 'ROLE_USER');
insert into authority (id, name)
values (3, 'ROLE_UPDATER');
insert into user_authority (user_id, authority_id)
values (100, 1);
insert into user_authority (user_id, authority_id)
values (101, 2);
insert into user_authority (user_id, authority_id)
values (102, 3);
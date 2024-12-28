create table if not exists ping
(
    id      int primary key,
    message varchar(255)
);

insert into ping (id, message)
values (1, 'This is a ping message!');
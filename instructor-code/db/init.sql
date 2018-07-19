drop table if exists users;
drop table if exists words;

create table users (
  id serial primary key,
  auth0_id text unique not null,
  email text not null,
  name text not null,
  picture_url text not null
);

create table words (
  id serial primary key,
  user_id int references users (id),
  text text
);

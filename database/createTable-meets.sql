create table meets (
  id bigint unsigned not null unique,
  name varchar(99) not null,
  location varchar(4) not null,
  date date not null,
  pointsfor int unsigned,
  pointsagainst int unsigned,

  primary key (id)
);
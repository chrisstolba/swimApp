create table meets (
  id bigint unsigned not null unique auto_increment,
  name varchar(99) not null,
  location varchar(4) not null,
  date date not null,

  primary key (id)
);

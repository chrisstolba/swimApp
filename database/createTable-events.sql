create table events (
  id bigint unsigned not null unique auto_increment,
  name varchar(50) not null,
  consmen decimal(12,2) not null,
  automen decimal(12,2) not null,
  conswomen decimal(12,2) not null,
  autowomen decimal(12,2) not null,

  primary key (id)
);

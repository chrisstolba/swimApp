create table swimmers (
  id bigint unsigned not null unique auto_increment,
  firstname varchar(30) not null,
  lastname varchar(30) not null,
  class int not null,
  sex varchar(6) not null,
  active tinyint(1) not null,

  primary key (id)
);

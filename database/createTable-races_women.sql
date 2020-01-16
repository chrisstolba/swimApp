create table races_women (
  id bigint unsigned not null unique auto_increment,
  meetid bigint unsigned not null,
  eventid bigint unsigned not null,
  swimmerid bigint unsigned not null,
  time decimal(12,2) not null,

  primary key (id),

  foreign key (meetid) references meets(id),
  foreign key (eventid) references events(id),
  foreign key (swimmerid) references swimmers(id)
);

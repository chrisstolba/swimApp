create table lineups_men (
  id bigint unsigned not null unique auto_increment,
  meetid bigint unsigned not null,
  eventid bigint unsigned not null,
  swimmerid_1 bigint unsigned default null,
  swimmerid_2 bigint unsigned default null,
  swimmerid_3 bigint unsigned default null,
  swimmerid_4 bigint unsigned default null,

  primary key (id),

  foreign key (meetid) references meets(id),
  foreign key (eventid) references events(id),
  foreign key (swimmerid_1) references swimmers(id),
  foreign key (swimmerid_2) references swimmers(id),
  foreign key (swimmerid_3) references swimmers(id),
  foreign key (swimmerid_4) references swimmers(id)
);

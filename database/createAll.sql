create database SwimDB;
create table swimmers (
  id bigint unsigned not null unique auto_increment,
  firstname varchar(30) not null,
  lastname varchar(30) not null,
  class int not null,
  sex varchar(6) not null,
  active tinyint(1) not null,

  primary key (id)
);
create table events (
  id bigint unsigned not null unique auto_increment,
  name varchar(50) not null,
  consmen decimal(12,2) not null,
  automen decimal(12,2) not null,
  conswomen decimal(12,2) not null,
  autowomen decimal(12,2) not null,

  primary key (id)
);
create table meets (
  id bigint unsigned not null unique auto_increment,
  name varchar(99) not null,
  location varchar(4) not null,
  date date not null,

  primary key (id)
);
create table races_men (
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
create table lineups_women (
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
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Lucas', 'Lee', 2021, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Carson', 'White', 2020, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Elliot', 'Kim', 2022, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Jason', 'Mackintosh', 2020, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Archit', 'Mishra', 2022, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Joshua', 'Bacolod', 2022, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Ethan', 'Gifford', 2023, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Whitney', 'Eckert', 2020, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Lucas', 'Lee', 2021, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Ethan', 'Preuett', 2022, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Aritra', 'Dos', 2021, 'Male', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Jonas', 'Nygren', 2023, 'Male', true);

INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Maya', 'Chou', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Emma', 'Yuguchi', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Mia', 'Yuguchi', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Ariah', 'Garcia', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Megumi', 'Watanabe', 2020, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Lauren', 'Cua', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Michelle', 'Nguyen', 2021, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Annabelle', 'Torres', 2022, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Ayumi', 'Aratani', 2022, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Sandy', 'Youssef', 2021, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Diane', 'Burke', 2022, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Montana', 'White', 2021, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Natalia', 'Stanard', 2021, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Eva', 'Brandt', 2022, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Faith', 'Iwanaka', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Romi', 'Viera', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Lulu', 'Acuesta', 2021, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Danielle', 'Ciscel', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Yna', 'De Salva', 2022, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Allison', 'Tsai', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Felicity', 'Matthews', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Sanjana', 'Ganti', 2023, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Sarina', 'Najafi', 2022, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Shelby', 'Coleman', 2022, 'Female', true);
INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('Jenny', 'Hoang', 2021, 'Female', true);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Medley Relay (Backstroke)', 108.40, 119.20, 125.00, 137.5);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Medley Relay (Breaststroke)', 108.40, 119.20, 125.00, 137.5);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Medley Relay (Butterfly)', 108.40, 119.20, 125.00, 137.5);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Medley Relay (Freestyle)', 108.40, 119.20, 125.00, 137.5);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Freestyle', 112.50, 122.00, 130.00, 141.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Individual Medley', 127.50, 241.50, 244.00, 268.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('50 Freestyle', 22.80, 24.30, 26.50, 28.10);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('100 Butterfly', 56.75, 61.00, 64.00, 74.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('100 Freestyle', 50.50, 54.50, 57.50, 64.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('500 Freestyle', 315.00, 345.00, 345.00, 385.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Freestyle Relay (Flat)', 96.00, 104.20, 110.50, 122.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('200 Freestyle Relay (Rolling)', 96.00, 104.20, 110.50, 122.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('100 Backstroke', 60.00, 66.00, 66.00, 74.30);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('100 Breaststroke', 65.50, 71.00, 75.00, 82.50);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('400 Freestyle Relay (Flat)', 215.00, 244.00, 245.00, 276.00);
INSERT INTO events (name, consmen, automen, conswomen, autowomen) VALUES ('400 Freestyle Relay (Rolling)', 215.00, 244.00, 245.00, 276.00);
INSERT INTO meets (name, location, date) VALUES ('Try Outs', 'Home', '2020-01-21');
INSERT INTO meets (name, location, date) VALUES ('Bosco-St. Joseph', 'Home', '2020-02-24');
INSERT INTO meets (name, location, date) VALUES ('San Pedro', 'Away', '2020-02-27');
INSERT INTO meets (name, location, date) VALUES ('Beverly Hills', 'Home', '2020-03-04');
INSERT INTO meets (name, location, date) VALUES ('Palos Verdes', 'Away', '2020-03-09');
INSERT INTO meets (name, location, date) VALUES ('Carson', 'Home', '2020-03-18');
INSERT INTO meets (name, location, date) VALUES ('El Segundo', 'Away', '2020-03-24');
INSERT INTO meets (name, location, date) VALUES ('FNL Invite', 'Home', '2020-03-27');
INSERT INTO meets (name, location, date) VALUES ('Torrance', 'Home', '2020-03-31');
INSERT INTO meets (name, location, date) VALUES ('North', 'Home', '2020-04-13');
INSERT INTO meets (name, location, date) VALUES ('South', 'Home', '2020-04-22');
INSERT INTO meets (name, location, date) VALUES ('League Prelims', 'Home', '2020-04-28');
INSERT INTO meets (name, location, date) VALUES ('League Finals', 'Home', '2020-04-30');

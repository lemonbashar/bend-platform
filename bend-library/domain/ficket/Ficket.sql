INSERT INTO db_place_gsm_location (id, create_by, create_date, update_by, update_date, active_status, latitude, longitude, aptitude) VALUES (1, 1, '2020-04-17', null, null, true, 33, 32, 43);
INSERT INTO db_place_gsm_location (id, create_by, create_date, update_by, update_date, active_status, latitude, longitude, aptitude) VALUES (2, 1, '2020-04-17', null, null, true, 87, 65, null);

INSERT INTO db_place_thana (id, create_by, create_date, update_by, update_date, active_status, name, district_id) VALUES (1, 1, '2020-04-17', null, null, true, 'Bakshiganj', 41);
INSERT INTO db_place_thana (id, create_by, create_date, update_by, update_date, active_status, name, district_id) VALUES (2, 1, '2020-04-17', null, null, true, 'Dhaka', 18);

INSERT INTO db_place_place (id, create_by, create_date, update_by, update_date, active_status, name, thana_id, gsm_location_id) VALUES (1, 1, '2020-04-17', null, null, true, 'Bakshiganj Bazar', 1, 1);
INSERT INTO db_place_place (id, create_by, create_date, update_by, update_date, active_status, name, thana_id, gsm_location_id) VALUES (2, 1, '2020-04-17', null, null, true, 'Dhaka Gulistan', 2, 2);
INSERT INTO db_ficket_ride_config (id, create_by, create_date, update_by, update_date, active_status, name, description, start_time, from_place_id, reach_time, to_place_id, time_factor) VALUES (1, 1, '2020-04-17', null, null, true, 'Bakshiganj To Dhaka', 'Gatelock Service', '10:00:00', 1, '06:00:00', 2, '00:30:00');
INSERT INTO db_ficket_car_config (id, create_by, create_date, update_by, update_date, active_status, ticket_price, total_seat, seat_config_id) VALUES (1, 1, '2020-04-17', null, null, true, 500.00, 55, 1);
INSERT INTO jt_db_ficket_car_config_x_db_ficket_ride_config (car_config_id, ride_config_id) VALUES (1, 1);
INSERT INTO db_ficket_agency_info (id, create_by, create_date, update_by, update_date, active_status, head_quarter_id) VALUES (1, 1, '2020-04-17', null, null, true, 1);
INSERT INTO db_ficket_travel_agency (id, create_by, create_date, update_by, update_date, active_status, agency_name, agency_info_id) VALUES (1, 1, '2020-04-17', null, null, true, 'Prio Express', 1);
INSERT INTO db_ficket_car (id, create_by, create_date, update_by, update_date, active_status, name, licence, number_plate, car_type, travel_agency_id, car_config_id) VALUES (1, 1, '2020-04-17', null, null, true, 'Prio Express (08)', 'ND332322', 'KHA-456654', 'BUS', 1, 1);
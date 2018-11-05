USE burgers_db;

INSERT INTO burgers
  (burger_name)
VALUES
  ('Beef, Bacon, Ketchup')
  ,('Beef, Plain')
  ,('Beef, Tomato, Onion, Lettuce')
;

INSERT INTO burgers
  (burger_name, devoured)
VALUES
  ('Beef, Mayo', true)
  ,('Chicken, Cheese', true)
;
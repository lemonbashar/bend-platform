DROP DATABASE IF EXISTS "bend-platform";
DROP DATABASE IF EXISTS "bend-cluster-database";
DROP DATABASE IF EXISTS "bend-cluster-database-north";
DROP DATABASE IF EXISTS "bend-cluster-database-west";
DROP DATABASE IF EXISTS "bend-cluster-database-ficket";
DROP DATABASE IF EXISTS "bend-cluster-database-ficket-bn";


create database "bend-platform"
    with owner lemon;
create database "bend-cluster-database"
    with owner lemon;
create database "bend-cluster-database-north"
    with owner lemon;
create database "bend-cluster-database-west"
    with owner lemon;
create database "bend-cluster-database-ficket"
    with owner lemon;
create database "bend-cluster-database-ficket-bn"
    with owner lemon;

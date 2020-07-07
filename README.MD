#Bend-Platform
####A Microservice Platform
<hr/>
To run this project you will need,

* JDK-13
* Gradle-6.0.1
* Postgresql
* Node 13.12.0
* Angular Version 9

##Step 1
Create a postgre user with username 'lemon' & password 'lemon'
##Step 2
Create 4 empty databases:
    bend-platform
    bend-cluster-database
    bend-cluster-database-ficket
    bend-cluster-database-ficket-bn

##Step 3

Goto project root directory and run followings step-by-step

    gradle :app:service-registry:bootRun
    gradle :app:gateway:bootRun
    gradle :app:bootRun
    gradle :app:ficket-app:bootRun
    
##Step 4
goto project root/ui directory and run step-by-step

    npm install   #(only for first time)
    ng build bend-core --prod   #(only for first time)
    ng build bend-core-ui --prod   #(only for first time)
    ng serve bend-ficket-ui
    
Now you can login by using following credentials:

    username: system
    password: system1234
    
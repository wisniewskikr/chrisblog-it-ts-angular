USAGE COMMANDS
--------------

> Please **clone/download** project, open **project's main folder** in your favorite **command line tool** and then **proceed with steps below**. 

> Please be aware that following tools should be installed on your local PC:  
* **Operating System** (tested on Windows 11)
* **Git** (tested on version 2.33.0.windows.2)
* **node.js** (tested on version 20.11.0)
* **angular CLI**  (tested on version 17.1.1)
* **Docker** (texted on version 4.33.1 - it has to be up and running)

Usage steps:
1. In a command line tool install nmp packages with `npm install`
1. In a command line tool start application with `ng serve`
1. In a http browser (e.g. Chrome) visit `http://localhost:4200`
   * Expected message **Hello World from DEV!**
1. In a command line tool stop application with `ctrl + C`
1. In a command line tool build application with `ng build --configuration=production`
1. In a command line tool start server with application with `node server.js`
1. In a http browser (e.g. Chrome) visit `http://localhost:8080`
   * Expected message **Hello World from PRD!**
1. In a command line tool stop application with `ctrl + C`
1. In a command line tool build Docker image with `docker build -t fe-image:0.0.1 .`
1. In a command line tool build and start Docker container FE with `docker run -p 8080:80 --name fe-container -d fe-image:0.0.1`
1. In a http browser (e.g. Chrome) visit `http://localhost:8080`
   * Expected message **Hello World from DOCKER!**
1. Clean up environment 
     * In a command line tool stop and remove Docker container with `docker rm -f fe-container`
     * In a command line tool remove Docker image with `docker rmi fe-image:0.0.1`


USAGE IMAGES
------------

![My Image](readme-images/image-01.png)

![My Image](readme-images/image-02.png)

![My Image](readme-images/image-03.png)


DESCRIPTION
-----------

##### Goal
The goal of this project is to present how to use **environment variables** for **Docker** in an application type **GUI HTML** in **TypeScript** programming language with usage **angular** framework.

> Please be aware that you have to do changes in **angular.json** file and add property **fileReplacements** for Docker environment.

##### Terminology
Terminology explanation:
* **TypeScript**: is an extension of JavaScript programming language. Main difference between them is that TypeScript enables defining types for variables - string, boolean, number etc. In this way developer knows type for variables.
* **GUI HTML**: it's an abbreviation for Graphical User Interface. It enables user to interact with application. GUI HTML means that user interacts with application via html web pag.
* **Angular framework**: It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
* **Environment variables**: Environment variables are dynamic values that can affect the behavior of running processes on a computer. They are used to store configuration settings, such as file paths, system settings, or user preferences, and can be accessed by software applications to adapt their operations without modifying the code.
* **Docker**: Docker is an open-source platform that automates the deployment, scaling, and management of applications using containerization. Containers bundle an application with its dependencies, libraries, and configuration files, ensuring that it runs consistently across different environments. This makes Docker ideal for developing, testing, and deploying applications efficiently.

##### Launch
To launch this application please make sure that the **Preconditions** are met and then follow instructions from **Usage** section.


PRECONDITIONS
-------------

##### Preconditions - Tools
* Installed **Operating System** (tested on Windows 11)
* Installed **Node** (tested on version 18.18.1)
* Installed **Angular CLI** (tested on version 17.1.0)

##### Preconditions - Actions
* Download **Source Code** (using Git or in any other way) 
* Open any **Command Line** tool (for instance "Windonw PowerShell" on Windows OS) on downloaded **project's main folder**
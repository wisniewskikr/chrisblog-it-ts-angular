USAGE COMMANDS
--------------

> Please be aware that following tools should be installed on your local PC: **Java**, **Maven**, **NPM**, **Angular CLI** and **Git**. 

> Please **clone/download** project, open **project's main folder** in your favorite **command line tool** and then **proceed with steps below**. 

Usage steps:
1. In a first command line tool start back-end application with `cd .\java-springboot-api-rest-angular-separate\ | mvn spring-boot:run`
1. In a second command line tool start front-end application with `cd .\ts-angular-api-rest-springboot-separate\ | ng serve`
1. In a browser visit `http://localhost:4200`
1. Clean up environment 
     * In a command line tool stop application with `ctrl + C`


USAGE PICTURES
--------------

![My Image](readme-images/image-01.png)


DESCRIPTION
-----------

##### Goal
The goal of this project is to present how to create an application type **API REST** in **Java** programming language with usage **Spring Boot** framework.

##### Terminology
Terminology explanation:
* **Java**: object-oriented programming language
* **API REST**: an architectural style for an application program interface (API) that uses HTTP requests to access and use data
* **Spring Boot**: framework for Java. It consists of: Spring + Container + Configuration
* **Maven**: tool for build automation
* **Git**: tool for distributed version control
* **Docker** (Optional): tool for developing, shipping, and running applications which are provided as Docker Images and run as Docker Containers
* **Docker Compose** (Optional): tool for defining and sharing Docker multi-container applications
* **Kubernetes** (Optional): it's Docker container orchestration platform for managing containerized services
* **Minikube** (Optional): tool that sets up a Kubernetes environment on a local PC or laptop
* **kubectl** (Optional): command line tool for Kubernetes

##### Flow
The following flow takes place in this project:
1. User via any browser sends request to application Hello World for the content.
1. Application HelloWorld sends back response with JSON containing: message, port and UUID. This response is presented to User via browser.

##### Launch
To launch this application please make sure that the **Preconditions** are met and then follow instructions from **Usage** section.

##### Technologies
This project uses following technologies:
* **Java**: `https://docs.google.com/document/d/119VYxF8JIZIUSk7JjwEPNX1RVjHBGbXHBKuK_1ytJg4/edit?usp=sharing`
* **Maven**: `https://docs.google.com/document/d/1cfIMcqkWlobUfVfTLQp7ixqEcOtoTR8X6OGo3cU4maw/edit?usp=sharing`
* **Git**: `https://docs.google.com/document/d/1Iyxy5DYfsrEZK5fxZJnYy5a1saARxd5LyMEscJKSHn0/edit?usp=sharing`
* **Spring Boot**: `https://docs.google.com/document/d/1mvrJT5clbkr9yTj-AQ7YOXcqr2eHSEw2J8n9BMZIZKY/edit?usp=sharing`
* **Docker**: `https://docs.google.com/document/d/1tKdfZIrNhTNWjlWcqUkg4lteI91EhBvaj6VDrhpnCnk/edit?usp=sharing`
* **Docker Compose**: `https://docs.google.com/document/d/1SPrCS5OS_G0je_wmcLGrX8cFv7ZkQbb5uztNc9kElS4/edit?usp=sharing`
* **Kubenetes**: `https://docs.google.com/document/d/1jOsK3Lkbkoq-Xx7Ln9o_ozCt6XpcSElOwu1o2AfQnNc/edit?usp=sharing`
* **Minikube**: `https://docs.google.com/document/d/1GfgN7tJNTIJCaSzexJdR_Lm_S9pF2YykcpgSQzAZWZo/edit?usp=sharing`
* **kubectl**: `https://docs.google.com/document/d/1jOsK3Lkbkoq-Xx7Ln9o_ozCt6XpcSElOwu1o2AfQnNc/edit?usp=sharing`


PRECONDITIONS
-------------

##### Preconditions - Tools
* Installed **Operating System** (tested on Windows 11)
* Installed **Java** (tested on version 17.0.5)
* Installed **Maven** (tested on version 3.8.5)
* Installed **Git** (tested on version 2.33.0.windows.2)
* (Optional) Installed **Docker** (tested on version 20.10.23)
* (Optional) Installed **Docker Compose** (tested on version v2.15.1)
* (Optional) Installed **Minikube** (tested on version v1.28.0)
* (Optional) Installed **kubectl** (tested on version v4.5.4)


##### Preconditions - Actions
* Download **Source Code** (using Git or in any other way) 
* Open any **Command Line** tool (for instance "Windonw PowerShell" on Windows OS) on downloaded **project's main folder**
* (Optional) Verify **Java Spring Boot Source Code**: `https://github.com/wisniewskikr/java-springboot-helloworld-api-rest`
* (Optional) Verify **Java Spring Boot Docker Image**: `https://hub.docker.com/repository/docker/wisniewskikr/java-springboot-helloworld-api-rest/general`
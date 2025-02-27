# Hello World - Angular Project

## Description

This project demonstrates the basic setup and execution of an Angular application using TypeScript. It serves as an introductory example to familiarize users with Angular's framework and its core functionalities. The application consists of a single-page UI displaying a "Hello World" message.

## Usage Manual

> **Note:** Ensure that all preconditions are met before proceeding.

Follow these steps to set up and run the application:

### Step 1: Open a Terminal

- Open a command-line interface such as **Windows PowerShell**, **Command Prompt**, or **Git Bash**.
- Navigate to the main directory of the project using the `cd` command. If you have cloned the project into `C:\Projects\AngularHello`, run:
  ```sh
  cd C:\Projects\AngularHello
  ```

### Step 2: Install Required Dependencies

- Ensure that all dependencies are installed before running the project.

- Run the following command to install necessary packages from `package.json`:

  ```sh
  npm install
  ```

- This will download and set up all required libraries and dependencies for Angular.

### Step 3: Start the Angular Development Server

- Run the following command to start the development server:

  ```sh
  ng serve
  ```

- If the command executes successfully, you should see output similar to:

  ```sh
  ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
  ```

### Step 4: Open the Application in a Web Browser

- Open your preferred web browser (e.g., Chrome, Edge, Firefox) and enter the following address in the URL bar:

  ```sh
  http://localhost:4200
  ```

- You should see a page displaying the **Hello World** message.

### Step 5: Stop the Application

- To stop the Angular development server, go back to the terminal and press:

  ```sh
  Ctrl + C
  ```

- Confirm by typing `Y` (Yes) if prompted.

### Usage Image

## Preconditions

### Required Tools

Ensure that the following tools are installed before proceeding:

- **Operating System**: Windows 11 (or equivalent)
- **Node.js**: 22.12.0
- **Angular CLI**: 19.1.7
- **TypeScript**: 5.7.3
- **Docker**: 27.5.1
- **Kind**: v0.27.0
- **kubectl**: v1.32.0

> **Tip:** You can verify the installed versions by running:
>
> ```sh
> node -v  # Checks Node.js version
> ng version  # Checks Angular CLI version
> tsc -v  # Checks TypeScript version
> docker -v  # Checks Docker version
> kind version  # Checks Kind version
> kubectl version --client  # Checks kubectl version
> ```

### Required Actions

Before running the project, ensure the following actions are completed:

- **Download the Source Code**:

  - If using Git, clone the repository:
    ```sh
    git clone https://github.com/this-repo/angular-hello-world.git
    ```
  - Alternatively, download the ZIP file and extract it manually.

- **Navigate to the Project Folder**:

  - Open a terminal and use the `cd` command to go to the project's main folder.

## Technologies Used

This project utilizes the following technologies:

- **TypeScript**: Enhances JavaScript with type safety and additional features.
- **Node.js**: JavaScript runtime for executing scripts outside the browser.
- **Angular Framework**: A powerful front-end framework for building web applications.
- **Docker**: Used for containerizing the application and running it in a consistent environment.
- **Kind (Kubernetes in Docker)**: A tool for running local Kubernetes clusters for testing and development.

## Kubernetes Usage

This section describes how to deploy and run the Angular web application using Kubernetes with Kind.

### Step 1: Create a Kind Cluster

Ensure that Kind is installed, then create a Kubernetes cluster:

```sh
kind create cluster --name angular-demo
```

### Step 2: Apply Kubernetes Deployment and Service

Use the following command to deploy the application to the Kubernetes cluster:

```sh
kubectl apply -f angular-deployment.yaml
```

Since the image is available on Docker Hub, Kubernetes will automatically pull it when deploying.

### Step 3: Check Deployment Status

Verify that the Pods are running:

```sh
kubectl get pods
```

Check the service details:

```sh
kubectl get svc
```

### Step 4: Access the Application Using Port Forwarding

Since the service is of type `ClusterIP`, use port forwarding to access the application:

```sh
kubectl port-forward svc/angular-service 8080:80
```

Then open a browser and navigate to:

```sh
http://localhost:8080
```

### Step 5: Clean Up the Cluster

To delete the Kind cluster when you're done testing:

```sh
kind delete cluster --name angular-demo
```

## Usage Docker

This project supports containerized deployment using Docker. Below are the steps to build and run the application using Docker.

### Build and Run with Docker

1. Ensure that Docker is installed and running on your system.
2. Navigate to the project directory in your terminal:
   ```sh
   cd /path/to/project
   ```
3. Build the Docker image:
   ```sh
   docker build -t angular-app .
   ```
4. Run the container:
   ```sh
   docker run -p 8080:80 angular-app
   ```
5. Open a browser and visit:
   ```sh
   http://localhost:8080
   ```

### Using Docker Compose

An alternative way to run the application is by using `docker-compose`:

1. Ensure `docker-compose` is installed.
2. Navigate to the project directory and run:
   ```sh
   docker-compose up -d --build
   ```
3. The application will be accessible at:
   ```sh
   http://localhost:8080
   ```
4. To stop the containerized application, run:
   ```sh
   docker-compose down
   ```

---

This documentation provides essential guidance on setting up and running the Angular **Hello World** project. If you encounter any issues, ensure that all dependencies are correctly installed, and verify that your system meets the required conditions.


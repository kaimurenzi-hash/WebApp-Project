
pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker --version'
                bat 'docker build -t devops-webapp:1.0 .'
            }
        }

        stage('Deploy with Docker') {
            steps {
                bat 'docker rm -f webapp-container || exit /b 0'
                bat 'docker run -d --name webapp-container -p 8083:3000 devops-webapp:1.0'
            }
        }
    }
}

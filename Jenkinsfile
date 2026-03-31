pipeline {
    agent any
    
    stages {
        stage ('Building Docker Image...') {
            steps {
                sh 'docker build -t simple-node-app:v1 .'
            }
        }
        stage ('Running The Container...') {
            steps {
                sh 'docker run -d -p 3000:3000 simple-node-app:v1'
            }
        }
    }
}

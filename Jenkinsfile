pipeline {
    agent {
        docker { image: 'node:14-alpine' }
    }
    stages {
        stage('Hello') {
            echo 'Hello'
            sh 'npm build'
            echo 'cat about'
        }
    }
}
pipeline {
    agent {
        docker { image: 'node:14-alpine' }
    }
    stages {
        stage('Hello') {
            echo 'Hello'
            sh 'npm run build'
            echo 'cat about'
        }
    }
}
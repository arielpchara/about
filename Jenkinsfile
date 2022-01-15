pipeline {
    agent {
        docker { image 'node:16.13-alpine' }
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '1'))
        disableConcurrentBuilds()
        timeout(time: 5, unit: 'MINUTES')
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'cat card'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
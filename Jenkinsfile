pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                pkill node || true
                nohup npm start &
                '''
            }
        }
    }
}

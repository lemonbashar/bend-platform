def branch='master'

pipeline {
    agent {
        node {
            label 'primary-agent'
        }
    }

    triggers {
        cron('H 23 * * *')
    }

    stages{
        stage('Clone-Bend-Platform') {
            steps {

            }
        }

        stage('Checkout-Bend-Platform') {
            steps {

            }
        }

        stage('Unit-Test-Bend-Platform') {
            steps {

            }
        }

        stage('Publish-Bend-Platform') {
            steps {

            }
        }
    }
}
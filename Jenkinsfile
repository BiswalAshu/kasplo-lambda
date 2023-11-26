pipeline {
    agent any
    
    environment {
        LAMBDA_FUNCTION_NAME = 'lambda1'
        AWS_REGION = 'ap-south-1'
        AWS_ACCOUNT_ID = '795864298566'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout code from GitHub
                    checkout scm
                }
            }
        }

        stage('Deploy to Lambda') {
            steps {
                script {
                    // Create a new ZIP file using Linux zip command
                    sh 'zip -r lambdaCode.zip *'

                    // AWS Lambda deployment configuration
                    def lambdaARN = "arn:aws:lambda:${AWS_REGION}:${AWS_ACCOUNT_ID}:function:${LAMBDA_FUNCTION_NAME}"

                    // AWS Lambda deployment
                    withAWS(region: AWS_REGION, credentials: 'aws-cred') {
                        lambdaUpdate function: lambdaARN, s3Bucket: '', s3Key: 'lambdaCode.zip'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Lambda deployment successful!'
        }
    }
}

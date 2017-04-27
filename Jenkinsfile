node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Test'){

          withEnv(["PATH+NODE=${tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
            sh 'node -v'
            sh 'npm prune'
            sh 'npm install'
            sh 'npm test'
          }

       }

       stage('Deploy'){

         echo 'Deploy'

       }

       stage('Cleanup'){

         echo 'prune and cleanup'
         
       }



    }
    catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }

}

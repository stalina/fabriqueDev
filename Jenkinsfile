node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Build'){

          withEnv(["PATH+NODE=${tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
            sh 'node -v'
            sh 'npm prune'
            sh 'npm install'
            sh 'npm install ng'          
            sh 'npm build --prod'
          }

       }

       stage('Deploy to recette'){

         sh 'cp -rf dist /tmp/recette'

       }

       stage('Manual Test'){

         echo 'prune and cleanup'
         
       }

       stage('Deploy to prod'){

         sh 'cp -rf dist /tmp/prod'

       }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }

}

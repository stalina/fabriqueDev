node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Deploy to recette'){

          withEnv(["PATH+NODE=${tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
            sh 'npm install'       
            sh 'ng build --prod'
            sh 'cp -rf dist /tmp/recette'
          }

       }
      
       stage('Manual Test'){

         echo 'prune and cleanup'
         input id: 'Deploy', message: 'Is Blue node fine? Proceed with Green node deployment?', ok: 'Deploy!'
 
       }

       stage('Deploy to prod'){
         withEnv(["PATH+NODE=${tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
           sh 'npm install'
           sh 'ng build --prod'
           sh 'cp -rf dist /tmp/prod'
         }
       }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }

}

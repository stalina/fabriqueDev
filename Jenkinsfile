node('node') {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Test'){

         env.NODE_ENV = "test"

         print "Environment will be : ${env.NODE_ENV}"

         sh 'node -v'
         sh 'npm prune'
         sh 'npm install'
         sh 'npm test'

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

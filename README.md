# Tea Leaves and Moore
This app is designed to be my personal blog and also a fun side project.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Build/Deploy
To set up docker I followed this lovely [guide](https://mherman.org/blog/dockerizing-a-react-app/).
Basically to build and deploy the app, you build a docker image, push it to `gcr` retag it as `latest` push it again.
Then to deploy the image you ssh into the container and restart the server with the new image.

### Installing and setting up gcloud and docker
This app gets deployed to a gcloud `Compute Engine` vm. You'll need to install gcloud cli and docker.
Once you've set up gcloud and installed docker run

`gcloud auth configure-docker`

this will configure docker to point at gcloud's container registry (gcr).

### Build

#### Build docker for development
`./scripts/build_and_run_dev`

#### Build docker for prod
`./scripts/01_build_prod.sh {tag_number} --run` add the run flag if you want to run and test the
image. You can visit localhost:1337 to verify it.
`./scripts/02_push_prod.sh` publishes the latest docker build to gcr.

### Deploy to production

currently this deploys by restarting the container.
`./scripts/03_deploy_prod.sh`

If manual deployment is needed, for whatever reason. 
`gcloud beta compute ssh --zone "us-central1-a" "instance-1" --project "fluid-mix-282315"`
`docker run -it --rm -p 1337:80 us.gcr.io/fluid-mix-282315/js-react-redux:latest`

## How to add a new Post
1. Create a new markdown file.
2. Add an image to google storage.
3. Add a new mapping to the corresponding page for your markdown file and image.
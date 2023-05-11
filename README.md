This is a Node.js and EJS app that uses four REST web services which runs in a docker container . The four GET REST web services routes are:

1. /products
2. /products/id
3. /products/id/orders
4. /products/id/orders/order_id

This app is using hard coded JSON database and data returned from these routes is in JSON form.

To run this app, follow these steps:

1.Clone this repository to your local machine.
2.Navigate to the root directory of the project in your terminal or command prompt.
3.Run the command npm install to install all the dependencies required for this app.
4.Start the server by running the command npm run dev.
5.Open your browser and go to http://localhost:3000 to view the app.

This app uses EJS templates to display data on the front-end. The EJS templates are located in the views folder.

To run this app in docker conainer, follow these steps:

-In the docker terminal, use command "touch Dockerfile" to create the Dockerfile and setup the environment of the docker file.

-Create Docker Image by running : "docker build -t docker-nodejs ."

-You can check the image created using "docker images"

-Run the app image inside a container using "docker run -d -p 8000:8000 docker-nodejs"

-Check running docker container by "docker ps"

Open your browser and go to http://localhost:8000 to view the app.

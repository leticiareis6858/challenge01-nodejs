# 🐶| Vet Franchise - API

This repository is for the first challenge of a node.js scholarship program of Compass. The challenge consists in the creation of a REST API for a veterinary franchise. With the requested patterns:

• GET /tutors -> Retrieves all tutors.

• POST /tutor -> Create a new tutor.

• PUT /tutor/:id -> Updates a tutor.

• DELETE /tutor/:id -> Deletes a tutor.

• POST /pet/:tutorId-> Creates a pet and adds it to a tutor.

• PUT /pet/:petId/tutor/:tutorId -> Updates a pet's info.

• DELETE /pet/:petId/tutor/:tutorId -> Deletes a pet from a tutor.

## 🚀 How it was made

This rest API was built using Node.js, Typescript, Express, mongoDB, VsCode, Postman, Eslint and Prettier.

## 📋 Prerequisites

What do you need to run it?

` - VsCode `

` - Node.js `

` - An Atlas mongoDB account `

` - A Postman account `

` - Postman Agent `

## 🔧 Installation

Step to step of how to install it:

1. Download the .zip file of the repository

2. Unzip the folder and place it somewhere in your computer

3. Open the folder with VsCode or any other IDE of your choice

4. Install all Node dependencies by using *npm install* in the console

5. Compile TypeScript files in watch mode by using *tsc -w*

6. Start the application by using *npm start*

7. In *.envExample*, place your mongoDB account user in the variable *DB_USER*

8. Place your mongoDB account password in the variable *DB_PASS*

9. Rename the *.envExample* to *.env*

10. Use the *VetClinic-API.postman_collection.json* file to import the Collection to your Postman workspace

After that the API is ready to use

## 🛠️ How to use it

After doing the installation, you need to certify that the server is running(that you have the *npm start* on).
Use postman to send HTTP Requests to the API.

-   **Get All tutors:** Click in *Send* and in the response you will get all the tutors created an their pets.

-   **Create a new tutor:** In the *Body* field, fill the fields with the information of the tutor, and then click on *Send*.

-   **Updates a tutor:** You need to put the id of the tutor in the *Params* part in the key id value section. Then go to *Body* and fill the info you want to change. Then click on *Send*.

-   **Deletes a tutor:** Put the tutor's id in the id key value section in the *Params*. Then click on *Send*.

-   **Create a pet and add it to a tutor:** Place the tutor's id in the *Params* section, then go to *Body* and fill the pet´s info. Then click on *Send*

-   **Updates a pet's info:** In the *Params* field, inform the pet's id and it's tutor id. Then go to *Body* and fill the info you want to update. Then click on *Send*.

-   **Deletes a pet:** In the *Params* section place the ids of the pet and the tutor. Then click on *Send*.

_**Important notes:**_

- When you are updating a tutor or a pet, you **must** erase the fields of the info you are not going to update.
  
**_example image:_**

![image](https://github.com/ana-leticia-vieira/challenge01-nodejs/assets/102880247/3e30386a-6fb3-497e-af21-24b848cc9903)

 (in this case I just wanted to update the name and the birth date of the tutor, so I only put those infos in the request body.)

- The *date_of_birth* format is **string**. The date input must be in the format *dd-mm-yyyy*.

_**How to get the id of and tutor or pet:**_

-   You can grab the id when you create a pet or tutor. The id of the createn pet or tutor will be displayed in the 'Response' field.
-   You can also grab the id by using the 'Get All Tutors' request.


## ❤️ Expressions of gratitude

Huge thanks to Compass and AWS for this scholarship oportunity. I have learned a lot during this scholarship!
This challenge was an amazing oportunity to practice the knowledge I have initially gained during the scholarship.

Special thanks to my scrum masters and instructors💖

⌨️ ReadMe template by [Armstrong Lohãns](https://gist.github.com/lohhans) 😊

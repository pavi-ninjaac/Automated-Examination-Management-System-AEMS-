# &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TETOHA
# &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Portal for STET(Teacher Eligibility Test) of Sikkim - 2020
# &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Team Info Note

[![CodeFactor](https://www.codefactor.io/repository/github/infonotes/hackathon-2020/badge?s=7306cacb73574d28ce5053a222211d153e64b451&style=for-the-badge)](https://www.codefactor.io/repository/github/infonotes/hackathon-2020)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e4fd48bea24544f197572362d305ec2a?style=for-the-badge)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=InfoNotes/hackathon-2020&amp;utm_campaign=Badge_Grade)


![WhatsApp Image 2020-08-03 at 21 24 36](https://user-images.githubusercontent.com/51699297/89205171-eb8eaa80-d5d4-11ea-83f3-0356089801ce.jpeg)

### Table of Content:
-	[About Our project](#about-our-project) 
-	[Features and Solutions](#features-and-solutions)
-	[App Fundamentals](#app-fundamentals)
  - [User Interface](#user-interface)
  - [Admin Panel](#admin-panel)
- [TET Bot chatBot](#tet-bot-chatbot)
-	[Technologies](#technologies) 
-	[Team members](#team-members)

# About Our project:
  
 <i><i><b> This is our Web app that can rununder very low network coverage areas, No need for the humen intervention during the document verification process, So the human error is reduces. The accuracy of the verification is high beacuse we are using the "3 stage verification" With the help of the OCR(ML and DL) MOdel.</i></b></i>
  
  
# Features and Solutions:

## Security:

- With all the problem and the requirements in mind we build our web app entirely with <i><b>React, Type Script, Python</b></i> So the use data is completely secure from the most of the hacking techniques. 
-	We are having the mail verification for the security. Without verifying the email we cant log in. The entire application process contains mail notification like <i><b>whenever you logged in you receiving one mail alter</b></i>.
-	The <i><b>password is fully hasted an stored</b></i> in the database, So <i><b>even admin and developer cant see</b></i> the password. The security is more high here.
-	We are using the <i><b>JWT- Json Web Tokens for the security purpose</b></i>, User can not be in our web page more than 30 mins this will more secure our account. <i><b>For example</b></i> You logged in your account in tour friends laptop or in any computer centers and forgot to log out in that situation you don’t worry about that because the account will be automatically logged out after 30 mins.
-	Our routes are fully secured and free from the high security vulnerabilities.
-	<i><b>We are ensure the data privacy of the candidates by we didn’t used any kind of APIs and 3ed parties in our web site.</b></i>

## Accuracy:

-	We are verifying the documents with the help of the <i><b>OCR(Machine Learning and Deep Learning) and Image processing . OCR is the highly trained machine learning model so the accuracy will be high.</b></i>
We extracted the required features from the document using the OCR and image processing.
-	We are verifying the <i><b>documents in the 3 stages </b></i>
1) verify the originality of the documents 
2) verify that uploaded all documents are belonged to the particular person who is the candidate.
3) Eligibility test.

### 1)verify the originality of the documents

The extracted features <i><b>are cross checked with the Sikkim Government data base</b></i>( for demo we created on by our own), if the features are present in the database we can say the document is original.

### 2) verify that uploaded all documents are belonged to the particular person who is the candidate.

Here we are checking all the document containing the same name and <i><b>DOB and also checking that the document</b></i> name is same as the user entered name. By doing this two we can say that the documents are belonged to the same particular person.

### 3)Eligibility test:

We are collected the <i><b>eligibility criteria that was given by the Sikkim state</b></i> for the STET examination. And checking the persons application must satisfies the criteria for the <i><b>Primary and Graduate Examinations.</b></i>
- <i><b>Admit contain</b></i> the Photo and Sign , center name , Registration number, Center google map link. We have to check that the signature photo and the sign of the candidate in the exam hall is same to check the correct person.

## Run in very low Network Area:

-	We are using the <i><b>Boostrap, CSS and Material UI in our web app</b></i>, This stylesheet is already downloaded in most of our phone and laptop, so it will not take more time to load.
-	It will load in network range from <i><b>20 kb – 45 kb in very good</b></i> and smooth manner.
-	Even reduce the network issues we completely <i><b>omitted the graphical and Animation</b></i> kind of things.
-	The routes are very high speed and secure.
# App Fundamentals:

# User Interface:
 Here is our UI that is fully responcible.
 
![Screenshot (212)](https://user-images.githubusercontent.com/51699297/89201549-4ae9bc00-d5cf-11ea-9ed7-d3fb193e2ff6.png)

![Screenshot (213)](https://user-images.githubusercontent.com/51699297/89201563-50df9d00-d5cf-11ea-917d-d1997376e875.png)

![Screenshot (214)](https://user-images.githubusercontent.com/51699297/89201570-52a96080-d5cf-11ea-8db0-cd7425d3bffa.png)

- Here you can register and upload all the documents and click submit to complte the registration.

![Screenshot (215)](https://user-images.githubusercontent.com/51699297/89201573-54732400-d5cf-11ea-91bb-b8960b575410.png)

- This the materials for the candidate references 

![Screenshot (216)](https://user-images.githubusercontent.com/51699297/89201582-55a45100-d5cf-11ea-8529-acfad5850c71.png)

- here the user can see the results after it publiced by the admin.

![Screenshot (217)](https://user-images.githubusercontent.com/51699297/89201601-5dfc8c00-d5cf-11ea-83d2-c15f84ecdb5f.png)

- While we extracting the document required features using the image and OCR techniques.

![Screenshot (225)](https://user-images.githubusercontent.com/51699297/89202227-407bf200-d5d0-11ea-986c-ac2e166b4cbb.png)


# Admin Panel:

- Here the admin panel admin can see the statistics of how much odcumnents are submitted and how much rejected and accepted.
- Admin can strat and stop the Verification process by clicking the verify button.
- Admin can publish the results by clicking the result button

![Screenshot (219)](https://user-images.githubusercontent.com/51699297/89202189-378b2080-d5d0-11ea-9b36-0838d287d78f.png)

- The admin can Insert, Upload, Delete the result in bulk and indivitual manner.

![Screenshot (222)](https://user-images.githubusercontent.com/51699297/89202389-81740680-d5d0-11ea-881c-8bc5f22d2e80.png)

# Admit card:

- here is the admit card

![Screenshot (223)](https://user-images.githubusercontent.com/51699297/89202208-3c4fd480-d5d0-11ea-93b0-ed272b06770e.png)


# TET Bot(chatBot):

 We have created one TETBot for our web applocation. Here you can ask and clarify all of your questions, like simply talking to your best friend.It is AI based chatbot with high accuracy.<br />
 
 The chatbot creation process is listed here [Create chatBOT](https://github.com/pavi-ninjaac/Covid19Bot)
 
 ![Screenshot (227)](https://user-images.githubusercontent.com/51699297/89203358-13304380-d5d2-11ea-8c9b-5c2a04763c5d.png)


# Technologies:
- <i><b>Python</b></i> – The Machine Learning and image processing language.
- <i><b>Image Processing Technique (OpenCV)</b></i> – Verify the documents .
- <i><b>OCR</b></i> – High security feature extraction from the PDF, JPNG, PNG format data.
- <i><b>React, Type Script</b></i> – For web app development.
- <i><b>Google Mangodb Atlas</b></i> – Data storage.

# Team Members:
- [Pavithra Devi M]()
- [Krishna Moorthi A]()
- [Nivetha M]()
- [Dravid Kumar B]()
- [Ponmalar S]()
- [Pooja Lakshmi C]()




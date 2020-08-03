from fetch_mangodb import fetch_mangidb_data
from mail_content import mail
import smtplib,ssl
import email, smtplib, ssl

from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
#from comparedb import comapre
#from eligibility import eligibility
#convert the pdf to png formate this function convert the pdf file and save it as png and give you the image path
#here return image path will be inside the list so indexing is must while using that path
document_dict,records_dict=fetch_mangidb_data.fetch_data()
print(document_dict)
print(records_dict)
#________________________-turthness verification

#_________________comaprision code goes  here
#original=comapre.compare_db(document_dict)
"""if original==True:
    validd=eligibility.eligibility_test(document_dict,records_dict)
else:
    validd=False"""
valid=True
#________________________________send mail
photo_path=document_dict['photo_path']
sign_path=document_dict['sign_path']
name=document_dict['name']
mailid=document_dict['email']
if(valid==True):
    reg_no=fetch_mangidb_data.insert_mangodb(name, mailid, valid=True)

    subject = "STET APPLICATION RESULTS 2020"
    body = f"""Dear applicant {name},
    Your application to the STET examination of Sikkim 2020 is received and gone under the verification process.After the certification verification process, your application is approved and you can collect your admit card through this mail attachment.

Note:

1) One another offline certification verification process to is there.
2) You will be notify with the Date, Time, Place of examination of the offline certification verification through mail.
3) Your examination roll number, Center name, Center google location link are present in the admit card.
4) If there is any issue with opening the admit card, please try again later.
5) The admit card hot copy must be present with you on the examination.
6) You will be present on time to the examination with your proof of identification, admit card.
ALL THE BEST FOR YOUR EXAMINATION    
If there are any queries contact us:
    Mobile -- 9834555944
    Email -- stet.infonote@gmail.com
  
    """



    sender_email = "stet.infonote@gmail.com"
    receiver_email = "pavipd1@gmail.com"
    password = 'stet123infonote'

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    message["Bcc"] = receiver_email  # Recommended for mass emails

    # Add body to email
    message.attach(MIMEText(body, "plain"))
    #___________________document insides
    msg_doc=""" ADMIT CARD
    STATE ELIGIBILITY 
    
    """

    filename = mail.generate_mail(name,reg_no,photo_path,sign_path)  # In same directory as script

    # Open PDF file in binary mode
    with open(filename, 'rb') as attachment:
        # Add file as application/octet-stream
        # Email client can usually download this automatically as attachment
        part = MIMEBase("application", "octet-stream")
        part.set_payload((attachment).read())

    # Encode file in ASCII characters to send by email
    encoders.encode_base64(part)

    # Add header as key/value pair to attachment part
    part.add_header(
        "Content-Disposition",
        "attachment", filename= filename,
    )

    # Add attachment to message and convert message to string
    message.attach(part)
    text = message.as_string()

    # Log in to server using secure context and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, text)
else:
    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    sender_email = "stet.infonote@gmail.com"  # Enter your address
    receiver_email = "stet.infonote@gmail.com"  # Enter receiver address
    password = 'stet123infonote'
    NAME="pavi"
    message = f"""Dear applicant,
Your application for STET 2020 examination is received and gone under the verification process, when verifing the documents there are some mismatch to your apllication and the documents so your application is disapproved.

Any Queries:
Mobile -- 9843556743
Mail ID -- stet.infonote@gmail.com
    
    """

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)






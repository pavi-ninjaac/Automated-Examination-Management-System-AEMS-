from image_processing import img_prosessing
import cv2
from PIL import Image
import requests
from io import BytesIO
class fetch_mangidb_data():
    def fetch_data():
        from pymongo import MongoClient

        client= MongoClient('mongodb+srv://web-client:yjpMsZ7WgH2eueA@default.droi9.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority')

        #db=client.get_database('stet')
        #records=db.applications
        #record=list(records.find())
        record=[{ 'name': 'Dravid Kumar B', 'fatherName': 'Athinarayanan', 'motherName': 'Mariammal', 'sex': 'Male', 'nationality': 'Indian', 'mobileNumber': 9677068234.0, 'email': 'pavipd1@gmail.com', 'permanentAddress': 'this is an address', 'aadhaarNo': 5432198765012.0, 'voterId': 'KR89TQ672', 'motherTongue': 'Tamil', 'identificationMarks': 'Mole in back', 'maxQualification': 'B.E CSE', 'SSLC': {'institute': 'SRMHSS', 'percentage': 96, }, 'HSC': {'institute': 'SRMHSS', 'percentage': 94, }, 'college': {'degree': 'B.E', 'department': 'CSE', 'institute': 'UCE, Trichy', 'university': 'Anna University', 'percentage': 76,},
                  'documents': {'aadhaar': 'https://i.postimg.cc/wjW1TsYv/aadhar0001-1.png', 'HSC': 'https://i.postimg.cc/yYHKT9YL/in-nic-tn-dgecert-HSCER-1710243086-1.png', 'deg_bsc': '5555656','deg_msc':'','deg_bd':'','photo': 'https://i.postimg.cc/1tj3036m/nad.png','signature': 'https://i.postimg.cc/9Mjv65hd/nad-sign.png','Income':'https://i.postimg.cc/FKxvVqkN/Doc-08-02-08-1.png',
                                'nativity':'https://i.postimg.cc/8c6s0swT/dravid-biodata-3.png','birth_cer':'https://i.postimg.cc/wj8d8Hh9/Doc-08-02-08-3.png','community':'https://i.postimg.cc/KYFMRyRq/dravid-biodata-15.png'},  '__v': 0}]
        feature_name=['name','fatherName','motherName','sex','nationality','mobileNumber','email','permanentAddress','aadhaarNo', 'voterId','motherTongue','identificationMarks','HSC', 'college',]
        #print(record)
        #__________________________---collect required data
        #_________________________colect the documents
        documents=record[0]['documents']
        #print(documents)

        aadhar_card=documents['aadhaar']
        aadhar_text=img_prosessing.img_to_text_aadhar(aadhar_card)
        birth_card=documents['birth_cer']
        birth_text=img_prosessing.image_test_birth(birth_card)
        community_card=documents['community']
        community_text=img_prosessing.image_text_community(community_card)
        #print(aadhar_text)
        if documents['HSC']:
            twelth_mark=documents['HSC']
            twelth_mark_text=img_prosessing.img_to_text_tweth_mark(twelth_mark)
        else:
            twelth_mark_text=''
        #print(twelth_mark_text)
        """if documents['deg_bsc']!='':
            degree_bsc_card=documents['deg_bsc']
            degree_bsc_text=img_prosessing.img_text_degree_bsc(degree_bsc_card)
        else:
            degree_bsc_text=''
        if documents['deg_msc'] != '':
            degree_msc_card = documents['deg_msc']
            degree_msc_text = img_prosessing.img_text_degree_msc(degree_msc_card)
        else:
            degree_msc_text = ''
            #print(degree_text)
        if documents['deplomo']!='':
            deplomo_card=documents['deplomo']
            deplomo_text=img_prosessing.img_text_deplomo(deplomo_card)
            #print(deplomo_text)
        else:
            deplomo_text=''"""

        document_dict = {'name':record[0]['name'],'email':record[0]['email'],'aadhar_card': aadhar_text, 'twelth_marksheet': twelth_mark_text,'degree_bsc':documents['deg_bsc'],
                          'degree_msc':documents['deg_msc'],'degree_md':documents['deg_bd'],'community':community_text,
                          'photo_path':documents['photo'],'sign_path':documents['signature']}


        return document_dict,record
        #print("the number of documnets precent in collections {}".format( records.count_documents({})))
        #print(record[0]['SSLC']['institute'])
#document_dict,records_dict=fetch_mangidb_data.fetch_data()
#print(document_dict,records_dict)

    def insert_mangodb(name,mailid,valid=True):
        from pymongo import MongoClient
        client = MongoClient(
            'mongodb+srv://web-client:yjpMsZ7WgH2eueA@default.droi9.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority')
        db=client.get_database('stet')
        records=db.valid
        start=records.count_documents({})
        records_list=list(records.find())
        record_last=records_list[start-1]
        reg_no=(record_last['Reg_no'])+1

        print(reg_no)
        new_record={
            'valid':valid,
            'Reg_no':reg_no,
            'mailid':mailid,
            'name':name,
        }
        records.insert_one(new_record)
        print(records.count_documents({}))
        return reg_no

#print(fetch_mangidb_data.insert_mangodb('pavi','pavi@gmail.com'))
#pavi_aadhaar -https://i.postimg.cc/3Rpm45wz/in-gov-uidai-ADHAR-2549ca8f1a4fdfde9c2126572edad6e0.png
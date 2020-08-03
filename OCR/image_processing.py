import cv2
import pytesseract
import pdf2image as pdf
from PIL import Image
import requests
from io import BytesIO
import re

from pdf2image.exceptions import (
PDFInfoNotInstalledError,
PDFPageCountError,
PDFSyntaxError
)

pytesseract.pytesseract.tesseract_cmd = 'E:\\tesseract\\installed_file\\tesseract.exe'

class img_prosessing():
    #convert pdf to images_____________________________________________--__________________--
    def pdf_img(file_path,img_name):
        file_path = file_path

        images = pdf.convert_from_path(file_path, 500,
                                       poppler_path=r'E:\poppler\poppler-0.68.0_x86 (1)\poppler-0.68.0\bin')

        image_count=0
        image_path_list=[]
        for image in images:
            image_name = img_name + str(image_count) + ".jpeg"
            image.save(image_name, 'JPEG')
            image_pa='C:/Users/ninjaac/PycharmProjects/Image_to_text/venv/'
            image_path=image_pa+image_name
            image_path_list.append(image_path)
        return image_path_list
    def find_template(image_paths,template_path):
        image = cv2.imread(image_paths, 0)

        template=cv2.imread(template_path,0)

        w, h = template.shape[::-1]

        method='cv2.TM_CCOEFF_NORMED'
        method = eval(method)

        # Apply template Matching
        res = cv2.matchTemplate(image, template, method)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)

        #defien the top left for method
        top_left =max_loc
        bottom_right = (top_left[0] + w, top_left[1] + h)
        print(top_left,bottom_right)
        #rectangle(image,start_point,end_point,color,thickness)
        cv2.rectangle(image, top_left, bottom_right, (255,0,0), 2)
        #image resize to fix the screen
        res_s=cv2.resize(res,(600,600))
        cv2.imshow('image result',res_s)
        image_s=cv2.resize(image,(600,600))
        cv2.imshow('image',image_s)
        cv2.waitKey()


    def img_text_pan(img_path):
        #pyteseract location defenotion
        pytesseract.pytesseract.tesseract_cmd = 'E:\\tesseract\\installed_file\\tesseract.exe'
        response=requests.get(img_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file=open(text_file,'r')
        line_count_list=[9,10,11,12,]
        dic=dict()
        for line_count,line in enumerate(file):
            if line_count in line_count_list:
                a=line.split()
                dic[a[0]]=a[1:]
        return dic
    def img_to_text_aadhar(image_path):
        response=requests.get(image_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        #print(text)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file=open(text_file,'r')
        line_count_list=[0,1,2]
        dic=dict()
        for line_count,line in enumerate(file):
            #print(line_count,line)
            s=re.findall(r"[-+]?\d*\d+",line)
            if len(s)==3:
                dic['aadhar_no']=s
            if line_count==2 and line !='':
                a=line.split()
                dic['name']=a

        return dic
    def text_number(list):
        zum_dict = {'ZERO': 0,'ONE':1,'(ONE': 1, 'TWO': 2, 'THREE': 3, 'FOUR': 4, 'FIVE': 5, 'SIX': 6, 'SEVEN': 7, 'EIGHT': 8,
                    'NINE': 9}
        mark = ''
        for n in list:
            for text, value in zip(zum_dict, zum_dict.values()):
                if n == text:
                    mark += str(value)
        return mark #(int(mark) / 1200) * 100
    def img_to_text_tweth_mark(image_path):
        response=requests.get(image_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file=open(text_file,'r')
        line_count_list=[15,49,53,55]
        dic=dict()
        for line_count,line in enumerate(file):
            #print(line_count,line)
            if line_count==15:
                a=line.split()
                b=a[-3::-1]
                dic['name']=b[::-1]
                dic['dateOfExam']=a[-2:]
            if line_count==49:
                a=line.split()
                percentage=img_prosessing.text_number(a[6:])
                dic['twelth_mark'] = percentage
            if(line_count==53):
                a = line.split()
                dic['regno']=a[0]
                dic['medium']=a[1]
            if(line_count==55):
                dic['school_name']=line
        return dic
    def img_text_degree_bsc(image_path):
        response=requests.get(image_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        #print(text)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file=open(text_file,'r')
        line_count_list=[2,5,8,10,12]
        dic=dict()
        for line_count,line in enumerate(file):
            #print(line_count,line)
            if line_count==2:
                a=line.split()
                dic['name']=a
            if line_count==5:
                a=line.split()
                dic['degree']=a
            if line_count==8:
                a=line.split()
                dic['degree_name']=a
            if line_count==10:
                a=line.split()
                dic['grade']=a[-2]
            if line_count == 12:
                a = line.split()
                dic['year'] = a[-1]
        return dic
    def img_text_degree_msc(image_path):
        response=requests.get(image_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        #print(text)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file=open(text_file,'r')
        line_count_list=[8,11,13,15,16]
        dic=dict()
        for line_count,line in enumerate(file):
            #print(line_count,line)

            if line_count==8:
                a=line.split()
                dic['name']=a
            if line_count==11:
                a=line.split()
                dic['degree']=a
            if line_count == 13:
                a = line.split()
                dic['degree_name'] = a
            if line_count==15:
                a=line.split()
                dic['garde']=a[-2]
            if line_count==16:
                a=line.split()
                dic['year']=a[-1]

        return dic
    def image_text_deplomo(image_path):
        response=requests.get(image_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file=open(text_file,'r')
        line_count_list=[3,23,26,34,36]
        dic=dict()
        for line_count,line in enumerate(file):
            print(line_count,line)

            if line_count==3:
                a=line.split()
                dic['reg_no']=a[0]
            if line_count==23:
                a=line.split()
                dic['deplomo_name']=a
            if line_count==26:
                a=line.split()
                dic['name']=a[1:]
            if line_count==34:
                a=line.split()
                dic['class']=a[1:3]
        return dic
    def image_test_birth(image_path):
        response=requests.get(image_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file=open(text_file,'r')
        line_count_list=[36,38,]
        dic=dict()
        for line_count,line in enumerate(file):
            #print(line_count,line)

            if line_count==36:
                a=line.split()
                dic['name']=a[3:]
            if line_count==38:
                a=line.split()
                dic['dob']='11-Jan-2000'

        return dic
    def image_text_community(image_path):
        response = requests.get(image_path)
        img = Image.open(BytesIO(response.content))
        text = pytesseract.image_to_string(img)
        text_count = 1
        text_file = "text" + str(text_count) + ".txt"
        with open(text_file, 'w+') as f:
            f.writelines(text)
            text_count += 1
        file = open(text_file, 'r')
        line_count_list = []
        dic = dict()
        for line_count, line in enumerate(file):
            #print(line_count, line)
            if line_count==28:
                a=line.split()
                dic['caste']='SC'
        return dic



"""image_path= 'https://i.postimg.cc/TPZJkswn/Scan-2-Aug-2020-6.png'
aadar='https://i.postimg.cc/wjW1TsYv/aadhar0001-1.png'
tweth='https://i.postimg.cc/yYHKT9YL/in-nic-tn-dgecert-HSCER-1710243086-1.png'
community='https://i.postimg.cc/KYFMRyRq/dravid-biodata-15.png'
print(img_prosessing.img_to_text_tweth_mark(tweth))
#print(img_prosessing.image_text_community(community))
#print(img_prosessing.img_to_text_aadhar(aadar))"""

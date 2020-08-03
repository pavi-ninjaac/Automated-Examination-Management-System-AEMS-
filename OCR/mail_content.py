from pymongo import MongoClient
from fpdf import FPDF

class mail():
    def add_result_db(name,reg_noumber):
        client = MongoClient(
            'mongodb+srv://web-client:yjpMsZ7WgH2eueA@default.droi9.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority')
        db=client.get_database('stet')
        records=db.result
        new_record={
            'name':name,
            'regno':reg_noumber,
        }
        records.insert_one(new_record)

    def generate_hall(reg_no):
        exam_center='Sikkim Govertmetn College-Tadong'
        land_mark='Tadong'
        maplink='https://maps.app.goo.gl/zg3vL9J6xYc7Caxx8'
        return exam_center,land_mark,maplink
    def generate_mail(doc_name,reg_no,photo_path,sign_path):
        mail.add_result_db(doc_name,reg_no)
        exam_center,land_mark,maplink=mail.generate_hall(reg_no)
        name = doc_name
        reg_no = reg_no
        datetime = '22-08-2020'
        exam_center = exam_center
        land_mark = land_mark
        maplink = maplink
        msg_header = f"""ADMIT CARD
        STATE TEACHERS ELIGIBILITY TEST - 2020 EXAMINATION
        Selection Committee Directrate of Education, Sikkim
        E-CALL FOT THE STET EXAMINATION - 2020
        """
        msg_body = [["Name of the candidate", name],
                    ['Register Number', reg_no],
                    ["Exam Date/Reporting Time", datetime],
                    ["Exam Center", exam_center],
                    ["Land Mark ", land_mark],
                    ["Google Map link:", maplink]]
        msg_instruc=f"""
Note:
1) One another offline certification verification process to is there.
2) You will be notify with the Date, Time, Place of examination of the offline certification verification through mail.
3) Your examination roll number, Center name, Center google location link are present in the admit card.
4) If there is any issue with opening the admit card, please try again later.
5) The admit card hot copy must be present with you on the examination.
6) You will be present on time to the examination with your proof of identification, admit card.
ALL THE BEST FOR YOUR EXAMINATION 
"""
        msg_footer = f"""
        TO BE FILLED ON EXAMINATION
Candidate's sign                                                                               Invigilator's sign

        """
        pdf = FPDF('P', 'mm','A4')
        pdf.add_page()
        pdf.rect(x=5,y=5,w=(pdf.w)-10,h=(pdf.h)-10)
        pdf.rect(x=6, y=6, w=(pdf.w) - 12, h=(pdf.h) - 12)
        pdf.set_font('Times', size=12)
        epw = pdf.w - 2 * pdf.l_margin
        col_width = epw / 2
        th = (pdf.font_size) + 5
        pdf.image('sikkim_logo_2.jpg',w=40,h=30)
        for line in msg_header.split('\n'):
            pdf.cell(200, 10, txt=line, ln=1, align='C')


        pdf.image(photo_path,w=45,h=40)
        for row in msg_body:
            for col in row:
                pdf.cell(col_width, th, str(col), border=1) \

            pdf.ln(th)
        pdf.image(sign_path,w=40,h=45)
        for line in msg_footer.split('\n'):
            pdf.cell(200, 10, txt=line, ln=1, align='C')
        for line in msg_instruc.split('\n'):
            pdf.cell(200, 10, txt=line, ln=1)


        file_name='admit_card_'+str(doc_name)+'.pdf'
        pdf.output(file_name)
        return file_name


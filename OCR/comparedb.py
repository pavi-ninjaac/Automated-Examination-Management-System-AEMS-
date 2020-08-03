class comapre():
    def compare_db(document_features):
        from pymongo import MongoClient
        client = MongoClient(
            "mongodb+srv://web-client:yjpMsZ7WgH2eueA@default.droi9.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority")
        db = client.get_database('maindb')
        record1 = db.community
        record2 = db.aadhar_card
        record3 = db.twelth_marksheet
        record4 = db.degree_bsc
        record5 = db.degree_msc
        record6 = db.degree_bed

        Community = record1.find()
        aadhar = record2.find()
        twelth_mark = record3.find()
        Degree_bsc = record4.find()
        Degree_msc = record5.find()
        Degree_bed = record6.find()
        a = {}
        b = document_features
        # b= {'aadhar_card':{'aadhar_no': ['XXXX', 'XXXX', '6666'], 'name': 'DRAVID KUMAR'},'twelth_marksheet':{'twelth_mark': 86.0, 'name': 'Dravid Kumar'},'degree_bsc':{ 'Gradebsc': 'A', 'name': 'Dravid Kumar', 'bsc_id':5555656},'degree_msc':{ 'Grademsc': 'B',
        # 'name': 'Dravid Kumar', 'msc_id':44444},'degree_bed':{ 'Gradebed': 'A', 'name': 'Dravid Kumar', 'bed_id':5555656}, 'community':{'caste':'BC','cert_id':123}}

        for i in Community:
            a['Caste'] = i['caste']
            a['Cert_id'] = i['cert_id']
            a['Namecomm'] = i['name']

        for i in aadhar:
            a['Aadhar_no'] = int(i['aadhar_no'])
            a['Nameaadhar'] = i['name']

        for i in twelth_mark:
            a['Twelth_mark'] = float(i['percentage'])
            a['Name12'] = i['name']

        for i in Degree_bsc:
            a['Gradebsc'] = i['grade']
            a['Namebsc'] = i['name']
            a['bsc_id'] = i['bsc_id']

        for i in Degree_msc:
            a['Grademsc'] = i['grade']
            a['Namemsc'] = i['name']
            a['msc_id'] = i['msc_id']

        for i in Degree_bed:
            a['Gradebed'] = i['grade']
            a['Namebed'] = i['name']
            a['bed_id'] = i['bed_id']
        # print(a)
        n = b['aadhar_card']['name']
        Name_img = ''.join(n)
        aa = b['aadhar_card']['aadhar_no']
        aadhar_no_img = str(''.join(aa))
        caste_img = b['community']['caste']
        percent_img = b['twelth_marksheet']['twelth_mark']

        """grade_bsc_img = b['degree_bsc']['Gradebsc']
        grade_msc_img = b['degree_msc']['Grademsc']
        grade_bed_img = b['degree_bed']['Gradebed']
        bsc_id_img = b['degree_bsc']['bsc_id']
        msc_id_img = b['degree_msc']['msc_id']
        bed_id_img = b['degree_bed']['bed_id']"""

        def compare(x, y):
            if a['Nameaadhar'] == Name_img and str(a['Aadhar_no']) == aadhar_no_img:
                if a['Caste'] == caste_img and a['Cert_id'] == cert_id_img:
                    if a['Twelth_mark'] == percent_img:
                        """if a['Gradebsc'] == grade_bsc_img or a['Grademsc'] == grade_msc_img or a[
                            'Gradebed'] == grade_bed_img:
                            if a['bsc_id'] == bsc_id_img or a['msc_id'] == msc_id_img or a['bed_id'] == bed_id_img:"""
                        return True


                    else:
                        print('12 mark pblm')
                        return False
                else:
                    print('community pblm')
                    return False
            else:
                print('aadhar pblm')
                return False
        print(compare(a,b))
        return compare(a, b)
document_features={'aadhar_card': {'name': ['Dravid', 'Kumar'], 'aadhar_no': ['7912', '3425', '6689']}, 'twelth_marksheet': {'name': ['DRAVID', 'KUMAR', 'B'], 'dateOfExam': ['MAR', '2017'], 'twelth_mark': '1051', 'regno': '1710249006', 'medium': 'ENGLISH', 'school_name': 'PONNU MATRIC HR SEC SCHOOL DHARAPURAM TIRUPPUR\n'}, 'degree_bsc': '5555656', 'degree_msc': '', 'degree_md': '', 'community': {'caste': 'SC'}}

comapre.compare_db()







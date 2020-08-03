class eligibility():
    def eligibility_test(document_features,application_data):
        from pymongo import MongoClient
        client = MongoClient(
            "mongodb+srv://web-client:yjpMsZ7WgH2eueA@default.droi9.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority")
        db = client.get_database('maindb')

        record4 = db.degree_bsc
        record5 = db.degree_msc
        record6 = db.degree_bed

        Degree_bsc = record4.find()
        Degree_msc = record5.find()
        Degree_bed = record6.find()
        a={}
        for i in Degree_bsc:
            a['Gradebsc'] = i['grade']
            a['Namebsc'] = i['name']
            a['bsc_id'] = i['bsc_id']
        a=document_features
        b=application_data
        #    a = {'pan_card': {'Name': ['DRAVID', 'KUMAR'], 'Gender': ['MALE'], 'DOB': ['05/10/1999'], 'Verified': ['On', '10/06/2020', '20:44:33,']}, 'aadhar_card': {'aadhar_no': ['XXXX', 'XXXX', '6689']}, 'twelth_markSheet': {'percentage': 90.5, 'regno': '1710249006', 'medium': 'ENGLISH', 'school_name': 'PONNU MATRIC HR SEC SCHOOL DHARAPURAM TIRUPPUR\n'},'diploma_marksheet':{'percentage':00.0}, 'community':{'caste':'FC'}, 'degreeD.EI.ED':{'finalyrr':'null'},'degreedipD.EI.ED':{'finalyrr':'null'},'degreeB.Ed':{'finalyrr': 'null'},'degreeB.Ed_min':{'finalyrr': 'null'},'degreeDip_specialEdu':{'finalyrr':'null'},'degreeB.A':{'percentage':50.0}, 'degreeBSc':{'percentage':00}, 'degreeBA.Ed/B.SC.Ed':{'finalyrr':'null'}, 'degreeB.A/B.Sc.Ed':{'finalyrr':'appearing'}}
        # b = [{'application': 'both','name': 'DRAVID KUMAR', 'fatherName': 'Athinarayanan', 'motherName': 'Mariammal', 'sex': 'Male', 'nationality': 'Indian', 'mobileNumber': 9677068234.0, 'email': 'akrishnamoorthy007@gmail.com', 'permanentAddress': 'this is an address', 'aadhaarNo': 333333336689, 'voterId': 'KR89TQ672', 'motherTongue': 'Tamil', 'identificationMarks': 'Mole in back', 'maxQualification': 'B.E CSE', 'SSLC': {'institute': 'SRMHSS', 'percentage': 96}, 'HSC': {'institute': 'SRMHSS', 'percentage': 94}, 'college': {'degree': 'B.E', 'department': 'CSE', 'institute': 'UCE, Trichy', 'university': 'Anna University', 'percentage': 76}, 'documents': {'aadhaar': 'https://i.postimg.cc/3Rpm45wz/in-gov-uidai-ADHAR-2549ca8f1a4fdfde9c2126572edad6e0.png', 'voter': 'voter', 'SSLC': 'SSLC', 'HSC': 'https://i.postimg.cc/rFqxmH2Y/in-nic-tn-dgecert-HSCER-1710243086.png', 'deg': 'degree', 'photo': 'photo', 'signature': 'sign', 'pan': 'https://i.postimg.cc/vHyLnBfh/in-gov-pan-PANCR-GJEPD1150-D.png'}, '__v': 0}]
        n = a['pan_card']['Name']
        Name = ' '.join(n)
        aa = a['aadhar_card']['aadhar_no']
        aadhar_no = str(''.join(aa))[8:]

        community = a['community']['caste']
        twelthMark = a['twelth_markSheet']['percentage']
        diploma = a['diploma_marksheet']['percentage']
        """d_ei_ed = a['degreeD.EI.ED']['finalyrr']
        b_ed = a['degreeB.Ed']['finalyrr']
        dip_specialEdu = a['degreeDip_specialEdu']['finalyrr']
        b_a = a['degreeB.A']['percentage']
        b_sc = a['degreeBSc']['percentage']
        baEd_bscEd = a['degreeBA.Ed/B.SC.Ed']['finalyrr']
        ba_bscEd = a['degreeB.A/B.Sc.Ed']['finalyrr']
        dip_d_ei_ed = a['degreedipD.EI.ED']['finalyrr']
        b_ed_min = a['degreeB.Ed_min']['finalyrr']"""

        def compare(x, y):
            for i in b:
                name = i['name'].upper()
                aadhaarNo = str(i['aadhaarNo'])[8:]
                bool = True
                while (bool):
                    if Name == name:
                        # if DOB == dob:
                        if aadhar_no == aadhaarNo:
                            return True
                        else:
                            return False
                    else:
                        return False

        results = compare(a, b)

        # boolean = True
        def eligibility_primary(boolean):
            while (boolean):
                if community == 'FC' or community == 'BC':
                    if twelthMark >= 50.0 or diploma >= 50.0:
                        if d_ei_ed == 'passed' or b_ed == 'passed' or dip_specialEdu == 'passed' or a['Gradebsc'] == "A":
                            print('eligibile for primary teacher')
                            return True
                        else:
                            return False
                    else:
                        return False
                elif community == 'SC' or community == 'ST' or community == 'OBC(state)' or community == 'OBC(central)':
                    if twelthMark >= 45.0 or diploma >= 45.0:
                        if d_ei_ed == 'passed' or b_ed == 'passed' or dip_specialEdu == 'passed':
                            print('eligibile for primary teacher')
                            return True
                        else:
                            return False
            else:
                return False

        def eligibility_graduate(boolean):
            while (boolean):
                if community == 'FC' or community == 'BC':
                    if twelthMark >= 50.0 or diploma >= 50.0:
                        if d_ei_ed == 'passed' or baEd_bscEd == 'passed' or baEd_bscEd == 'appearing' or ba_bscEd == 'passed' or ba_bscEd == 'appearing':
                            print('eligibile for graduate teacher')
                            return True
                        else:
                            return False
                    elif b_a >= 50.0 or b_sc >= 50.0:
                        if dip_d_ei_ed == 'passed' or b_ed_min == 'passed':
                            print('eligibile for graduate teacher')
                            return True
                        else:
                            return False
                    else:
                        return False
                elif community == 'SC' or community == 'ST' or community == 'OBC(state)' or community == 'OBC(central)':
                    if twelthMark >= 45.0 or diploma >= 45.0:
                        if d_ei_ed == 'passed' or baEd_bscEd == 'passed' or ba_bscEd == 'passed':
                            print('eligibile for graduate teacher')
                            return True
                        else:
                            return False
                    elif b_a >= 50.0 or b_sc >= 50.0:
                        if dip_d_ei_ed == 'passed' or b_ed_min == 'passed':
                            print('eligibile for graduate teacher')
                            return True
                        else:
                            return False
                    else:
                        return False
                else:
                    return False

        def eligibility(l):
            for j in b:
                if j['application'] == 'primary':
                    return eligibility_primary(l)
                elif j['application'] == 'graduate':
                    return eligibility_graduate(l)
                else:
                    return eligibility_primary(l) or eligibility_graduate(l)

        def check(res):
            if res == True:
                return eligibility(res)
            else:
                return False
        print(check(results))
        return check(results)
document_features={'aadhar_card': {'name': ['Dravid', 'Kumar'], 'aadhar_no': ['7912', '3425', '6689']}, 'twelth_marksheet': {'name': ['DRAVID', 'KUMAR', 'B'], 'dateOfExam': ['MAR', '2017'], 'twelth_mark': '1051', 'regno': '1710249006', 'medium': 'ENGLISH', 'school_name': 'PONNU MATRIC HR SEC SCHOOL DHARAPURAM TIRUPPUR\n'}, 'degree_bsc': '5555656', 'degree_msc': '', 'degree_md': '', 'community': {'caste': 'SC'}}

application_feature=[{'name': 'Krishna Moorthy', 'fatherName': 'Athinarayanan', 'motherName': 'Mariammal', 'sex': 'Male', 'nationality': 'Indian', 'mobileNumber': 9677068234.0, 'email': 'akrishnamoorthy007@gmail.com', 'permanentAddress': 'this is an address', 'aadhaarNo': 5432198765012.0, 'voterId': 'KR89TQ672', 'motherTongue': 'Tamil', 'identificationMarks': 'Mole in back', 'maxQualification': 'B.E CSE', 'SSLC': {'institute': 'SRMHSS', 'percentage': 96}, 'HSC': {'institute': 'SRMHSS', 'percentage': 94}, 'college': {'degree': 'B.E', 'department': 'CSE', 'institute': 'UCE, Trichy', 'university': 'Anna University', 'percentage': 76}, 'documents': {'aadhaar': 'https://i.postimg.cc/wjW1TsYv/aadhar0001-1.png', 'HSC': 'https://i.postimg.cc/yYHKT9YL/in-nic-tn-dgecert-HSCER-1710243086-1.png', 'deg_bsc': '5555656', 'deg_msc': '', 'deg_bd': '', 'photo': 'photo', 'signature': 'sign', 'Income': 'https://i.postimg.cc/FKxvVqkN/Doc-08-02-08-1.png', 'nativity': 'https://i.postimg.cc/8c6s0swT/dravid-biodata-3.png', 'birth_cer': 'https://i.postimg.cc/wj8d8Hh9/Doc-08-02-08-3.png', 'community': 'https://i.postimg.cc/KYFMRyRq/dravid-biodata-15.png'}, '__v': 0}]

eligibility.eligibility_test(document_features,application_feature)










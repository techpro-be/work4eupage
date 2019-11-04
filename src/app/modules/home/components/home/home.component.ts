import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { MatSnackBar } from '@angular/material';
import { Resume, Education, Experience, Skill, Language } from '../../resume';
import { ScriptService } from '../../services/script.service';
import { AngularFirestore } from '@angular/fire/firestore';
declare let pdfMake: any ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private scriptService: ScriptService,
              private homeService: HomeService,
              private db: AngularFirestore,
              private snackBar: MatSnackBar) {

    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
      this.resume.experiences.push(new Experience());
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      this.resume.educations = [];
      this.resume.educations.push(new Education());
    }
    if (!this.resume.languages || this.resume.languages.length === 0) {
      this.resume.languages = [];
      this.resume.languages.push(new Language());
    }
    if (!this.resume.itKnowledge || this.resume.itKnowledge.length === 0) {
      this.resume.itKnowledge = [];
      this.resume.itKnowledge.push(new Skill());
    }

    console.log('Loading External Scripts');
    this.scriptService.load('pdfMake', 'vfsFonts');
  }

//   genders: Gender[] = [
//     {value: 'male'},
//     {value: 'female'}
//   ];

//   profiles: Profile[] = [
//     {value: 'web design & development'},
//     {value: 'application design & development'},
//     {value: 'systems & infrastructure'},
//     {value: 'security'},
//   ];

//   jobs: Job[] = [
//     {name: 'Developer / Analyst Programmer'},
//     {name: 'Content Creator'},
//     {name: 'Graphics / Web Designer'},
//     {name: 'UX / UI Specialist'},
//     {name: 'SEO / SEA Specialist'},
//     {name: 'Digital Marketer'},
//     {name: 'Business Analyst'},
//     {name: 'Functional Analyst'},
//     {name: 'Process Analyst'},
//     {name: 'Technical Analyst'},
//     {name: 'Application / Solution Architect'},
//     {name: 'Enterprise Architect'},
//     {name: 'Infrastructure Architect'},
//     {name: 'SOA Specialist'},
//     {name: 'Quality Specialist'},
//     {name: 'Test / Validation Engineer'},
//     {name: 'Test / Validation Manager'},
//     {name: 'Technical Writer'},
//     {name: 'Big Data Expert'},
//     {name: 'Database Developer'},
//     {name: 'Database Administrator'},
//     {name: 'Helpdesk / Support'},
//     {name: 'Operator'},
//     {name: 'Field / Maintenance Engineer'},
//     {name: 'Incident & Problem Manager'},
//     {name: 'System Engineer / Administrator'},
//     {name: 'DevOps Engineer'},
//     {name: 'Network / Telecom Engineer'},
//     {name: 'Security Engineer'},
//     {name: 'Software Administrator'},
//     {name: 'Project Manager / Coordinator'},
//     {name: 'Quality Specialist'},
//     {name: 'Test / Validation Engineer'},
//     {name: 'Test / Validation Manager'}
//   ];

//   systems = [
// 'Access',
// 'Adabas',
// 'Antispam',
// 'Antivirus',
// 'Apache',
// 'BizTalk',
// 'Citrix',
// 'Cloud',
// 'DB2',
// 'Desktop / PC',
// 'Embedded / Real-Time',
// 'Hardware',
// 'IIS',
// 'Informix',
// 'iSeries (AS/400)',
// 'Linux',
// 'Lotus Notes Domino',
// 'Mac OS',
// 'Mainframe',
// 'Middleware',
// 'CICS',
// 'MQ Series',
// 'Tibco',
// 'Tuxedo',
// 'MongoDB',
// 'MS Exchange Server',
// 'MS Office',
// 'My SQL',
// 'Network',
// 'Avaya',
// 'Cisco',
// 'DNS',
// 'Firewall',
// 'SAN',
// 'SOAP',
// 'TCP/IP',
// 'VPN',
// 'WAN / LAN',
// 'Novell',
// 'Oracle',
// 'POS terminal',
// 'PostgreSQL',
// 'Remedy',
// 'Security',
// 'SharePoint',
// 'SQL Server',
// 'Storage',
// 'Sybase',
// 'Telecom',
// '3G/4G',
// 'GSM/GPRS/EDGE',
// 'Radio',
// 'VoIP',
// 'Tivoli',
// 'Unix',
// 'HP-UX',
// 'Solaris',
// 'Version Control System (VCS)',
// 'CVS',
// 'GIT',
// 'Mercurial',
// 'Microsoft TFS',
// 'SVN',
// 'VMware',
// 'WebLogic',
// 'WebSphere AppServer',
// 'Windows',
// 'Windows Server',
// 'Z/OS – OS/400',
//   ];

//   businesses = [
//     'Business Intelligence',
//     'Business Objects',
//     'Cognos',
//     'Microsoft BI',
//     'MicroStrategy',
//     'Oracle BI',
//     'SAS',
//     'CMS',
//     'Alfresco',
//     'Drupal',
//     'Joomla',
//     'Liferay',
//     'Magento',
//     'Wordpress',
//     'CRM',
//     'Documentum',
//     'ERP',
//     'ETL / Datawarehouse',
//     'BODI',
//     'DataStage',
//     'Informatica PowerCenter',
//     'Oracle Warehouse Builder',
//     'SSIS',
//     'JD Edwards',
//     'MS Dynamics',
//     'Axapta',
//     'Navision',
//     'Murex',
//     'Oracle Application Server',
//     'Oracle E-Business Suite',
//     'PeopleSoft',
//     'Salesforce',
//     'SAP',
//     'BC',
//     'BW / BI',
//     'FI/CO',
//     'HCP',
//     'IS-U',
//     'PM',
//     'PP',
//     'PS',
//     'QM',
//     'SD/MM',
//     'WM',
//     'XI/Netweaver',
//     'Siebel',
//     'Swift',
//   ];

//   languages = [
//   '.NET',
//   'ASP.NET',
//   'C#',
//   'VB.NET',
//   'Abap',
//   'Access',
//   'ASP',
//   'C / C++',
//   'Cobol',
//   'Cocoa',
//   'ColdFusion',
//   'CSS / CSS3',
//   'Delphi',
//   'Flash',
//   'Flex / Air',
//   'HTML/HTML5',
//   'XHTML',
//   'IDE',
//   'Eclipse',
//   'IntelliJ',
//   'Netbeans',
//   'Visual Studio',
//   'Zend Studio',
//   'Java / J2EE',
//   'EJB',
//   'Grails',
//   'GWT',
//   'J2ME',
//   'JBoss (WildFly) / Tomcat',
//   'JPA / Hibernate',
//   'JSF',
//   '.NET',
//   'ASP.NET',
//  ' C#',
//   'VB.NET',
//   'Abap',
//  ' JSP / Servlets',
//   'JUnit',
//   'Maven',
//   'Spring',
//   'Struts',
//   'JavaScript',
//   'AngularJS',
//   'JQuery',
//   'Node.js',
//   'ReactJS',
//   'Lotus Notes',
//   'PhoneGap',
//   'MS SQL',
//   'MySQL',
//   'Natural',
//  ' Objective C',
//   'Oracle',
//   'Forms / Reports',
//   'PL/SQL',
//   'Perl',
//   'Photoshop',
//   'PHP',
//   'Symfony',
//   'YII',
//   'Zend',
//   'PL1',
//   'PowerBuilder',
//   'Python',
//   'RPG',
//   'Ruby',
//   'SAS',
//   'Shell',
//   'SQL',
//   'UML',
//   'VBA',
//   'Visual Basic',
//   'WinDev / WebDev',
//   'XML / XSL / XSLT',
//   ];


//   constructor(
//     private homeService: HomeService,
//     private snackBar: MatSnackBar
//     ) {}

//   cvForm: FormGroup;
//   isLoading: boolean;

//   ngOnInit() {

//     this.cvForm = new FormGroup(
//       {
//         credentials: new FormGroup({

//           firstName: new FormControl('', {
//             validators: [Validators.required]
//           }),
//           lastName: new FormControl('', {
//             validators: [Validators.required]
//           }),
//           age: new FormControl('', {
//             validators: [Validators.required, Validators.minLength(18)]
//           }),
//           phone: new FormControl('', {
//             validators: [Validators.required]
//           }),
//           email: new FormControl('', {
//             validators: [Validators.required, Validators.email]
//           }),
//           gender: new FormControl('', {
//             validators: [Validators.required]
//           }),
//         }),
//           workEksperience: new FormGroup({

//             position: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             workstartDate: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             workendDate: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             companyName: new FormControl('', {
//               validators: [Validators.required]
//             }),
//           }),
//           education: new FormGroup({

//             educationTitle: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             educationStartDate: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             educationEndDate: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             universityName: new FormControl('', {
//               validators: [Validators.required]
//             }),

//           }),
//           itKnowledge: new FormGroup({
//             programminglanguage: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             business: new FormControl('', {
//               validators: [Validators.required]
//             }),
//             system: new FormControl('', {
//               validators: [Validators.required]
//             }),
//           }),
//           personalBackground: new FormControl('', {
//             validators: [Validators.required]
//           }),

//       });
//   }

  submitForm() {
      const data = this.resume;
      this.homeService.createCv(data)
      .then(
        resp => {
          this.snackBar.open('Your CV has been submitted successfully ', null, {
            duration: 3000
          });
          console.log('Data from the new method', data);
          this.resume = new Resume();
        });
      // .catch(error => {
      //   this.isLoading = false;
      //   this.snackBar.open(error.message, null, {
      //     duration: 3000
      //   });
      // });

  }

//   resetresumeForm(resumeForm: NgForm) {
//     resumeForm.resetForm();
//  }

resume = new Resume();

  degrees = ['Associate degree', 'Bachelor\'s degree', 'Master\'s degree', 'Doctoral degree'];

  ngOnInit() {}

  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }
  addLanguage() {
    this.resume.languages.push(new Language());
  }
  additKnowledge() {
    this.resume.itKnowledge.push(new Skill());
  }



  generatePdf(action = 'open') {
    console.log(pdfMake);
    const documentDefinition = this.getDocumentDefinition();
    console.log('data', documentDefinition);

    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;

      default: pdfMake.createPdf(documentDefinition).open(); break;
    }

  }

  resetForm() {
    this.resume = new Resume();
  }



  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: 'TechSheet',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [
              {
                text: this.resume.name,
                style: 'name'
              }
            ],
            [
              this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Personal background',
          style: 'header'
        },
        {
          text: 'Work Experience',
          style: 'header'
        },
        this.getExperienceObject(this.resume.experiences),
        {
          text: 'Education',
          style: 'header'
        },
        this.getEducationObject(this.resume.educations),
        {
          text: 'IT Knowledge',
          style: 'header'
        },

        {
          columns : [
            {
              ul : [
                ...this.resume.itKnowledge.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.itKnowledge.filter((value, index) => index % 3 === 1).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.itKnowledge.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ]
        },
        {
          columns : [
              // {
              // text: `(${this.resume.name})`,
              // alignment: 'right',
              // }
          ]
        }
      ],
      info: {
        title: this.resume.name + '_CV',
        author: this.resume.name,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 20, 0, 10]
            // decoration: 'underline'
          },
          name: {
            fontSize: 16,
            bold: true
          },
          position: {
            fontSize: 14,
            bold: true,
            italics: true
          },
          sign: {
            margin: [0, 50, 0, 10],
            alignment: 'right',
            italics: true
          },
          tableHeader: {
            bold: true,
          }
        }
    };
  }

  getExperienceObject(experiences: Experience[]) {

    const exs = [];

    experiences.forEach(experience => {
      exs.push(
        [{
          columns: [
            [{
              text: experience.position,
              style: 'position'
            },
            {
              text: experience.employer,
            },
            {
              text: experience.jobDescription,
            }],
            {
              text: 'Experience : ' + experience.experience + ' Months',
              alignment: 'right'
            }
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEducationObject(educations: Education[]) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Degree',
            style: 'tableHeader'
          },
          {
            text: 'University name',
            style: 'tableHeader'
          },
          {
            text: 'Start year',
            style: 'tableHeader'
          },
          {
            text: 'End year',
            style: 'tableHeader'
          },
          ],
          ...educations.map(ed => {
            return [ed.degree, ed.college, ed.passingYear, ed.startingYear];
          })
        ]
      }
    };
  }

  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }

  fileChanged(e) {
    const file = e.target.files[0];
    this.getBase64(file);
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }


}

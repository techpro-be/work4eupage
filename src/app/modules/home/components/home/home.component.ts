import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Resume, Education, Experience, Language, itKnowledge } from '../../resume';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
              private afs: AngularFirestore,
              private snackBar: MatSnackBar) {

                this.resumeCollection = afs.collection<Resume>('cvForm');
                this.cvForms = this.resumeCollection.valueChanges();
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
      this.resume.itKnowledge.push(new itKnowledge());
    }
  }

  private resumeCollection: AngularFirestoreCollection<Resume>;
  cvForms: Observable<Resume[]>;


  positions = [
    'Application design & Development',
    'Systems & Infrastructure',
    'Security',
    'Web design & Development',
  ];

  levels = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert'
  ];

  languageLevels = [
    'Elementary proficiency',
    'Limited working proficiency',
    'Professional working proficiency',
    'Full professional proficiency',
    'Native or bilingual proficiency',
    ];

  degrees = [
    'Associate degree',
     'Bachelor\'s degree',
     'Master\'s degree',
     'Doctoral degree'
    ];

    spokenLanguages = [
      'Albanian',
      'Bosnian',
      'Bulgarian',
      'Chinese',
      'Croatian',
      'Dutch',
      'English',
      'French',
      'Flemish ',
      'German',
      'Greek',
      'Italian',
      'Macedonian',
      'Montenegrin',
      'Romanian',
      'Russian',
      'Spanish',
      'Serbian',
      'Turkish',
    ];

  resume = new Resume();


  languages = [
  'Abap',
  'ASP.NET',
  'Access',
  'ASP',
  'Alfresco',
  'AngularJS',
  'Abap',
  'Adabas',
  'Antispam',
  'Antivirus',
  'Apache',
  'BizTalk',
  'C#',
  'C / C++',
  'Cobol',
  'CVS',
  'Cocoa',
  'ColdFusion',
  'Citrix',
  'Cloud',
  'CSS / CSS3',
  'Documentum',
  'DB2',
  'Desktop / PC',
  'DataStage',
  'Delphi',
  'Drupal',
  'Flash',
  'ERP',
  'Embedded / Real-Time',
  'Eclipse',
  'ETL / Datawarehouse',
  'Forms / Reports',
  'Flex / Air',
  'Firewall',
  'Grails',
  'GIT',
  'GWT',
  'HTML/HTML5',
  'IDE',
  'IntelliJ',
  'J2ME',
  'JBoss (WildFly) / Tomcat',
  'JPA / Hibernate',
  'JSF',
  'JavaScript',
  'JQuery',
  'Netbeans',
  'Visual Studio',
  'Zend Studio',
  'Java / J2EE',
  'Maven',
'Mercurial',
'Microsoft TFS',
'MySQL',
'MS SQL',
'Microsoft BI',
  'MicroStrategy',
'Node.js',

  'EJB',
  '.NET',
  'VB.NET',
 ' JSP / Servlets',
  'JUnit',

  'Spring',
  'Struts',

  'ReactJS',
  'Lotus Notes',
  'PhoneGap',

  'Natural',
 ' Objective C',
  'Oracle',

  'PL/SQL',
  'Perl',
  'Photoshop',
  'PHP',
  'Symfony',
  'YII',
  'Zend',
  'PL1',
  'PowerBuilder',
  'Python',
  'RPG',
  'Ruby',
  'SAS',
  'Shell',
  'SQL',
  'UML',
  'VBA',
  'Visual Basic',
  'WinDev / WebDev',
  'XML / XSL / XSLT',
  'Business Intelligence',
  'Business Objects',
  'Cognos',

    'Oracle BI',
    'Joomla',
    'Liferay',
    'Magento',
    'Wordpress',
    'CRM',
    'Informatica PowerCenter',
    'Oracle Warehouse Builder',
    'SSIS',
    'JD Edwards',
    'MS Dynamics',
    'Axapta',
    'Navision',
    'Murex',
    '.NET',
    'Oracle Application Server',
    'Oracle E-Business Suite',
    'PeopleSoft',
    'Salesforce',
    'SAP',
    'XI/Netweaver',
    'Siebel',
    'Swift',
'Hardware',
'IIS',
'Informix',
'iSeries (AS/400)',
'Linux',
'Lotus Notes Domino',
'Mac OS',
'Mainframe',
'Middleware',
'CICS',
'MQ Series',
'Tibco',
'Tuxedo',
'MongoDB',
'MS Exchange Server',
'MS Office',
'My SQL',
'Network',
'Avaya',
'Cisco',
'DNS',

'SAN',
'SOAP',
'TCP/IP',
'VPN',
'WAN / LAN',
'Novell',
'Oracle',
'POS terminal',
'PostgreSQL',
'Remedy',
'Security',
'SharePoint',
'SQL Server',
'Storage',
'Sybase',
'Telecom',
'3G/4G',
'GSM/GPRS/EDGE',
'Radio',

'Tivoli',
'Unix',
'HP-UX',
'Solaris',


'VoIP',
'VMware',
'XHTML',
'Version Control System (VCS)',
'WebLogic',
'WebSphere AppServer',
'Windows',
'Windows Server',
];

  ngOnInit() {}


  submitForm() {
    const param = JSON.parse(JSON.stringify(this.resume));
    this.resumeCollection
    .add(param)
    .then( resp => {
        this.snackBar.open('Your CV has been submitted successfully ', null, {
            duration: 3000
          });
        this.resume = new Resume();
        });
  }



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
    this.resume.itKnowledge.push(new itKnowledge());
  }


  resetForm() {
    this.resume = new Resume();
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

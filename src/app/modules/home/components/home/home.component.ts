import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { MatSnackBar } from '@angular/material';

export interface Gender {
    value: string;
    viewValue: string;
  }
export interface Profile {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  profiles: Profile[] = [
    {value: 'web design development', viewValue: 'Web Design & Development'},
    {value: 'app design development', viewValue: 'Application Design & Development'},
    {value: 'systems infrastructure', viewValue: 'Systems  & Infrastructure'},
    {value: 'security', viewValue: 'Security'},
  ];

  jobList: string[] = [
    'Developer / Analyst Programmer',
    'Content Creator',
    'Graphics / Web Designer',
    'UX / UI Specialist',
    'SEO / SEA Specialist',
    'Digital Marketer',
    'Business Analyst',
    'Functional Analyst',
    'Process Analyst',
    'Technical Analyst',
    'Application / Solution Architect',
    'Enterprise Architect',
    'Infrastructure Architect',
    'SOA Specialist',
    'Quality Specialist',
    'Test / Validation Engineer',
    'Test / Validation Manager',
    'Technical Writer',
    'Big Data Expert',
    'Database Developer',
    'Database Administrator',
    'Helpdesk / Support',
    'Operator',
    'Field / Maintenance Engineer',
    'Incident & Problem Manager',
    'System Engineer / Administrator',
    'DevOps Engineer',
    'Network / Telecom Engineer',
    'Security Engineer',
    'Software Administrator',
    'Project Manager / Coordinator',
    'Quality Specialist',
    'Test / Validation Engineer',
    'Test / Validation Manager'
  ];

  systemList: string[] = [
'Access',
'Adabas',
'Antispam',
'Antivirus',
'Apache',
'BizTalk',
'Citrix',
'Cloud',
'DB2',
'Desktop / PC',
'Embedded / Real-Time',
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
'Firewall',
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
'VoIP',
'Tivoli',
'Unix',
'HP-UX',
'Solaris',
'Version Control System (VCS)',
'CVS',
'GIT',
'Mercurial',
'Microsoft TFS',
'SVN',
'VMware',
'WebLogic',
'WebSphere AppServer',
'Windows',
'Windows Server',
'Z/OS – OS/400',
  ];

  businessList: string[] = [
    'Business Intelligence',
    'Business Objects',
    'Cognos',
    'Microsoft BI',
    'MicroStrategy',
    'Oracle BI',
    'SAS',
    'CMS',
    'Alfresco',
    'Drupal',
    'Joomla',
    'Liferay',
    'Magento',
    'Wordpress',
    'CRM',
    'Documentum',
    'ERP',
    'ETL / Datawarehouse',
    'BODI',
    'DataStage',
    'Informatica PowerCenter',
    'Oracle Warehouse Builder',
    'SSIS',
    'JD Edwards',
    'MS Dynamics',
    'Axapta',
    'Navision',
    'Murex',
    'Oracle Application Server',
    'Oracle E-Business Suite',
    'PeopleSoft',
    'Salesforce',
    'SAP',
    'BC',
    'BW / BI',
    'FI/CO',
    'HCP',
    'IS-U',
    'PM',
    'PP',
    'PS',
    'QM',
    'SD/MM',
    'WM',
    'XI/Netweaver',
    'Siebel',
    'Swift',
  ];

  languageList: string[] = [
  '.NET',
  'ASP.NET',
  'C#',
  'VB.NET',
  'Abap',
  'Access',
  'ASP',
  'C / C++',
  'Cobol',
  'Cocoa',
  'ColdFusion',
  'CSS / CSS3',
  'Delphi',
  'Flash',
  'Flex / Air',
  'HTML/HTML5',
  'XHTML',
  'IDE',
  'Eclipse',
  'IntelliJ',
  'Netbeans',
  'Visual Studio',
  'Zend Studio',
  'Java / J2EE',
  'EJB',
  'Grails',
  'GWT',
  'J2ME',
  'JBoss (WildFly) / Tomcat',
  'JPA / Hibernate',
  'JSF',
  '.NET',
  'ASP.NET',
 ' C#',
  'VB.NET',
  'Abap',
 ' JSP / Servlets',
  'JUnit',
  'Maven',
  'Spring',
  'Struts',
  'JavaScript',
  'AngularJS',
  'JQuery',
  'Node.js',
  'ReactJS',
  'Lotus Notes',
  'PhoneGap',
  'MS SQL',
  'MySQL',
  'Natural',
 ' Objective C',
  'Oracle',
  'Forms / Reports',
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
  ];
  constructor(
    private homeService: HomeService,
    private snackBar: MatSnackBar
    ) {}

  cvForm: FormGroup;
  isLoading: boolean;

  ngOnInit() {
    this.cvForm = new FormGroup(
      {
        firstName: new FormControl('', {
          validators: [Validators.required]
        }),
        lastName: new FormControl('', {
          validators: [Validators.required]
        }),
        age: new FormControl('', {
          validators: [Validators.required, Validators.minLength(18)]
        }),
        phone: new FormControl('', {
          validators: [Validators.required]
        }),
        email: new FormControl('', {
          validators: [Validators.required, Validators.email]
        }),
        gender: new FormControl('', {
          validators: [Validators.required]
        }),
        profiles: new FormControl('', {
          validators: [Validators.required]
        }),
        jobs: new FormControl('', {
          validators: [Validators.required]
        }),
        languages: new FormControl('', {
          validators: [Validators.required]
        }),
        systems: new FormControl('', {
          validators: [Validators.required]
        }),
        businesses: new FormControl('', {
          validators: [Validators.required]
        }),
        message: new FormControl('', {
          validators: [Validators.required]
        }),
      });


  }

  onSubmit() {
    if (this.cvForm.valid) {
      this.isLoading = true;
      const data = this.cvForm.value;
      this.homeService.createCv(data)
      .then(
        resp => {
          this.snackBar.open('Your CV has been submitted successfully ', null, {
            duration: 3000
          });
          this.isLoading = false;
          this.cvForm.reset();
          console.log('data', data);

        })
      .catch(error => {
        this.isLoading = false;
        this.snackBar.open(error.message, null, {
          duration: 3000
        });
      });
  } else {
    this.snackBar.open('Please fill all the required fields', null, {
      duration: 3000
    });
  }
  }
}



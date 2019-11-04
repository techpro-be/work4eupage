export class Resume {
    profilePic: string;
    // cv: string;
    name: string;
    surname: string;
    address: string;
    phone: number;
    email: string;
    linkedinAcc: string;
    personalBackground: string;
    experiences: Experience[] = [];
    educations: Education[] = [];
    languages: Language[] = [];
    itKnowledge: Skill[] = [];

    constructor() {
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.languages.push(new Language());
        this.itKnowledge.push(new Skill());
    }
}

export class Experience {
    employer: string;
    position: string;
    jobDescription: string;
    startDate: string;
    experience: number;
}

export class Education {
    degree: string;
    college: string;
    passingYear: string;
    startingYear: number;
}

export class Skill {
    value: string;
}

export class Language {
  value: string;
}

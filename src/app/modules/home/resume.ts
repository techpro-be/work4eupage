export class Resume {
    name: string;
    surname: string;
    address: string;
    phone: number;
    email: string;
    personalBackground: string;
    experiences: Experience[] = [];
    educations: Education[] = [];
    languages: Language[] = [];
    itKnowledge: itKnowledge[] = [];
    profilePic: string;
    position: string;

    constructor() {
        this.experiences.push(new Experience());
        this.educations.push(new Education());
        this.languages.push(new Language());
        this.itKnowledge.push(new itKnowledge());
    }
}

export class Experience {
    employer: string;
    position: string;
    jobDescription: string;
    startDate: string;
    endDate: string;
}

export class itKnowledge {
  itSkill: string;
  level: string;
}

export class Education {
    degree: string;
    college: string;
    passingYear: string;
    startingYear: number;
}

// export class Skill {
//     value: string;
// }

export class Language {
  languageName: string;
  languageLevel: string;
}

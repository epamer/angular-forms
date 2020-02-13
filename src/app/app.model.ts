export interface Author {
    id: number;
    name: string;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: number[];
    coverImg?: string;
}

export class Course implements Course {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public creationDate: string,
        public duration: number,
        public authors: number[]
    ) {}

    static getInitialState() {
        return new this(null, null, null, null, null, []);
    }
}

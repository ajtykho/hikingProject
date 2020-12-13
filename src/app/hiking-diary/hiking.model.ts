export class Hike {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public imageUrl: string,
        public children: Hike[]
    ) { }
}
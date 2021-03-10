export interface RepoNode {
    id: number;
    name: string;
    createdAt: Date;
    owner:{
        login: string;
    };
}
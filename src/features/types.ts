export interface RepoNode {
    id: number;
    name: string;
    createdAt: Date;
    isPrivate: Boolean;
    owner: {
    login: string;
    }
    }
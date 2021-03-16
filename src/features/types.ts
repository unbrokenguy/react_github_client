export interface RepoNode {
    id: number;
    name: string;
    createdAt: Date;
    isPrivate: Boolean;
    owner: {
        login: string;
    }
};

export interface UserNode {
    id: number;
    name: string;
    login: string;
};

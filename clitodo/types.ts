export type TTodoObject =  {
    in_progress : Record<string, TTodo>,
    done: Record<string, TTodo>;
    general:Record<string,TTodo>
}
export type TTodoType = 'in_progress' | 'done' | 'general'


export type TTodo= {
id: string;
createdAt: number;
content: string;
isInProgress: boolean;
isCompleted: boolean;
completedAt: number | null;
}
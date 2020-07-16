export interface IUserInput {
    search: string | null,
    location: string | null,
    fullTime: boolean
}

export interface IResult {
    id: string,
    type: 'Full Time' | 'Part Time',
    url: string,
    created_at: string,
    company: string,
    company_url: string,
    location: string,
    title: string,
    description: string,
    how_to_apply: string,
    company_logo: string
}
export interface repositorio {

    name: string,
    full_name: string,
    html_url: string,
    description: string,
    languages_url: string,
    homepage: string,
    owner: {
        login: string,
        avatar_url: string,
        html_url: string
    },
    topics: string[],

}

export interface GitHubSearchResponse  {
    total_count: number,
    incomplete_results: boolean,
    items: repositorio[];
    
}

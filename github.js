class Github {
  constructor() {
    this.client_id = config.CLIENT_ID;
    this.client_secret = config.CLIENT_SECRET;
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const userRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await userProfile.json();
    const repos = await userRepos.json();
    return {
      profile,
      repos
    }
  }
}

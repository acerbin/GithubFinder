class Github {
  constructor() {
    this.client_id = '276b2ec8e38cc638b990';
    this.client_secret = '37d4a23d43b9d7d4e829f5391c7fe3dff7cc62b1';
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

class UI {

  constructor () {
    this.profile = document.getElementById('profile');
  }

  showProfile (user) {
    this.profile.innerHTML = `
    <div class="card mt-2 animated bounceInLeft">
      <img src="${user.avatar_url}"/ class="card-img-top">
      <div class="card-body">
      <h3 class="card-title">${user.name} / ${user.login}</h3>
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">Ver perfil</a>
      <span class="badge badge-success">Seguidores: ${user.followers}</span>
      <span class="badge badge-primary">Seguidos: ${user.following}</span>
      <span class="badge badge-warning">Compañía: ${user.company}</span>
      <span class="badge badge-info d-block">Blog: ${user.blog}</span>
      </div>
    </div>
    `;
    this.clearMessage();
  }

  showRepositories (repositories) {
    console.log(repositories)
    let template = '';
    repositories.forEach(repo => {
      template += `
        <div class="card card-body mt-2 animated bounceInUp">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Language: ${repo.language}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById('repositories').innerHTML = template;
  }

  // Desde la interfaz lanza un mensaje cuando ocurre un evento tras utilizar el buscador ej: no existe el usuario o cuando ha sido encontrado
  showMessasge (message, cssClass) {
    this.clearMessage();
    this.clearProfile();

    const div = document.createElement('div');
    div.className = cssClass;
    div.appendChild(document.createTextNode(message));
    const content = document.querySelector('.row');
    const profile = document.querySelector('#profile');
    content.insertBefore(div, profile);
  }

  clearMessage () {
    const alertFound = document.querySelector('.alert');
    if (alertFound) {
      alertFound.remove();
    }
  }

  clearProfile () {
    const profileFound = document.getElementById('profile');
    const repositoriesFound = document.getElementById('repositories');
    if (profileFound) {
      profileFound.innerHTML = "";
      repositoriesFound.innerHTML = "";
    }
  }
}
module.exports = UI;

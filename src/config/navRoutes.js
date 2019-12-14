/* eslint-disable class-methods-use-this */
class navBarRoutes {
  constructor(user) {
    this.user = user;
  }

  getNavLoggedOut() {
    return [
      { name: 'Home', url: '/EBClient/' },
      { name: 'Register', url: '/EBClient/Register' },
      { name: 'Login', url: '/EBClient/Login' },
    ];
  }

  getNavLoggedInUser(logout, path) {
    return [
      { name: 'Home', url: '/EBClient/' },
      {
        name: 'Log Out',
        url: '/EBClient/',
        action: () => {
          logout();
        },
      },
      {
        name: 'My Panel',
        url: `/EBClient/${path}/${this.user}`,
      },
    ];
  }

  getNavigation(logout = () => {}, path = 'UserPanel') {
    if (this.user) {
      return this.getNavLoggedInUser(logout, path);
    }

    return this.getNavLoggedOut();
  }
}

export default navBarRoutes;

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

  getNavLoggedInUser(logout) {
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
        name: 'My Account',
        url: `/EBClient/User/${this.user.id}`,
      },
    ];
  }

  getNavigation(logout = () => {}) {
    if (this.user) {
      return this.getNavLoggedInUser(logout);
    }

    return this.getNavLoggedOut();
  }
}

export default navBarRoutes;

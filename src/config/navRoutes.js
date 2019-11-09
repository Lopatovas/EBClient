const navBarRoutes = {
  SIGNED_IN: [
    { name: 'Home', url: '/' },
    {
      name: 'Log Out',
      url: '/',
      action: (e) => {
        e.preventDefault();
        localStorage.clear();
        console.log('logging out');
      },
    },
  ],
  DEFAULT: [
    { name: 'Home', url: '/' },
    { name: 'Register', url: '/Register' },
    { name: 'Login', url: '/Login' },
  ],
};

export default navBarRoutes;

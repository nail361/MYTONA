export const getInitData = async () => {
  try {
    const isLogin = localStorage.getItem('login');
    return isLogin;
  } catch (error) {
    console.log(error);
  }
};

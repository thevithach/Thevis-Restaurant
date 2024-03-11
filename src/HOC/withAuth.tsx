const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    console.log("HOC CALLED");
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
      window.location.replace("/login");
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

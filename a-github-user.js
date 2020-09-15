const GithubUser = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchGithubUser(username).then(setUser);
  }, [username]);

  if (user === null) {
    return <div>Loading Github User: {username}...</div>;
  }

  return (
    <>
      <h1>{user.login}</h1>
      <UserRepository reposUrl={user.reposUrl} />
    </>
  );
};

export default GithubUser;

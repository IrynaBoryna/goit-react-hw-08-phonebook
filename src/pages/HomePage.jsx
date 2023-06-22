const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 50,
    textAlign: 'center',
  },
};

export const HomePage = ()=> {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Contacts manager welcome page{' '}
        </h1>
    </div>
  );
}

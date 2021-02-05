import styles from "../../styles/Ninjas.module.css";
export const getStaticProps = async () => {
  const r = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await r.json();
  return {
    props: {
      users: data,
    },
  };
};
const Ninjas = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Ninjas;

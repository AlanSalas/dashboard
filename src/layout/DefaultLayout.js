import LoadRoute from "../components/LoadRoute";

const DefaultLayout = ({ routes }) => {
  return (
    <div>
      <header>Navbar</header>
      <div>
        <LoadRoute routes={routes} />
      </div>
    </div>
  );
};

export default DefaultLayout;

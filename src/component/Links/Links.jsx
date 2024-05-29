import PropTypes from "prop-types";

const Links = ({ route }) => {
  return (
    <>
      <li className="md:mr-10 w-full rounded-xl p-1">
        <a className="w-full bg-red-100 inline-block p-2 my-1 first:my-0 last:my-0 hover:bg-red-500 rounded-ss-2xl rounded-br-2xl" href={route?.path}>{route?.name}</a>
      </li>
    </>
  );
};

Links.propTypes = {
  route: PropTypes.object,
};

export default Links;

import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "../../Utils/utils";
import PropTypes from "prop-types";

const ResponsiveMenu = ({ open,absolute }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0,y:-100 }}
          animate={{ opacity: 1 ,y: 0 }}
          exit={{opacity:0}}
          className={absolute}
        >
            <div className="text-xl font-semibold uppercase shadow-inner text-white py-10 bg-gradient-back backdrop-blur-[50px]">
                <ul className="flex flex-col justify-center items-center gap-6">
                {NavMenu.map(item=>{
                    return(
                        <li key={item.id}>
                            <a href={item.link} className="inline-block py-1 px-3 font-semibold hover:text-primary">{item.name}</a>
                        </li>
                    )
                })}
                </ul>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ResponsiveMenu.propTypes = {
  open: PropTypes.node,
  absolute: PropTypes.node,
};

export default ResponsiveMenu;

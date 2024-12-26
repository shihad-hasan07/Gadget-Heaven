import { key } from "localforage";
import { NavLink } from "react-router-dom";

const Categories = ({ categoryList }) => {

    return (
        <>
            {
                categoryList.map(category => (
                    <NavLink to={`/category/${category.category}`}
                       className='customBtn' >
                        <button>{category.category}</button>
                    </NavLink>
                ))
            }
            
        </>
    );
};

export default Categories;
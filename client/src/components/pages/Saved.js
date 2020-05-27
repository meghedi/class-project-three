import React, {useContext} from "react";
import SavedRestaurants from "../SavedRestaurants";
import Wrapper from '../Wrapper';
import Footer from "../Footer";

function Saved(props){
    return (
    <Wrapper>
    <SavedRestaurants />
    <Footer />
    </Wrapper>
    )
}

export default Saved;
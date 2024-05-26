import MiniCard from "../components/MiniCard";
import PageNav from "../components/PageNav";
import MenuList from "../components/MenuList"
import Addmenu from "../components/Addmenu";
function Recipes() {

    return (
        <>
        <nav>
        <PageNav />
        </nav>
        <div className="centered-content">
            
            <body className="featured-recipes">
            <header className="headerrecipe">
                <h1 className="food-menu">Food Menu</h1>
                <div className="addRecipee">
                <Addmenu>Add Your Recipes</Addmenu>
            </div>
            </header>
            
            
            

            </body>
        </div>
        <div className="content-recipe">
        <MenuList/>
            </div>
    
        </>
    )
}

export default Recipes;
import CardHeader from "./CardHeader";
import Img from "./Img";
import Excerpt  from "./Excerpt";
import CardActions from "./CardActions";
import Recipe  from "./Recipe";
import { useState } from 'react';


function Card() {
    const[showRecipe, setShowRecipe] = useState(false);

return (
    <article className="Card">
        <CardHeader />
        <Img alt={"shrimp and chorizo paella"} src={"../assets/img/paella.jpeg"} />
        <Excerpt>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Excerpt>
        <CardActions onClick={() => setShowRecipe(!showRecipe)} icon={showRecipe ? 'angle-up' : 'angle-down'}/>
        {showRecipe && <Recipe/>}
    </article>
)
};

export default Card;



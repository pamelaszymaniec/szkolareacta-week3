import Author from "./Author";
import Title from "./Title";
import Date from "./Date";
import Icon from "./Icon";

function CardHeader() {
    return (
        <header className="CardHeader">
            <Author>P</Author>
                <div>
                    <Title title={"Shrimp and Chorizo Paella"} />
                    <Date date={"September 14, 2016"} />
                </div>
            <Icon icon="ellipsis-v" />
        </header>
    );
}

export default CardHeader
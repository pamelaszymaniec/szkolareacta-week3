import Icon from "./Icon";

function CardActions({ onClick, icon }) {
  const styles = {
    marginRight: "auto",
  };

  return (
    <div className="CardActions">
      <Icon icon="heart" />
      <Icon style={styles} icon="share-alt" />
      <Icon onClick={onClick} icon={icon} />
    </div>
  );
}

export default CardActions;

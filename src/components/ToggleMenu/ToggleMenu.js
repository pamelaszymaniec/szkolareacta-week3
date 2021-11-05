function ToggleMenu({ handleToggle, active }) {
  return (
    <button className="btn" onClick={handleToggle}>
      {active ? "Hide" : "Show"} Menu
    </button>
  );
}

export default ToggleMenu;

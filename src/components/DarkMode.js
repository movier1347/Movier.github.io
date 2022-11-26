function DarkMode(props) {

  return (
    <label className="mode-btn">
      Dark Mode
      <input
        type="checkbox"
        className="mode-ChBx"
        onClick={() => props.setDarkMode(!props.isDarkMode)}
      ></input>
    </label>
  );
}

export default DarkMode;

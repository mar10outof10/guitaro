import "./StringsPanelItem.scss";

const StringsPanelItem = ({ id, frequency }) => {
  console.log(id, frequency);
  return (
    <li key={id} className="stringsPanelItem">
      {id} Frequency: {frequency}hz
    </li>
  );
};

export default StringsPanelItem;

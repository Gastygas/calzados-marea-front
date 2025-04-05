import styles from "./RenovarStock.module.css";

const RenovarStock = ({
  toggleRenovarStock,
}: {
  toggleRenovarStock: () => void;
}) => {
  return (
    <div>
      Renovar stock
      <button onClick={toggleRenovarStock}>atras</button>
    </div>
  );
};

export default RenovarStock;

import { currencyList } from "../data/currencies";
import ModalList from "../components/ModalList";
export default function CurrencyListModal({ onClose, onSelect }: any) {
  return (
    <ModalList
      title="Select a Currency"
      searchPlaceholder="Search currency"
      options={currencyList}
      displayKey="code"
      iconKey="flag"
      filterKey="name"
      onClose={onClose}
      onSelect={(c) => onSelect(c)}
    />
  );
}

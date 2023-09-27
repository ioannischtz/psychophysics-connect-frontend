import { useLanguage } from "../../../lib/contexts/language-provider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/form/Select";

function LangSelect() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (newLang: "EN" | "GR") => {
    if (newLang !== language) {
      setLanguage(newLang);
    }
  };

  return (
    <Select onValueChange={toggleLanguage}>
      <SelectTrigger>
        <SelectValue placeholder={language} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="EN">EN</SelectItem>
          <SelectItem value="GR">GR</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LangSelect;

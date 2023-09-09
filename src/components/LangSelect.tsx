import { useLanguage } from "./language-provider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

function LangSelect() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === "EN" ? "GR" : "EN";
    setLanguage(newLang);
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

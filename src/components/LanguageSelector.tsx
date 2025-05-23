
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <Select value={language} onValueChange={(value: 'pt' | 'en') => setLanguage(value)}>
        <SelectTrigger className="w-24 h-8 text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pt">PT</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;

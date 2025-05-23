
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <Select value={language} onValueChange={(value: 'pt' | 'en') => setLanguage(value)}>
        <SelectTrigger className="w-24 h-8 text-sm bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-600">
          <SelectItem value="pt" className="text-gray-300 hover:bg-gray-700">PT</SelectItem>
          <SelectItem value="en" className="text-gray-300 hover:bg-gray-700">EN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;

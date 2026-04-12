import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
}

const Section = ({ 
  children, 
  id, 
  className = '', 
  background = 'white' 
}: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-50 to-indigo-50',
  };
  
  return (
    <section 
      id={id} 
      className={`${backgrounds[background]} py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
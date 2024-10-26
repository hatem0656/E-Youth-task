import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface CourseLayoutContextType {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
}

// Create the context with a default value
const CourseLayoutContext = createContext<CourseLayoutContextType | undefined>(
  undefined
);

// Create a provider component
interface CourseLayoutProviderProps {
  children: ReactNode;
}

export const CourseLayoutProvider: React.FC<CourseLayoutProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <CourseLayoutContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </CourseLayoutContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useCourseLayoutContext = (): CourseLayoutContextType => {
  const context = useContext(CourseLayoutContext);
  if (!context) {
    throw new Error(
      "useCourseLayoutContext must be used within a CourseLayoutProvider"
    );
  }
  return context;
};

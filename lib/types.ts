// Component prop types
export interface WorkPageProps {
  onJobSelect: (jobViewName: string) => void;
}

export interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

// Animation types
export interface VerticalCutRevealProps {
  children: React.ReactNode;
  splitBy?: 'lines' | 'words' | 'chars';
  staggerDuration?: number;
  reverse?: boolean;
  staggerFrom?: 'first' | 'last' | 'center';
  containerClassName?: string;
  transition?: {
    type: string;
    stiffness: number;
    damping: number;
  };
}
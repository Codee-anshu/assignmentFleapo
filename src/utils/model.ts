export type SectionItemProps = {
    title: string;
    count: number;
    icon: any;
};

export type ListItemProps = {
    title: string;
  description: string;
  restaurants: number;
  nearby?: number;
  likes: number;
  icon: any;
};

export type ActivityCardProps = {
    name: string;
    location: string;
    daysAgo: string;
    rating?: number;
    image: any;
};

export type RestaurantCardProps = {
    name: string;
    rating: number;
    image: any;
};

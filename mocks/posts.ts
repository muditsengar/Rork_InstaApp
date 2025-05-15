export interface User {
    id: string;
    username: string;
    avatar: string;
    verified: boolean;
  }
  
  export interface Comment {
    id: string;
    user: User;
    text: string;
    timestamp: string;
    likes: number;
  }
  
  export interface Post {
    id: string;
    user: User;
    images: string[];
    caption: string;
    likes: number;
    commentCount: number;
    timestamp: string;
    location?: string;
    saved: boolean;
    liked: boolean;
    comments: Comment[];
  }
  
  export const users: User[] = [
    {
      id: "1",
      username: "janedoe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: "2",
      username: "johndoe",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      verified: false,
    },
    {
      id: "3",
      username: "travel_addict",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: "4",
      username: "foodie_adventures",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
      verified: false,
    },
  ];
  
  export const posts: Post[] = [
    {
      id: "1",
      user: users[0],
      images: [
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      ],
      caption: "Enjoying the weekend vibes! 🌞 #weekend #relax #sunshine",
      likes: 1243,
      commentCount: 42,
      timestamp: "2 hours ago",
      location: "Central Park, New York",
      saved: false,
      liked: false,
      comments: [
        {
          id: "c1",
          user: users[1],
          text: "Looks amazing! 😍",
          timestamp: "1 hour ago",
          likes: 5,
        },
        {
          id: "c2",
          user: users[2],
          text: "Wish I was there!",
          timestamp: "45 minutes ago",
          likes: 2,
        },
      ],
    },
    {
      id: "2",
      user: users[2],
      images: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      ],
      caption: "Best brunch ever! 🍳 #foodie #brunch #weekend #foodphotography",
      likes: 892,
      commentCount: 23,
      timestamp: "5 hours ago",
      location: "Breakfast Club, London",
      saved: true,
      liked: true,
      comments: [
        {
          id: "c3",
          user: users[3],
          text: "That looks delicious! Recipe please?",
          timestamp: "3 hours ago",
          likes: 8,
        },
      ],
    },
    {
      id: "3",
      user: users[1],
      images: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      ],
      caption: "Adventure awaits! 🏔️ #travel #adventure #mountains #explore #nature #hiking #outdoors",
      likes: 3542,
      commentCount: 87,
      timestamp: "1 day ago",
      location: "Swiss Alps",
      saved: false,
      liked: false,
      comments: [
        {
          id: "c4",
          user: users[0],
          text: "This view is incredible!",
          timestamp: "20 hours ago",
          likes: 12,
        },
        {
          id: "c5",
          user: users[3],
          text: "Adding this to my bucket list right now!",
          timestamp: "18 hours ago",
          likes: 7,
        },
      ],
    },
    {
      id: "4",
      user: users[3],
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      ],
      caption: "Homemade pizza night! 🍕 #homecooking #pizza #foodie #dinner #italianfood",
      likes: 754,
      commentCount: 31,
      timestamp: "2 days ago",
      saved: false,
      liked: false,
      comments: [
        {
          id: "c6",
          user: users[2],
          text: "Yum! I need to try making this.",
          timestamp: "1 day ago",
          likes: 3,
        },
      ],
    },
  ];
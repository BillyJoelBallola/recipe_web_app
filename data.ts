export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "hashed_password_1",
    profile_picture: "https://randomuser.me/api/portraits/men/1.jpg",
    contributed_recipes: [1, 2, 3],
    favorites: [2, 5],
    date_joined: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "hashed_password_2",
    profile_picture: "https://randomuser.me/api/portraits/women/2.jpg",
    contributed_recipes: [4, 5],
    favorites: [1, 3, 4],
    date_joined: "2023-02-10",
  },
  {
    id: 3,
    name: "Emily Green",
    email: "emily@example.com",
    password: "hashed_password_3",
    profile_picture: "https://randomuser.me/api/portraits/women/3.jpg",
    contributed_recipes: [6],
    favorites: [1, 3, 5],
    date_joined: "2023-03-25",
  },
];

export const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae earum blanditiis non, id illum.",
    author: 1,
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g parmesan",
      "2 cloves garlic",
      "Freshly ground black pepper",
    ],
    instructions: [
      "Boil the pasta.",
      "Fry pancetta until crispy.",
      "Mix eggs, cheese, and pepper.",
      "Combine pasta and pancetta, then stir in egg mixture until creamy.",
    ],
    image_url: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?resize=1366,1242",
      "https://veganwithgusto.com/wp-content/uploads/2021/05/spicy-spaghetti-arrabbiata.jpg",
      "https://as1.ftcdn.net/jpg/01/09/75/90/1000_F_109759077_SVp62TBuHkSn3UsGW4dBOm9R0ALVetYw.jpg",
      "https://media.istockphoto.com/id/1325172440/photo/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-olives-capers-anchovies-and.jpg?s=612x612&w=0&k=20&c=ieMxGg7flhSltOMDpuLZINAWYT2W2WDjJTlwoUWuwH4=",
    ],
    category: "Italian",
    difficulty: "easy",
    prep_time: "10 minutes",
    cook_time: "15 minutes",
    servings: 2,
    reviews: [
      { user_id: 2, rating: 5, review: "Amazing, so creamy!" },
      { user_id: 3, rating: 4, review: "Tasty, but I used bacon instead." },
    ],
  },
  {
    id: 2,
    title: "Vegetable Stir Fry",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae earum blanditiis non, id illum.",
    author: 2,
    ingredients: [
      "1 cup broccoli",
      "1 cup bell peppers",
      "1/2 cup carrots",
      "2 tablespoons soy sauce",
      "1 teaspoon sesame oil",
      "1 tablespoon olive oil",
    ],
    instructions: [
      "Stir fry the vegetables in olive oil.",
      "Add soy sauce and sesame oil.",
      "Cook for 5-7 minutes until veggies are tender but crisp.",
    ],
    image_url: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?resize=1366,1242",
    ],
    category: "Vegetarian",
    tags: ["quick", "healthy", "vegetarian"],
    prep_time: "10 minutes",
    cook_time: "5 minutes",
    servings: 2,
    reviews: [
      { user_id: 1, rating: 5, review: "So healthy and easy!" },
      { user_id: 3, rating: 4, review: "I added tofu for extra protein." },
    ],
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae earum blanditiis non, id illum.",
    author: 1,
    ingredients: [
      "200g flour",
      "100g butter",
      "50g sugar",
      "100g chocolate chips",
      "1 egg",
      "1 teaspoon vanilla extract",
    ],
    instructions: [
      "Mix all ingredients.",
      "Shape into balls and place on baking tray.",
      "Bake at 180°C for 10 minutes.",
    ],
    image_url: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?resize=1366,1242",
    ],
    category: "Dessert",
    tags: ["sweet", "baking", "cookies"],
    prep_time: "15 minutes",
    cook_time: "10 minutes",
    servings: 12,
    reviews: [
      { user_id: 2, rating: 5, review: "Best cookies ever!" },
      { user_id: 3, rating: 4, review: "A little sweet, but delicious." },
    ],
  },
  {
    id: 4,
    title: "Vegan Tacos",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae earum blanditiis non, id illum.",
    author: 2,
    ingredients: [
      "Soft corn tortillas",
      "1 cup black beans",
      "1/2 cup corn",
      "1 avocado",
      "Lime wedges",
      "Chopped cilantro",
    ],
    instructions: [
      "Warm the tortillas.",
      "Top with black beans, corn, avocado, cilantro, and a squeeze of lime.",
    ],
    image_url: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?resize=1366,1242",
    ],
    category: "Vegan",
    tags: ["easy", "quick", "plant-based"],
    prep_time: "5 minutes",
    cook_time: "5 minutes",
    servings: 2,
    reviews: [{ user_id: 1, rating: 4, review: "Delicious and fresh!" }],
  },
  {
    id: 5,
    title: "Chicken Alfredo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae earum blanditiis non, id illum.",
    author: 2,
    ingredients: [
      "2 chicken breasts",
      "200g fettuccine",
      "1/2 cup heavy cream",
      "1/4 cup parmesan cheese",
      "2 tablespoons butter",
      "2 cloves garlic",
    ],
    instructions: [
      "Cook chicken and pasta separately.",
      "Make Alfredo sauce with cream, butter, and garlic.",
      "Combine pasta, chicken, and sauce.",
      "Serve with parmesan.",
    ],
    image_url: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?resize=1366,1242",
    ],
    category: "Italian",
    tags: ["creamy", "pasta", "comfort food"],
    prep_time: "10 minutes",
    cook_time: "20 minutes",
    servings: 2,
    reviews: [{ user_id: 1, rating: 5, review: "My go-to comfort meal!" }],
  },
  {
    id: 6,
    title: "Coconut Mango Chia Pudding",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repudiandae earum blanditiis non, id illum.",
    author: 3,
    ingredients: [
      "1 cup coconut milk",
      "1/2 cup chia seeds",
      "1 mango",
      "2 tablespoons honey",
    ],
    instructions: [
      "Mix coconut milk and chia seeds.",
      "Let sit overnight.",
      "Serve with fresh mango and a drizzle of honey.",
    ],
    image_url: [
      "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?resize=1366,1242",
    ],
    category: "Dessert",
    tags: ["healthy", "vegan", "no-bake"],
    prep_time: "5 minutes",
    cook_time: "None",
    servings: 2,
    reviews: [{ user_id: 1, rating: 5, review: "Delicious and refreshing!" }],
  },
];

export const categories = [
  {
    image: "/italian.png",
    name: "Italian",
  },
  {
    image: "/italian.png",
    name: "Healthy",
  },
  {
    image: "/italian.png",
    name: "Dessert",
  },
  {
    image: "/italian.png",
    name: "Pasta",
  },
  {
    image: "/italian.png",
    name: "Sea Foods",
  },
  {
    image: "/italian.png",
    name: "Pizza",
  },
];

export const tags = [
  "quick",
  "easy",
  "vegan",
  "vegetarian",
  "comfort food",
  "dessert",
  "gluten-free",
  "healthy",
  "baking",
  "meal prep",
];

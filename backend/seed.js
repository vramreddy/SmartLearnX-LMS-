// backend/seed.js
import mongoose from "mongoose";
import Course from "./models/courseModel.js";
import "dotenv/config";

const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/lms";

const courses = [
  {
    name: "Java Full Stack Development",
    teacher: "Michael Chen",
    image: "/uploads/HC3.png",
    pricingType: "paid",
    price: {original: 35000, sale: 30000 },
    overview: "Comprehensive Java Full Stack development with Spring Boot, React, and PostgreSQL. Master Java backend development, RESTful services, JPA/Hibernate, Spring Security, and modern React frontend integration.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "Java Fundamentals",
        duration: { hours: 3, minutes: 0 },
        chapters: [
          { name: "Java Basics", topic: "OOP Principles", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example17" },
          { name: "Collections & Streams", topic: "Data Structures", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example18" }
        ]
      },
      {
        title: "Spring Boot Backend",
        duration: { hours: 5, minutes: 0 },
        chapters: [
          { name: "Spring Boot Setup", topic: "Dependency Injection", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example19" },
          { name: "REST Controllers", topic: "Building APIs", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example20" },
          { name: "JPA & Hibernate", topic: "Database Mapping", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example21" },
          { name: "Spring Security", topic: "Authentication & Authorization", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example22" }
        ]
      }
    ]
  },
  {
    name: "Full Stack Web Development Bootcamp",
    teacher: "Alex Martinez",
    image: "/uploads/HC4.png",
    pricingType: "paid",
    price: { original: 35000, sale: 25000 },
    overview: "Complete Full Stack Web Development Bootcamp covering HTML, CSS, JavaScript, Node.js, databases, React, and deployment. Build 10+ real-world projects and launch your career as a full stack developer.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "Frontend Fundamentals",
        duration: { hours: 6, minutes: 0 },
        chapters: [
          { name: "HTML5 & Semantic Web", topic: "Modern HTML", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example37" },
          { name: "CSS3 & Layouts", topic: "Flexbox & Grid", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example38" },
          { name: "JavaScript ES6+", topic: "Modern JavaScript", duration: { hours: 2, minutes: 30 }, videoUrl: "https://youtu.be/example39" }
        ]
      },
      {
        title: "Backend Development",
        duration: { hours: 5, minutes: 0 },
        chapters: [
          { name: "Node.js Fundamentals", topic: "Server-side JS", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example40" },
          { name: "Express.js", topic: "Web Framework", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example41" },
          { name: "Database Design", topic: "SQL & NoSQL", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example42" }
        ]
      }
    ]
  },
  {
    name: "Python Programming Complete Course",
    teacher: "Jessica Williams",
    image: "/uploads/HC5.png",
    pricingType: "free",
    price: { original: 0, sale: 0 },
    overview: "Learn Python from beginner to advanced level. Master Python syntax, data structures, OOP, file handling, web scraping, data analysis, and automation. Perfect for beginners and experienced programmers.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "Python Basics",
        duration: { hours: 3, minutes: 0 },
        chapters: [
          { name: "Getting Started", topic: "Setup & Syntax", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example43" },
          { name: "Data Types", topic: "Variables & Operations", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example44" },
          { name: "Control Flow", topic: "Loops & Conditions", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example45" }
        ]
      },
      {
        title: "Advanced Python",
        duration: { hours: 4, minutes: 0 },
        chapters: [
          { name: "OOP in Python", topic: "Classes & Objects", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example46" },
          { name: "File Handling", topic: "Reading & Writing", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example47" },
          { name: "Modules & Packages", topic: "Code Organization", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example48" }
        ]
      }
    ]
  },
  {
    name: "React Native Mobile Development",
    teacher: "David Park",
    image: "/uploads/HC6.png",
    pricingType: "paid",
    price: { original: 179, sale: 89 },
    overview: "Build native mobile apps for iOS and Android using React Native. Learn mobile UI patterns, navigation, state management, API integration, and app store deployment. Create professional mobile applications.",
    courseType: "regular",
    category: "Development",
    lectures: [
      {
        title: "React Native Setup",
        duration: { hours: 2, minutes: 0 },
        chapters: [
          { name: "Environment Setup", topic: "Tools & Emulators", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example49" },
          { name: "First App", topic: "Hello World", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example50" }
        ]
      },
      {
        title: "Mobile UI Development",
        duration: { hours: 4, minutes: 0 },
        chapters: [
          { name: "Components", topic: "Views & Styling", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example51" },
          { name: "Navigation", topic: "Screens & Routing", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example52" },
          { name: "State Management", topic: "Redux & Context", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example53" }
        ]
      }
    ]
  },
  {
    name: "Artificial Intelligence Fundamentals",
    teacher: "Dr. Emily Watson",
    image: "/uploads/HC7.png",
    pricingType: "paid",
    price: { original: 299, sale: 149 },
    overview: "Deep dive into Artificial Intelligence covering machine learning, neural networks, deep learning, and AI applications. Learn Python, TensorFlow, PyTorch, and build real-world AI projects including computer vision and NLP.",
    courseType: "regular",
    category: "AI/ML",
    lectures: [
      {
        title: "AI Introduction",
        duration: { hours: 2, minutes: 0 },
        chapters: [
          { name: "What is AI?", topic: "History & Applications", duration: { hours: 0, minutes: 45 }, videoUrl: "https://youtu.be/example23" },
          { name: "Python for AI", topic: "NumPy & Pandas", duration: { hours: 1, minutes: 15 }, videoUrl: "https://youtu.be/example24" }
        ]
      },
      {
        title: "Machine Learning Basics",
        duration: { hours: 4, minutes: 0 },
        chapters: [
          { name: "Supervised Learning", topic: "Classification & Regression", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example25" },
          { name: "Unsupervised Learning", topic: "Clustering & Dimensionality", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example26" }
        ]
      },
      {
        title: "Deep Learning",
        duration: { hours: 5, minutes: 0 },
        chapters: [
          { name: "Neural Networks", topic: "Perceptrons & Backpropagation", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example27" },
          { name: "CNNs", topic: "Computer Vision", duration: { hours: 2, minutes: 0 }, videoUrl: "https://youtu.be/example28" },
          { name: "RNNs & LSTMs", topic: "Sequential Data", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example29" }
        ]
      }
    ]
  },
  {
    name: "Machine Learning with Python",
    teacher: "Dr. Robert Lee",
    image: "/uploads/HC7.png",
    pricingType: "free",
    price: { original: 0, sale: 0 },
    overview: "Comprehensive Machine Learning course using Python, scikit-learn, and real-world datasets. Master regression, classification, clustering, model evaluation, feature engineering, and deployment of ML models.",
    courseType: "regular",
    category: "AI/ML",
    lectures: [
      {
        title: "ML Foundations",
        duration: { hours: 3, minutes: 0 },
        chapters: [
          { name: "Introduction to ML", topic: "Types of Learning", duration: { hours: 0, minutes: 45 }, videoUrl: "https://youtu.be/example30" },
          { name: "Data Preprocessing", topic: "Cleaning & Transformation", duration: { hours: 1, minutes: 15 }, videoUrl: "https://youtu.be/example31" },
          { name: "Feature Engineering", topic: "Creating Features", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example32" }
        ]
      },
      {
        title: "Algorithms & Models",
        duration: { hours: 4, minutes: 30 },
        chapters: [
          { name: "Linear Regression", topic: "Prediction Models", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example33" },
          { name: "Decision Trees", topic: "Classification", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example34" },
          { name: "Random Forests", topic: "Ensemble Methods", duration: { hours: 1, minutes: 0 }, videoUrl: "https://youtu.be/example35" },
          { name: "Neural Networks", topic: "Deep Learning Intro", duration: { hours: 1, minutes: 30 }, videoUrl: "https://youtu.be/example36" }
        ]
      }
    ]
  },
  {
    name: "React Masterclass",
    teacher: "Sophia Miller",
    image: "/uploads/HC1.png",
    rating: 4.8,
    pricingType: "paid",
    price: { original: 200, sale: 99 },
    overview: "Master React from fundamentals to advanced patterns. Learn hooks, state management, performance optimization, and real-world project architecture.",
    courseType: "top",
    category: "Development",
    lectures: [
      {
        title: "Intro & Setup",
        duration: { hours: 0, minutes: 12 },
        chapters: [
          { name: "Course intro", topic: "What we will build", duration: { hours: 0, minutes: 4 }, videoUrl: "https://youtu.be/sDoiClRyV_c" },
          { name: "Environment", topic: "Node, npm, editor setup", duration: { hours: 0, minutes: 8 }, videoUrl: "https://youtu.be/4eGJp3LBLIA" }
        ]
      }
    ]
  },
  {
    name: "Frontend Crash Course",
    teacher: "Ethan Brown",
    image: "/uploads/HC2.png",
    rating: 4.7,
    pricingType: "free",
    price: { original: 0, sale: 0 },
    overview: "Accelerate your frontend development journey with HTML, CSS, and JavaScript fundamentals.",
    courseType: "top",
    category: "Development",
    lectures: [
      {
        title: "HTML & CSS",
        duration: { hours: 0, minutes: 30 },
        chapters: [
          { name: "Semantic HTML", topic: "Structure & a11y", duration: { hours: 0, minutes: 15 }, videoUrl: "https://youtu.be/6BrpMJeZuvQ" }
        ]
      }
    ]
  },
  {
    name: "Full Stack JavaScript",
    teacher: "Noah Johnson",
    image: "/uploads/HC3.png",
    rating: 4.7,
    pricingType: "paid",
    price: { original: 180, sale: 89 },
    overview: "Master full-stack JavaScript development with Node.js, Express, MongoDB, and React.",
    courseType: "top",
    category: "Development",
    lectures: [
      {
        title: "Node & Express",
        duration: { hours: 0, minutes: 40 },
        chapters: [
          { name: "Node intro", topic: "Runtime & modules", duration: { hours: 0, minutes: 20 }, videoUrl: "https://www.youtube.com/watch?v=TlB_eWDSMt4" }
        ]
      }
    ]
  },
  {
    name: "UX/UI Design Pro",
    teacher: "Olivia Lee",
    image: "/uploads/HC4.png",
    rating: 4.9,
    pricingType: "paid",
    price: { original: 250, sale: 125 },
    overview: "Transform into a professional UX/UI designer. Master design thinking, user research, wireframing, and Figma.",
    courseType: "top",
    category: "Design",
    lectures: [
      {
        title: "Design Principles",
        duration: { hours: 0, minutes: 30 },
        chapters: [
          { name: "Contrast & Hierarchy", topic: "Visual design", duration: { hours: 0, minutes: 15 }, videoUrl: "https://youtu.be/QKxTMgdsaZU" }
        ]
      }
    ]
  },
  {
    name: "Next.js Deep Dive",
    teacher: "Liam Smith",
    image: "/uploads/HC5.png",
    rating: 4.6,
    pricingType: "free",
    price: { original: 0, sale: 0 },
    overview: "Master Next.js framework with server-side rendering, static site generation, and API routes.",
    courseType: "top",
    category: "Development",
    lectures: [
      {
        title: "Pages & Routing",
        duration: { hours: 0, minutes: 30 },
        chapters: [
          { name: "App router", topic: "File-based routing", duration: { hours: 0, minutes: 15 }, videoUrl: "https://www.youtube.com/watch?v=mTz0GXj8NN0" }
        ]
      }
    ]
  },
  {
    name: "Python for Data Science",
    teacher: "Isabella Brown",
    image: "/uploads/HC6.png",
    rating: 4.5,
    pricingType: "free",
    price: { original: 0, sale: 0 },
    overview: "Start your data science journey with Python. Learn data manipulation with pandas and visualization with Matplotlib.",
    courseType: "top",
    category: "Data Science",
    lectures: [
      {
        title: "Python & Pandas",
        duration: { hours: 0, minutes: 40 },
        chapters: [
          { name: "Pandas dataframes", topic: "Data manipulation", duration: { hours: 0, minutes: 20 }, videoUrl: "https://youtu.be/O6dlFgal1Lg" }
        ]
      }
    ]
  },
  {
    name: "Python for Data Science (Advance)",
    teacher: "Isabella Brown",
    image: "/uploads/HC7.png",
    rating: 4.5,
    pricingType: "paid",
    price: { original: 190, sale: 95 },
    overview: "Advanced data science techniques including machine learning, feature engineering, and model deployment.",
    courseType: "top",
    category: "Data Science",
    lectures: [
      {
        title: "Machine Learning Pipelines",
        duration: { hours: 1, minutes: 0 },
        chapters: [
          { name: "Model evaluation", topic: "Cross validation", duration: { hours: 0, minutes: 30 }, videoUrl: "https://youtu.be/ZuHMuvIo7P4" }
        ]
      }
    ]
  },
  {
    name: "JavaScript (Alternate)",
    teacher: "Noah Johnson",
    image: "/uploads/HC8.png",
    rating: 4.7,
    pricingType: "paid",
    price: { original: 180, sale: 89 },
    overview: "Alternative fullstack curriculum focusing on TypeScript, modern testing strategies, and advanced React patterns.",
    courseType: "top",
    category: "Development",
    lectures: [
      {
        title: "TypeScript & Testing",
        duration: { hours: 0, minutes: 45 },
        chapters: [
          { name: "Unit testing", topic: "Jest & Vitest", duration: { hours: 0, minutes: 20 }, videoUrl: "https://youtu.be/I6YcroaALcw" }
        ]
      }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing courses to avoid duplicates
    await Course.deleteMany({});
    console.log("Cleared existing courses");

    // Insert new courses
    const result = await Course.insertMany(courses);
    console.log(`Successfully added ${result.length} courses to the database`);

    // Display added courses
    result.forEach((course, index) => {
      console.log(`${index + 1}. ${course.name} - ${course.category} (${course.pricingType})`);
    });

    mongoose.connection.close();
    console.log("\nDatabase connection closed");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();

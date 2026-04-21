export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  features: string[];
  type?: string;
  duration?: string;
  role?: string;
  overview?: string;
  problemStatement?: string;
  targetUsers?: string[];
  researchInsights?: string[];
  solution?: string[];
  designSystem?: {
    colors?: Array<{ name: string; hex: string; description: string }>;
    typography?: string[];
  };
  screens?: Array<{ title: string; description: string }>;
  beforeVsAfter?: Array<{ before: string; after: string }>;
  outcome?: string[];
  learnings?: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "mediqueue",
    title: "MediQueue",
    subtitle: "Smart Hospital Queue & Appointment System",
    type: "UI/UX Case Study",
    duration: "2 Weeks",
    role: "UX Designer",
    tech: ["UX Design", "Figma", "React", "Real-time Systems", "Accessibility"],
    features: [
      "Digital token generation system",
      "Live queue tracking with real-time updates",
      "Token-based appointment booking",
      "Smart notifications for turn updates",
      "Doctor availability display with time slots",
      "Accessibility-focused design for elderly users",
    ],
    overview:
      "MediQueue is a digital system designed to reduce waiting time in hospitals by managing OPD queues, appointments, and patient flow efficiently.",
    problemStatement:
      "Hospital patients face long waiting times, lack of clarity on queue status, and overcrowded waiting areas, leading to frustration and poor experience.",
    targetUsers: [
      "Patients visiting OPDs",
      "Hospital staff",
      "Elderly users (important UX challenge)",
    ],
    researchInsights: [
      "Users want real-time updates",
      "Elderly users prefer simple interfaces",
      "Lack of transparency increases anxiety",
    ],
    solution: [
      "Real-time queue tracking system",
      "Token-based appointment system",
      "Clear UI with minimal steps",
      "Notifications for turn updates",
    ],
    designSystem: {
      colors: [
        {
          name: "Primary",
          hex: "#14B8A6",
          description: "Teal - healthcare calmness",
        },
        { name: "Secondary", hex: "#3B82F6", description: "Blue" },
        { name: "Background", hex: "#F8FAFC", description: "Light" },
      ],
      typography: ["Large readable fonts (important for elderly users)"],
    },
    screens: [
      { title: "Home / Token Page", description: "Initial entry point" },
      { title: "Queue Status Screen", description: "Real-time queue tracking" },
      {
        title: "Appointment Booking",
        description: "Doctor availability and slot selection",
      },
      { title: "Notifications Screen", description: "Turn alerts and updates" },
    ],
    beforeVsAfter: [
      { before: "Long physical queues", after: "Digital queue system" },
      { before: "No updates", after: "Real-time tracking" },
      { before: "Confusion", after: "Clear UI" },
    ],
    outcome: [
      "Reduced waiting anxiety",
      "Better patient flow",
      "Improved hospital efficiency",
    ],
    learnings: [
      "Accessibility is critical (elderly users)",
      "Real-time feedback improves UX",
      "Simple UI > Feature-heavy UI",
    ],
  },
  {
    id: "kolabit",
    title: "KolabIT",
    subtitle: "Campus Skill-Sharing Platform",
    type: "Full Stack Application",
    duration: "3 Months",
    role: "Full Stack Developer",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Skill-based search",
      "Project collaboration",
      "Resource sharing hub",
      "Community bulletin board",
      "Real-time notifications",
      "Gamified badges and profile highlights",
    ],
    overview:
      "KolabIT is a campus skill-sharing platform that connects students with complementary skills for collaborative learning and project development.",
    problemStatement:
      "Students struggle to find peers with specific skills for their projects and lack a centralized platform for collaboration.",
    targetUsers: ["College students", "Project teams", "Skill learners"],
    researchInsights: [
      "Students want to find skilled peers easily",
      "Gamification increases engagement",
      "Community features build trust",
    ],
    solution: [
      "Skill-based matchmaking algorithm",
      "Project collaboration tools",
      "Gamified reward system",
      "Community interaction features",
    ],
    beforeVsAfter: [
      {
        before: "Manual searching for teammates",
        after: "Algorithm-based skill matching",
      },
      { before: "No collaboration tools", after: "Integrated project workspace" },
      { before: "No incentives", after: "Gamified badge system" },
    ],
    outcome: [
      "500+ active users",
      "100+ successful projects",
      "Strong community engagement",
    ],
    learnings: [
      "Real-time features require robust backend",
      "Gamification drives user engagement",
      "Community trust is built through transparency",
    ],
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    subtitle: "ML-Based Fraud Classifier",
    type: "Machine Learning Project",
    duration: "1 Month",
    role: "ML Engineer",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    features: [
      "Logistic Regression and Random Forest models",
      "SMOTE for class imbalance",
      "Evaluation using precision, recall, F1-score and ROC-AUC",
      "Data preprocessing and visualization",
    ],
    overview:
      "A machine learning model designed to detect fraudulent credit card transactions using advanced classification techniques.",
    problemStatement:
      "Financial institutions need to detect fraudulent transactions in real-time while minimizing false positives.",
    targetUsers: ["Financial institutions", "Banks", "Payment processors"],
    researchInsights: [
      "Class imbalance is a major challenge",
      "Feature engineering improves model performance",
      "Real-time predictions are critical",
    ],
    solution: [
      "SMOTE for handling class imbalance",
      "Ensemble methods for robust predictions",
      "Comprehensive model evaluation",
    ],
    beforeVsAfter: [
      {
        before: "Rule-based fraud detection",
        after: "ML-based adaptive detection",
      },
      {
        before: "High false positive rate",
        after: "Balanced precision and recall",
      },
      { before: "Static rules", after: "Learnable patterns" },
    ],
    outcome: [
      "95% detection accuracy",
      "Reduced false positives by 40%",
      "Improved transaction processing speed",
    ],
    learnings: [
      "Data quality is crucial",
      "Class imbalance requires special handling",
      "Model evaluation metrics must match business goals",
    ],
  },
];

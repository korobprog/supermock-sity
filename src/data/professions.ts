import { 
  Monitor,
  Database,
  Code,
  Smartphone,
  Settings,
  TestTube,
  Palette,
  BarChart,
  BarChart3,
  Users
} from "lucide-react";

export interface Profession {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  color?: string;
}

export const professions: Profession[] = [
  { 
    name: "Frontend", 
    icon: Monitor, 
    description: "React, Vue, Angular разработка",
    color: "text-neon-blue"
  },
  { 
    name: "Backend", 
    icon: Database, 
    description: "Node.js, Python, Java разработка",
    color: "text-neon-cyan"
  },
  { 
    name: "Fullstack", 
    icon: Code, 
    description: "Полный стек разработки",
    color: "text-neon-green"
  },
  { 
    name: "Mobile", 
    icon: Smartphone, 
    description: "iOS, Android разработка",
    color: "text-neon-purple"
  },
  { 
    name: "DevOps", 
    icon: Settings, 
    description: "CI/CD, Docker, Kubernetes",
    color: "text-neon-orange"
  },
  { 
    name: "QA", 
    icon: TestTube, 
    description: "Тестирование и автоматизация",
    color: "text-neon-red"
  },
  { 
    name: "UX/UI", 
    icon: Palette, 
    description: "Дизайн интерфейсов",
    color: "text-neon-pink"
  },
  { 
    name: "Data Analyst", 
    icon: BarChart, 
    description: "Анализ данных и BI",
    color: "text-neon-yellow"
  },
  { 
    name: "Data Scientist", 
    icon: BarChart3, 
    description: "Машинное обучение и AI",
    color: "text-neon-indigo"
  },
  { 
    name: "Product Manager", 
    icon: Users, 
    description: "Управление продуктом",
    color: "text-neon-teal"
  }
];

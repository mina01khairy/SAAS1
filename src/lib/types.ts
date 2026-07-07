export type TicketPriority = "Urgent" | "High" | "Medium" | "Low";

export type TicketStatus = "Open" | "In Progress" | "Resolved" | "Closed";

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  colorClass: string;
}

export interface TicketMessage {
  id: string;
  author: string;
  isAgent: boolean;
  isInternal?: boolean;
  timestamp: string;
  body: string;
  attachment?: {
    name: string;
    meta: string;
  };
}

export interface Ticket {
  id: string;
  subject: string;
  customer: string;
  company: string;
  priority: TicketPriority;
  status: TicketStatus;
  tag: string;
  tags: string[];
  createdAgo: string;
  assignee: string | null;
  slaRemainingPct: number;
  slaRemainingLabel: string;
  region: string;
  mrr: string;
  healthScore: "Excellent" | "Good" | "At Risk";
  plan: string;
  since: string;
  messages: TicketMessage[];
}

export interface ActivityItem {
  id: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  text: string;
  time: string;
}

export interface NotificationItem {
  id: string;
  group: "Today" | "Yesterday";
  variant: "urgent" | "comment" | "update" | "muted";
  icon: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

export interface KnowledgeArticle {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export interface Invoice {
  id: string;
  status: "Paid" | "Due" | "Failed";
  date: string;
  amount: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  initials: string;
}

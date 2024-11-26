export type AdminRole = 'SUPER_ADMIN' | 'OPERATIONS_ADMIN' | 'FINANCIAL_ADMIN' | 'SUPPORT_ADMIN';

export interface AdminUser {
  id: string;
  email: string;
  role: AdminRole;
  name: string;
  permissions: string[];
  lastLogin?: Date;
  ipAddress?: string;
  mfaEnabled: boolean;
}

export interface DashboardMetrics {
  users: {
    total: number;
    active: number;
    contractors: number;
    clients: number;
    growth: number;
  };
  jobs: {
    total: number;
    active: number;
    completed: number;
    averageValue: number;
  };
  revenue: {
    total: number;
    subscriptions: number;
    commissions: number;
    featured: number;
  };
  support: {
    activeTickets: number;
    averageResponseTime: number;
    satisfactionRate: number;
  };
}

export interface AuditLog {
  id: string;
  adminId: string;
  action: string;
  details: string;
  timestamp: Date;
  ipAddress: string;
  status: 'SUCCESS' | 'FAILURE';
}

export interface SystemHealth {
  serverStatus: 'HEALTHY' | 'DEGRADED' | 'DOWN';
  databaseLatency: number;
  errorRate: number;
  activeConnections: number;
  cpuUsage: number;
  memoryUsage: number;
}
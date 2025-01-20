"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type RoleType = 'member' | 'sponsor' | 'vendor';

export interface Role {
  type: RoleType;
  id: string;
  name: string;
  organization?: string;
}

interface AuthContextType {
  currentRole: Role;
  availableRoles: Role[];
  switchRole: (role: Role) => void;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

const mockUser = {
  id: 'user_1',
  email: 'tom@starbucks.com',
  name: 'Tom Sawyer',
};

const mockRoles: Role[] = [
  {
    type: 'member',
    id: 'mem_1',
    name: 'Plan Member',
    organization: 'Starbucks Health Plan'
  },
  {
    type: 'sponsor',
    id: 'spn_1',
    name: 'HR Administrator',
    organization: 'Starbucks'
  },
  {
    type: 'vendor',
    id: 'vnd_1',
    name: 'Service Provider',
    organization: 'Hipnation'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState<Role>(mockRoles[0]);
  const [user] = useState(mockUser);
  const router = useRouter();
  const pathname = usePathname();

  const switchRole = (role: Role) => {
    setCurrentRole(role);
    // Redirect to the appropriate homepage for the new role
    const basePath = `/${role.type}`;
    if (!pathname.startsWith(basePath)) {
      router.push(basePath);
    }
  };

  const value = {
    currentRole,
    availableRoles: mockRoles,
    switchRole,
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
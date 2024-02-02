export type SidebarProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: string;
};

export type RegistrationDataProps = {
  name: string;
  email: string;
  companyName: string;
  website?: string;
  password: string;
  confirmPassword: string;
};

export interface UserDetails {
  _id: string;
  name: string;
  email: string;
  companyName: string;
  website: string;
  role: string;
  createdAt: string;
}

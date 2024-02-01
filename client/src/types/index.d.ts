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
  name?: string;
  email?: string;
  accountId?: string;
  role?: string;
  image: string | StaticImport;
}
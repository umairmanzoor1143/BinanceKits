type IUser = {
  id: number;
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  profile_thumb?: IProrofile_thumb;
  profile_header?: IProrofile_thumb;
  bio: string;
  location: string;
  created_at: string;
  updated_at: string;
  stripe_customer_id?: string;
  access_type?: 'unapproved' | 'approved';
};

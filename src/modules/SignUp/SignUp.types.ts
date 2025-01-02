export interface SignUpData {
  email: string;
  userType: 'student' | 'professional' | null;
  userDetails: {
    firstName: string;
    lastName: string;
    degree: string;
    college: string;
    designation: string;
    company: string;
    password: string;
  };
}

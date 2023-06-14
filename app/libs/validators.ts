export const isSchoolMail = (email: string, schoolMail: string): boolean => {
  const emailDomain = email.split("@")[1];
  return emailDomain === schoolMail;
};
